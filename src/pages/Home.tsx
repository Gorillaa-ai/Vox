import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Music2, Mic2, Video, Camera, Play, Pause, Volume2, Sparkles, AudioLines, Film, Image as ImageIcon, ShieldCheck, Scale, Fingerprint } from 'lucide-react';

export default function Home() {
  const constraintsRef = useRef(null);
  const [isWave, setIsWave] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWave(prev => !prev);
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const VoiceMorph = ({ className = "" }) => (
    <div className={`relative inline-flex items-center justify-center h-[1em] align-middle ${className}`}>
      <AnimatePresence mode="wait">
        {!isWave ? (
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent font-bold tracking-[-0.05em] pr-4 whitespace-nowrap"
          >
            voice
          </motion.span>
        ) : (
          <motion.div
            key="wave"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 h-[0.8em] px-4"
          >
            {[0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.8, 0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
              <motion.div
                key={i}
                className="w-2.5 bg-gradient-to-b from-blue-600 to-orange-600 rounded-full"
                animate={{
                  height: [`${h * 30}%`, `${h * 100}%`, `${h * 30}%`],
                }}
                transition={{
                  duration: 0.6 + Math.random() * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="bg-white text-black overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Stitch-style Wave Background */}
        <div className="absolute inset-0 -z-10">
          {/* Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px]" />
          
          {/* Animated Fluid Waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                x: [-100, 100, -100],
                y: [0, 50, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -left-[10%] w-[120%] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 blur-[120px] -rotate-12"
            />
            <motion.div
              animate={{
                x: [100, -100, 100],
                y: [0, -50, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] -right-[10%] w-[120%] h-[500px] bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 blur-[120px] rotate-12"
            />
            
            {/* The "Ribbon" Wave (SVG) */}
            <svg className="absolute top-1/2 left-0 w-full h-[800px] -translate-y-1/2 opacity-60 blur-2xl" viewBox="0 0 1440 800" fill="none">
              <motion.path
                d="M-100 600 C 200 400, 400 800, 720 600 C 1040 400, 1240 800, 1540 600"
                stroke="url(#stitch-gradient)"
                strokeWidth="80"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M-100 600 C 200 400, 400 800, 720 600 C 1040 400, 1240 800, 1540 600",
                    "M-100 600 C 200 800, 400 400, 720 600 C 1040 800, 1240 400, 1540 600",
                    "M-100 600 C 200 400, 400 800, 720 600 C 1040 400, 1240 800, 1540 600",
                  ]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="stitch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="30%" stopColor="#8b5cf6" />
                  <stop offset="60%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[4rem] md:text-[6.5rem] font-bold leading-[0.95] tracking-[-0.05em] mb-10 text-black">
              <span className="whitespace-nowrap">Bringing <VoiceMorph className="px-2" /></span>
              <br />
              to life
            </h1>
            <div className="flex flex-wrap gap-6">
              <Link to="/login" className="group relative bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl overflow-hidden">
                <span className="relative z-10">Get Started</span>
              </Link>
              <Link to="/login" className="bg-black/5 text-black border border-black/10 px-12 py-5 rounded-full font-bold text-xl hover:bg-black/10 transition-all shadow-lg backdrop-blur-sm">Contact sales</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="text-black/70 text-xl md:text-2xl leading-relaxed max-w-xl lg:text-left relative z-10">
              <p className="mb-8">Powering the best enterprises, creators, and developers. From VOX Agents for customer experience, VOX Creative for content creation, to the leading AI voice generator.</p>
              
              {/* Mini Illustration */}
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/40/40`} 
                      className="w-10 h-10 rounded-full border-2 border-white/20 shadow-sm" 
                      referrerPolicy="no-referrer"
                      alt="User"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-black">Joined by 2M+ creators</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 flex items-center justify-center rotate-12 z-0"
            >
              <Volume2 className="w-10 h-10 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 flex items-center justify-center -rotate-12 z-0"
            >
              <Sparkles className="w-8 h-8 text-orange-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Interface Preview Container (IMAGE_15 Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative"
        >
          {/* Glow effect behind container */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[80px] rounded-[3rem] -z-10"></div>
          
          <div className="bg-black/5 rounded-[3rem] p-4 md:p-8 overflow-hidden border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 p-8 text-black">
            {/* Tabs */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => alert('VOX Creative selected')}
                className="flex items-center gap-2 bg-black/5 px-6 py-2.5 rounded-full font-semibold border border-black/5 shadow-sm transition-all hover:bg-black/10"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
                VOX Creative
              </button>
              <button 
                onClick={() => alert('VOX Agents selected')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-black/50 hover:text-black transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                VOX Agents
              </button>
            </div>
            
            <div className="bg-surface-container-highest rounded-[2rem] overflow-hidden border border-black/5 flex h-[600px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-black/5 bg-white flex flex-col">
                <div className="p-6 border-b border-black/5">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">V</div>
                    <span className="font-bold text-sm">VOX Creative</span>
                  </div>
                  <div className="space-y-1">
                    {['Editor', 'Voices', 'Music', 'SFX', 'Video'].map((item, i) => (
                      <div key={i} className={`px-4 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'bg-black text-white' : 'text-black/40 hover:bg-black/5'}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-grow overflow-y-auto">
                  <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4">Recent Projects</p>
                  <div className="space-y-4">
                    {['Podcast Intro', 'Ad Campaign', 'Audiobook Ch 1'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded bg-black/5 flex items-center justify-center text-xs">📄</div>
                        <span className="text-xs font-bold text-black/60 group-hover:text-black transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Main Editor */}
              <div className="flex-grow flex flex-col bg-surface-container-highest">
                <div className="h-16 border-b border-black/5 flex items-center justify-between px-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold">Untitled Project</span>
                    <span className="text-[10px] bg-black/5 px-2 py-0.5 rounded font-bold text-black/40">DRAFT</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => alert('Sharing project...')}
                      className="text-sm font-bold text-black/40 hover:text-black"
                    >
                      Share
                    </button>
                    <button 
                      onClick={() => alert('Exporting project...')}
                      className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:opacity-80 transition-opacity"
                    >
                      Export
                    </button>
                  </div>
                </div>
                <div className="flex-grow p-12 overflow-y-auto">
                  <div className="max-w-2xl mx-auto space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/voice1/40/40" className="w-10 h-10 rounded-full border border-black/10" referrerPolicy="no-referrer" alt="Voice" />
                        <div>
                          <p className="text-xs font-bold">Rachel</p>
                          <p className="text-[10px] text-black/40">American • Professional</p>
                        </div>
                      </div>
                      <p className="text-2xl font-medium leading-relaxed text-black/80">
                        In a world where technology meets creativity, VOX stands at the forefront of the audio revolution. Our mission is to empower creators with the most realistic AI voices ever built.
                      </p>
                    </div>
                    <div className="h-px bg-black/5 w-full"></div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/voice2/40/40" className="w-10 h-10 rounded-full border border-black/10" referrerPolicy="no-referrer" alt="Voice" />
                        <div>
                          <p className="text-xs font-bold">Marcus</p>
                          <p className="text-[10px] text-black/40">British • Narrative</p>
                        </div>
                      </div>
                      <p className="text-2xl font-medium leading-relaxed text-black/80">
                        Whether you're building a global brand or telling a personal story, the right voice makes all the difference. Experience the power of emotion, nuance, and perfect delivery.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Audio Player Bar */}
                <div className="h-20 border-t border-black/5 bg-white flex items-center px-8 gap-8">
                  <button 
                    onClick={() => alert('Playing project...')}
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-105 transition-transform"
                  >
                    ▶
                  </button>
                  <div className="flex-grow h-1 bg-black/10 rounded-full relative">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-black rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-black rounded-full shadow-lg"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-black/60">01:24 / 04:12</span>
                    <span className="text-lg">🔊</span>
                  </div>
                </div>
              </div>
              {/* Right Panel - Voice Selection */}
              <div className="w-72 border-l border-black/5 bg-white p-6 overflow-y-auto">
                <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-6">Voice Library</p>
                <div className="space-y-3">
                  {[
                    { name: 'Rachel', tags: 'American, Professional', img: 'voice1' },
                    { name: 'Marcus', tags: 'British, Narrative', img: 'voice2' },
                    { name: 'Elena', tags: 'Spanish, Warm', img: 'voice3' },
                    { name: 'Kenji', tags: 'Japanese, Calm', img: 'voice4' },
                    { name: 'Sophie', tags: 'French, Elegant', img: 'voice5' }
                  ].map((voice, i) => (
                    <div key={i} className={`p-3 rounded-xl border transition-all cursor-pointer ${i === 0 ? 'bg-black/5 border-black/10 shadow-sm' : 'border-transparent hover:bg-black/5'}`}>
                      <div className="flex items-center gap-3">
                        <img src={`https://picsum.photos/seed/${voice.img}/32/32`} className="w-8 h-8 rounded-full border border-black/10" referrerPolicy="no-referrer" alt={voice.name} />
                        <div>
                          <p className="text-xs font-bold text-black">{voice.name}</p>
                          <p className="text-[10px] text-black/40">{voice.tags}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Selector */}
          <div className="flex justify-center mt-12 pb-4">
            <div className="inline-flex items-center gap-8 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
              <button 
                onClick={() => alert('Text to Speech selected')}
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-black/5"
              >
                Text to Speech
              </button>
              <button 
                onClick={() => alert('Music selected')}
                className="text-sm font-bold text-tertiary px-2 hover:text-black"
              >
                Music
              </button>
              <button 
                onClick={() => alert('Speech to Text selected')}
                className="text-sm font-bold text-tertiary px-2 hover:text-black"
              >
                Speech to Text
              </button>
              <button 
                onClick={() => alert('Voice Cloning selected')}
                className="text-sm font-bold text-tertiary px-2 hover:text-black"
              >
                Voice Cloning
              </button>
              <Link to="/login" className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm inline-block">Sign up</Link>
            </div>
          </div>
        </div>
        </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-black/5 py-24 mb-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-16">
            <p className="font-bold text-sm text-black/60 tracking-tight">Trusted by leading developers and enterprises</p>
            <Link to="/login" className="px-8 py-2.5 rounded-full border border-black/10 text-sm font-bold text-black hover:bg-black/5 transition-colors inline-block">Read all stories</Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-16 items-center opacity-40 grayscale hover:opacity-100 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="h-6 flex items-center justify-center font-bold text-black/40">TWILIO</div>
            <div className="h-6 flex items-center justify-center font-bold text-black/40">DISNEY</div>
            <div className="h-6 flex items-center justify-center font-bold text-black/40">KPN</div>
            <div className="h-6 flex items-center justify-center font-bold text-black/40">TVS</div>
            <div className="h-6 flex items-center justify-center font-bold text-black/40">TELUS</div>
            <div className="h-6 flex items-center justify-center font-bold text-black/40">NVIDIA</div>
          </div>
        </div>
      </section>

      {/* Two Platforms Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="mb-20">
          <h2 className="text-[4rem] font-bold mb-12 leading-[1.05] tracking-tight text-black">Two platforms built on the <br /> same research foundation</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-bold text-2xl mb-4 text-black">VOX Creative</p>
              <p className="text-tertiary text-xl leading-relaxed">Generate ultra-realistic speech, videos, music, and sound effects.</p>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4 text-black">VOX Agents</p>
              <p className="text-tertiary text-xl leading-relaxed">Configure, deploy and monitor conversational agents.</p>
            </div>
          </div>
        </div>
        <div 
          ref={constraintsRef}
          className="relative h-[500px] md:h-[700px] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-surface-container-highest shadow-2xl p-4 md:p-12 flex items-center justify-center"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400 blur-[120px] rounded-full"></div>
          </div>

          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            {/* VOX Agents Screenshot */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              initial={{ x: -120, y: -40, rotate: -6, scale: 0.9 }}
              whileHover={{ 
                scale: 1.02, 
                zIndex: 50, 
                rotate: 0,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileDrag={{ scale: 1.05, zIndex: 100, rotate: 0 }}
              className="absolute w-[85%] md:w-[80%] z-10 cursor-grab active:cursor-grabbing"
            >
              <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                <img 
                  alt="VOX Agents Interface" 
                  className="w-full h-auto rounded-[1rem] md:rounded-[2rem]" 
                  src="https://lh3.googleusercontent.com/d/1dLXZGGGG8JOg4ID7wfEEPBM4_HFwLExP"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-2xl pointer-events-none whitespace-nowrap z-20">
                VOX Agents
              </div>
            </motion.div>

            {/* VOX Creative Screenshot */}
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              initial={{ x: 120, y: 40, rotate: 6, scale: 0.9 }}
              whileHover={{ 
                scale: 1.02, 
                zIndex: 50, 
                rotate: 0,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileDrag={{ scale: 1.05, zIndex: 100, rotate: 0 }}
              className="absolute w-[85%] md:w-[80%] z-20 cursor-grab active:cursor-grabbing"
            >
              <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden">
                <img 
                  alt="VOX Creative Interface" 
                  className="w-full h-auto rounded-[1rem] md:rounded-[2rem]" 
                  src="https://lh3.googleusercontent.com/d/1tpXXth5NXQbWzV-NxNIb5r-Au674QyEh"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-black text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-2xl pointer-events-none whitespace-nowrap z-20">
                VOX Creative
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VOX Creative Showcase */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <span className="font-mono text-xs font-bold text-blue-600 mb-6 block uppercase tracking-[0.2em]">VOX Creative</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight text-black">Create, edit and localize <br /> in one AI platform</h2>
            <Link to="/pricing" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-block">Learn more</Link>
          </div>
          <div className="text-tertiary text-xl leading-relaxed max-w-xl">
            <p>Create ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive sound effects. Craft your next film, ad, audiobook, or podcast with our all-in-one platform.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* All-in-one AI editor Card */}
          <div className="bg-surface-container-highest rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between group">
            <div className="mb-12 relative">
              <img 
                alt="All-in-one editor" 
                className="w-full rounded-2xl shadow-2xl border border-black/5" 
                src="https://lh3.googleusercontent.com/d/1tpXXth5NXQbWzV-NxNIb5r-Au674QyEh"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-2xl mb-4 text-black">All-in-one AI editor</p>
              <p className="text-tertiary text-lg leading-relaxed">Create podcasts, audiobooks and voiceovers in an editor built on all of VOX' audio research combined.</p>
            </div>
          </div>
          {/* Ultra-realistic speech Card */}
          <div className="bg-surface-container-highest rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 mb-12">
              <div className="space-y-4 mb-8">
                <p className="text-black/80 italic leading-relaxed text-sm">In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros...</p>
              </div>
              <div className="flex items-center justify-between border-t border-black/5 pt-6">
                <div className="flex gap-4 items-center">
                  <span className="text-xs font-bold text-black/60">🇺🇸 English</span>
                  <span className="text-xs font-bold text-black/40">Spuds Oxley</span>
                </div>
                <button 
                  onClick={() => alert('Playing sample...')}
                  className="bg-black text-white px-6 py-2 rounded-full font-bold text-xs hover:opacity-80 transition-opacity"
                >
                  Play
                </button>
              </div>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4 text-black">Ultra-realistic speech</p>
              <p className="text-tertiary text-lg leading-relaxed">Create controllable, expressive speech layered across 70+ languages.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { 
              icon: <Music2 className="w-8 h-8" />, 
              title: 'Music', 
              desc: 'Generate studio-quality tracks instantly, any genre, style, vocals or instrumental.',
              hoverClass: 'hover:bg-blue-50/50 hover:border-blue-100',
              accentColor: 'text-blue-600',
              illustration: (
                <div className="relative w-full h-32 mb-8 bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-blue-100/50 transition-colors duration-500">
                  <div className="flex items-end gap-1 h-12">
                    {[0.4, 0.7, 1, 0.6, 0.8, 0.5, 0.9, 0.3].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-black/20 rounded-full group-hover:bg-blue-400/50 transition-colors duration-500"
                        animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
                        transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20 group-hover:border-blue-200/50 transition-colors duration-500">
                      <Music2 className="w-8 h-8 text-black/60 group-hover:text-blue-600/70 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              )
            },
            { 
              icon: <AudioLines className="w-8 h-8" />, 
              title: 'SFX', 
              desc: 'Create custom sound effects, soundscapes and ambient audio or search the SFX library.',
              hoverClass: 'hover:bg-emerald-50/50 hover:border-emerald-100',
              accentColor: 'text-emerald-600',
              illustration: (
                <div className="relative w-full h-32 mb-8 bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-emerald-100/50 transition-colors duration-500">
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      <motion.path
                        d="M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50"
                        fill="none"
                        stroke="currentColor"
                        className="text-black group-hover:text-emerald-500 transition-colors duration-500"
                        strokeWidth="1"
                        animate={{ d: ["M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50", "M0 50 Q 25 90, 50 50 T 100 50 T 150 50 T 200 50", "M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20 group-hover:border-emerald-200/50 transition-colors duration-500">
                    <AudioLines className="w-8 h-8 text-black/60 group-hover:text-emerald-600/70 transition-colors duration-500" />
                  </div>
                </div>
              )
            },
            { 
              icon: <Mic2 className="w-8 h-8" />, 
              title: 'Voices', 
              desc: 'Clone a replica of your own voice, design one from a prompt, or explore 1000s of voices.',
              hoverClass: 'hover:bg-purple-50/50 hover:border-purple-100',
              accentColor: 'text-purple-600',
              illustration: (
                <div className="relative w-full h-32 mb-8 bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-purple-100/50 transition-colors duration-500">
                  <div className="relative">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border border-black/10 rounded-full group-hover:border-purple-400/30 transition-colors duration-500"
                        animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
                      />
                    ))}
                    <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20 group-hover:border-purple-200/50 transition-colors duration-500 relative z-10">
                      <Mic2 className="w-8 h-8 text-black/60 group-hover:text-purple-600/70 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              )
            },
            { 
              icon: <Video className="w-8 h-8" />, 
              title: 'Image & Video', 
              desc: 'Create or edit images and turn ideas into videos with leading models like Veo, Sora, Wan, Kling and Seedance.',
              hoverClass: 'hover:bg-orange-50/50 hover:border-orange-100',
              accentColor: 'text-orange-600',
              illustration: (
                <div className="relative w-full h-32 mb-8 bg-black/5 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-orange-100/50 transition-colors duration-500">
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <motion.div 
                      className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group-hover:border-orange-200/50 transition-colors duration-500"
                      animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ImageIcon className="w-6 h-6 text-black/40 group-hover:text-orange-500/50 transition-colors duration-500" />
                    </motion.div>
                    <motion.div 
                      className="w-16 h-16 bg-white/60 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-lg z-10 group-hover:border-orange-300/50 transition-colors duration-500"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Video className="w-8 h-8 text-black/60 group-hover:text-orange-600/70 transition-colors duration-500" />
                    </motion.div>
                    <motion.div 
                      className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group-hover:border-orange-200/50 transition-colors duration-500"
                      animate={{ rotate: [0, -5, 5, 0], y: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <Film className="w-6 h-6 text-black/40 group-hover:text-orange-500/50 transition-colors duration-500" />
                    </motion.div>
                  </div>
                </div>
              )
            }
          ].map((item, i) => (
            <div key={i} className={`bg-surface-container-highest p-8 rounded-[2.5rem] border border-black/5 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 ${item.hoverClass}`}>
              {item.illustration}
              <div className="flex items-center gap-3 mb-3">
                <div className={`transition-colors duration-500 group-hover:${item.accentColor} text-black/60`}>
                  {item.icon}
                </div>
                <p className="font-bold text-xl text-black">{item.title}</p>
              </div>
              <p className="text-sm text-tertiary leading-relaxed group-hover:text-black transition-colors duration-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VOX Agents Showcase */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-600 mb-6 block uppercase tracking-[0.2em]">VOX Agents</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight text-black">Deploy agents that talk, <br /> type, and take action</h2>
            <Link to="/pricing" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-block">Learn more</Link>
          </div>
          <div className="text-tertiary text-xl leading-relaxed max-w-xl">
            <p>Configure, deploy and monitor natural, human-sounding agents in 70+ languages with leading accuracy and ultra-low latency across voice or chat.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Omnichannel Card */}
          <div className="bg-emerald-50 rounded-[2.5rem] p-12 text-black relative overflow-hidden h-[500px] flex flex-col justify-between border border-emerald-100">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 space-y-4 max-w-sm">
              <div className="bg-black/5 backdrop-blur-xl p-4 rounded-2xl border border-black/10 self-end ml-auto">
                <p className="text-sm font-medium">Can I get a refund?</p>
              </div>
              <div className="bg-white p-4 rounded-2xl text-black shadow-sm">
                <p className="text-sm font-medium">Sure. Can you share your order number please?</p>
              </div>
              <div className="bg-black/5 backdrop-blur-xl p-4 rounded-2xl border border-black/10 self-end ml-auto">
                <p className="text-sm font-medium">It's EL4543490</p>
              </div>
              <div className="bg-white p-4 rounded-2xl text-black shadow-sm">
                <p className="text-sm font-medium">Thank you. I have initiated the order refund process.</p>
              </div>
              <div className="flex items-center gap-3 bg-emerald-600/10 backdrop-blur-xl px-4 py-2 rounded-full w-fit">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">S</div>
                <span className="text-xs font-bold text-emerald-700">Refund completed</span>
              </div>
            </div>
            <div className="relative z-10">
              <p className="font-bold text-2xl mb-4">Omnichannel agents</p>
              <p className="text-black/60 text-lg leading-relaxed">Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp.</p>
            </div>
          </div>
          {/* Analytics Card */}
          <div className="bg-surface-container-highest rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-black/5 mb-12">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest">Success rate</span>
                <span className="text-2xl font-bold text-black">61.5%</span>
              </div>
              <div className="h-40 flex items-end gap-2 relative">
                <div className="w-full bg-blue-500/20 h-[60%] rounded-t-lg"></div>
                <div className="w-full bg-blue-500 h-[85%] rounded-t-lg relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-3 rounded-full whitespace-nowrap">● 87.37%</div>
                </div>
                <div className="w-full bg-blue-500/40 h-[70%] rounded-t-lg"></div>
                <div className="w-full bg-blue-500/60 h-[90%] rounded-t-lg"></div>
              </div>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4 text-black">Analytics</p>
              <p className="text-tertiary text-lg leading-relaxed">Easily measure success rates and CX metrics, optimizing flows over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-mono text-xs font-bold text-blue-600 mb-6 block uppercase tracking-[0.2em]">VOX API</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight text-black">Build anything with a <br /> powerful host of APIs</h2>
            <p className="text-2xl text-tertiary mb-12 leading-relaxed">Our low-latency API delivers synthesized audio in under 300ms, making it perfect for real-time applications.</p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-blue-600">{'</>'}</span>
                <span className="font-mono text-sm font-semibold text-black/80">SDKs for Python, Node.js, Go, and Ruby</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600">⚡</span>
                <span className="font-mono text-sm font-semibold text-black/80">Ultra-low latency streaming</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600">🛡️</span>
                <span className="font-mono text-sm font-semibold text-black/80">Enterprise-grade security and uptime</span>
              </div>
            </div>
            <Link to="/login" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 shadow-lg inline-block">Read documentation</Link>
          </div>
          <div className="bg-surface-container-highest rounded-[2.5rem] p-12 border border-black/5 shadow-xl relative overflow-hidden group">
            <div className="flex gap-4 mb-8 border-b border-black/5 pb-6 items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
              </div>
              <span className="text-black/40 text-xs font-mono ml-4">index.js</span>
            </div>
            <pre className="font-mono text-base text-black/80 leading-relaxed overflow-x-auto">
              <span className="text-blue-600">import</span> {'{ VOXClient }'} <span className="text-blue-600">from</span> <span className="text-emerald-600">'vox-ai'</span>;{'\n\n'}
              <span className="text-blue-600">const</span> client = <span className="text-blue-600">new</span> VOXClient({'{'}{'\n'}
              {'  '}apiKey: <span className="text-emerald-600">'YOUR_API_KEY'</span>{'\n'}
              {'}'});{'\n\n'}
              <span className="text-blue-600">const</span> audio = <span className="text-blue-600">await</span> client.generate({'{'}{'\n'}
              {'  '}voice: <span className="text-emerald-600">"Rachel"</span>,{'\n'}
              {'  '}text: <span className="text-emerald-600">"Hello, I am a VOX synthesized voice."</span>,{'\n'}
              {'  '}model_id: <span className="text-emerald-600">"vox_multilingual_v2"</span>{'\n'}
              {'}'});
            </pre>
          </div>
        </div>
      </section>

      {/* Social Proof (Light Section) */}
      <section className="bg-surface-container-highest py-40 mb-48 text-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight">Global impact of <br /> AI audio research</h2>
            <p className="text-tertiary text-2xl max-w-3xl leading-relaxed">From accessibility to creative entertainment, our models are redefining how we interact with technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-video">
                <img 
                  alt="ALS Impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7mCAAiUdHGGy0Klym3ZHbgAPUf-P3u5TbI_GlAk7u9ln5FpeSAEZv6OAbEk6t3hZF44rhfp4SR-P5YP3mpOpEVZCSvgRKrqiBp1WIcM-DZ4dKWWbMrdFiKgVOuDP0BS-10G6D-Xh7kC6-7ivTncIYxgSpxgHEbDvVOwI2JcsUGOCoErpkropAobVwn5S3TACxRRHQidUI7uI_2A42z71fqvnC4sSABO9Q0N7oMRUhP0Ffp8wcsGjTDGCK-wnrsJ0uf6tkKLw-D2E"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Preserving voices for ALS patients</h3>
              <p className="text-tertiary text-lg">Medical breakthrough in synthetic speech.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-video">
                <img 
                  alt="Gaming Impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5k_Ili_-AzhDNfpb_FFAM2toJgF8_0F9CaTTj3Phl9f8olUnf5k_RR6PryIHgevC0ghDovO0zekw6Y0Pslo1iOK_NvCrrfMZltaVpQVmKl8GQGQr-D4O0Xi5PHOQHFKraZXjjIjEZA5-NzIn4oInLt2gGNQslw_dZKMyRFba31NU3jpS9GlgXXSociCz7llCtM2o1d58FD1omjWeImcrNaT-akDHjd9vtf0LPQdmnn2_6E8PeHzaj6pfouEPgTdEDYAEcM31z4jtw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Next-gen Gaming Narratives</h3>
              <p className="text-tertiary text-lg">Dynamic storytelling in open-world RPGs.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-video">
                <img 
                  alt="Audiobooks Impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7mCAAiUdHGGy0Klym3ZHbgAPUf-P3u5TbI_GlAk7u9ln5FpeSAEZv6OAbEk6t3hZF44rhfp4SR-P5YP3mpOpEVZCSvgRKrqiBp1WIcM-DZ4dKWWbMrdFiKgVOuDP0BS-10G6D-Xh7kC6-7ivTncIYxgSpxgHEbDvVOwI2JcsUGOCoErpkropAobVwn5S3TACxRRHQidUI7uI_2A42z71fqvnC4sSABO9Q0N7oMRUhP0Ffp8wcsGjTDGCK-wnrsJ0uf6tkKLw-D2E"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Revolutionizing Audiobooks</h3>
              <p className="text-tertiary text-lg">High-scale narration for independent authors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="bg-surface-container-highest rounded-[3rem] p-16 md:p-24 border border-black/5 overflow-hidden relative group/safety">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-3xl mb-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black tracking-tight">Safety, built in</h2>
              <p className="text-xl md:text-2xl text-tertiary leading-relaxed">We prioritize ethical development and deployment of AI technology through comprehensive safeguards.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-20 relative z-10">
            {[
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: 'Moderation', 
                desc: 'Real-time content filtering to prevent misuse and harmful content.',
                hoverClass: 'hover:bg-emerald-600/5 hover:border-emerald-600/20',
                accentColor: 'text-emerald-600',
                illustration: (
                  <div className="relative w-20 h-20 mb-8 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600/10 transition-all duration-500">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ShieldCheck className="w-10 h-10 text-black/40 group-hover:text-emerald-600 transition-colors duration-500" />
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-600/20 rounded-2xl transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                  </div>
                )
              },
              { 
                icon: <Scale className="w-8 h-8" />, 
                title: 'Accountability', 
                desc: 'Strict verification for voice cloning and clear usage policies.',
                hoverClass: 'hover:bg-blue-600/5 hover:border-blue-600/20',
                accentColor: 'text-blue-600',
                illustration: (
                  <div className="relative w-20 h-20 mb-8 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 transition-all duration-500">
                    <motion.div
                      animate={{ rotate: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Scale className="w-10 h-10 text-black/40 group-hover:text-blue-600 transition-colors duration-500" />
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/20 rounded-2xl transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                  </div>
                )
              },
              { 
                icon: <Fingerprint className="w-8 h-8" />, 
                title: 'Provenance', 
                desc: 'AI speech classifier to identify content generated by our models.',
                hoverClass: 'hover:bg-purple-600/5 hover:border-purple-600/20',
                accentColor: 'text-purple-600',
                illustration: (
                  <div className="relative w-20 h-20 mb-8 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-purple-600/10 transition-all duration-500">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Fingerprint className="w-10 h-10 text-black/40 group-hover:text-purple-600 transition-colors duration-500" />
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600/20 rounded-2xl transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
                  </div>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={`flex flex-col p-8 rounded-[2.5rem] border border-transparent transition-all duration-500 group hover:shadow-xl hover:-translate-y-2 ${item.hoverClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {item.illustration}
                <div>
                  <h3 className={`font-bold text-2xl mb-4 text-black tracking-tight transition-colors duration-500 group-hover:${item.accentColor}`}>{item.title}</h3>
                  <p className="text-tertiary text-lg leading-relaxed group-hover:text-black/80 transition-colors duration-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-48 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[5.5rem] font-bold mb-16 leading-[1] tracking-[-0.04em] text-black">
            The most realistic <br /> 
            <span className="whitespace-nowrap"><VoiceMorph className="px-4" /> AI platform</span>
          </h2>
          <div className="flex justify-center gap-6">
            <Link to="/login" className="bg-black text-white px-16 py-6 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl inline-block">Get started for free</Link>
            <Link to="/login" className="bg-surface-container-highest text-black px-16 py-6 rounded-full font-bold text-xl hover:bg-surface-container transition-all inline-block border border-black/5">Talk to sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
