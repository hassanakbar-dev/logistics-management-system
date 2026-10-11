import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, delivered: 0, processing: 0, transit: 0 });
  const [userName, setUserName] = useState('');
  
  const userRole = sessionStorage.getItem('role');

  useEffect(() => {
    setUserName(sessionStorage.getItem('userName') || 'User');
    
    const fetchDashboardData = async () => {
      try {
        const response = await API.get('/shipments');
        const data = response.data;
        
        const total = data.length;
        const delivered = data.filter(s => s.status === 'Delivered').length;
        const processing = data.filter(s => s.status === 'Processing').length;
        const transit = data.filter(s => s.status === 'In Transit' || s.status === 'Out for Delivery').length;

        setStats({ total, delivered, processing, transit });
      } catch (err) {
        console.error('Dashboard data fetch error');
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  const chartData = [
    { name: 'Processing', count: stats.processing, color: '#f59e0b' },
    { name: 'In Transit', count: stats.transit, color: '#8b5cf6' },
    { name: 'Delivered', count: stats.delivered, color: '#10b981' },
  ];

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-full bg-transparent text-slate-200 flex flex-col p-4 md:p-8 selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Header */}
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-center mb-10 bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{userName}!</span>
            </h1>
            <p className="text-slate-400 text-sm tracking-widest uppercase font-bold">
              Role: <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full ml-2">{userRole || 'Sender'}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/shipments" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
              View Shipments
            </Link>
          </div>
        </motion.div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Shipments", value: stats.total, gradient: "from-blue-600 to-indigo-600", shadow: "shadow-blue-500/20", icon: "📦" },
            { title: "Processing", value: stats.processing, gradient: "from-amber-500 to-orange-500", shadow: "shadow-amber-500/20", icon: "⚙️" },
            { title: "In Transit", value: stats.transit, gradient: "from-purple-600 to-fuchsia-600", shadow: "shadow-purple-500/20", icon: "🚚" },
            { title: "Delivered", value: stats.delivered, gradient: "from-emerald-500 to-green-500", shadow: "shadow-emerald-500/20", icon: "✅" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl z-0`}></div>
              <div className={`bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-xl transition-all hover:-translate-y-2 ${stat.shadow} relative z-10 overflow-hidden`}>
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <p className="text-slate-300 font-bold uppercase tracking-wider text-xs">{stat.title}</p>
                  <span className="text-3xl drop-shadow-md">{stat.icon}</span>
                </div>
                <h3 className="text-5xl font-black text-white relative z-10">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Chart Section */}
        <motion.div variants={fadeUp} className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2rem] shadow-2xl relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Shipment Status Analytics</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} dx={-10} allowDecimals={false} />
                <Tooltip 
                  cursor={{ fill: '#1e293b', opacity: 0.6 }}
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid #334155', borderRadius: '12px', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', padding: '12px 20px' }} 
                  itemStyle={{ fontWeight: 'bold', fontSize: '16px' }}
                />
                <Bar dataKey="count" radius={[12, 12, 0, 0]} maxBarSize={100} animationDuration={1500}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}