import HeroSpline from './components/HeroSpline';
import LoginPanel from './components/LoginPanel';
import StatusLegend from './components/StatusLegend';
import RolesShowcase from './components/RolesShowcase';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSpline />
      <LoginPanel />
      <StatusLegend />
      <RolesShowcase />

      <footer className="w-full bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Pramodini Medicare Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#overview" className="hover:text-white">Status Legend</a>
            <a href="#login" className="hover:text-white">Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
