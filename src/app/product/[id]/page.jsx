"use client"

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/product/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const prod = data.product || data;
        setProduct(prod);
        const firstImage = (prod.images && prod.images[0] && prod.images[0].url) || (prod.imageUrls && prod.imageUrls[0]) || null;
        setMainImage(firstImage);
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
        setError(err.message || "Failed to load product");
      })
      .finally(() => setLoading(false));
  }, [id]);

  async function handleAddToCart() {
    if (!product) return;
    setAdding(true);
    try {
      const res = await fetch(`/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      if (!res.ok) throw new Error(await res.text());
      // open cart sidebar if available
      if (typeof window !== "undefined") {
        if (window.openCart) window.openCart();
        if (window.refreshCart) window.refreshCart();
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("Could not add to cart: " + (err.message || err));
    } finally {
      setAdding(false);
    }
  }

  if (loading) return <div className="p-6">Loading product...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  const images = (product.imageUrls && Array.isArray(product.imageUrls) && product.imageUrls) || (product.images && product.images.map((i) => i.url)) || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="w-full bg-white rounded shadow p-4 flex items-center justify-center">
            {mainImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mainImage} alt={product.name} className="object-contain w-full h-[500px]" />
            ) : (
              <div className="text-gray-500">No image</div>
            )}
          </div>

          {images && images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {images.map((img, idx) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border ${img === mainImage ? "ring-2 ring-indigo-500" : ""}`}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-2">Category: {product.category?.name || product.categoryName || "-"}</p>

          <div className="mt-4">
            <div className="text-3xl font-extrabold">₹{product.price?.toFixed ? product.price.toFixed(2) : product.price}</div>
          </div>

          <div className="mt-6 text-gray-700 whitespace-pre-line">{product.description}</div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 disabled:opacity-60"
            >
              {adding ? "Adding..." : "Add to cart"}
            </button>

            <button
              onClick={() => {
                navigator.clipboard?.writeText(location.href);
                alert("Product link copied");
              }}
              className="border px-4 py-2 rounded"
            >
              Share
            </button>
          </div>

          <div className="mt-8 text-xs text-gray-400">Product ID: {product.id}</div>
        </div>
      </div>
    </div>
  );
}
