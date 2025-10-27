import React from 'react';

const statuses = [
  { name: 'Open', color: 'bg-blue-500' },
  { name: 'Assigned', color: 'bg-indigo-500' },
  { name: 'In Progress', color: 'bg-amber-500' },
  { name: 'On Hold', color: 'bg-gray-500' },
  { name: 'Resolved', color: 'bg-emerald-500' },
  { name: 'Closed', color: 'bg-slate-600' },
  { name: 'Reopened', color: 'bg-pink-500' },
  { name: 'Cancelled', color: 'bg-rose-500' },
];

export default function StatusLegend() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Status legend</h2>
            <p className="text-xs text-white/60">Lifecycle colors</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {statuses.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3"
              >
                <span className={`inline-block h-3 w-3 rounded-full ${s.color}`} />
                <span className="text-sm text-white/90">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
