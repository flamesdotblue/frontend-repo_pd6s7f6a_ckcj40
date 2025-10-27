import { useState } from 'react';

export default function LoginPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // This is a UI-only stub for now. Hook to backend auth later.
    setTimeout(() => {
      setLoading(false);
      alert(`Welcome, ${username || 'user'}!`);
    }, 800);
  };

  return (
    <section id="login" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Username-based Login</h2>
          <p className="mt-2 text-gray-600">
            Sign in using your organization username. Secure sessions with modern authentication and role-based permissions.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>No email required — usernames only</li>
            <li>Role-aware access for Admins, Managers, and Users</li>
            <li>Mobile-friendly and responsive</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. john.doe"
              className="mt-1 w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
              Remember me
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">By continuing, you agree to our acceptable use and security policies.</p>
        </form>
      </div>
    </section>
  );
}
