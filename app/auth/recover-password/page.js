// app/auth/recover-password/page.js
export default function RecoverPassword() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Recover Password</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-2">New Password</label>
              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Enter new password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    );
  }
  