"use client"

import { useState, useEffect } from 'react'

export default function LoginModal({ open, onClose, onSuccess }) {
  const [step, setStep] = useState('email') // 'email' | 'otp'
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (!open) {
      setStep('email')
      setEmail('')
      setOtp('')
      setLoading(false)
      setError(null)
      setMessage(null)
    }
  }, [open])

  if (!open) return null

  async function sendOtp() {
    setError(null)
    setMessage(null)
    if (!email || !email.includes('@')) return setError('Please enter a valid email')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send OTP')
      setMessage('OTP sent to your email. It expires in 10 minutes.')
      setStep('otp')
    } catch (err) {
      setError(err.message || 'Error sending OTP')
    } finally {
      setLoading(false)
    }
  }

  async function verifyOtp() {
    setError(null)
    setMessage(null)
    if (!otp || otp.length < 4) return setError('Enter the OTP')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'OTP verification failed')
      // store token and call success
      if (data.token) {
        try { localStorage.setItem('token', data.token) } catch (e) {}
      }
      setMessage('Verified — you are logged in.')
      setTimeout(() => {
        onSuccess && onSuccess(data)
        onClose && onClose()
      }, 600)
    } catch (err) {
      setError(err.message || 'Error verifying OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose && onClose()} />
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Login — OTP</h3>
          <button onClick={() => onClose && onClose()} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="mt-4">
          {error && <div className="text-sm text-red-600 mb-3">{error}</div>}
          {message && <div className="text-sm text-green-700 mb-3">{message}</div>}

          {step === 'email' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-[#1B5439] focus:border-transparent p-2"
                placeholder="you@example.com"
              />

              <div className="mt-4 flex justify-end">
                <button
                  onClick={sendOtp}
                  disabled={loading}
                  className="inline-flex items-center px-4 py-2 bg-[#1B5439] text-white rounded-md hover:opacity-95 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            </div>
          )}

          {step === 'otp' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-[#1B5439] focus:border-transparent p-2"
                placeholder="6-digit code"
                inputMode="numeric"
              />

              <div className="mt-4 flex items-center justify-between">
                <button onClick={sendOtp} disabled={loading} className="text-sm text-[#1B5439]">Resend</button>
                <div>
                  <button onClick={() => setStep('email')} className="mr-2 text-sm text-gray-600">Change email</button>
                  <button
                    onClick={verifyOtp}
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 bg-[#1B5439] text-white rounded-md hover:opacity-95 disabled:opacity-60"
                  >
                    {loading ? 'Verifying...' : 'Verify & Login'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
