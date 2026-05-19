import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <motion.a 
    whileHover={{ y: -15 }}
    href={href} 
    className="flex items-center gap-10 glass-card p-12 rounded-[3.5rem] border border-white/20 hover:border-primary/50 transition-all duration-500 group shadow-2xl relative overflow-hidden"
  >
    <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all" />
    <div className="p-6 bg-primary/15 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl shadow-primary/10 border border-primary/20">
      <Icon size={36} />
    </div>
    <div>
      <p className="text-gray-400 text-sm uppercase tracking-[0.4em] mb-3 font-black">{title}</p>
      <p className="text-white font-black font-outfit text-2xl tracking-tighter">{value}</p>
    </div>
  </motion.a>
);
const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mqakevve', { // Note: User should replace this with their own Formspree ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(209,107,165,0.05)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto font-inter font-light tracking-wide text-base md:text-lg leading-relaxed">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              value={email} 
              href={portfolioData.personalInfo.gmailLink} 
            />
            <ContactInfo 
              icon={Phone} 
              title="Phone" 
              value={phone} 
              href={`tel:${phone.replace(/\s/g, '')}`} 
            />
            <ContactInfo 
              icon={MapPin} 
              title="Location" 
              value={location} 
              href="#" 
            />
            
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: github, label: 'GitHub' },
                { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
                { icon: Mail, href: portfolioData.personalInfo.gmailLink, label: 'Gmail' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 glass-card p-6 rounded-2xl flex items-center justify-center gap-3 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-gray-300 hover:text-white group shadow-md"
                >
                  <social.icon size={20} className="group-hover:text-primary transition-colors" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
            
            <form 
              className="space-y-8 relative z-10" 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white font-inter text-base placeholder:text-gray-600 shadow-inner"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white font-inter text-base placeholder:text-gray-600 shadow-inner"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white font-inter text-base placeholder:text-gray-600 shadow-inner"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] ml-2">Message</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-white/10 transition-all text-white font-inter text-base placeholder:text-gray-600 resize-none shadow-inner"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.01, y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-base uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success/Error Modals */}
      <AnimatePresence>
        {status === 'success' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus('idle')}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-10 rounded-[3rem] border border-white/20 shadow-2xl z-10 text-center"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-bold font-outfit text-white mb-4">Message Sent!</h3>
              <p className="text-gray-300 font-inter mb-10 leading-relaxed">
                Thank you for reaching out, <span className="text-primary font-bold">Ragavi</span> will get back to you soon.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold uppercase tracking-[0.2em] transition-all border border-white/10"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}

        {status === 'error' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus('idle')}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-10 rounded-[3rem] border border-white/20 shadow-2xl z-10 text-center"
            >
              <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/30">
                <AlertCircle size={48} className="text-red-500" />
              </div>
              <h3 className="text-3xl font-bold font-outfit text-white mb-4">Oops!</h3>
              <p className="text-gray-300 font-inter mb-10 leading-relaxed">
                {errorMessage}
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="w-full py-4 bg-red-500/20 hover:bg-red-500/30 text-white rounded-2xl font-bold uppercase tracking-[0.2em] transition-all border border-red-500/20"
              >
                Try Again
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
