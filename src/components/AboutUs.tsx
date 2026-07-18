import React from 'react';
import { Target, Eye, ShieldCheck, Award, Heart, Rocket } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Integrity First',
      description: 'We believe in transparent feedback, honest academic reporting, and building absolute trust with pupils and parents.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Excellence Always',
      description: 'We strive to set elite eLearning benchmarks, ensuring every syllabus unit is highly engaging and result-oriented.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Deep Empathy',
      description: 'Our tutors are patient and supportive, tailoring delivery to support slower and faster learning paces alike.'
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Empowering Innovation',
      description: 'We continuously evolve our virtual platforms with custom interactive quizzes and modern video syllabus modules.'
    }
  ];

  return (
    <div className="w-full py-20 space-y-24 bg-white">
      
      {/* Editorial Header */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Who We Are</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F3864] tracking-tight heading-font">
          Our Journey & Commitment
        </h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          SmartBrain EdTech Academy is Calabar’s premier digital learning platform, bridging educational resource gaps across Nigeria with standardized digital tools.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E86A1A]">Pioneering Spirit</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">Our Story</h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-xs sm:text-sm">
              <p>
                SmartBrain EdTech Academy was conceived in 2026 by Henry Okorie, a computer engineer turned educational reformer. Operating from Calabar, Cross River State, Nigeria, Henry saw the limitations of traditional classroom frameworks: overcrowded halls, outdated physical materials, and rigid schedules that failed to accommodate individual child development paths.
              </p>
              <p>
                Recognizing the potential of digital transformation, Henry assembled a small cohort of exceptional subject matter experts. They designed a custom virtual learning workflow centered on <strong>Moodle LMS</strong>—the global standard for academic delivery.
              </p>
              <p>
                Today, SmartBrain EdTech Academy has grown from a local physics tutorial group into a major digital learning hub. We successfully prepare primary and secondary students for WAEC, NECO, and JAMB exams while simultaneously equipping adults with tech-ready skills.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-orange-100/30 rounded-3xl blur-xl -z-10"></div>
            <img
              src="/src/assets/images/black_students_studying_1784380861016.jpg"
              alt="Black Students studying online"
              className="rounded-2xl shadow-xl object-cover w-full h-[380px] border border-slate-100 relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Founder Spotlight - Extremely High End Visual Framing */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[320px]">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#1F3864]/20 to-orange-500/15 rounded-2xl blur-lg"></div>
                <div className="relative bg-white p-3 rounded-2xl border border-slate-100 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500"
                    alt="Henry Okorie"
                    className="rounded-xl object-cover w-full h-[380px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md text-white p-4.5 rounded-xl text-center border border-white/10 shadow-lg">
                    <h4 className="font-extrabold text-xs tracking-wider uppercase">Henry Okorie</h4>
                    <p className="text-[10px] text-[#E86A1A] font-bold uppercase tracking-widest mt-1">Founder, SmartBrain EdTech</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E86A1A]">Leadership Principle</span>
              <h3 className="text-2xl md:text-3.5xl font-extrabold text-[#1F3864] tracking-tight leading-tight heading-font">
                "Smart Technology is the great educational equalizer."
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                "Our vision has never been about making children stay glued to screens for hours. It is about maximizing learning efficiency. By explaining high-difficulty science and mathematical topics using interactive visual models and giving children the autonomy to pause, retry, and test their skills at their own pace, we unlock potential that traditional schooling often stifles."
              </p>
              <div className="space-y-1.5 border-l-4 border-[#E86A1A] pl-4.5">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Henry Okorie</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Founder & CEO, SmartBrain EdTech Academy | Calabar, Nigeria</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Twin Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(31,56,100,0.05)] transition-all duration-300 space-y-5">
            <div className="w-10 h-10 rounded-xl bg-[#1F3864]/5 flex items-center justify-center border border-[#1F3864]/10">
              <Target className="w-5 h-5 text-[#1F3864]" />
            </div>
            <h3 className="text-lg font-bold text-[#1F3864] tracking-tight heading-font">Our Mission</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              To make learning smarter, simpler, and more effective for everyone. We strive to offer structured, engaging, and highly accessible courses using modern tech platforms to empower primary pupils, secondary students, and professionals with knowledge that drives excellent grades and career transformation.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(31,56,100,0.05)] transition-all duration-300 space-y-5">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-[#E86A1A]/10">
              <Eye className="w-5 h-5 text-[#E86A1A]" />
            </div>
            <h3 className="text-lg font-bold text-[#E86A1A] tracking-tight heading-font">Our Vision</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              To become Africa’s leading and most trusted eLearning ecosystem, known for academic excellence, verifiable score improvements, and practical technical empowerment that equips the next generation of lifelong learners to compete successfully on a global stage.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-semibold">Institutional Values</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">Our Core Pillars</h2>
          <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">These key behavioral foundations dictate our teaching methods and our commitment to student growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border border-slate-100 hover:border-[#1F3864]/30 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-lg transition-all duration-300 text-center space-y-4">
              <div className="mx-auto w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100/50">
                {v.icon}
              </div>
              <h4 className="font-bold text-[#1F3864] text-sm tracking-tight heading-font">{v.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
