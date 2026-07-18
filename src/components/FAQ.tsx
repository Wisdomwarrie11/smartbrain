import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, MessageCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = faqs.filter((f) => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full py-20 space-y-16 bg-white animate-in fade-in duration-300">
      
      {/* Editorial Header */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Instant Answers</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Frequently Asked Questions</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Browse through our quick answers regarding registration milestones, learning pacing, LMS configurations, and local Calabar school support.
        </p>
      </section>

      {/* Accordions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sleek Search bar */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all font-medium"
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-400 text-xs">No matching questions found.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_25px_rgba(31,56,100,0.03)] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-[#1F3864] text-xs sm:text-sm heading-font">{faq.question}</span>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-[#E86A1A]/10 text-[#E86A1A]' : 'bg-slate-50 text-slate-400'}`}>
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1.5 text-xs text-slate-500 border-t border-slate-50 leading-relaxed font-normal whitespace-pre-line bg-slate-50/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* WhatsApp banner */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center space-y-4">
          <h3 className="font-bold text-[#1F3864] text-sm tracking-tight heading-font">Still need help with your curriculum?</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">Our founder Henry Okorie is directly available on WhatsApp to support local parents with any academic question or payment setup.</p>
          <a
            href="https://wa.me/2349044354766"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md shadow-emerald-600/10"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" /> WhatsApp Academic Desk
          </a>
        </div>
      </section>

    </div>
  );
}
