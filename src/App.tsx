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
  Heart,
  Linkedin
} from "lucide-react";

const TeamMember = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-header text-xl font-bold">
      {name[0]}
    </div>
    <span className="text-sm font-accent font-semibold text-brand-text">{name}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-brand-text/5 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-bg/30 flex items-center justify-center text-brand-text mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-header font-bold mb-3 text-brand-text">{title}</h3>
    <p className="text-brand-text/80 leading-relaxed font-body">{description}</p>
  </motion.div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <span className="text-[1.2em] font-header font-black text-brand-text leading-none">B</span>
    <div className="relative w-[1.4em] h-[1em] flex items-center justify-center">
      {/* Custom SVG Book to match the image */}
      <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-sm">
        <path 
          d="M50 65 C 50 65 20 70 5 60 L 5 0 C 20 10 50 5 50 5 C 50 5 80 10 95 0 L 95 60 C 80 70 50 65 50 65" 
          fill="#FA824C" 
        />
        <path 
          d="M50 60 C 50 60 22 65 8 55 L 8 5 C 22 15 50 10 50 10 C 50 10 78 15 92 5 L 92 55 C 78 65 50 60 50 60" 
          fill="#FFFDF7" 
        />
        <line x1="50" y1="10" x2="50" y2="60" stroke="#FA824C" strokeWidth="2" />
      </svg>
    </div>
    <span className="text-[1.2em] font-header font-black text-brand-text leading-none tracking-tight">KED</span>
  </div>
);

