export default function PaymentPendingPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-yellow-600">Payment Pending</h1>
      <p className="text-sm text-gray-700 mb-6">
        Your payment status is pending. If the amount has been deducted, it may take a few minutes to confirm.
      </p>
      <a
        href="/"
        className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-md"
      >
        Go back to Home
      </a>
    </main>
  );
}
