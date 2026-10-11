import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  const faqs = [
    { q: "How do I track my active shipments?", a: "You can track your shipment in real-time by logging into your personalized dashboard. Enter your unique Waybill/Tracking Number in the search bar, and you will see the live GPS location, temperature history (for cold-chain), and ETA." },
    { q: "How does the COD reconciliation work?", a: "Our trained riders collect the cash upon successful delivery. The collected amount is automatically updated in your portal and reconciled directly to your bank account within 24 hours. We charge a flat 1.5% processing fee on all COD amounts." },
    { q: "Do you offer API integration for my website?", a: "Absolutely. We provide seamless REST and GraphQL API integration for Shopify, WooCommerce, Magento, and custom ERP systems. Check your dashboard's 'Developer Tools' for comprehensive documentation and API keys." },
    { q: "What is the procedure if a delivery attempt fails?", a: "In case of a failed delivery attempt, our system logs the reason (e.g., receiver not available, incorrect address) and schedules a re-attempt for the next working day automatically. You can intercept and redirect the package from your dashboard." },
    { q: "Are my fragile goods insured during transit?", a: "Yes. All enterprise shipments come with standard transit liability up to $1,000. Premium insurance coverage (up to $5M) can also be selected during shipment creation for high-value items." },
    { q: "Can I manage multiple warehouse locations?", a: "Yes, our Professional and Enterprise tiers allow you to add multiple pickup locations and warehouses. Our AI automatically routes orders to the nearest sorting hub to minimize transit times and costs." },
    { q: "How are international customs handled?", a: "For cross-border freight, our in-house brokerage team handles all customs clearance and documentation. You just need to upload the commercial invoice, and we manage the compliance." }
  ];

  const videoTutorials = [
    { 
      title: "How to Create a Shipment", 
      desc: "Learn the step-by-step process of creating a new waybill.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", 
      duration: "3:45",
      link: "https://www.youtube.com/results?search_query=how+to+create+a+shipment+logistics+software" 
    },
    { 
      title: "Connecting Shopify API", 
      desc: "Automate your fulfillment by connecting your Shopify store.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop", 
      duration: "5:20",
      link: "https://www.youtube.com/results?search_query=how+to+connect+shopify+api+logistics+tutorial" 
    },
    { 
      title: "Understanding COD Reports", 
      desc: "A deep dive into reading your financial reconciliation reports.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
      duration: "4:15",
      link: "https://www.youtube.com/results?search_query=understanding+cash+on+delivery+reconciliation+reports" 
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Hero Section (Search Focus) */}
      <div className="relative pt-32 pb-24 mb-16 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div variants={fadeUp} className="border border-blue-500/30 bg-blue-900/20 text-blue-400 text-sm font-bold px-5 py-2 rounded-full inline-block mb-6 tracking-widest uppercase">
            24/7 Knowledge Base
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">help you?</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="relative max-w-2xl mx-auto mt-10 shadow-2xl">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or API docs..." 
              className="w-full bg-[#0a0f1d] border-2 border-slate-700 rounded-full py-5 pl-14 pr-6 text-lg text-white font-medium focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-500 text-2xl">
              🔍
            </div>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-colors">
              Search
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Support Categories */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "📦", title: "Shipment Tracking", desc: "Manage live orders" },
            { icon: "💳", title: "Billing & COD", desc: "Invoices & finances" },
            { icon: "⚙️", title: "API & Developers", desc: "Integration guides" },
            { icon: "👤", title: "Account Settings", desc: "Profile & security" }
          ].map((cat, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-slate-900/50 border border-slate-700 hover:border-blue-500 p-8 rounded-[2rem] text-center cursor-pointer transition-all hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="text-5xl mb-6 bg-slate-800 w-24 h-24 mx-auto rounded-full flex items-center justify-center">{cat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-slate-400 font-light text-sm">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Accordion FAQ Section */}
      <div className="w-full bg-slate-900/30 py-32 border-y border-slate-800 mb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm mb-3 block">Quick Answers</span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</motion.h2>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div key={index} variants={item} className={`bg-[#0a0f1d] border ${isOpen ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-slate-700'} rounded-[1.5rem] overflow-hidden transition-all duration-300`}>
                  <button 
                    onClick={() => toggleFAQ(index)} 
                    className="w-full p-8 flex justify-between items-center text-left focus:outline-none"
                  >
                    <h3 className={`text-xl font-bold flex items-start gap-4 ${isOpen ? 'text-blue-400' : 'text-white'}`}>
                      <span className="mt-1 text-2xl">❓</span> {faq.q}
                    </h3>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className={`text-3xl font-light ml-4 ${isOpen ? 'text-blue-400' : 'text-slate-500'}`}>+</motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}
                      >
                        <p className="text-slate-300 text-lg font-light leading-relaxed px-8 pb-8 ml-10 border-t border-slate-800 pt-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* PREMIUM VIDEO TUTORIALS SECTION */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-3 block">Learn Visually</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Video Tutorials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videoTutorials.map((video, i) => (
            <motion.a 
              href={video.link}
              target="_blank" 
              rel="noopener noreferrer"
              key={i} 
              variants={fadeUp} 
              className="group cursor-pointer block bg-slate-900/50 rounded-[2rem] border border-slate-700 hover:border-blue-500 overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500"
            >
              {/* Image and Play Button Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={video.img} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-90"></div>
                
                {/* Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 bg-blue-500 rounded-full animate-ping opacity-20 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-blue-600/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.8)]">
                      <span className="text-white text-3xl ml-2">▶</span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-white border border-slate-600">
                  {video.duration}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">{video.title}</h3>
                <p className="text-slate-400 font-light text-sm mb-6 h-10">{video.desc}</p>
                <p className="text-slate-300 text-sm flex items-center gap-2 font-bold uppercase tracking-wider">
                  <span className="text-red-500 text-xl">▶</span> Watch on YouTube
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Submit a Ticket (CTA) */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900/30 border border-blue-500/30 rounded-[3rem] p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-7xl mb-8">📬</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Still can't find your answer?</h2>
            <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">Submit a detailed support ticket through your dashboard and our technical team will respond within 2-4 hours.</p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]">
              Open Support Ticket
            </button>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Help;