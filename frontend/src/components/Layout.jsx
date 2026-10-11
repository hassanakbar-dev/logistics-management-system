import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen bg-[#0a0f1d] text-slate-200 flex overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Left Sidebar */}
      <aside className="w-72 bg-slate-900/40 backdrop-blur-xl border-r border-slate-800 flex-col justify-between hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.2)] z-20 relative">
        <div>
          {/* Logo / Brand */}
          <div className="p-8 border-b border-slate-800/50">
            <Link to="/" className="flex items-center gap-3 mb-1 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🚚</span>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Swift<span className="text-blue-500">Logistics</span>
              </h1>
            </Link>
            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase ml-9">Management OS</p>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-3">
            <Link to="/dashboard" className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-bold transition-all ${isActive('/dashboard') ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <span className="text-xl">📊</span> Dashboard
            </Link>
            <Link to="/shipments" className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-bold transition-all ${isActive('/shipments') ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <span className="text-xl">📦</span> All Shipments
            </Link>
            <Link to="/create-shipment" className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-bold transition-all ${isActive('/create-shipment') ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <span className="text-xl">➕</span> Create Shipment
            </Link>
          </nav>
        </div>

        {/* Bottom User / Auth Links */}
        <div className="p-6 border-t border-slate-800/50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] px-4 py-4 rounded-xl text-sm font-bold transition-all"
          >
            <span>🚪</span> Secure Logout
          </button>
        </div>
      </aside>

      {/* Right Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative z-10">
        
        {/* Mobile Header (Only for small screens) */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 md:hidden flex justify-between items-center sticky top-0 z-50">
          <h1 className="font-black text-white text-lg">Swift<span className="text-blue-500">Logistics</span></h1>
          <div className="flex gap-2">
            <Link to="/dashboard" className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs font-bold text-slate-300">Dash</Link>
            <Link to="/shipments" className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs font-bold text-slate-300">Ship</Link>
          </div>
        </header>

        {/* Dynamic Page Content will render here */}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>

    </div>
  );
}