const roles = [
  {
    title: 'Admin',
    color: 'from-cyan-500 to-blue-500',
    points: [
      'Manage users, roles, locations, areas, SLA rules',
      'Global assign/reassign and auto-assignment settings',
      'Notification templates, audit logs, and system settings',
    ],
  },
  {
    title: 'Manager',
    color: 'from-emerald-500 to-teal-500',
    points: [
      'View and manage tickets for assigned locations',
      'Assign, change status/priority/SLA, close/reopen',
      'Access dashboards, receive lifecycle notifications',
    ],
  },
  {
    title: 'User',
    color: 'from-violet-500 to-fuchsia-500',
    points: [
      'Create tickets with attachments',
      'Track, comment, rate and provide feedback',
      'Mobile-friendly experience with alerts',
    ],
  },
];

export default function RolesShowcase() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Role-based Controls</h2>
        <p className="mt-2 text-gray-600">Clear responsibilities across Admins, Managers, and Users.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl p-1 bg-gradient-to-br shadow-sm from-gray-200 to-gray-100">
              <div className={`rounded-xl p-5 bg-white h-full`}>
                <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white bg-gradient-to-r ${r.color}`}>{r.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                  {r.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
