"use client";

import { useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.api.cart || { items: [] });
  const items = Array.isArray(cart.items) ? cart.items : [];

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Razorpay checkout script load karo
    const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const total = useMemo(
    () =>
      items.reduce((sum, it) => {
        const price = Number(it.product?.price || 0);
        return sum + price * it.quantity;
      }, 0),
    [items]
  );

  async function handlePay(e) {
    e.preventDefault();
    if (!items.length) return;
    setError("");
    setLoading(true);

    try {
      // 0) Profile data backend me store karo
      await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address }),
      });

      // 1) Backend se Razorpay order banao
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(total * 100), // rupees -> paise
          cartId: cart?.id || null,
          shippingName: name,
          shippingPhone: phone,
          shippingAddress: address,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Payment init failed");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.razorpayOrder.amount,
        currency: data.razorpayOrder.currency,
        name: "Advika Naturals LLP",
        description: "Order Payment",
        order_id: data.razorpayOrder.id,
        prefill: {
          name,
          email,
          contact: phone,
        },
        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyData.success) {
              router.push("/payment/failed");
              return;
            }

            router.push("/payment/success");
          } catch (err) {
            console.error(err);
            router.push("/payment/failed");
          }
        },
        theme: {
          color: "#16a34a",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              rows={4}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={!items.length || loading}
            className={`w-full py-2 rounded-md text-white text-sm font-semibold transition ${
              items.length && !loading
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
          </button>
        </form>
      </section>

      <section className="border rounded-md p-4 bg-white">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        {items.length === 0 && (
          <p className="text-sm text-gray-600">Your cart is empty.</p>
        )}
        <ul className="space-y-3 mb-4 max-h-64 overflow-auto">
          {items.map((it) => (
            <li key={it.id} className="flex justify-between text-sm">
              <div>
                <div className="font-medium">{it.product?.name}</div>
                <div className="text-xs text-gray-500">
                  Qty: {it.quantity} × ₹{Number(it.product?.price || 0).toFixed(2)}
                </div>
              </div>
              <div className="font-semibold">
                ₹{(Number(it.product?.price || 0) * it.quantity).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium border-t pt-3">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </section>
    </main>
  );
}
