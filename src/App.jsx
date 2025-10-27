import React from 'react';
import HeroSpline from './components/HeroSpline';
import StatusLegend from './components/StatusLegend';
import RolesShowcase from './components/RolesShowcase';
import RoleDashboards from './components/RoleDashboards';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500" />
            <span className="text-lg font-semibold">Pramodini Medicare</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#roles" className="hover:text-white">Roles</a>
            <a href="#status" className="hover:text-white">Status</a>
            <a href="#dashboards" className="hover:text-white">Dashboards</a>
          </nav>
        </div>
      </header>

      <main className="space-y-10 pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <HeroSpline />
        </div>

        <div id="dashboards">
          <RoleDashboards />
        </div>

        <div id="status">
          <StatusLegend />
        </div>

        <RolesShowcase />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 md:px-10 text-sm text-white/60">
          © {new Date().getFullYear()} Pramodini Medicare Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
