import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const slideInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const slideInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* 1. Hero Section (Expanded) */}
      <div className="relative w-full min-h-screen flex items-center mb-32 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover opacity-20 transform scale-105 transition-transform duration-[20s] hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="pt-10">
            <motion.div variants={fadeUp} className="border border-blue-500/30 bg-blue-900/20 text-blue-400 text-sm font-bold px-5 py-2 rounded-full inline-block mb-8 tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.3)] uppercase">
              The Next-Gen Logistics OS
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tight text-white">
              Smart, Fast <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Freight Delivery</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-2xl mb-10 leading-relaxed font-light max-w-xl">
              Manage your entire supply chain with our state-of-the-art platform. From automated dispatching to real-time cargo tracking, we ensure your business never stops moving.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
              <Link to="/register" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-center text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transform hover:-translate-y-1">
                Start Shipping Now
              </Link>
              <Link to="/services" className="border-2 border-slate-700 hover:border-slate-400 hover:bg-slate-800/50 text-center text-white px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Explore Fleet
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={slideInRight} className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" alt="Dashboard Preview" className="relative rounded-2xl shadow-2xl border border-slate-700/50 object-cover h-[600px] w-full" />
            
            {/* Floating Info Cards */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-12 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-2xl">✓</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Shipment Delivered</h4>
                  <p className="text-slate-400 text-sm">New York to London</p>
                </div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 -right-12 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <h3 className="text-4xl font-black text-blue-400 mb-1">99.9%</h3>
              <p className="text-slate-300 font-medium uppercase tracking-wider text-sm">On-Time Accuracy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* NEW: Stats Bar */}
      <div className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm mb-32 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            {[
              { num: "2.5M+", label: "Shipments Completed" },
              { num: "150+", label: "Countries Served" },
              { num: "45k+", label: "Active Enterprise Clients" },
              { num: "900+", label: "Automated Hubs" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-2">{stat.num}</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <p className="text-slate-500 font-bold mb-10 tracking-[0.2em] uppercase text-sm">Trusted by Global Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-700">
          {["Amazon", "FedEx", "Shopify", "Walmart", "DHL", "Tesla"].map((brand, i) => (
            <h2 key={i} className="text-2xl md:text-4xl font-black text-white tracking-tighter grayscale hover:grayscale-0 hover:text-blue-500 transition-all duration-300">{brand}</h2>
          ))}
        </div>
      </motion.div>

      {/* How It Works Section (Expanded) */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-gradient-to-b from-slate-900/40 to-slate-900/10 py-32 border-y border-slate-800/50 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">Simple & Seamless</span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6">How Our System Works</motion.h2>
            <p className="text-slate-400 text-xl font-light">We've distilled complex global logistics into a beautifully simple, three-step automated process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-indigo-500 to-blue-900 opacity-30 transform -translate-y-1/2 z-0"></div>

            {[
              { 
                step: "01",
                img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop", 
                title: "Create Shipment", 
                desc: "Easily generate waybills and schedule pickups through your personalized dashboard with automated ERP sync." 
              },
              { 
                step: "02",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", 
                title: "AI-Powered Dispatch", 
                desc: "Our AI instantly routes the nearest available driver and calculates the most fuel-efficient path to pickup." 
              },
              { 
                step: "03",
                img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop", 
                title: "Track & Deliver", 
                desc: "Monitor your shipment's live GPS location, temperature, and status until it safely reaches its destination." 
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative z-10 flex flex-col items-center group">
                <div className="w-20 h-20 bg-[#0a0f1d] border-4 border-slate-800 group-hover:border-blue-500 rounded-full flex items-center justify-center text-2xl font-black text-white mb-8 transition-colors duration-300 shadow-xl z-20">
                  {item.step}
                </div>
                <div className="w-full h-64 overflow-hidden rounded-3xl mb-8 shadow-2xl border border-slate-700/50">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white text-center">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed text-center px-4 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* NEW: Global Infrastructure (Deep Dive) */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideInLeft} className="relative h-[700px] rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
             <img src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=2090&auto=format&fit=crop" alt="Global Fleet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute bottom-0 left-0 w-full p-12 z-20 bg-gradient-to-t from-[#0a0f1d] to-transparent">
               <h3 className="text-4xl font-bold text-white mb-4">Unmatched Global Fleet</h3>
               <p className="text-slate-300 text-lg font-light max-w-md">Over 10,000 cargo vessels, 500+ freight aircraft, and a massive electric ground fleet working in perfect unison.</p>
             </div>
          </motion.div>
          <motion.div variants={stagger} className="flex flex-col gap-12">
            <motion.div variants={fadeUp}>
              <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for Massive Scale</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Whether you are shipping a single document across town or a thousand tons of raw materials across oceans, our infrastructure is designed to handle it with absolute precision and security.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { title: "Automated Sorting", desc: "Robotics-driven hubs process up to 1M parcels per hour." },
                { title: "Cold Chain Logistics", desc: "Temperature-controlled transit for pharmaceuticals and food." },
                { title: "Customs Clearance", desc: "In-house experts handle all international border paperwork." }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex items-start gap-6 bg-slate-800/20 p-6 rounded-2xl border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* API / Developer Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 border-y border-slate-800 py-32 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">For Developers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Integrate in Minutes</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
              Connect your E-Commerce store, ERP, or custom software to our powerful GraphQL and REST APIs. Generate waybills, schedule pickups, and receive real-time webhooks instantly.
            </p>
            <Link to="/help" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors text-lg">
              Read API Documentation <span>→</span>
            </Link>
          </div>
          <div className="bg-[#0f172a] rounded-2xl p-8 border border-slate-700 font-mono text-sm shadow-2xl relative">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-slate-300 overflow-x-auto">
              <code className="language-javascript">
<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-green-400">'https://api.swiftlogistics.com/v1/shipments'</span>, {'{\n'}
  method: <span className="text-green-400">'POST'</span>,
  headers: {'{\n'}
    <span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span>,
    <span className="text-green-400">'Content-Type'</span>: <span className="text-green-400">'application/json'</span>
  {'}\n'},
  body: <span className="text-blue-400">JSON</span>.<span className="text-blue-400">stringify</span>({'{\n'}
    origin: <span className="text-green-400">'Warehouse A'</span>,
    destination: <span className="text-green-400">'Customer B'</span>,
    weight: <span className="text-orange-400">25.5</span>,
    serviceType: <span className="text-green-400">'express'</span>
  {'}\n'})
{'}'});
              </code>
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Client Testimonials (Expanded) */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">Loved by Enterprise Leaders</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop", name: "Sarah Jenkins", role: "CEO, TechMart Global", text: "SwiftLogistics Pro completely transformed our supply chain. Their API integration saved us hundreds of hours and virtually eliminated manual errors." },
            { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop", name: "David Chen", role: "VP Operations, OmniRetail", text: "The real-time tracking is flawlessly accurate. We have reduced customer complaints regarding delivery times by over 95% since switching." },
            { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop", name: "Emily Rogers", role: "Founder, Luxe Apparel", text: "Their COD reconciliation is the fastest in the market. Cash flows straight to our bank within 24 hours. Highly recommended for any growing business!" }
          ].map((review, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-slate-800/30 p-10 rounded-3xl border border-slate-700/50 relative hover:bg-slate-800/60 transition-colors">
              <span className="text-8xl text-blue-500/20 absolute top-4 right-8 font-serif">"</span>
              <p className="text-slate-300 italic mb-10 text-lg leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
                <div>
                  <h4 className="text-white font-bold text-xl">{review.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Massive CTA Banner */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full relative py-32 overflow-hidden border-t border-blue-500/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">Ready to revolutionize your logistics?</h2>
          <p className="text-blue-200 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of businesses that trust SwiftLogistics Pro with their daily freight, supply chain management, and global distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register" className="bg-white text-blue-900 px-12 py-5 rounded-xl font-black text-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Create Free Account
            </Link>
            <Link to="/contact" className="border-2 border-white/50 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-sm">
              Talk to Sales
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;