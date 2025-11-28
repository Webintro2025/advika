export default function PaymentFailedPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-red-600">Payment Failed</h1>
      <p className="text-sm text-gray-700 mb-6">
        Unfortunately, your payment could not be completed. Please try again or use a different payment method.
      </p>
      <a
        href="/checkout"
        className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-md"
      >
        Try Again
      </a>
    </main>
  );
}
