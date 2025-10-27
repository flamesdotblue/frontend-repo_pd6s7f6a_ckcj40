import React, { useState } from 'react';

const TEST_CREDENTIALS = [
  { role: 'Admin', username: 'admin', password: 'admin123' },
  { role: 'Manager', username: 'manager', password: 'manager123' },
  { role: 'User', username: 'user', password: 'user123' },
];

export default function LoginPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate async auth check
    setTimeout(() => {
      const found = TEST_CREDENTIALS.find(
        (c) => c.username === username && c.password === password
      );
      if (found) {
        setRole(found.role);
        setMessage(`Success! Logged in as ${found.role}.`);
      } else {
        setRole('');
        setMessage('Invalid username or password.');
      }
      setLoading(false);
    }, 500);
  }

  return (
    <section id="login" className="w-full">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Sign in</h2>
            <p className="mt-1 text-sm text-white/70">
              Use the temporary testing credentials provided.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-sm text-white/80">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g., admin"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 disabled:opacity-60"
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>

            {message && (
              <div className={`mt-4 text-sm ${role ? 'text-emerald-300' : 'text-rose-300'}`}>
                {message}
              </div>
            )}
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <h3 className="text-sm font-medium text-white">Temporary credentials</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {TEST_CREDENTIALS.map((c) => (
                  <li
                    key={c.role}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-white/90"
                  >
                    <span className="font-medium">{c.role}</span>
                    <span className="ml-3 text-white/70">
                      {c.username} / {c.password}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-white/60">
                For demo only. In production, this will be replaced by secure authentication.
              </p>
            </div>

            {role && (
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                You are signed in as <span className="font-semibold">{role}</span>.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
