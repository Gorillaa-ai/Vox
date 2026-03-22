import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32 pt-12">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[3.5rem] md:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.04em] mb-8 text-black">
              Bringing voice <br />
              to life
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-block">Sign up</Link>
              <Link to="/login" className="bg-white text-black border border-black/10 px-10 py-4.5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all inline-block">Contact sales</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-tertiary text-lg md:text-xl leading-relaxed max-w-xl self-end text-right lg:text-left"
          >
            <p>Powering the best enterprises, creators, and developers. From VOX Agents for customer experience, VOX Creative for content creation, to the leading AI voice generator.</p>
          </motion.div>
        </div>

        {/* Interface Preview Container (IMAGE_15 Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-surface-container rounded-[2.5rem] p-4 md:p-8 overflow-hidden border border-black/5 ambient-shadow"
        >
          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 p-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => alert('VOX Creative selected')}
                className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-full font-semibold border border-black/5 shadow-sm transition-all hover:bg-gray-50"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                VOX Creative
              </button>
              <button 
                onClick={() => alert('VOX Agents selected')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-tertiary hover:text-black transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                VOX Agents
              </button>
            </div>
            
            <div className="bg-white rounded-[2rem] overflow-hidden border border-black/5 flex h-[600px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-black/5 bg-surface-container-low flex flex-col">
                <div className="p-6 border-b border-black/5">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">V</div>
                    <span className="font-bold text-sm">VOX Creative</span>
                  </div>
                  <div className="space-y-1">
                    {['Editor', 'Voices', 'Music', 'SFX', 'Video'].map((item, i) => (
                      <div key={i} className={`px-4 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'bg-black text-white' : 'text-tertiary hover:bg-surface-container'}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-grow overflow-y-auto">
                  <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-4">Recent Projects</p>
                  <div className="space-y-4">
                    {['Podcast Intro', 'Ad Campaign', 'Audiobook Ch 1'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-xs">📄</div>
                        <span className="text-xs font-bold text-black group-hover:text-secondary transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Main Editor */}
              <div className="flex-grow flex flex-col bg-white">
                <div className="h-16 border-b border-black/5 flex items-center justify-between px-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold">Untitled Project</span>
                    <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded font-bold text-tertiary">DRAFT</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => alert('Sharing project...')}
                      className="text-sm font-bold text-tertiary hover:text-black"
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
                        <img src="https://picsum.photos/seed/voice1/40/40" className="w-10 h-10 rounded-full border border-black/5" referrerPolicy="no-referrer" alt="Voice" />
                        <div>
                          <p className="text-xs font-bold">Rachel</p>
                          <p className="text-[10px] text-tertiary">American • Professional</p>
                        </div>
                      </div>
                      <p className="text-2xl font-medium leading-relaxed text-on-background/80">
                        In a world where technology meets creativity, VOX stands at the forefront of the audio revolution. Our mission is to empower creators with the most realistic AI voices ever built.
                      </p>
                    </div>
                    <div className="h-px bg-black/5 w-full"></div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img src="https://picsum.photos/seed/voice2/40/40" className="w-10 h-10 rounded-full border border-black/5" referrerPolicy="no-referrer" alt="Voice" />
                        <div>
                          <p className="text-xs font-bold">Marcus</p>
                          <p className="text-[10px] text-tertiary">British • Narrative</p>
                        </div>
                      </div>
                      <p className="text-2xl font-medium leading-relaxed text-on-background/80">
                        Whether you're building a global brand or telling a personal story, the right voice makes all the difference. Experience the power of emotion, nuance, and perfect delivery.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Audio Player Bar */}
                <div className="h-20 border-t border-black/5 bg-surface-container-low flex items-center px-8 gap-8">
                  <button 
                    onClick={() => alert('Playing project...')}
                    className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-105 transition-transform"
                  >
                    ▶
                  </button>
                  <div className="flex-grow h-1 bg-black/5 rounded-full relative">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-black rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-black rounded-full shadow-lg"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold">01:24 / 04:12</span>
                    <span className="text-lg">🔊</span>
                  </div>
                </div>
              </div>
              {/* Right Panel - Voice Selection */}
              <div className="w-72 border-l border-black/5 bg-surface-container-low p-6 overflow-y-auto">
                <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-6">Voice Library</p>
                <div className="space-y-3">
                  {[
                    { name: 'Rachel', tags: 'American, Professional', img: 'voice1' },
                    { name: 'Marcus', tags: 'British, Narrative', img: 'voice2' },
                    { name: 'Elena', tags: 'Spanish, Warm', img: 'voice3' },
                    { name: 'Kenji', tags: 'Japanese, Calm', img: 'voice4' },
                    { name: 'Sophie', tags: 'French, Elegant', img: 'voice5' }
                  ].map((voice, i) => (
                    <div key={i} className={`p-3 rounded-xl border transition-all cursor-pointer ${i === 0 ? 'bg-white border-black/10 shadow-sm' : 'border-transparent hover:bg-surface-container'}`}>
                      <div className="flex items-center gap-3">
                        <img src={`https://picsum.photos/seed/${voice.img}/32/32`} className="w-8 h-8 rounded-full border border-black/5" referrerPolicy="no-referrer" alt={voice.name} />
                        <div>
                          <p className="text-xs font-bold">{voice.name}</p>
                          <p className="text-[10px] text-tertiary">{voice.tags}</p>
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
        </motion.div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-black/5 py-24 mb-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-16">
            <p className="font-bold text-sm text-black tracking-tight">Trusted by leading developers and enterprises</p>
            <Link to="/login" className="px-8 py-2.5 rounded-full border border-black/10 text-sm font-bold hover:bg-surface-container transition-colors inline-block">Read all stories</Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-16 items-center opacity-30 grayscale hover:opacity-100 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">TWILIO</div>
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">DISNEY</div>
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">KPN</div>
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">TVS</div>
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">TELUS</div>
            <div className="h-6 flex items-center justify-center font-bold text-tertiary">NVIDIA</div>
          </div>
        </div>
      </section>

      {/* Two Platforms Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="mb-20">
          <h2 className="text-[4rem] font-bold mb-12 leading-[1.05] tracking-tight">Two platforms built on the <br /> same research foundation</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-bold text-2xl mb-4">VOX Creative</p>
              <p className="text-tertiary text-xl leading-relaxed">Generate ultra-realistic speech, videos, music, and sound effects.</p>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4">VOX Agents</p>
              <p className="text-tertiary text-xl leading-relaxed">Configure, deploy and monitor conversational agents.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2.5rem] bg-surface-container p-4 border border-black/5 shadow-2xl">
          <img 
            alt="Platform Foundation Interface" 
            className="w-full h-auto rounded-[2rem]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uihqrOq9dnhlRD7QYRe1c8-wLmy5PAVQb7wppIQ5nSSvSBsCAxVtZB92DtN7eZ-W6eANLFpLnas2oOlYoZKfek5wKnhshgMDGL2oyvF9F61ttMz8VRuplqvlaWHxyyq-3bmZamfWGn9ZEP2jGdpUDwKwIwkLJHK-610j223Zzmsz6jK70McW9WrLOvCRnXTogxH79-nQZJd83ifEcOS-HtBGfM360TNUHV72_Xes8kvh8pmOPc3jT79hlxuSS48FqS2jLOuk_dqCj8"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* VOX Creative Showcase */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <span className="font-mono text-xs font-bold text-secondary mb-6 block uppercase tracking-[0.2em]">VOX Creative</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight">Create, edit and localize <br /> in one AI platform</h2>
            <Link to="/pricing" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-block">Learn more</Link>
          </div>
          <div className="text-tertiary text-xl leading-relaxed max-w-xl">
            <p>Create ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive sound effects. Craft your next film, ad, audiobook, or podcast with our all-in-one platform.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* All-in-one AI editor Card */}
          <div className="bg-surface-container rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between group">
            <div className="mb-12 relative">
              <img 
                alt="All-in-one editor" 
                className="w-full rounded-2xl shadow-2xl border border-black/5" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiENLLWwrJDXEv1o0R9oemn1N30xYcxsELc-j7Qg5B2vToo2ZH0XAedIynufWLujefl6Snxj_2OHKl_exvj7lrMXlBVObs9IoxjkRvO3FrieAWdPnv8jJRULKp352l9ZpEIwcKcZ9xt_HTqDN_ml1AsNYuZJSczdoX8ADIRGaCjholBBftnh1TNEQSbNLhi9PbUeXHFiifyATQOiPgIV6BZ-RiNRsiMptQ-a_fRCixOtIaisy2DD2YfhW017MDIV7mhtiEmtphhDxk"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-2xl mb-4">All-in-one AI editor</p>
              <p className="text-tertiary text-lg leading-relaxed">Create podcasts, audiobooks and voiceovers in an editor built on all of VOX' audio research combined.</p>
            </div>
          </div>
          {/* Ultra-realistic speech Card */}
          <div className="bg-surface-container rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 mb-12">
              <div className="space-y-4 mb-8">
                <p className="text-on-background italic leading-relaxed text-sm">In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros...</p>
              </div>
              <div className="flex items-center justify-between border-t border-black/5 pt-6">
                <div className="flex gap-4 items-center">
                  <span className="text-xs font-bold">🇺🇸 English</span>
                  <span className="text-xs font-bold text-tertiary">Spuds Oxley</span>
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
              <p className="font-bold text-2xl mb-4">Ultra-realistic speech</p>
              <p className="text-tertiary text-lg leading-relaxed">Create controllable, expressive speech layered across 70+ languages.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🎵', title: 'Music', desc: 'Generate studio-quality tracks instantly, any genre, style, vocals or instrumental.' },
            { icon: '📊', title: 'SFX', desc: 'Create custom sound effects, soundscapes and ambient audio or search the SFX library.' },
            { icon: '🎙️', title: 'Voices', desc: 'Clone a replica of your own voice, design one from a prompt, or explore 1000s of voices.' },
            { icon: '🎥', title: 'Image & Video', desc: 'Create or edit images and turn ideas into videos with leading models like Veo, Sora, Wan, Kling and Seedance.' }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container p-10 rounded-[2rem] border border-black/5 hover:bg-white transition-colors">
              <span className="text-3xl mb-6 block">{item.icon}</span>
              <p className="font-bold text-xl mb-3">{item.title}</p>
              <p className="text-sm text-tertiary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VOX Agents Showcase */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <span className="font-mono text-xs font-bold text-secondary mb-6 block uppercase tracking-[0.2em]">VOX Agents</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight">Deploy agents that talk, <br /> type, and take action</h2>
            <Link to="/pricing" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg inline-block">Learn more</Link>
          </div>
          <div className="text-tertiary text-xl leading-relaxed max-w-xl">
            <p>Configure, deploy and monitor natural, human-sounding agents in 70+ languages with leading accuracy and ultra-low latency across voice or chat.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Omnichannel Card */}
          <div className="bg-[#0a2e24] rounded-[2.5rem] p-12 text-white relative overflow-hidden h-[500px] flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 space-y-4 max-w-sm">
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 self-end ml-auto">
                <p className="text-sm font-medium">Can I get a refund?</p>
              </div>
              <div className="bg-white p-4 rounded-2xl text-black">
                <p className="text-sm font-medium">Sure. Can you share your order number please?</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 self-end ml-auto">
                <p className="text-sm font-medium">It's EL4543490</p>
              </div>
              <div className="bg-white p-4 rounded-2xl text-black">
                <p className="text-sm font-medium">Thank you. I have initiated the order refund process.</p>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full w-fit">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">S</div>
                <span className="text-xs font-bold">Refund completed</span>
              </div>
            </div>
            <div className="relative z-10">
              <p className="font-bold text-2xl mb-4">Omnichannel agents</p>
              <p className="text-white/70 text-lg leading-relaxed">Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp.</p>
            </div>
          </div>
          {/* Analytics Card */}
          <div className="bg-surface-container rounded-[2.5rem] p-12 border border-black/5 flex flex-col justify-between">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-black/5 mb-12">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-tertiary uppercase tracking-widest">Success rate</span>
                <span className="text-2xl font-bold">61.5%</span>
              </div>
              <div className="h-40 flex items-end gap-2 relative">
                <div className="w-full bg-blue-100 h-[60%] rounded-t-lg"></div>
                <div className="w-full bg-blue-500 h-[85%] rounded-t-lg relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-3 rounded-full whitespace-nowrap">● 87.37%</div>
                </div>
                <div className="w-full bg-blue-200 h-[70%] rounded-t-lg"></div>
                <div className="w-full bg-blue-400 h-[90%] rounded-t-lg"></div>
              </div>
            </div>
            <div>
              <p className="font-bold text-2xl mb-4">Analytics</p>
              <p className="text-tertiary text-lg leading-relaxed">Easily measure success rates and CX metrics, optimizing flows over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-mono text-xs font-bold text-secondary mb-6 block uppercase tracking-[0.2em]">VOX API</span>
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight">Build anything with a <br /> powerful host of APIs</h2>
            <p className="text-2xl text-tertiary mb-12 leading-relaxed">Our low-latency API delivers synthesized audio in under 300ms, making it perfect for real-time applications.</p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-secondary">{'</>'}</span>
                <span className="font-mono text-sm font-semibold">SDKs for Python, Node.js, Go, and Ruby</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-secondary">⚡</span>
                <span className="font-mono text-sm font-semibold">Ultra-low latency streaming</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-secondary">🛡️</span>
                <span className="font-mono text-sm font-semibold">Enterprise-grade security and uptime</span>
              </div>
            </div>
            <Link to="/login" className="bg-black text-white px-10 py-4.5 rounded-full font-bold text-lg hover:opacity-90 shadow-lg inline-block">Read documentation</Link>
          </div>
          <div className="bg-[#111] rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="flex gap-4 mb-8 border-b border-white/10 pb-6 items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-white/40 text-xs font-mono ml-4">index.js</span>
            </div>
            <pre className="font-mono text-base text-white/90 leading-relaxed overflow-x-auto">
              <span className="text-blue-400">import</span> {'{ VOXClient }'} <span className="text-blue-400">from</span> <span className="text-green-400">'vox-ai'</span>;{'\n\n'}
              <span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> VOXClient({'{'}{'\n'}
              {'  '}apiKey: <span className="text-green-400">'YOUR_API_KEY'</span>{'\n'}
              {'}'});{'\n\n'}
              <span className="text-blue-400">const</span> audio = <span className="text-blue-400">await</span> client.generate({'{'}{'\n'}
              {'  '}voice: <span className="text-green-400">"Rachel"</span>,{'\n'}
              {'  '}text: <span className="text-green-400">"Hello, I am a VOX synthesized voice."</span>,{'\n'}
              {'  '}model_id: <span className="text-green-400">"vox_multilingual_v2"</span>{'\n'}
              {'}'});
            </pre>
          </div>
        </div>
      </section>

      {/* Social Proof (Dark Section) */}
      <section className="bg-black py-40 mb-48 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24">
            <h2 className="text-6xl font-bold mb-8 leading-[1.05] tracking-tight">Global impact of <br /> AI audio research</h2>
            <p className="text-white/60 text-2xl max-w-3xl leading-relaxed">From accessibility to creative entertainment, our models are redefining how we interact with technology.</p>
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Preserving voices for ALS patients</h3>
              <p className="text-white/60 text-lg">Medical breakthrough in synthetic speech.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-video">
                <img 
                  alt="Gaming Impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5k_Ili_-AzhDNfpb_FFAM2toJgF8_0F9CaTTj3Phl9f8olUnf5k_RR6PryIHgevC0ghDovO0zekw6Y0Pslo1iOK_NvCrrfMZltaVpQVmKl8GQGQr-D4O0Xi5PHOQHFKraZXjjIjEZA5-NzIn4oInLt2gGNQslw_dZKMyRFba31NU3jpS9GlgXXSociCz7llCtM2o1d58FD1omjWeImcrNaT-akDHjd9vtf0LPQdmnn2_6E8PeHzaj6pfouEPgTdEDYAEcM31z4jtw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Next-gen Gaming Narratives</h3>
              <p className="text-white/60 text-lg">Dynamic storytelling in open-world RPGs.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-video">
                <img 
                  alt="Audiobooks Impact" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7mCAAiUdHGGy0Klym3ZHbgAPUf-P3u5TbI_GlAk7u9ln5FpeSAEZv6OAbEk6t3hZF44rhfp4SR-P5YP3mpOpEVZCSvgRKrqiBp1WIcM-DZ4dKWWbMrdFiKgVOuDP0BS-10G6D-Xh7kC6-7ivTncIYxgSpxgHEbDvVOwI2JcsUGOCoErpkropAobVwn5S3TACxRRHQidUI7uI_2A42z71fqvnC4sSABO9Q0N7oMRUhP0Ffp8wcsGjTDGCK-wnrsJ0uf6tkKLw-D2E"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-7xl text-white">▶</span>
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-3 tracking-tight">Revolutionizing Audiobooks</h3>
              <p className="text-white/60 text-lg">High-scale narration for independent authors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="bg-surface-container rounded-[3rem] p-24 border border-black/5">
          <div className="max-w-3xl mb-24">
            <h2 className="text-5xl font-bold mb-8 text-black tracking-tight">Safety, built in</h2>
            <p className="text-2xl text-tertiary leading-relaxed">We prioritize ethical development and deployment of AI technology through comprehensive safeguards.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-20">
            {[
              { icon: '🛡️', title: 'Moderation', desc: 'Real-time content filtering to prevent misuse and harmful content.' },
              { icon: '⚖️', title: 'Accountability', desc: 'Strict verification for voice cloning and clear usage policies.' },
              { icon: '📜', title: 'Provenance', desc: 'AI speech classifier to identify content generated by our models.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-8">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-secondary shadow-sm text-3xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-4 text-black tracking-tight">{item.title}</h3>
                  <p className="text-tertiary text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-48 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[5.5rem] font-bold mb-16 leading-[1] tracking-[-0.04em] text-black">The most realistic <br /> voice AI platform</h2>
          <div className="flex justify-center gap-6">
            <Link to="/login" className="bg-black text-white px-16 py-6 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-xl inline-block">Get started for free</Link>
            <Link to="/login" className="bg-surface-container-highest text-black px-16 py-6 rounded-full font-bold text-xl hover:bg-surface-container-high transition-all inline-block">Talk to sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
