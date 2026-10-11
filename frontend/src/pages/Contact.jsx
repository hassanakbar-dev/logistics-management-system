import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: 'General Support',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok || data.success) {
        setShowPopup(true);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          subject: 'General Support',
          message: ''
        });
      } else {
        alert(data.message || 'Server error occurred while saving message.');
      }
    } catch (error) {
      console.error('API Error details:', error);
      alert('Could not connect to backend server. Make sure port 5000 is active.');
    } finally {
      setLoading(false);
    }
  };

  const slideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* POPUP MODAL SECTION */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-[2rem] p-10 max-w-md w-full text-center shadow-[0_0_50px_rgba(34,197,94,0.2)]"
            >
              <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-500/40 relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                <svg className="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-3xl font-black text-white mb-4">Message Sent!</h3>
              <p className="text-slate-400 text-base mb-10 leading-relaxed font-light">
                Thank you for reaching out. Our enterprise support team will review your inquiry and get back to you within 2-4 hours.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30"
              >
                Return to Site
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover opacity-20 transform scale-105 transition-transform duration-[20s] hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/60 via-[#0a0f1d]/40 to-[#0a0f1d]"></div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 text-center px-4 max-w-4xl mt-20">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
            Let's Optimize Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Supply Chain</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl leading-relaxed font-light">
            Need a custom logistics plan? Our enterprise support team is available 24/7 to assist you.
          </p>
        </motion.div>
      </div>

      {/* Main Contact & Form */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mb-32 relative z-20">
        
        {/* Contact Info */}
        <motion.div initial="hidden" animate="visible" variants={slideLeft} className="lg:col-span-2 flex flex-col gap-10">
          <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 text-white">Direct Lines</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-2xl text-blue-400 border border-blue-500/30 shrink-0">📞</div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Toll Free (US & Canada)</p>
                  <p className="text-xl font-semibold text-white">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-2xl text-indigo-400 border border-indigo-500/30 shrink-0">🌍</div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">International</p>
                  <p className="text-xl font-semibold text-white">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-green-900/30 rounded-2xl flex items-center justify-center text-2xl text-green-400 border border-green-500/30 shrink-0">✉️</div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Enterprise Sales</p>
                  <p className="text-xl font-semibold text-white break-all">sales@swiftlogisticspro.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-10 rounded-[2.5rem] border border-blue-500/30 shadow-2xl overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Live Chat Online</h3>
            <p className="text-blue-200 font-light mb-6 relative z-10">Average response time: &lt; 2 mins</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold w-full relative z-10 hover:bg-blue-500 transition-colors shadow-lg">Start Conversation</button>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial="hidden" animate="visible" variants={slideRight} className="lg:col-span-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-10 md:p-14 rounded-[2.5rem] shadow-2xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Send us a Message</h2>
          <p className="text-slate-400 font-light mb-10">Fill out the form below and our team will get back to you shortly.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="bg-[#0a0f1d] border border-slate-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com" 
                  className="bg-[#0a0f1d] border border-slate-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Company / Business Name</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Business Ltd." 
                className="bg-[#0a0f1d] border border-slate-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Subject Category</label>
              <div className="relative">
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0a0f1d] border border-slate-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                >
                  <option>General Support</option>
                  <option>Sales & Pricing</option>
                  <option>API Integration</option>
                  <option>Report an Issue</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5" 
                placeholder="How can we help optimize your logistics..." 
                className="bg-[#0a0f1d] border border-slate-700 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-600"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-5 rounded-xl transition-all mt-4 shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 text-lg uppercase tracking-widest"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Global Hubs */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="bg-slate-900/40 py-32 border-y border-slate-800 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Major Global Hubs</h2>
            <p className="text-slate-400 text-lg font-light">Visit us at one of our primary sorting and management facilities worldwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { city: "New York, USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop", address: "100 Broadway, NY 10005" },
              { city: "London, UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop", address: "25 Churchill Place, Canary Wharf" },
              { city: "Dubai, UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop", address: "Logistics City, DWC Building 4" }
            ].map((hub, i) => (
              <motion.div key={i} variants={fadeUp} className="group overflow-hidden rounded-[2rem] relative h-80 shadow-2xl border border-slate-700 cursor-pointer">
                <img src={hub.img} alt={hub.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/50 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-3xl font-bold text-white mb-2">{hub.city}</h3>
                  <p className="text-blue-300 font-medium">{hub.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Department Contacts */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Specific Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Sales & Enterprise", email: "sales@swiftlogisticspro.com", desc: "For volume pricing and custom fleet contracts." },
            { title: "Technical Support", email: "api-support@swiftlogisticspro.com", desc: "For developers integrating our tracking APIs." },
            { title: "Media & Press", email: "media@swiftlogisticspro.com", desc: "For PR, interviews, and brand partnerships." }
          ].map((dept, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-slate-800/30 border border-slate-700 p-10 rounded-[2rem] hover:border-blue-500/50 hover:bg-slate-800/60 transition-all text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">{dept.title}</h3>
              <p className="text-slate-400 font-light mb-8 h-12">{dept.desc}</p>
              <a href={`mailto:${dept.email}`} className="inline-block bg-slate-900 px-6 py-3 rounded-xl text-blue-400 font-bold hover:text-white hover:bg-blue-600 transition-colors border border-slate-700">{dept.email}</a>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;