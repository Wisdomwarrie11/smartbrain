import React, { useState } from 'react';
import { BookOpen, GraduationCap, Play, CheckCircle2, AlertTriangle, RefreshCw, LogIn, ExternalLink, Award, FileText, Sparkles, X } from 'lucide-react';
import { Course, Tutor } from '../types';

interface StudentPortalProps {
  courses: Course[];
  tutors: Tutor[];
  enrolledCourseIds: string[];
  courseProgress: Record<string, number>;
  onIncrementProgress: (courseId: string) => void;
  onNavigate: (page: string) => void;
  onNotification: (msg: string, type: 'success' | 'info') => void;
}

export default function StudentPortal({
  courses,
  tutors,
  enrolledCourseIds,
  courseProgress,
  onIncrementProgress,
  onNavigate,
  onNotification,
}: StudentPortalProps) {
  const [showMoodleModal, setShowMoodleModal] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'completed'>('idle');

  const enrolledCoursesList = courses.filter((c) => enrolledCourseIds.includes(c.id));

  const handleLaunchMoodle = () => {
    setShowMoodleModal(true);
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('completed');
      onNotification('Moodle LMS Credentials Synced successfully!', 'success');
    }, 2500);
  };

  const handleStudyNextLesson = (courseId: string, currentProgress: number) => {
    if (currentProgress >= 100) {
      onNotification('Course already completed! Claim your certificate below.', 'info');
      return;
    }
    onIncrementProgress(courseId);
    
    const newProgress = Math.min(currentProgress + 15, 100);
    if (newProgress >= 100) {
      onNotification('Congratulations! You have completed all course curriculum modules and earned your certificate.', 'success');
    } else {
      onNotification('Lesson complete! Your learning progress bar has updated.', 'success');
    }
  };

  return (
    <div className="w-full py-20 space-y-16 bg-white animate-in fade-in duration-300">
      
      {/* Editorial Page Title */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Interactive Student Workspace</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">My SmartBrain Portal</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Manage active school curriculums, launch Saturday coaching webinars, review graded worksheets, and sync credentials with our Moodle servers.
        </p>
      </section>

      {/* Main Workspace Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {enrolledCoursesList.length === 0 ? (
          
          /* Elegant Empty State */
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 md:p-16 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100/30 flex items-center justify-center text-[#E86A1A] mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#1F3864] heading-font">No Registered Courses Found</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
                You are not currently logged into any active curriculum. Visit the course catalog page to enroll and activate your learning space.
              </p>
            </div>

            <button
              id="btn-portal-go-courses"
              onClick={() => onNavigate('courses')}
              className="px-6 py-3 rounded-xl bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-orange-500/10"
            >
              Browse & Enroll in Courses
            </button>
          </div>
        ) : (
          
          /* Active Student Workspace */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Course Cards */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-lg font-bold text-[#1F3864] flex items-center gap-2.5 heading-font">
                <BookOpen className="w-5 h-5 text-[#E86A1A]" /> Active Study Programs ({enrolledCoursesList.length})
              </h2>

              <div className="space-y-6">
                {enrolledCoursesList.map((course) => {
                  const progress = courseProgress[course.id] || 0;
                  const tutor = tutors.find((t) => t.id === course.tutorId);
                  
                  return (
                    <div
                      key={course.id}
                      className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.03)] transition-all duration-300 space-y-5"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-slate-50">
                        <div className="space-y-2">
                          <span className="px-2.5 py-1 rounded-full bg-[#E86A1A]/10 text-[#E86A1A] text-[9px] font-bold uppercase tracking-wider">
                            {course.category}
                          </span>
                          <h3 className="text-base font-bold text-[#1F3864] heading-font leading-snug">{course.title}</h3>
                          <p className="text-xs text-slate-400">Led by <strong className="text-slate-600">{tutor?.name || 'SmartBrain Faculty'}</strong></p>
                        </div>

                        {/* Study Button */}
                        <button
                          id={`btn-study-action-${course.id}`}
                          onClick={() => handleStudyNextLesson(course.id, progress)}
                          className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer shadow-sm ${
                            progress >= 100
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-100/50'
                              : 'bg-[#1F3864] hover:bg-[#E86A1A] text-white shadow-md shadow-slate-900/5'
                          }`}
                        >
                          {progress >= 100 ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" /> Curriculum Completed
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-white" /> Study Lesson
                            </>
                          )}
                        </button>
                      </div>

                      {/* Progress Bar Widget */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-500">
                          <span>Syllabus Covered</span>
                          <span className={progress >= 100 ? 'text-emerald-600 font-extrabold' : 'text-[#E86A1A]'}>
                            {progress}% Complete
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/50">
                          <div
                            className={`h-full transition-all duration-500 rounded-full bg-gradient-to-r ${
                              progress >= 100
                                ? 'from-emerald-500 to-teal-400'
                                : 'from-[#1F3864] to-[#E86A1A]'
                            }`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Schedule Webinar note */}
                      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1.5 font-medium gap-2">
                        <p>Webinar drills: <strong className="text-slate-600">Saturdays 10:00 AM WAT</strong></p>
                        <p className="flex items-center gap-1.5 font-semibold text-emerald-500">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                          Moodle databases synced
                        </p>
                      </div>

                      {/* Digital PDF Certificate Claim */}
                      {progress >= 100 && (
                        <div className="bg-amber-50/60 border border-amber-100/80 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4 animate-in fade-in duration-500">
                          <div className="flex items-center gap-3.5">
                            <Award className="w-8 h-8 text-amber-500 shrink-0" />
                            <div className="text-left">
                              <h4 className="font-bold text-amber-900 text-xs uppercase tracking-wider heading-font">Academic Certificate Awarded!</h4>
                              <p className="text-[11px] text-amber-700 font-medium">Verifiable completion credentials generated successfully.</p>
                            </div>
                          </div>
                          <button
                            onClick={() => alert(`Official Verifiable SmartBrain Digital Certificate issued! Reference ID: SB-9302-${course.id}`)}
                            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                          >
                            Claim Certificate PDF
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Platform Side panel */}
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-lg font-bold text-[#1F3864] heading-font">LMS Engine</h2>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6.5 space-y-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100/40 text-[#E86A1A] rounded-xl flex items-center justify-center mx-auto text-lg font-extrabold font-mono">
                    M
                  </div>
                  <h3 className="font-bold text-[#1F3864] text-base heading-font">Moodle LMS Gateway</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    We deliver comprehensive lecture streams, self-assessment work, and custom examinations using the globally leading Moodle ecosystem.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Watch lecture playback recordings</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Submit homework and tasks</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Download syllabus summaries</span>
                  </div>
                </div>

                <button
                  id="btn-portal-launch-moodle"
                  onClick={handleLaunchMoodle}
                  className="w-full py-3 bg-[#E86A1A] hover:bg-[#d05c14] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md shadow-orange-500/10"
                >
                  Launch Moodle Classroom <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Study Recommendation block */}
              <div className="bg-[#1F3864] text-white p-6.5 rounded-2xl space-y-3 relative overflow-hidden shadow-lg shadow-slate-900/10">
                <div className="absolute right-0 top-0 text-white/5 select-none pointer-events-none translate-x-4 -translate-y-4">
                  <Sparkles className="w-24 h-24" />
                </div>
                <h4 className="font-bold text-orange-200 text-xs uppercase tracking-wider flex items-center gap-2 heading-font">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E86A1A]" /> Study Advice
                </h4>
                <p className="text-[11px] text-slate-200 leading-relaxed font-normal">
                  To secure excellent scores in WAEC/JAMB/SSCE, we recommend completing <strong>2 to 3 visual units weekly</strong> and actively practicing mock test papers on our LMS.
                </p>
              </div>
            </div>

          </div>
        )}
      </section>

      {/* Synchronizing Loading Simulation Modal */}
      {showMoodleModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center space-y-6 border border-slate-100 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {syncStatus === 'syncing' ? (
              <div className="space-y-6 py-4">
                <RefreshCw className="w-12 h-12 text-[#E86A1A] mx-auto animate-spin" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1F3864] text-base heading-font">Synchronizing Credentials</h3>
                  <p className="text-xs text-slate-400">SmartBrain servers are linking with moodle.smartbrainedtechacademy.com...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1F3864] text-base heading-font">Moodle Handshake Complete</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We have successfully synchronized your workspace, completion achievements, and academic credentials with Moodle database tables.
                  </p>
                  <p className="text-[10px] text-orange-600 bg-orange-50 font-bold p-2.5 rounded-xl mt-3 uppercase tracking-wider">
                    Redirecting to moodle.smartbrainedtechacademy.com/lms...
                  </p>
                </div>
                <button
                  onClick={() => setShowMoodleModal(false)}
                  className="w-full py-2.5 bg-[#1F3864] hover:bg-[#162747] text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Back to Portal
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
