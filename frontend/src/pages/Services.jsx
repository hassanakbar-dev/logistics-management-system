import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const cardVariant = { hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  const servicesList = [
    { title: "B2B Freight Transport", desc: "Heavy-duty bulk cargo movement with real-time GPS tracking and temperature control.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" },
    { title: "E-Commerce Fulfillment", desc: "End-to-end order processing, fast last-mile delivery, and seamless storefront integrations.", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" },
    { title: "Warehousing Solutions", desc: "Secure, climate-controlled storage with automated robotic inventory management.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
    { title: "Global Air Freight", desc: "Fast international air cargo for time-critical, high-value goods across 150+ countries.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" },
    { title: "Secure API Integration", desc: "Connect your ERP and storefronts for instant waybill generation and webhooks.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" },
    { title: "Reverse Logistics", desc: "Hassle-free return management, product recovery, and automated refund processing.", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop" }
  ];

  const specializedServices = [
    { title: "Cold Chain Transport", icon: "❄️", desc: "For perishables and pharmaceuticals. Constant temperature monitoring from -20°C to 8°C." },
    { title: "Hazardous Materials", icon: "☢️", desc: "Certified and compliant handling of dangerous goods with specialized escort fleets." },
    { title: "White Glove Delivery", icon: "🧤", desc: "Premium inside-delivery, assembly, and packaging removal for high-end items." },
    { title: "Oversized Cargo", icon: "🏗️", desc: "Flatbeds and specialized routing for construction equipment and heavy machinery." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Header (Hero) */}
      <div className="relative pt-32 pb-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0a0f1d]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-screen"></div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">Enterprise-Grade <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Solutions</span></h1>
          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
            A comprehensive suite of logistics solutions engineered to scale seamlessly with your global business operations.
          </p>
        </motion.div>
      </div>

      {/* Main Services Grid */}
      <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <motion.div key={index} variants={cardVariant} className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
              <div className="h-64 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="p-8 flex-1 flex flex-col relative z-20 -mt-12">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-slate-400 font-light leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-6 flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  Learn more <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* NEW: Specialized Services */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-slate-800/20 py-32 border-y border-slate-800 mb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">Niche Requirements</span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-16">Specialized Logistics</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((spec, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl bg-[#0a0f1d] border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
                <div className="text-5xl mb-6">{spec.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Our Services */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">The Advantage</span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">Why Outsource To Us?</motion.h2>
          <p className="text-slate-400 text-lg font-light">We don't just move boxes; we integrate seamlessly into your business as a strategic growth partner.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: "🛡️", title: "Fully Insured", desc: "100% transit liability coverage up to $5M per shipment." },
            { icon: "⚡", title: "Lightning Fast", desc: "Guaranteed same-day and next-day options in major cities." },
            { icon: "📊", title: "Data Driven", desc: "Detailed analytics dashboard for supply chain optimization." },
            { icon: "🌍", title: "Vast Network", desc: "Reaching the most remote areas with localized fleets." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="p-8 text-center bg-slate-900/40 rounded-3xl border border-slate-800 hover:bg-slate-800 transition-colors">
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pricing / Tier Plans */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">Pricing</span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Business Plans</motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { name: "Starter", price: "Pay as you go", desc: "Perfect for small e-commerce stores", features: ["Up to 100 shipments/mo", "Basic Tracking UI", "Email Support", "Standard Delivery"], button: "Start Free" },
            { name: "Professional", price: "Custom Rates", desc: "For growing businesses needing scale", features: ["Unlimited shipments", "Full API Access", "Dedicated Account Manager", "COD Reconciliation", "Next-Day Delivery"], highlight: true, button: "Get Quote" },
            { name: "Enterprise", price: "Volume Based", desc: "Complete supply chain takeover", features: ["Full Fleet Control", "Automated Warehousing", "24/7 Priority Support", "Custom ERP Integration", "Global Freight"], button: "Contact Sales" }
          ].map((plan, i) => (
            <motion.div key={i} variants={fadeUp} className={`p-10 rounded-[2.5rem] relative ${plan.highlight ? 'border-2 border-blue-500 bg-gradient-to-b from-blue-900/20 to-[#0a0f1d] transform md:-translate-y-4 shadow-[0_0_40px_rgba(59,130,246,0.2)]' : 'border border-slate-700 bg-slate-900/30'}`}>
              {plan.highlight && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>}
              <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
              <p className="text-3xl text-blue-400 font-black mb-8 pb-8 border-b border-slate-700/50">{plan.price}</p>
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-300 font-light flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Process Timeline */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 py-32 border-t border-blue-500/20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3 block">Onboarding</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">Seamless Integration Process</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-700 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { step: "1", title: "Sign Up", desc: "Create your business account" },
              { step: "2", title: "Generate API Keys", desc: "Get secure access credentials" },
              { step: "3", title: "Connect Store", desc: "Sync Shopify, Woo, or custom ERP" },
              { step: "4", title: "Start Shipping", desc: "Automate your fulfillment" }
            ].map((process, i) => (
              <div key={i} className="flex flex-col items-center bg-[#0a0f1d] p-4 rounded-3xl">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-6 border-4 ${i === 3 ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{process.title}</h4>
                <p className="text-slate-400 text-sm font-light w-40">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Services;