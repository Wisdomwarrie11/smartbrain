import React from 'react';
import { ShieldCheck, Lock, Eye, CheckSquare } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full py-20 space-y-16 bg-white animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Legal Compliance</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Privacy Policy</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          This policy governs how SmartBrain EdTech Academy handles student registrations, parental details, and cookie tracking. Last updated April 2026.
        </p>
      </section>

      {/* Main legal document container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F3864] flex items-center gap-2.5 heading-font">
              <ShieldCheck className="w-5 h-5 text-[#E86A1A]" /> 1. Compliance Statement
            </h2>
            <p className="pl-7">
              At SmartBrain EdTech Academy, we are deeply committed to protecting the privacy of our pupils, parents, and professional learners. We strictly adhere to the Nigerian Data Protection Regulation (NDPR) alongside global data management protocols (GDPR). No personal registration data is sold, rented, or distributed to third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F3864] flex items-center gap-2.5 heading-font">
              <Lock className="w-5 h-5 text-[#E86A1A]" /> 2. Information We Collect
            </h2>
            <p className="pl-7">
              When registering for a course or contacting our team in Calabar, Nigeria, we may collect the following information:
            </p>
            <ul className="list-disc pl-12 space-y-2 text-xs font-medium text-slate-500">
              <li>Student Name, age (for primary pupils), and grade level (WAEC/NECO/JAMB tiers).</li>
              <li>Parent contact email address and active WhatsApp phone number for homework monitoring.</li>
              <li>Billing transfer details or payment verification screenshots.</li>
              <li>LMS performance logs including quiz grades and homework submission histories.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F3864] flex items-center gap-2.5 heading-font">
              <Eye className="w-5 h-5 text-[#E86A1A]" /> 3. How We Use Collected Information
            </h2>
            <p className="pl-7">
              We process student registration profiles strictly for academic administration purposes:
            </p>
            <ol className="list-decimal pl-12 space-y-2 text-xs font-medium text-slate-500">
              <li>Generating secure credentials for our integrated Moodle LMS classroom server.</li>
              <li>Relaying weekly child progress summaries or mock exam score sheets to parents.</li>
              <li>Coordinating direct Zoom live tutorials led by our STEM lead, Henry Okorie.</li>
              <li>Issuing official, verifiable SmartBrain Academic Certificates of Achievement.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#1F3864] flex items-center gap-2.5 heading-font">
              <CheckSquare className="w-5 h-5 text-[#E86A1A]" /> 4. Data Security Controls
            </h2>
            <p className="pl-7">
              All academic credentials, student portals, and test records are locked behind secure Secure Socket Layer (SSL) encryption protocol. In addition, Moodle LMS accounts are monitored daily by our lead systems engineer to ensure child safety in virtual discussion forums.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-200/60 pt-8 text-[11px] text-slate-400 pl-7 font-medium">
            <p>
              For further queries or requests to review or delete your child’s enrollment records, please contact our administrative desk in Calabar, Cross River State, Nigeria, or email us at <strong className="text-slate-600">smartbrainedtechacademy@gmail.com</strong>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
