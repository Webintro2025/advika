export default function PaymentSuccessPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-green-600">Payment Successful</h1>
      <p className="text-sm text-gray-700 mb-6">
        Thank you! Your payment has been received successfully. We will process your order shortly.
      </p>
      <a
        href="/"
        className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-md"
      >
        Go back to Home
      </a>
    </main>
  );
}
