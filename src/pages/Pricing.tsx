import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    { name: 'Free', trial: 'V1.0 TRIAL', price: '0', features: ['10,000 chars', '3 custom voices'], button: 'Start for free' },
    { name: 'Starter', trial: '80% OFF 1ST MONTH', price: '5', features: ['30,000 chars', '10 custom voices'], button: 'Get Started', highlight: true },
    { name: 'Creator', trial: 'MOST POPULAR', price: '22', features: ['100,000 chars', '30 custom voices'], button: 'Choose Creator' },
    { name: 'Pro', trial: 'PROFESSIONAL', price: '99', features: ['500,000 chars', '160 custom voices'], button: 'Choose Pro' },
    { name: 'Scale', trial: 'HIGH VOLUME', price: '330', features: ['2,000,000 chars', '660 custom voices'], button: 'Choose Scale' },
    { name: 'Business', trial: 'CUSTOM QUOTA', price: 'Custom', features: ['Tailored chars', 'Priority support'], button: 'Contact Sales', dark: true }
  ];

  return (
    <div className="pb-20 bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 text-center mb-24 pt-32">
        <h1 className="text-[4.5rem] font-bold tracking-tight leading-[1.1] mb-12 text-black">Pricing plans that <br /> grow with you</h1>
        <div className="flex items-center justify-center gap-6">
          <span className={`text-sm font-bold tracking-tight ${!isAnnual ? 'text-black' : 'text-tertiary'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-surface-container-highest rounded-full relative p-1 flex items-center transition-colors border border-black/5"
          >
            <motion.div 
              animate={{ x: isAnnual ? 28 : 0 }}
              className="w-5 h-5 bg-black rounded-full shadow-md"
            />
          </button>
          <span className={`text-sm font-bold tracking-tight ${isAnnual ? 'text-black' : 'text-tertiary'}`}>Annual (Save 20%)</span>
        </div>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[1.5rem] flex flex-col h-full border transition-all duration-300 ${
                plan.dark ? 'bg-black text-white border-black' : 
                plan.highlight ? 'bg-white border-black/10 shadow-2xl z-10' : 'bg-surface-container border-black/5'
              }`}
            >
              <div className="mb-10">
                <h3 className="font-bold text-xl mb-2 tracking-tight">{plan.name}</h3>
                <p className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-6 ${plan.highlight ? 'text-secondary' : 'text-tertiary'}`}>{plan.trial}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tighter">{plan.price !== 'Custom' ? `$${plan.price}` : plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm font-bold text-tertiary">/mo</span>}
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm items-start">
                    <span className="text-secondary font-bold mt-0.5">✓</span>
                    <span className={`font-medium leading-relaxed ${plan.dark ? 'text-white/70' : 'text-tertiary'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/login"
                className={`w-full py-4 rounded-full text-sm font-bold transition-all shadow-sm text-center inline-block ${
                plan.dark ? 'bg-white text-black hover:bg-gray-100' : 
                plan.highlight ? 'bg-black text-white hover:opacity-90' : 'bg-surface-container-highest text-black border border-black/5 hover:bg-surface-container-high'
              }`}>
                {plan.button}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-7xl mx-auto px-8 mb-48 overflow-x-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">Compare features</h2>
        <div className="min-w-[800px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/5">
                <th className="py-8 font-bold text-tertiary text-xs uppercase tracking-widest">Plan Details</th>
                <th className="py-8 font-bold text-center text-sm">Free</th>
                <th className="py-8 font-bold text-center text-sm">Starter</th>
                <th className="py-8 font-bold text-center text-sm">Creator</th>
                <th className="py-8 font-bold text-center text-sm">Pro+</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { label: 'Characters per Month', values: ['10,000', '30,000', '100,000', '500,000+'] },
                { label: 'Voice Cloning (Instant)', values: ['✓', '✓', '✓', '✓'] },
                { label: 'Professional Voice Cloning', values: ['—', '—', '✓', '✓'] },
                { label: 'Commercial Rights', values: ['—', '✓', '✓', '✓'] },
                { label: 'API Access', values: ['✓', '✓', '✓', '✓'] }
              ].map((row, i) => (
                <tr key={i} className="border-b border-black/5 hover:bg-surface-container/30 transition-colors">
                  <td className="py-8 font-bold text-black">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className={`py-8 text-center font-medium ${val === '✓' ? 'text-secondary font-bold text-lg' : 'text-tertiary'}`}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-8 mb-48">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How do character limits work?', a: 'Characters are counted based on the text you synthesize. Each month your quota resets. If you run out, you can upgrade your plan at any time.' },
            { q: 'Can I use the voices commercially?', a: 'Commercial rights are included starting from the Starter plan. Free plan users must credit VOX.' },
            { q: 'Is there a discount for annual billing?', a: 'Yes, choosing annual billing saves you 20% across all paid plans compared to the monthly subscription rate.' }
          ].map((faq, i) => (
            <div key={i} className="bg-surface-container p-10 rounded-[2rem] border border-black/5">
              <h4 className="font-bold text-xl mb-4 tracking-tight">{faq.q}</h4>
              <p className="text-tertiary text-lg leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="bg-surface-container-highest rounded-[3rem] p-24 flex flex-col items-center text-center border border-black/5 shadow-xl">
          <h2 className="text-5xl font-bold mb-8 tracking-tight">Need a custom enterprise solution?</h2>
          <p className="text-tertiary max-w-2xl mb-12 text-xl leading-relaxed">Our Enterprise plan offers volume discounts, higher rate limits, and dedicated support for organizations scaling their audio content.</p>
          <div className="flex gap-6">
            <Link to="/login" className="bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl inline-block">Contact Sales</Link>
            <Link to="/login" className="bg-white text-black border border-black/10 px-12 py-5 rounded-full font-bold text-lg hover:bg-surface-container transition-all inline-block">View API Docs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
