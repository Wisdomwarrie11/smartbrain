import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, BookOpen, X, Share2, Award, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogProps {
  blogs: BlogPost[];
}

export default function Blog({ blogs }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Exam Tips', 'EdTech News', 'Parenting'];

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-20 space-y-16 bg-white animate-in fade-in duration-300">
      
      {/* Editorial Header */}
      <section className="text-center px-4 max-w-3xl mx-auto space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Smart Resources</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F3864] tracking-tight heading-font">Academic Blog & Study Tips</h1>
        <div className="h-1 w-12 bg-[#E86A1A] mx-auto rounded-full mt-2"></div>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          The latest exam strategies, standard national curricula timelines, and expert technical guidance written by our lead educators.
        </p>
      </section>

      {/* Grid Layout Stream & Side Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Stream Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Filtering Toolbar */}
          <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1F3864]/10 focus:border-[#1F3864] transition-all font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-end">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                    selectedCategory === c
                      ? 'bg-[#E86A1A] border-[#E86A1A] text-white shadow-md shadow-orange-500/10'
                      : 'bg-white border-slate-200/80 text-slate-500 hover:border-slate-300 hover:text-slate-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Post stream list */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl">
              <p className="text-slate-400 text-xs font-medium">No educational articles matched your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredBlogs.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-slate-100 hover:border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(31,56,100,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-44 overflow-hidden bg-slate-50 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-white text-[#1F3864] border border-slate-100 font-bold text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-lg shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 text-[#E86A1A]" />
                          {post.author}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#1F3864] text-sm leading-snug hover:text-[#E86A1A] transition-colors line-clamp-2 heading-font">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{post.readTime}</span>
                      <button
                        id={`btn-read-post-${post.id}`}
                        onClick={() => setActivePost(post)}
                        className="text-xs font-bold text-[#E86A1A] hover:text-[#c4530e] flex items-center gap-1 transition-colors cursor-pointer group"
                      >
                        Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>

        {/* Sidebar widgets */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Curated Calendar Timelines */}
          <div className="bg-[#1F3864] text-white p-7 rounded-2xl space-y-5 shadow-lg shadow-slate-900/10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-white/5 pointer-events-none translate-x-4 translate-y-4">
              <Award className="w-28 h-28" />
            </div>
            
            <span className="text-[9px] font-bold tracking-widest uppercase text-orange-200">Free Study Materials</span>
            <h4 className="text-base font-extrabold leading-snug heading-font">WAEC & UTME 2026 Core Timelines</h4>
            
            <div className="space-y-4 pt-2 text-xs">
              <div className="border-l-2 border-[#E86A1A] pl-4 space-y-0.5">
                <p className="font-bold text-orange-200">UTME Mock Examinations</p>
                <p className="text-slate-300 text-[11px]">April 2026</p>
              </div>
              <div className="border-l-2 border-[#E86A1A] pl-4 space-y-0.5">
                <p className="font-bold text-orange-200">WAEC Practical Drills</p>
                <p className="text-slate-300 text-[11px]">May - June 2026</p>
              </div>
              <div className="border-l-2 border-[#E86A1A] pl-4 space-y-0.5">
                <p className="font-bold text-orange-200">Secondary Registration</p>
                <p className="text-slate-300 text-[11px]">Ongoing till Sept 2026</p>
              </div>
            </div>

            <button
              onClick={() => {
                const btn = document.getElementById('btn-nav-contact');
                if (btn) btn.click();
              }}
              className="w-full py-3.5 bg-white hover:bg-[#E86A1A] hover:text-white text-[#1F3864] font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md"
            >
              Request Free Syllabus PDF
            </button>
          </div>

          {/* Editorial Quote widget */}
          <div className="border border-slate-100 p-7 rounded-2xl space-y-4 bg-white shadow-sm">
            <h4 className="font-bold text-[#1F3864] text-xs uppercase tracking-wider heading-font">Quote of the Term</h4>
            <p className="text-xs text-slate-500 italic leading-relaxed font-normal">
              "Continuous testing combined with immediate correction is the single fastest way to commit mathematical structures to memory. Learn smart, and the grades will follow."
            </p>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">— Henry Okorie, Founder</span>
          </div>

        </aside>

      </section>

      {/* Modern Dialog post Modal reader */}
      {activePost && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="p-7 md:p-10 space-y-7">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-full bg-[#E86A1A]/10 text-[#E86A1A] font-bold text-[9px] tracking-wider uppercase">
                  {activePost.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F3864] leading-snug heading-font">{activePost.title}</h2>
                
                <div className="flex flex-wrap gap-4 items-center text-xs text-slate-400 font-semibold border-b border-slate-50 pb-4">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#E86A1A]" /> By {activePost.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Published {activePost.date}
                  </span>
                  <span>•</span>
                  <span className="uppercase tracking-wider text-[10px]">{activePost.readTime}</span>
                </div>
              </div>

              {/* Photo */}
              <div className="h-60 overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src={activePost.imageUrl}
                  alt={activePost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contents */}
              <div className="text-slate-600 text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-slate-50 pt-5 font-normal">
                {activePost.content}
              </div>

              {/* Actions footer */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-50 text-xs">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard! Share it with parent groups.');
                  }}
                  className="flex items-center gap-2 text-[#1F3864] hover:text-[#E86A1A] font-bold transition-colors cursor-pointer uppercase tracking-wider text-[10px]"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share Article
                </button>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-4.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold tracking-wider uppercase text-[10px]"
                >
                  Close Reader
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
