import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Smartphone, 
  Menu, 
  X, 
  Globe, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Sparkles, 
  Lock, 
  ChevronRight, 
  MessageCircle,
  Bell
} from 'lucide-react';

import { Course, Tutor, BlogPost, FAQItem, Enrollment, ContactMessage } from './types';
import { INITIAL_COURSES, INITIAL_TUTORS, INITIAL_BLOGS, INITIAL_FAQS } from './data';

// Import subcomponents
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import Tutors from './components/Tutors';
import Blog from './components/Blog';
import Contact from './components/Contact';
import StudentPortal from './components/StudentPortal';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persistence States
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
  const [courseProgress, setCourseProgress] = useState<Record<string, number>>({});
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [subscribers, setSubscribers] = useState<string[]>([]);

  // Simple Notification System
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    // Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Load state from localStorage on init
  useEffect(() => {
    const savedTutors = localStorage.getItem('smartbrain_tutors');
    if (savedTutors) {
      setTutors(JSON.parse(savedTutors));
    } else {
      setTutors(INITIAL_TUTORS);
    }

    const savedEnrollments = localStorage.getItem('smartbrain_enrollments');
    if (savedEnrollments) {
      setEnrolledCourseIds(JSON.parse(savedEnrollments));
    } else {
      // Enroll student in one default course to make portal feel active initially
      setEnrolledCourseIds(['course-1']);
    }

    const savedProgress = localStorage.getItem('smartbrain_progress');
    if (savedProgress) {
      setCourseProgress(JSON.parse(savedProgress));
    } else {
      setCourseProgress({ 'course-1': 45 });
    }

    const savedMessages = localStorage.getItem('smartbrain_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const savedSubscribers = localStorage.getItem('smartbrain_subscribers');
    if (savedSubscribers) {
      setSubscribers(JSON.parse(savedSubscribers));
    }
  }, []);

  const triggerNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    // Auto clear after 4 seconds
    const timer = setTimeout(() => {
      setNotification(null);
    }, 4000);
    return () => clearTimeout(timer);
  };

  const handleAddTutor = (newTutor: Tutor) => {
    const updated = [newTutor, ...tutors];
    setTutors(updated);
    localStorage.setItem('smartbrain_tutors', JSON.stringify(updated));
  };

  const handleEnrollInCourse = (
    courseId: string,
    studentName: string,
    studentEmail: string,
    studentPhone: string,
    paymentMethod: string
  ) => {
    // Add to enrolled course IDs if not already there
    if (!enrolledCourseIds.includes(courseId)) {
      const updated = [...enrolledCourseIds, courseId];
      setEnrolledCourseIds(updated);
      localStorage.setItem('smartbrain_enrollments', JSON.stringify(updated));

      // Initial progress at 0
      const updatedProgress = { ...courseProgress, [courseId]: 0 };
      setCourseProgress(updatedProgress);
      localStorage.setItem('smartbrain_progress', JSON.stringify(updatedProgress));
    }
  };

  const handleIncrementProgress = (courseId: string) => {
    const current = courseProgress[courseId] || 0;
    const updatedVal = Math.min(current + 15, 100);
    const updated = { ...courseProgress, [courseId]: updatedVal };
    setCourseProgress(updated);
    localStorage.setItem('smartbrain_progress', JSON.stringify(updated));
  };

  const handleAddMessage = (msg: Omit<ContactMessage, 'id' | 'submittedAt'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      submittedAt: new Date().toISOString()
    };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem('smartbrain_messages', JSON.stringify(updated));
  };

  const handleSubscribeNewsletter = (email: string) => {
    if (!subscribers.includes(email)) {
      const updated = [...subscribers, email];
      setSubscribers(updated);
      localStorage.setItem('smartbrain_subscribers', JSON.stringify(updated));
      triggerNotification('Subscribed to academic updates successfully!', 'success');
    }
  };

  const handleSelectCourseDirectly = (course: Course) => {
    setActiveTab('courses');
    // We can trigger course opening or filter setting if needed
  };

  // Nav items listing helper
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'howitworks', label: 'How It Works' },
    { id: 'tutors', label: 'Tutors' },
    { id: 'blog', label: 'Blog / Tips' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'faq', label: 'FAQ' }
  ];

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            courses={INITIAL_COURSES}
            tutors={tutors}
            currency={currency}
            onNavigate={(page) => setActiveTab(page)}
            onSelectCourse={handleSelectCourseDirectly}
            onSubscribeNewsletter={handleSubscribeNewsletter}
          />
        );
      case 'about':
        return <AboutUs />;
      case 'courses':
        return (
          <Courses
            courses={INITIAL_COURSES}
            tutors={tutors}
            currency={currency}
            setCurrency={setCurrency}
            enrolledCourseIds={enrolledCourseIds}
            onEnroll={handleEnrollInCourse}
          />
        );
      case 'howitworks':
        return <HowItWorks />;
      case 'tutors':
        return (
          <Tutors
            tutors={tutors}
            onAddTutor={handleAddTutor}
            onNotification={triggerNotification}
          />
        );
      case 'blog':
        return <Blog blogs={INITIAL_BLOGS} />;
      case 'contact':
        return (
          <Contact
            onAddMessage={handleAddMessage}
            onNotification={triggerNotification}
          />
        );
      case 'portal':
        return (
          <StudentPortal
            courses={INITIAL_COURSES}
            tutors={tutors}
            enrolledCourseIds={enrolledCourseIds}
            courseProgress={courseProgress}
            onIncrementProgress={handleIncrementProgress}
            onNavigate={(page) => setActiveTab(page)}
            onNotification={triggerNotification}
          />
        );
      case 'faq':
        return <FAQ faqs={INITIAL_FAQS} />;
      case 'privacy':
        return <PrivacyPolicy />;
      default:
        return (
          <Home
            courses={INITIAL_COURSES}
            tutors={tutors}
            currency={currency}
            onNavigate={(page) => setActiveTab(page)}
            onSelectCourse={handleSelectCourseDirectly}
            onSubscribeNewsletter={handleSubscribeNewsletter}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-gray-800 font-sans">
      {/* Top utility subheader bar */}
      <div className="bg-[#1F3864] text-white border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#E86A1A]" />
              Calabar, Cross River State, Nigeria
            </span>
            <a href="mailto:smartbrainedtechacademy@gmail.com" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E86A1A]" />
              smartbrainedtechacademy@gmail.com
            </a>
            <a href="tel:07034477971" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E86A1A]" />
              07034477971
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/2349044354766"
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-2.5 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] uppercase flex items-center gap-1 shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-3 h-3 fill-white" /> WhatsApp Admin
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with clean corporate style styling */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div>
            <img
            src="logosb.png"
            alt="Black students studying"
            className="w-50 h-50 object-cover  filter brightness-[0.7] contrast-[1.1]"
          />
            </div>
          </div>

          {/* Desktop Navigation Link row */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`btn-nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#1F3864]/5 text-[#1F3864] font-black'
                    : 'text-gray-500 hover:text-[#1F3864] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Student Portal Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="btn-nav-portal"
              onClick={() => setActiveTab('portal')}
              className={`px-4.5 py-2 rounded-lg text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'portal'
                  ? 'bg-[#E86A1A] text-white'
                  : 'bg-[#1F3864] hover:bg-[#162747] text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Student Portal
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-gray-100 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-3 shadow-inner animate-in fade-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all block ${
                    activeTab === item.id
                      ? 'bg-[#1F3864]/5 text-[#1F3864] font-extrabold'
                      : 'text-gray-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-3">
              <button
                onClick={() => {
                  setActiveTab('portal');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg bg-[#E86A1A] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4" /> Student Portal (Moodle)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main page content container */}
      <main className="flex-1 bg-white">
        {renderActivePage()}
      </main>

      {/* Floating interactive toast notifications */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-white border border-gray-100 shadow-2xl rounded-xl p-4 flex items-start gap-3 border-l-4 border-l-[#E86A1A] animate-bounce">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[#E86A1A] shrink-0">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-[#1F3864]">SmartBrain Notice</h4>
            <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{notification.message}</p>
          </div>
        </div>
      )}

      {/* Footer corporate details */}
      <footer className="bg-[#122340] text-white border-t border-[#1F3864] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-1">
            <div className="flex items-center">
            <img
            src="logosb.png"
            alt="Black students studying"
            className="w-50 h-50 object-cover  filter brightness-[0.7] contrast-[1.1]"
          />
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E86A1A]">Academic Syllabus</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-normal">
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  Primary School Phonics
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  Junior Secondary Mathematics
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  SSCE & JAMB Exam Prep
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  Intro to Web Development
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E86A1A]">Helpful Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-normal">
              <li>
                <button onClick={() => setActiveTab('howitworks')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  How Enrolment Works
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tutors')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  Recruited Tutors
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faq')} className="hover:text-white hover:underline transition-all cursor-pointer">
                  FAQ Accordions
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('privacy')} className="hover:text-white hover:underline transition-all cursor-pointer text-orange-200">
                  Data Privacy Policy (NDPR)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Contact details */}
          <div className="space-y-4 text-xs font-normal">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E86A1A]">Contact Desk</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Calabar, Cross River State, Nigeria</p>
              <p>📞 Phone: 07034477971</p>
              <p>💬 WhatsApp: 09044354766</p>
              <p>✉️ smartbrainedtechacademy@gmail.com</p>
            </div>

            {/* Social Icons row */}
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/17d7PmQnc4/" target="_blank" referrerPolicy="no-referrer" className="w-7 h-7 rounded bg-white/5 hover:bg-white/10 hover:text-[#E86A1A] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/111964157/admin/dashboard/" target="_blank" referrerPolicy="no-referrer" className="w-7 h-7 rounded bg-white/5 hover:bg-white/10 hover:text-[#E86A1A] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              {/* Placeholders for requested channels */}
              <span className="w-7 h-7 rounded bg-white/5 text-gray-500 flex items-center justify-center select-none" title="Instagram (Placeholder)">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-7 h-7 rounded bg-white/5 text-gray-500 flex items-center justify-center select-none" title="Twitter/X (Placeholder)">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-7 h-7 rounded bg-white/5 text-gray-500 flex items-center justify-center select-none" title="YouTube (Placeholder)">
                <Youtube className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits section */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-semibold">
          <p>© 2026 SmartBrain EdTech Academy. All Rights Reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActiveTab('faq')} className="hover:text-white transition-colors cursor-pointer">Support FAQs</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
