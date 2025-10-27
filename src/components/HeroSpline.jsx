import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[60vh] md:h-[72vh] overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability. Ensure it doesn't block the Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10 w-full">
          <div className="pointer-events-none select-none">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white drop-shadow-sm">
              Pramodini Medicare Ticketing
            </h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl">
              Centralized, role-based ticketing with SLA tracking and clear ownership.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#login"
              className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Log in
            </a>
            <a
              href="#roles"
              className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Explore roles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
