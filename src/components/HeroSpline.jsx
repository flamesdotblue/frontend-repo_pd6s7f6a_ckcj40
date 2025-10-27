import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-black text-white overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm mb-4 ring-1 ring-white/20">
            Pramodini Medicare Pvt. Ltd.
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Centralized Ticketing & SLA Platform
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Create, assign, and resolve issues faster with real-time visibility, role-based access, and SLA tracking across all diagnostic centre locations.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#login" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-medium shadow">
              Log in with Username
            </a>
            <a href="#overview" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium ring-1 ring-white/20">
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient edge for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
    </section>
  );
}
