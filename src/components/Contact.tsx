import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, HelpCircle, MessageCircle } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactProps {
  onAddMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt'>) => void;
  onNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function Contact({ onAddMessage, onNotification }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && subject.trim() && message.trim()) {
      onAddMessage({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        phone: phone.trim() || undefined
      });

      onNotification('Message submitted successfully!', 'success');
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSuccess(false), 8000);
    }
  };

  return (
    <div className="w-full py-20 space-y-16 bg-white animate-in fade-in duration-300">
      
      {/* Page Title */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Inquiries & Consultation</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Get in Touch Today</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Have questions about WAEC preparations, Moodle LMS syncing, payment guidelines, or customized schedules? Reach out below.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-[#1F3864] heading-font">Academy Coordinates</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                SmartBrain EdTech Academy is based in Cross River State, Nigeria. Our local administrative desk supports remote coordination, course registrations, and virtual LMS training.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#E86A1A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider heading-font">Campus Head Office</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Calabar, Cross River State, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#1F3864]/5 border border-slate-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#1F3864]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider heading-font">Academic Email</h4>
                    <a
                      href="mailto:smartbrainedtechacademy@gmail.com"
                      className="text-xs text-[#E86A1A] hover:underline block mt-0.5"
                    >
                      smartbrainedtechacademy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider heading-font">WhatsApp Instant Chat</h4>
                    <a
                      href="https://wa.me/2349044354766"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="text-xs text-emerald-600 font-bold hover:underline block mt-0.5"
                    >
                      +234 904 435 4766
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#1F3864]/5 border border-slate-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1F3864]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider heading-font">Direct Phone Calls</h4>
                    <a
                      href="tel:07034477971"
                      className="text-xs text-[#1F3864] font-bold hover:underline block mt-0.5"
                    >
                      07034477971
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Response rate badge */}
            <div className="border border-slate-100 bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong className="text-slate-700 font-bold">2-Hour Reply SLA:</strong> We read and reply to all email proposals and WhatsApp requests in under 2 hours during administrative shifts (Mon-Sat, 8am-6pm WAT).
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
            {success ? (
              
              /* Success visualizer */
              <div className="text-center py-12 space-y-5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F3864] heading-font">Message Received Successfully!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for submitting your academic consultation. A SmartBrain officer will reach out or call you shortly. In the meantime, explore our courses catalog!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const btn = document.getElementById('btn-nav-courses');
                      if (btn) btn.click();
                    }}
                    className="px-5 py-2.5 bg-[#1F3864] hover:bg-[#E86A1A] text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Browse Program Catalog
                  </button>
                </div>
              </div>
            ) : (
              
              /* Direct message form fields */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#1F3864] heading-font">Send Consultation Request</h3>
                  <p className="text-xs text-slate-400 mt-1">Fields marked * are mandatory. Provide active numbers for rapid feedback.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Active Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 07034477971"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Subject of Inquiry *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Secondary Math Tutoring"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Detailed Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what grade level your child is in, what subjects are difficult, or what tech skills you are interested in acquiring..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all"
                  ></textarea>
                </div>

                <button
                  id="btn-submit-contact-msg"
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-orange-500/10"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