export default function App() {
  const getAssetUrl = (path: string) => {
    const base = import.meta.env.BASE_URL || '/';
    // Ensure base ends with / and path doesn't start with /
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${normalizedBase}${normalizedPath}`;
  };

  const team = [
    { name: "Maya", role: "Project Manager", linkedin: "https://www.linkedin.com/in/maya-falodia/" },
    { name: "Dylan", role: "Graphic Designer" },
    { name: "Ayesha", role: "UX Designer", linkedin: "https://www.linkedin.com/in/ayeshakhan25/" },
    { name: "Aditi", role: "Software Engineer", linkedin: "https://www.linkedin.com/in/aditirrr/" },
    { name: "Nitya", role: "Software Engineer", linkedin: "https://www.linkedin.com/in/nitya-addanki/" }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfcf8]/80 backdrop-blur-md border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-6">
          <Logo className="text-4xl justify-center" />
          <div className="hidden md:flex items-center justify-center flex-wrap gap-x-8 gap-y-2 text-sm font-accent font-bold text-brand-text/70">
            <a href="#problem" className="hover:text-brand-primary transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-brand-primary transition-colors">Our Solution</a>
            <a href="#process" className="hover:text-brand-primary transition-colors">Our Process</a>
            <a href="#video" className="hover:text-brand-primary transition-colors">Concept</a>
            <a href="#walkthrough" className="hover:text-brand-primary transition-colors">Walkthrough</a>
            <a href="#features" className="hover:text-brand-primary transition-colors">Features</a>
            <a href="#team" className="hover:text-brand-primary transition-colors">Team</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="mb-8 flex flex-col items-center">
                <Logo className="text-6xl md:text-8xl mb-4 justify-center" />
                <h1 className="text-4xl md:text-5xl font-header font-black leading-tight tracking-tight text-brand-text">
                  ...Because <span className="text-brand-primary">Books</span> Deserve Your Time.
                </h1>
              </div>
              <p className="text-xl text-brand-text/80 mb-10 leading-relaxed max-w-3xl font-body">
                Booked helps you build a consistent reading habit by allowing you to prioritize and schedule reading, explore community video and written reviews, and receive personalized AI recommendations based on your interests and reading history.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="problem" className="pt-16 pb-24 border-y border-brand-text/5 scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-lg font-accent font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">The Problem</h2>
                <h3 className="text-3xl md:text-4xl font-header font-black text-brand-text leading-tight">
                  Why is it so hard to just <span className="italic">read</span>?
                </h3>
              </div>
              <div>
                <p className="text-xl text-brand-text font-body leading-relaxed">
                  Students ages 18-23 intend to read more, but struggle to make a habit within a busy, distracting, and unmotivating system, and find difficulties choosing their next book.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section id="solution" className="py-24 bg-[#fdfcf8] scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-header font-black">1</div>
                    <p className="text-xl text-brand-text font-body">
                      Discover books through community and AI-based suggestions
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-header font-black">2</div>
                    <p className="text-xl text-brand-text font-body">
                      Schedule and track reading to build long-term habits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-lg font-accent font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Solution</h2>
                <h3 className="text-3xl md:text-4xl font-header font-black text-brand-text leading-tight mb-6">
                  We designed a mobile app to help
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="py-24 bg-white scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-header font-black text-brand-primary uppercase tracking-tight">our process</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-full bg-brand-bg/10 rounded-xl mb-6 flex items-center justify-center border border-brand-text/5 overflow-hidden">
                  <img 
                    src={getAssetUrl("Sketching.png")} 
                    alt="Sketching" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm md:text-base font-body text-brand-text leading-relaxed">
                  Sketching at the start helped us generate & iterate on many ideas, fast
                </p>
              </div>

              <div className="hidden md:flex items-center pt-32">
                <ArrowRight className="text-brand-text/20" size={32} />
              </div>

              {/* Step 2 */}
              <div className="flex-[1.3] flex flex-col items-center text-center">
                <div className="w-full bg-brand-bg/10 rounded-xl mb-6 flex items-center justify-center border border-brand-text/5 overflow-hidden">
                  <img 
                    src={getAssetUrl("Storyboarding.png")} 
                    alt="Storyboarding" 
                    className="w-full h-auto scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm md:text-base font-body text-brand-text leading-relaxed">
                  Storyboarding a key interaction with the product helped us convey our concept after implementing user research
                </p>
              </div>

              <div className="hidden md:flex items-center pt-32">
                <ArrowRight className="text-brand-text/20" size={32} />
              </div>

              {/* Step 3 */}
              <div className="flex-[1.3] flex flex-col items-center text-center">
                <div className="w-full aspect-[3/4] bg-brand-bg/10 rounded-xl mb-6 flex items-center justify-center border border-brand-text/5 overflow-hidden">
                  <img 
                    src={getAssetUrl("PaperPrototype.jpeg")} 
                    alt="Paper Prototyping" 
                    className="w-full h-full object-cover rotate-90 scale-110 md:scale-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm md:text-base font-body text-brand-text leading-relaxed">
                  Paper prototyping helped us test user flows and iterate on designs based on usability testing feedback
                </p>
              </div>

              <div className="hidden md:flex items-center pt-32">
                <ArrowRight className="text-brand-text/20" size={32} />
              </div>

              {/* Step 4 */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-full bg-brand-bg/10 rounded-xl mb-6 flex items-center justify-center border border-brand-text/5 overflow-hidden">
                  <img 
                    src={getAssetUrl("figma.png")} 
                    alt="Figma Mock-up" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm md:text-base font-body text-brand-text leading-relaxed">
                  Figma mock-up of our final design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Video Section */}
        <section id="video" className="py-24 bg-brand-text text-white scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-header font-black mb-6">See the vision.</h2>
              <p className="text-lg text-white/70 font-body mb-8">Watch our concept video to see how BOOKED is redefining the reading experience for the digital age.</p>
              <a 
                href="https://www.figma.com/design/Np3A7qP7Gm8j2U5xh0Ukt7/Booked?node-id=0-1&t=BmOgsTSzv8cRXB7K-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-text rounded-full font-accent font-bold hover:bg-brand-primary hover:text-white transition-all shadow-lg group"
              >
                Explore the Design in Figma
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JfYlI48bSvU" 
                title="BOOKED Concept Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* App Walkthrough Section */}
        <section id="walkthrough" className="py-24 bg-white scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-lg font-accent font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Experience the App</h2>
              <h3 className="text-4xl md:text-5xl font-header font-black text-brand-text mb-6">App Walkthrough</h3>
              <p className="text-lg text-brand-text/70 font-body">Take a guided tour through the BOOKED interface and see our core features in action.</p>
            </div>
            <div className="max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-brand-text/5 bg-brand-bg/10 aspect-[9/16] flex items-center justify-center">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/OebDqjsiTdI" 
                title="App Walkthrough"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-brand-bg/10 scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-header font-black mb-6 text-brand-text">Designed for the modern reader.</h2>
              <p className="text-lg text-brand-text/70 font-body">We built the tools we wished we had to reclaim our focus and rediscover the joy of getting lost in a book.</p>
              <div className="mt-12 max-w-5xl mx-auto">
                <img 
                  src={getAssetUrl("BookedFeatures.png")} 
                  alt="BOOKED App Interface" 
                  className="w-full rounded-2xl shadow-xl border border-brand-text/5"
                  referrerPolicy="no-referrer"
                />
              </div>
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

        {/* Team Section */}
        <section id="team" className="py-24 scroll-mt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand-text rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
              <div className="relative z-10 flex flex-col items-center text-center">
                <Users className="mb-6 text-brand-bg" size={40} />
                <h2 className="text-4xl md:text-5xl font-header font-black mb-8">Built by readers, for readers.</h2>
                <p className="text-xl text-white/80 max-w-2xl mb-12 font-body">
                  The team behind BOOKED is a group of passionate bibliophiles dedicated to making reading a priority in a distracted world.
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  {team.map((member) => (
                    <div key={member.name} className="flex flex-col items-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl font-header font-black border border-white/20 text-brand-bg">
                        {member.name[0]}
                      </div>
                      <div className="text-center">
                        <span className="block text-sm font-accent font-bold tracking-wide uppercase">{member.name}</span>
                        <span className="block text-[10px] font-accent font-bold text-white/50 uppercase tracking-widest mt-1">{member.role}</span>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-brand-bg hover:text-brand-primary transition-colors"
                          >
                            <Linkedin size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-text/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <Logo className="text-xl mb-6 md:mb-0" />
          <p className="mt-6 md:mt-0 text-xs font-accent font-bold text-brand-text/30 uppercase tracking-widest">
            © 2026 BOOKED App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
