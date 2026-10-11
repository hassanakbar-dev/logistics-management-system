import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* 1. Header (Hero Section) */}
      <div className="relative w-full h-[500px] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-[10s] hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/60 via-[#0a0f1d]/40 to-[#0a0f1d]"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 text-center px-4 max-w-5xl mt-20">
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4 block">Discover Our Story</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Logistics</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            SwiftLogistics Pro bridges the gap between businesses and their customers with state-of-the-art tracking systems and a massive nationwide fleet. We deliver more than packages; we deliver promises.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Stats Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-32 -mt-10 relative z-20">
          {[
            { value: "50M+", label: "Packages Delivered" },
            { value: "120+", label: "Cities Covered" },
            { value: "99.9%", label: "On-Time Rate" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center shadow-2xl hover:border-blue-500/50 transition-colors duration-300">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 2. Mission & Infrastructure */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Our Mission & Infrastructure</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                To empower local and nationwide businesses with seamless, technology-driven supply chain solutions. We aim to eliminate logistical bottlenecks through intelligent automation and relentless dedication.
              </p>
              <p>
                We operate over 50 fully automated sorting hubs strategically located across the country. Our diverse fleet ranges from heavy-duty cargo trucks designed for interstate transport to agile, eco-friendly last-mile delivery bikes.
              </p>
              <p className="border-l-4 border-indigo-500 pl-6 italic text-slate-400 mt-8">
                "We don't just move boxes; we orchestrate a symphony of movement that keeps the global economy pulsing."
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2 grid grid-cols-2 gap-4 relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10"></div>
             <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" alt="Staff" className="rounded-2xl h-72 w-full object-cover shadow-2xl border border-slate-700/50 hover:scale-[1.02] transition-transform duration-500" />
             <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop" alt="Boxes" className="rounded-2xl h-72 w-full object-cover shadow-2xl border border-slate-700/50 mt-12 hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-slate-400 text-lg font-light">The foundational principles that guide every package we deliver and every partnership we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Efficiency", desc: "Optimizing routes and processes to ensure lightning-fast deliveries." },
              { icon: "🛡️", title: "Reliability", desc: "A robust network you can trust to get it there on time, every time." },
              { icon: "💡", title: "Innovation", desc: "Leveraging cutting-edge AI and tech to solve complex logistical challenges." },
              { icon: "🤝", title: "Partnership", desc: "Treating every client's business as if it were our very own." }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300">
                <div className="text-4xl mb-6">{val.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. Company Timeline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">Our Heritage</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Journey So Far</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2018", title: "The Beginning", desc: "Started with just 10 vans in a single city, focusing strictly on local B2B deliveries and building a reputation." },
              { year: "2021", title: "Nationwide Expansion", desc: "Opened 50+ sorting hubs, launched our proprietary tracking software, and scaled operations massively." },
              { year: "2026", title: "Enterprise Era", desc: "Handling over 50,000 daily shipments with advanced AI-driven routing and global logistics partnerships." }
            ].map((milestone, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative border-l-4 border-blue-500 pl-8 py-6 bg-slate-900/50 rounded-r-2xl hover:bg-slate-800 transition-colors duration-300 shadow-lg">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[10px] top-8 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-3">{milestone.year}</h3>
                <h4 className="text-2xl font-bold text-white mb-3">{milestone.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Leadership Team */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">The Minds Behind</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet Our Leaders</h2>
            <p className="text-slate-400 text-lg font-light">A team of visionary experts dedicated to transforming the logistics industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop", name: "Michael Vance", role: "CEO & Founder", bio: "With 20 years in supply chain management, Michael leads with a focus on sustainable growth and relentless innovation." },
              { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop", name: "Sarah Collins", role: "Chief Operations Officer", bio: "Sarah is the mastermind behind our automated hubs, ensuring flawless execution of thousands of daily operations." },
              { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop", name: "David Miller", role: "Head of Technology", bio: "David drives our AI and tracking systems, keeping our platform secure, fast, and ahead of the curve." }
            ].map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-slate-800/20 p-8 rounded-3xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="overflow-hidden w-48 h-48 rounded-full mx-auto mb-8 border-4 border-slate-800 shadow-xl group-hover:border-blue-500/50 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Sustainability */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative bg-gradient-to-br from-[#0f2e1e] to-[#07130c] border border-green-500/30 rounded-3xl p-12 md:p-16 mb-20 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-green-500">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 7.95 7.05 4.57 11 4.07V19.93ZM13 4.07C16.95 4.57 20 7.95 20 12C20 16.05 16.95 19.43 13 19.93V4.07Z"/>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-3 block">Sustainability</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Commitment to Green Logistics</h2>
              <div className="space-y-6 text-green-100/70 text-lg font-light leading-relaxed">
                <p>
                  We recognize our responsibility to the planet. That's why we are actively transitioning <strong className="text-green-400 font-bold">40% of our last-mile delivery fleet</strong> to Electric Vehicles (EVs) by 2027.
                </p>
                <p>
                  Our smart-routing AI doesn't just save time—it minimizes fuel consumption and dramatically reduces our overall carbon footprint, proving that efficiency and ecology can go hand in hand.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 bg-green-900/30 rounded-full flex items-center justify-center border-4 border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                <span className="text-8xl transform hover:rotate-12 hover:scale-110 transition-transform duration-300">🌱</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;