// app/auth/verify-otp/page.js
export default function VerifyOTP() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-2">OTP Code</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    );
  }
  