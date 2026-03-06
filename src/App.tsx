/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Bookmark,
  Clock,
  Heart
} from "lucide-react";

const TeamMember = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-16 h-16 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40] font-serif text-xl font-bold">
      {name[0]}
    </div>
    <span className="text-sm font-medium text-[#5A5A40]">{name}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 rounded-2xl bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40] mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
    <p className="text-stone-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const team = ["Maya", "Dylan", "Ayesha", "Aditi", "Nitya"];

  return (
    <div className="min-h-screen selection:bg-[#5A5A40]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfcf8]/80 backdrop-blur-md border-bottom border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#5A5A40] rounded-lg flex items-center justify-center text-white">
              <Bookmark size={18} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">booked!</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#features" className="hover:text-[#5A5A40] transition-colors">Features</a>
            <a href="#team" className="hover:text-[#5A5A40] transition-colors">Team</a>
            <button className="bg-[#5A5A40] text-white px-6 py-2.5 rounded-full hover:bg-[#4a4a34] transition-colors shadow-lg shadow-[#5A5A40]/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                <span>Your personal reading concierge</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] mb-8 tracking-tight">
                Read more of what <span className="italic text-[#5A5A40]">actually</span> matters.
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                The app that helps you prioritize your TBR, schedule dedicated reading time, and discovers books tailored to your unique taste.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="w-full sm:w-auto bg-[#5A5A40] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#4a4a34] transition-all flex items-center justify-center group shadow-xl shadow-[#5A5A40]/20">
                  Join the Waitlist
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium border border-stone-200 hover:bg-stone-50 transition-all">
                  See how it works
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000" 
                  alt="Cozy reading nook"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 p-4 bg-white rounded-2xl shadow-xl border border-black/5 flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Goal Reached</p>
                  <p className="font-serif font-bold">30 mins read today</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/4 p-4 bg-white rounded-2xl shadow-xl border border-black/5"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Heart size={16} className="text-rose-500 fill-rose-500" />
                  <span className="text-sm font-bold font-serif">Top Pick for You</span>
                </div>
                <p className="text-xs text-stone-500">Based on your love for magical realism</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Designed for the modern reader.</h2>
              <p className="text-lg text-stone-600">We built the tools we wished we had to reclaim our focus and rediscover the joy of getting lost in a book.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={BookOpen}
                title="Smart Prioritization"
                description="Stop staring at your shelf. Our algorithm helps you rank your TBR based on your current mood, time availability, and reading goals."
              />
              <FeatureCard 
                icon={Calendar}
                title="Reading Scheduler"
                description="Sync with your calendar to find hidden pockets of time. Set reminders that nudge you to pick up a book instead of your phone."
              />
              <FeatureCard 
                icon={Sparkles}
                title="Curated Discovery"
                description="No more generic best-seller lists. Get recommendations that understand your niche interests and past favorites."
              />
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl font-serif font-bold text-[#5A5A40] mb-2">12k+</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Books Tracked</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-[#5A5A40] mb-2">45m</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Avg. Daily Session</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-[#5A5A40] mb-2">98%</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Rec Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-[#5A5A40] mb-2">5/5</p>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">User Rating</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#5A5A40] rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
              <div className="relative z-10 flex flex-col items-center text-center">
                <Users className="mb-6 opacity-50" size={40} />
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Built by readers, for readers.</h2>
                <p className="text-xl text-white/80 max-w-2xl mb-12">
                  The team behind booked! is a group of passionate bibliophiles dedicated to making reading a priority in a distracted world.
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  {team.map((name) => (
                    <div key={name} className="flex flex-col items-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl font-serif font-bold border border-white/20">
                        {name[0]}
                      </div>
                      <span className="text-sm font-medium tracking-wide">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8">Ready to turn the page?</h2>
            <p className="text-xl text-stone-600 mb-12">
              Join thousands of readers who are reclaiming their time and discovering their next favorite story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-80 px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all"
              />
              <button className="w-full sm:w-auto bg-[#5A5A40] text-white px-10 py-4 rounded-full font-medium hover:bg-[#4a4a34] transition-all shadow-lg shadow-[#5A5A40]/20">
                Get Early Access
              </button>
            </div>
            <p className="mt-6 text-sm text-stone-400">No spam. Only bookish updates.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-6 h-6 bg-[#5A5A40] rounded flex items-center justify-center text-white">
              <Bookmark size={14} fill="currentColor" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">booked!</span>
          </div>
          <div className="flex space-x-8 text-sm text-stone-500">
            <a href="#" className="hover:text-[#5A5A40]">Privacy</a>
            <a href="#" className="hover:text-[#5A5A40]">Terms</a>
            <a href="#" className="hover:text-[#5A5A40]">Twitter</a>
            <a href="#" className="hover:text-[#5A5A40]">Instagram</a>
          </div>
          <p className="mt-6 md:mt-0 text-sm text-stone-400">
            © 2024 booked! App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
