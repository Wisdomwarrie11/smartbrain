import React, { useState } from 'react';
import { Star, ShieldAlert, Check, Plus, UserPlus, FileText, Sparkles, X } from 'lucide-react';
import { Tutor } from '../types';

interface TutorsProps {
  tutors: Tutor[];
  onAddTutor: (newTutor: Tutor) => void;
  onNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function Tutors({ tutors, onAddTutor, onNotification }: TutorsProps) {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [coursesCount, setCoursesCount] = useState<number>(1);
  const [rating, setRating] = useState<number>(4.8);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !bio.trim()) {
      onNotification('Please fill in all required fields.', 'info');
      return;
    }

    const defaultImage = imageUrl.trim() || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300';
    
    const newTutor: Tutor = {
      id: `tutor-${Date.now()}`,
      name: name.trim(),
      role: role.trim(),
      bio: bio.trim(),
      imageUrl: defaultImage,
      rating: Number(rating) || 4.8,
      coursesCount: Number(coursesCount) || 1,
      isCustom: true
    };

    onAddTutor(newTutor);
    onNotification(`Successfully hired ${name} as a tutor!`, 'success');
    
    // Reset form states
    setName('');
    setRole('');
    setBio('');
    setImageUrl('');
    setCoursesCount(1);
    setRating(4.8);
    setShowAddForm(false);
  };

  return (
    <div className="w-full py-20 space-y-16 bg-white">
      
      {/* Page Title & Intro */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Academic Staff</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Our Expert Educators</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Our educators are highly qualified subject-matter experts trained specifically to support remote pupils and ensure outstanding grade delivery.
        </p>

        {/* Admin Switcher */}
        <div className="pt-4 flex justify-center">
          <button
            id="btn-admin-panel-toggle"
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer border ${
              isAdminMode 
                ? 'bg-orange-50 border-orange-200 text-[#E86A1A]' 
                : 'bg-slate-50 border-slate-200 text-[#1F3864] hover:bg-slate-100'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            {isAdminMode ? 'Disable Admin Desk' : 'Enable Admin Interview Desk'}
          </button>
        </div>
      </section>

      {/* Admin Panel recruitment Desk */}
      {isAdminMode && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6.5 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1F3864] flex items-center gap-2 heading-font">
                  <Sparkles className="w-4 h-4 text-[#E86A1A]" /> Admin Tutor Intake Desk
                </h3>
                <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                  Register pre-vetted academic candidates. Once approved here, they appear immediately in our teacher directory and are assignable to school curriculums.
                </p>
              </div>
              <button
                id="btn-open-recruitment-form"
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4.5 py-2.5 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shrink-0 cursor-pointer"
              >
                {showAddForm ? <X className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                {showAddForm ? 'Close intake' : 'Register Candidate'}
              </button>
            </div>

            {/* Recruit Tutor Form */}
            {showAddForm && (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 p-6 sm:p-7 rounded-2xl space-y-4.5 shadow-sm">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2 heading-font">
                  Intake Profile Fields
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jude Henshaw"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Role / Specialization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Advanced Chemistry Lead"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Short Biography & Credentials *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe their academic credentials, experience in WAEC/NECO coaching, or professional tech profile..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Image Link (Optional)</label>
                    <input
                      type="url"
                      placeholder="Leave blank for default"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Managed Courses</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={coursesCount}
                      onChange={(e) => setCoursesCount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Interview Rating (1-5)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1.0"
                      max="5.0"
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3864]/20 focus:border-[#1F3864] transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    id="btn-submit-new-tutor"
                    type="submit"
                    className="px-6 py-3 bg-[#1F3864] hover:bg-[#162747] text-white font-bold text-[10px] tracking-wider uppercase rounded-xl transition-all duration-300 shadow-md shadow-slate-900/5 cursor-pointer"
                  >
                    Register Tutor
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Tutors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tut) => (
            <div
              key={tut.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_40px_rgba(31,56,100,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative overflow-hidden bg-slate-50 aspect-square">
                <img
                  src={tut.imageUrl}
                  alt={tut.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {tut.isCustom && (
                  <span className="absolute top-3.5 right-3.5 bg-emerald-500 text-white font-bold text-[8px] tracking-widest uppercase px-2.5 py-1 rounded-lg shadow-md">
                    RECRUITED
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-800 text-base heading-font">{tut.name}</h3>
                  <p className="text-[#E86A1A] font-bold text-[10px] uppercase tracking-wider">{tut.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 pt-2 font-normal">{tut.bio}</p>
                </div>

                <div className="flex items-center justify-between text-xs pt-3.5 border-t border-slate-50 text-slate-400">
                  <div className="flex items-center gap-1 font-semibold text-slate-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tut.rating || 4.8} / 5</span>
                  </div>
                  <span className="font-bold uppercase tracking-wider text-[9px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                    {tut.coursesCount || 1} Classes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
