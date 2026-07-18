import React from 'react';
import { UserCheck, Search, BookOpen, GraduationCap, Layout, Cpu, CheckCircle2, Video, HelpCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <UserCheck className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Register & Select',
      description: 'Create an account on our platform or fill in the course enrollment form directly. Browse our curated program catalog to choose the syllabus fitting your child’s educational tier (Primary, Junior Secondary, or Senior Secondary) or your tech skill preferences.'
    },
    {
      num: '02',
      icon: <Layout className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Complete Payment Securely',
      description: 'Make a direct bank transfer to our Access Bank account or complete payments online securely using card integrations in Naira or USD. For custom invoice generation, parents can contact our Calabar administrative office via WhatsApp.'
    },
    {
      num: '03',
      icon: <Cpu className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Access Moodle LMS Portal',
      description: 'Upon confirmation, our system auto-generates your student login credentials. You will log into our integrated Moodle LMS (smartbrainedtechacademy.com/lms) where all video lectures, course worksheets, interactive homework, and weekly webinar links reside.'
    },
    {
      num: '04',
      icon: <GraduationCap className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Start Studying & Get Certified',
      description: 'Watch step-by-step videos, attend weekly live Q&A coaching sessions led by Henry Okorie and other expert teachers, submit assessments, and secure a verifiable academic Certificate of Achievement upon scoring 70% or more.'
    }
  ];

  const requirements = [
    { title: 'Device Compatibility', desc: 'Any internet-connected smartphone, tablet, Chromebook, or laptop. No special high-spec hardware needed.' },
    { title: 'Network Connection', desc: 'A standard 3G/4G cellular connection or Wi-Fi. Our custom server configurations compress video streaming to load seamlessly under low network bandwidth.' },
    { title: 'LMS App', desc: 'Access directly via standard mobile browser or download the off-the-shelf Moodle app from Google Play / Apple App Store, inputting our school server address.' },
    { title: 'Coaching Materials', desc: 'A study notebook, mathematical set (for STEM courses), and a quiet environment during live zoom drills.' }
  ];

  return (
    <div className="w-full py-20 space-y-24 bg-white">
      
      {/* Editorial Header */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Educational Workflow</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">How SmartBrain Works</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Our e-learning architecture is designed to be highly intuitive, helping students transition from registration to active study modules in less than 1 hour.
        </p>
      </section>

      {/* Modern Connected Stepper Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-dashed border-slate-200/80 pl-8 ml-4 sm:ml-8 space-y-12">
          {steps.map((st, idx) => (
            <div key={idx} className="relative group">
              {/* Floating Badge Indicator */}
              <div className="absolute -left-[51px] sm:-left-[51px] top-1 w-9 h-9 rounded-full bg-[#1F3864] text-white flex items-center justify-center font-bold text-xs shadow-md group-hover:bg-[#E86A1A] transition-colors duration-300 font-mono">
                {st.num}
              </div>
              
              <div className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_25px_rgba(31,56,100,0.05)] rounded-2xl p-6.5 transition-all duration-300 space-y-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100/50">
                    {st.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#1F3864] tracking-tight heading-font">{st.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{st.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Specifications */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lightweight Delivery</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">System Requirements & Prerequisites</h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-md mx-auto">We optimized our system payloads to ensure standard mobile networks compress streams flawlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6.5 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-slate-50 text-[#E86A1A] border border-slate-100 flex items-center justify-center font-bold text-xs font-mono">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider heading-font">{req.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{req.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Elegant Action Card Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/30 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#E86A1A]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#1F3864] tracking-tight heading-font">Have more detailed questions?</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-md">Our FAQ covers topics including refund structures, parents monitor guides, exam certifications, and scheduling options.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const btn = document.getElementById('btn-nav-faq');
              if (btn) btn.click();
            }}
            className="px-5 py-3 rounded-xl bg-[#1F3864] hover:bg-[#E86A1A] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
          >
            Check FAQs Accordion
          </button>
        </div>
      </section>

    </div>
  );
}
