import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Quote, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
import { Course, Tutor } from '../types';

interface HomeProps {
  courses: Course[];
  tutors: Tutor[];
  currency: 'NGN' | 'USD';
  onNavigate: (page: string) => void;
  onSelectCourse: (course: Course) => void;
  onSubscribeNewsletter: (email: string) => void;
}

export default function Home({
  courses,
  tutors,
  currency,
  onNavigate,
  onSelectCourse,
  onSubscribeNewsletter,
}: HomeProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Take first 3 courses to showcase
  const featuredCourses = courses.slice(0, 3);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const features = [
    {
      icon: <Award className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Expert Tutors',
      description: 'Learn from highly qualified, certified, and patient educators led by founder Henry Okorie.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Learn Anywhere',
      description: 'Access responsive courses and self-assessment quizzes on your phone, tablet, or laptop anytime.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#E86A1A]" />,
      title: 'LMS Progress Tracker',
      description: 'Detailed progress metrics and weekly analytical reports on our customized Moodle LMS.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#E86A1A]" />,
      title: 'Earn Certification',
      description: 'Receive verified academic certificates of completion to boost your secondary profile or resume.'
    }
  ];

  return (
    <div className="w-full bg-slate-50/40">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#122340] text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/black_students_studying_1784380861016.jpg"
            alt="Black students studying"
            className="w-full h-full object-cover opacity-20 filter brightness-[0.7] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#122340] via-[#122340]/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#E86A1A]/20 text-[#ff8e42] border border-[#E86A1A]/30">
              <Sparkles className="w-3.5 h-3.5" />
              SmartBrain EdTech Academy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] heading-font">
              Empowering Learners <br />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86A1A] to-[#f48a43]">Smart</span> Technology
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Quality, personalized online tutoring and exam prep (WAEC, JAMB, NECO) for primary pupils, secondary school students, and digital skills for professionals across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button
                id="btn-hero-courses"
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                id="btn-hero-about"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                About Academy
              </button>
            </div>

            {/* Premium minimal metrics block */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tight text-white heading-font">100+</p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Active Pupils</p>
              </div>
              <div className="space-y-1 border-x border-white/10 px-6">
                <p className="text-3xl font-bold tracking-tight text-[#E86A1A] heading-font">98%</p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Exam Pass Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tight text-white heading-font">4.9★</p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Tutor Rating</p>
              </div>
            </div>

          </div>

          {/* Targeted Curriculum Programs Panel for Primary & Secondary School Students */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-indigo-500/10 rounded-3xl blur-2xl -z-10 opacity-75"></div>
            
            <div className="relative bg-[#1a2f52] border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl p-6 sm:p-7 max-w-md w-full space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#E86A1A]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white tracking-tight heading-font">Academy Tiers</h4>
                    <p className="text-[10px] text-slate-300">Targeted Educational Framework</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-[#ff8e42] font-bold text-[9px] uppercase tracking-wider border border-[#E86A1A]/20">
                  Nigerian Syllabus
                </span>
              </div>
              
              {/* Tiers List */}
              <div className="space-y-4">
                
                {/* Primary Education Card */}
                <div className="p-4 rounded-2xl bg-[#122340]/60 border border-slate-700/40 hover:border-orange-500/40 transition-all duration-300 space-y-2.5 group">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold text-[8px] uppercase tracking-wider border border-emerald-500/20">
                      Primary School
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Basic 1 - 6</span>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-white group-hover:text-[#ff8e42] transition-colors heading-font">Primary Foundation</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Focusing on  self-development, early creative thinking, and foundational mathematics.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Designed for Ages 5 - 11</span>
                  </div>
                </div>

                {/* Secondary Education Card */}
                <div className="p-4 rounded-2xl bg-[#122340]/60 border border-slate-700/40 hover:border-orange-500/40 transition-all duration-300 space-y-2.5 group">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-400 font-bold text-[8px] uppercase tracking-wider border border-orange-500/20">
                      Secondary School
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">JS 1 - SS 3</span>
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-white group-hover:text-[#ff8e42] transition-colors heading-font">SSCE, UTME & WAEC Masterclass</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Intensive subject-matter drills in Mathematics, Physics, Chemistry, Biology, and English Language.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1A]"></span>
                    <span>JAMB, WAEC & NECO Past-Questions Focus</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                id="btn-hero-learn-more-tiers"
                onClick={() => onNavigate('courses')}
                className="w-full py-3 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/15"
              >
                Browse Student Curriculums
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* About Section - Crisp Editorial Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-[#E86A1A]/5 rounded-3xl blur-2xl -z-10"></div>
              <div className="relative">
                <img
                  src="/src/assets/images/boyschool.jpeg"
                  alt="Black Students Studying Online"
                  className="rounded-2xl shadow-xl border border-slate-100 object-cover w-full h-[420px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl hidden sm:block max-w-[260px] shadow-2xl border border-white/10">
                  <Quote className="w-5 h-5 mb-2.5 text-[#E86A1A]" />
                  <p className="text-xs italic leading-relaxed text-slate-300">"Our mission is to make learning smarter, simpler, and highly personalized for Nigerian youth."</p>
                  <p className="text-xs font-bold mt-3 text-[#E86A1A] tracking-wider uppercase">— Henry Okorie, Founder</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600">
                Core Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">
                Learn Smart. Think Smart.
              </h2>
              <div className="h-1.5 w-12 bg-[#E86A1A] rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-base font-normal pt-2">
                SmartBrain EdTech Academy is a dynamic online learning platform dedicated to delivering premium, standardized education through modern technology. We provide structured, engaging, and accessible courses for primary pupils, secondary school students, and lifelong learners across Nigeria.
              </p>
              <p className="text-slate-600 leading-relaxed text-base font-normal">
                By utilizing advanced Learning Management Systems (LMS) combined with experienced, patient educators, we ensure no student is left behind. Our student portal features complete guides, recorded video syllabus units, and custom quizzes that guarantee optimal preparation for SSCE, NECO, and UTME exams.
              </p>
              <button
                id="btn-about-readmore"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-[#E86A1A] font-bold text-sm tracking-wider uppercase hover:text-[#c4530e] transition-colors cursor-pointer group pt-2"
              >
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Minimalist Bento Feature Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Academy Highlights</span>
            <h2 className="text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">Why Choose SmartBrain EdTech?</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">We combine premium digital curriculum structures with handpicked professional tutors to produce exceptional grades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(31,56,100,0.02)] hover:shadow-[0_12px_30px_rgba(31,56,100,0.06)] hover:-translate-y-1 transition-all duration-300 space-y-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E86A1A]/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {feat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#1F3864] tracking-tight heading-font">{feat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Courses Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curated Syllabi</span>
              <h2 className="text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">Explore Highlighted Courses</h2>
              <p className="text-slate-500 text-sm">Enroll in our targeted modules built specifically for high test performance.</p>
            </div>
            <button
              id="btn-view-all-courses"
              onClick={() => onNavigate('courses')}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-[#1F3864] hover:border-[#1F3864] font-bold text-xs tracking-wider uppercase hover:bg-[#1F3864] hover:text-white transition-all duration-300 cursor-pointer"
            >
              View All Courses
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => {
              const tutor = tutors.find(t => t.id === course.tutorId);
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(31,56,100,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="bg-[#1F3864]/2 p-5 border-b border-slate-50 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E86A1A]/10 text-[#E86A1A] tracking-wide">
                      {course.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{course.duration}</span>
                  </div>
                  
                  <div className="p-6.5 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[#1F3864] hover:text-[#E86A1A] transition-colors leading-snug line-clamp-1 heading-font">
                        {course.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{course.description}</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-100/80">
                      {/* Tutor details */}
                      <div className="flex items-center gap-3">
                        <img
                          src={tutor?.imageUrl || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"}
                          alt={tutor?.name}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-full object-cover border border-slate-100"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-700">{tutor?.name}</p>
                          <p className="text-[10px] text-slate-400">{tutor?.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span className="text-xs font-bold text-slate-700">{course.rating}</span>
                        </div>
                        <p className="text-base font-black text-[#1F3864] font-mono">
                          {currency === 'NGN' ? `₦${course.priceNGN.toLocaleString()}` : `$${course.priceUSD}`}
                        </p>
                      </div>

                      <button
                        id={`btn-course-details-${course.id}`}
                        onClick={() => onSelectCourse(course)}
                        className="w-full py-3 bg-[#1F3864] hover:bg-[#E86A1A] text-white rounded-xl text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        Enroll / Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Elegant Connect-The-Dots Enrollment Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Admission Flow</span>
            <h2 className="text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">Enrollment Made Simple</h2>
            <p className="text-slate-500 text-sm">Register, configure classes, and commence learning in four straightforward steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Register Profile', desc: 'Input pupil and parent contact details to set up your profile.' },
              { step: '02', title: 'Choose Course', desc: 'Select the primary class modules or exam target syllabus.' },
              { step: '03', title: 'Moodle Access', desc: 'Unlock active curriculum videos and timed practice portals.' },
              { step: '04', title: 'Earn Certificate', desc: 'Complete assessments to claim your academic completion report.' }
            ].map((s, idx) => (
              <div key={idx} className="relative bg-white p-7 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E86A1A]/10 text-[#E86A1A] font-bold text-xs tracking-wider border border-[#E86A1A]/20">
                  {s.step}
                </span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#1F3864] pt-1 heading-font">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              id="btn-howitworks-go"
              onClick={() => onNavigate('howitworks')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
            >
              See Detailed Enrollment Guide
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Testimonials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1F3864]/5 rounded-3xl p-8 md:p-14 border border-[#1F3864]/10 space-y-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 text-[#1F3864]/5 select-none pointer-events-none translate-x-12 -translate-y-12">
              <GraduationCap className="w-80 h-80" />
            </div>
            
            <div className="text-center space-y-2 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E86A1A]">Student & Parent Success</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1F3864] tracking-tight heading-font">
                What Parents & Students Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100/80 space-y-5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "SmartBrain changed how my son prepares for exams. Henry Okorie's math classes made geometry so understandable. He scored 315 in his recent JAMB UTME!"
                </p>
                <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 tracking-tight">Mrs. Ngozi Uzor</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">Parent, Calabar</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">Verified Parent</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100/80 space-y-5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "The web development course has been amazing. The lessons on HTML, CSS, and JS were very practical, and I built several live pages. Recommended for anyone starting out!"
                </p>
                <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 tracking-tight">Etim Effiong</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">Student & Freelancer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">Verified Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Minimal Newsletter signup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F3864] to-[#122340] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E86A1A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#E86A1A]">Academic Updates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight heading-font">Subscribe to Our Newsletter</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Receive premium study summaries, WAEC/JAMB exam preparation planners, and educational tips compiled by our veteran instructors.
            </p>
          </div>
          
          <form onSubmit={handleSubscribeSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4.5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E86A1A] text-xs font-medium transition-all"
            />
            <button
              id="btn-newsletter-submit"
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer shadow-lg shadow-orange-500/10"
            >
              Subscribe Now
            </button>
          </form>

          {subscribed && (
            <p className="text-emerald-400 font-bold text-xs animate-bounce">
              ✓ Success! You are subscribed to SmartBrain academic tips.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
