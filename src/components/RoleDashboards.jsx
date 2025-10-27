import React, { useState } from 'react';
import { Shield, Settings, User, Ticket, Timer, Bell, BarChart3, ClipboardList, CheckCircle, AlertCircle } from 'lucide-react';

const statusPills = {
  Open: 'bg-blue-500/15 text-blue-300 ring-1 ring-inset ring-blue-500/30',
  Assigned: 'bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30',
  'In Progress': 'bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-500/30',
  'On Hold': 'bg-gray-500/15 text-gray-300 ring-1 ring-inset ring-gray-500/30',
  Resolved: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-500/30',
  Closed: 'bg-slate-600/15 text-slate-300 ring-1 ring-inset ring-slate-600/30',
  Reopened: 'bg-pink-500/15 text-pink-300 ring-1 ring-inset ring-pink-500/30',
  Cancelled: 'bg-rose-500/15 text-rose-300 ring-1 ring-inset ring-rose-500/30',
};

function KPICard({ icon: Icon, label, value, tone }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
      <div className={`pointer-events-none absolute -inset-px bg-gradient-to-b ${tone}`} />
      <div className="relative flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs text-white/70">{label}</p>
          <p className="text-lg font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function TicketsTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="hidden grid-cols-12 gap-3 px-4 py-3 text-xs text-white/60 md:grid">
        <div className="col-span-4">Subject</div>
        <div className="col-span-2">Requester</div>
        <div className="col-span-2">Assignee</div>
        <div className="col-span-2">SLA</div>
        <div className="col-span-2 text-right">Status</div>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((r) => (
          <div key={r.id} className="grid grid-cols-1 gap-2 px-4 py-3 md:grid-cols-12 md:items-center">
            <div className="col-span-4">
              <div className="flex items-center gap-2 text-white">
                <Ticket className="h-4 w-4 text-white/70" />
                <span className="font-medium">{r.subject}</span>
              </div>
              <p className="mt-1 text-xs text-white/60 md:hidden">
                {r.requester} • {r.assignee} • {r.sla}
              </p>
            </div>
            <div className="col-span-2 hidden text-sm text-white/80 md:block">{r.requester}</div>
            <div className="col-span-2 hidden text-sm text-white/80 md:block">{r.assignee}</div>
            <div className="col-span-2 hidden text-sm text-white/80 md:block">{r.sla}</div>
            <div className="col-span-2 flex items-center justify-between md:block">
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ${statusPills[r.status]}`}>{r.status}</span>
              <button className="mt-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10 md:float-right md:mt-0">
                <ClipboardList className="h-3.5 w-3.5" /> View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminDashboard() {
  const rows = [
    { id: 1, subject: 'Configure Network SLA', requester: 'IT Ops', assignee: 'Admin', sla: '4h', status: 'Open' },
    { id: 2, subject: 'Onboard new manager', requester: 'HR', assignee: 'Admin', sla: '8h', status: 'Assigned' },
    { id: 3, subject: 'Audit permissions', requester: 'Security', assignee: 'Admin', sla: '24h', status: 'In Progress' },
  ];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <KPICard icon={BarChart3} label="Total tickets" value="1,284" tone="from-emerald-500/15 to-transparent" />
        <KPICard icon={Timer} label="Breaching soon" value="32" tone="from-rose-500/15 to-transparent" />
        <KPICard icon={Shield} label="Admins" value="6" tone="from-blue-500/15 to-transparent" />
        <KPICard icon={Bell} label="Alerts today" value="14" tone="from-amber-500/15 to-transparent" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Configuration & governance</h3>
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-600">
            <Shield className="h-4 w-4" /> Manage roles
          </button>
        </div>
        <p className="mt-2 text-sm text-white/70">Quick access to user management, categories, and SLA policies.</p>
      </div>
      <TicketsTable rows={rows} />
    </div>
  );
}

function ManagerDashboard() {
  const rows = [
    { id: 11, subject: 'Printer outage - Floor 2', requester: 'Nursing', assignee: 'Alex', sla: '2h', status: 'Open' },
    { id: 12, subject: 'Pharmacy system lag', requester: 'Pharmacy', assignee: 'Jordan', sla: '4h', status: 'In Progress' },
    { id: 13, subject: 'OT Light issue', requester: 'Surgery', assignee: 'Priya', sla: '1h', status: 'On Hold' },
  ];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <KPICard icon={ClipboardList} label="Unassigned" value="18" tone="from-blue-500/15 to-transparent" />
        <KPICard icon={User} label="Active agents" value="12" tone="from-emerald-500/15 to-transparent" />
        <KPICard icon={Timer} label="SLA risk" value="9" tone="from-rose-500/15 to-transparent" />
        <KPICard icon={BarChart3} label="Avg. handle time" value="2h 17m" tone="from-amber-500/15 to-transparent" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Workload overview</h3>
          <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20">
            <Settings className="h-4 w-4" /> Auto-assign rules
          </button>
        </div>
        <p className="mt-2 text-sm text-white/70">Balance the queue and prioritize high-impact incidents.</p>
      </div>
      <TicketsTable rows={rows} />
    </div>
  );
}

function UserDashboard() {
  const rows = [
    { id: 21, subject: 'Laptop battery issue', requester: 'You', assignee: 'IT Desk', sla: '24h', status: 'Resolved' },
    { id: 22, subject: 'Email not syncing', requester: 'You', assignee: 'IT Desk', sla: '8h', status: 'Open' },
    { id: 23, subject: 'Request: New ID card', requester: 'You', assignee: 'Admin', sla: '48h', status: 'Closed' },
  ];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <KPICard icon={Ticket} label="Your tickets" value="7" tone="from-emerald-500/15 to-transparent" />
        <KPICard icon={CheckCircle} label="Resolved" value="4" tone="from-blue-500/15 to-transparent" />
        <KPICard icon={AlertCircle} label="Needs info" value="1" tone="from-amber-500/15 to-transparent" />
        <KPICard icon={Timer} label="Awaiting SLA" value="2" tone="from-pink-500/15 to-transparent" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Create a new ticket</h3>
          <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-600">
            <Ticket className="h-4 w-4" /> New ticket
          </button>
        </div>
        <p className="mt-2 text-sm text-white/70">Describe your issue and attach files. You’ll receive updates via notifications.</p>
      </div>
      <TicketsTable rows={rows} />
    </div>
  );
}

export default function RoleDashboards() {
  const [role, setRole] = useState('Admin');
  const tabs = [
    { key: 'Admin', icon: Shield },
    { key: 'Manager', icon: Settings },
    { key: 'User', icon: User },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-white">Role dashboards</h2>
              <p className="mt-1 text-sm text-white/70">Explore what each role sees day-to-day.</p>
            </div>
            <div className="flex rounded-lg border border-white/10 bg-black/30 p-1">
              {tabs.map(({ key, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setRole(key)}
                  className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                    role === key ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {key}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            {role === 'Admin' && <AdminDashboard />}
            {role === 'Manager' && <ManagerDashboard />}
            {role === 'User' && <UserDashboard />}
          </div>
        </div>
      </div>
    </section>
  );
}
