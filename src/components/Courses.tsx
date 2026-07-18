import React, { useState } from 'react';
import { Search, Star, Clock, BookOpen, CheckCircle, ShieldCheck, CreditCard, HelpCircle, X, Sparkles } from 'lucide-react';
import { Course, Tutor } from '../types';

interface CoursesProps {
  courses: Course[];
  tutors: Tutor[];
  currency: 'NGN' | 'USD';
  setCurrency: (c: 'NGN' | 'USD') => void;
  enrolledCourseIds: string[];
  onEnroll: (courseId: string, studentName: string, studentEmail: string, studentPhone: string, paymentMethod: 'Bank Transfer' | 'Card Payment' | 'USSD' | 'PayPal') => void;
}

export default function Courses({
  courses,
  tutors,
  currency,
  setCurrency,
  enrolledCourseIds,
  onEnroll,
}: CoursesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  // Registration Form state
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Bank Transfer' | 'Card Payment' | 'USSD' | 'PayPal'>('Bank Transfer');
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const categories = ['All', 'Primary', 'Secondary', 'Professional', 'Lifelong'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenEnroll = (course: Course) => {
    setSelectedCourse(course);
    setShowEnrollModal(true);
    setEnrollSuccess(false);
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;

    if (studentName.trim() && studentEmail.trim() && studentPhone.trim()) {
      onEnroll(
        selectedCourse.id,
        studentName,
        studentEmail,
        studentPhone,
        paymentMethod
      );
      setEnrollSuccess(true);
      setStudentName('');
      setStudentEmail('');
      setStudentPhone('');
    }
  };

  const handleCloseModal = () => {
    setShowEnrollModal(false);
    setSelectedCourse(null);
    setEnrollSuccess(false);
  };

  return (
    <div className="w-full py-20 space-y-16 bg-white">
      
      {/* Editorial Title & Intro */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curriculum & Programs</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Our Smart eLearning Courses</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full"></div>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Interactive digital courses structured specifically for high academic performance. Toggle below to denominate tuition fees.
        </p>

        {/* Currency Switcher Toggle - Very Classy Minimal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Currency:</span>
          <div className="inline-flex rounded-xl bg-slate-50 p-1.5 border border-slate-100">
            <button
              id="currency-toggle-ngn"
              onClick={() => setCurrency('NGN')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                currency === 'NGN' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Naira (₦)
            </button>
            <button
              id="currency-toggle-usd"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-[#1F3864] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </section>

      {/* Modern Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col lg:flex-row gap-5 items-center justify-between">
          
          {/* Elegant Search Input */}
          <div className="relative w-full lg:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search subjects, skills, exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs font-medium border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
            />
          </div>

          {/* Categories Pill Selector */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#E86A1A] border-[#E86A1A] text-white shadow-md shadow-orange-500/10'
                    : 'bg-white border-slate-200/80 text-slate-500 hover:border-slate-300 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-3xl space-y-4 max-w-lg mx-auto">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-[#1F3864] heading-font">No courses matched your query</h3>
            <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">Try clearing your filters or searching for terms like "Math", "Physics", "English", or "Web".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-[#1F3864] hover:bg-[#162747] text-white rounded-lg font-bold text-xs tracking-wider uppercase transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const tutor = tutors.find((t) => t.id === course.tutorId);
              const isEnrolled = enrolledCourseIds.includes(course.id);
              
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_40px_rgba(31,56,100,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header Tag */}
                  <div className="bg-[#1F3864]/2 p-4.5 border-b border-slate-50 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#E86A1A]/10 text-[#E86A1A]">
                      {course.category}
                    </span>
                    {isEnrolled && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-600 flex items-center gap-1 border border-emerald-100">
                        <CheckCircle className="w-3 h-3" /> Enrolled
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6.5 space-y-5 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[#1F3864] hover:text-[#E86A1A] transition-colors line-clamp-1 heading-font">
                        {course.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{course.description}</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-50">
                      {/* Tutor */}
                      <div className="flex items-center gap-3">
                        <img
                          src={tutor?.imageUrl || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'}
                          alt={tutor?.name}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-full object-cover border border-slate-100"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-700">{tutor?.name}</p>
                          <p className="text-[10px] text-slate-400">{tutor?.role}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      {/* Price Tag & Action */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                        <div>
                          <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Tuition Fee</span>
                          <span className="text-base font-black text-[#1F3864] font-mono leading-tight">
                            {currency === 'NGN' ? `₦${course.priceNGN.toLocaleString()}` : `$${course.priceUSD}`}
                          </span>
                        </div>
                        
                        <button
                          id={`btn-enrol-action-${course.id}`}
                          onClick={() => handleOpenEnroll(course)}
                          className="px-4.5 py-2.5 bg-[#1F3864] hover:bg-[#E86A1A] text-white font-bold rounded-xl text-[10px] tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
                        >
                          {isEnrolled ? 'View Portal' : 'Enroll Now'}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Elegant Modal Experience */}
      {showEnrollModal && selectedCourse && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {!enrollSuccess ? (
              <div className="p-7 md:p-10 space-y-7">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#E86A1A]/10 text-[#E86A1A]">
                    <Sparkles className="w-3 h-3" />
                    Enrolment Application
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F3864] tracking-tight mt-2 heading-font">{selectedCourse.title}</h2>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{selectedCourse.description}</p>
                </div>

                {/* Course Metadata Panel */}
                <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Duration:</span>
                    <strong className="text-[#1F3864] font-bold">{selectedCourse.duration}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Tuition Due:</span>
                    <strong className="text-[#E86A1A] font-extrabold text-sm font-mono">
                      {currency === 'NGN' ? `₦${selectedCourse.priceNGN.toLocaleString()}` : `$${selectedCourse.priceUSD}`}
                    </strong>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Academic Privileges included:</h4>
                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                    {selectedCourse.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleEnrollSubmit} className="space-y-5 border-t border-slate-100 pt-6">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Provide Personal Details</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">Student / Parent Name *</label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={studentPhone}
                        placeholder="e.g. 07034477971"
                        onChange={(e) => setStudentPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600">Payment Gateway *</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all font-semibold"
                      >
                        <option value="Bank Transfer">Bank Transfer (Access Bank)</option>
                        <option value="Card Payment">Card Payment (Flutterwave)</option>
                        <option value="USSD">USSD Quick Code</option>
                        <option value="PayPal">PayPal (International)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="btn-confirm-enroll"
                    type="submit"
                    className="w-full py-3.5 bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-orange-500/10 cursor-pointer mt-2"
                  >
                    Proceed to Payment Configuration
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-7 md:p-10 text-center space-y-7">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-xl font-extrabold text-[#1F3864] tracking-tight heading-font">Enrolment Pending Activation</h2>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thank you, <strong>{studentName}</strong>! Your academic request for <strong>{selectedCourse.title}</strong> has been logged.
                  </p>
                </div>

                {paymentMethod === 'Bank Transfer' ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5.5 space-y-4 text-left">
                    <h4 className="text-xs font-bold text-[#1F3864] flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#E86A1A]" /> Official Bank Details for Transfer
                    </h4>
                    <div className="text-xs space-y-3 text-slate-700 font-medium">
                      <div>
                        <span className="text-slate-400 block text-[9px] font-bold uppercase tracking-wider">Bank Name</span>
                        <strong>Access Bank PLC</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9px] font-bold uppercase tracking-wider">Account Name</span>
                        <strong>SmartBrain EdTech Academy Limited</strong>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                        <div>
                          <span className="text-slate-400 block text-[9px] font-bold uppercase tracking-wider">Account Number</span>
                          <strong className="text-[#E86A1A] text-sm font-mono select-all tracking-wider">1482930219</strong>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText('1482930219');
                          }}
                          className="text-[10px] bg-slate-100 hover:bg-[#E86A1A] hover:text-white px-3 py-1.5 rounded-lg text-slate-500 font-bold transition-all cursor-pointer"
                        >
                          COPY
                        </button>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[9px] font-bold uppercase tracking-wider">Tuition Due</span>
                        <strong className="text-base text-[#1F3864] font-mono">
                          {currency === 'NGN' ? `₦${selectedCourse.priceNGN.toLocaleString()}` : `$${selectedCourse.priceUSD}`}
                        </strong>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 italic leading-relaxed">
                      Kindly send a transaction confirmation screenshot to <strong>07034477971</strong>. Your Moodle LMS login details will be generated and dispatched via email.
                    </p>
                  </div>
                ) : (
                  <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 text-left space-y-2">
                    <h4 className="text-xs font-bold text-[#E86A1A] uppercase tracking-wider">Gateway Pre-Authorization Active</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Your provisional check-out token is successful! The student account has been registered on our virtual classroom servers.
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Navigate to the **Student Portal** menu item to view materials, take quizzes, and track completion progress.
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all"
                  >
                    Done / Close
                  </button>
                  <button
                    onClick={() => {
                      handleCloseModal();
                      const btn = document.getElementById('btn-nav-portal');
                      if (btn) btn.click();
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#1F3864] hover:bg-[#162747] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-slate-900/10"
                  >
                    Go to Student Portal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
