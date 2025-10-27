const statuses = [
  { name: 'Open', color: 'bg-blue-500', meaning: 'Created, pending assignment' },
  { name: 'Assigned', color: 'bg-amber-400', meaning: 'Assigned, awaiting action' },
  { name: 'In Progress', color: 'bg-orange-500', meaning: 'Under resolution' },
  { name: 'On Hold', color: 'bg-purple-500', meaning: 'Awaiting dependency' },
  { name: 'Resolved', color: 'bg-green-500', meaning: 'Fix completed' },
  { name: 'Closed', color: 'bg-teal-500', meaning: 'Verified and accepted' },
  { name: 'Reopened', color: 'bg-red-500', meaning: 'Issue reoccurred or not fixed' },
  { name: 'Cancelled', color: 'bg-gray-400', meaning: 'Invalid / withdrawn' },
];

export default function StatusLegend() {
  return (
    <section id="overview" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Status & SLA Colors</h2>
            <p className="mt-2 text-gray-600">Clear visual states map the entire ticket lifecycle end-to-end.</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statuses.map((s) => (
            <div key={s.name} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50">
              <span className={`h-3 w-3 rounded-full ${s.color} mt-1`} />
              <div>
                <div className="font-medium text-gray-900">{s.name}</div>
                <div className="text-sm text-gray-600">{s.meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
