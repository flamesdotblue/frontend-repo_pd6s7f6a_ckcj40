import React from 'react';
import { Shield, Settings, User } from 'lucide-react';

const roles = [
  {
    name: 'Admin',
    icon: Shield,
    features: [
      'Manage users & roles',
      'Configure SLAs & categories',
      'Global reporting insights',
    ],
    tone: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    name: 'Manager',
    icon: Settings,
    features: [
      'Assign & prioritize tickets',
      'Monitor team workload',
      'Approve escalations',
    ],
    tone: 'from-blue-500/20 to-blue-500/0',
  },
  {
    name: 'User',
    icon: User,
    features: [
      'Create & track tickets',
      'Attach files & notes',
      'Receive notifications',
    ],
    tone: 'from-amber-500/20 to-amber-500/0',
  },
];

export default function RolesShowcase() {
  return (
    <section id="roles" className="w-full">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Roles & permissions</h2>
          <p className="mt-1 text-sm text-white/70">
            Clear responsibilities for each role to keep ownership simple and effective.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {roles.map((r) => (
              <div
                key={r.name}
                className="relative rounded-2xl border border-white/10 bg-black/30 p-5"
              >
                <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b ${r.tone}`} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      <r.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-medium text-white">{r.name}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
