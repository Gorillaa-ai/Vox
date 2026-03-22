import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Apple, ShieldCheck } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-20">
      <main className="flex-grow flex items-center justify-center px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
            <p className="text-tertiary">Enter your details to access your account</p>
          </div>

          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-black/10 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-black/10 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all">
              <Apple className="w-4 h-4" />
              Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-black/10 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all">
              <ShieldCheck className="w-4 h-4" />
              Continue with SSO
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-tertiary font-bold tracking-widest">Or</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-tertiary uppercase tracking-widest mb-2 ml-1">Email address</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-white border border-black/10 px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-[10px] font-bold text-tertiary uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white border border-black/10 px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
              />
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full font-bold text-sm mt-4 hover:opacity-90 transition-all shadow-lg">
              Sign in
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-tertiary">
            Don't have an account? <Link to="/login" className="text-black font-bold hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </main>

      <footer className="py-8 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-tertiary uppercase tracking-widest">
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Privacy Policy</a>
          </div>
          <p>© 2024 VOX AI Audio Platform</p>
        </div>
      </footer>
    </div>
  );
}
