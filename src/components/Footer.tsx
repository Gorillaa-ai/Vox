import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1 space-y-8">
            <Link to="/" className="text-3xl font-bold tracking-tighter text-black">VOX</Link>
            <p className="text-sm text-tertiary leading-relaxed max-w-xs">
              The world's most advanced AI audio platform. Powering the next generation of creators and enterprises.
            </p>
            <div className="flex gap-4 items-center">
              <a className="text-tertiary hover:text-black transition-colors" href="#" aria-label="X">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a className="text-tertiary hover:text-black transition-colors" href="#" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a className="text-tertiary hover:text-black transition-colors" href="#" aria-label="YouTube">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-black uppercase tracking-widest mb-8">Product</p>
            <ul className="space-y-4">
              <li><Link className="text-sm font-medium text-tertiary hover:text-black transition-colors" to="/">VOX Creative</Link></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">VOX Agents</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">VOX API</a></li>
              <li><Link className="text-sm font-medium text-tertiary hover:text-black transition-colors" to="/pricing">Pricing</Link></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-black uppercase tracking-widest mb-8">Resources</p>
            <ul className="space-y-4">
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Documentation</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Help Center</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">API Status</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Community</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Safety Center</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-black uppercase tracking-widest mb-8">Company</p>
            <ul className="space-y-4">
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">About Us</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Careers</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Press</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Blog</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold text-black uppercase tracking-widest mb-8">Legal</p>
            <ul className="space-y-4">
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Cookie Policy</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Security</a></li>
              <li><a className="text-sm font-medium text-tertiary hover:text-black transition-colors" href="#">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer border border-black/5 px-4 py-2 rounded-full hover:bg-surface-container transition-colors">
            <span className="text-lg">🌐</span>
            <span className="text-xs font-bold">English (US)</span>
            <span className="text-[10px]">▼</span>
          </div>
          <p className="text-xs font-medium text-tertiary">© 2024 VOX AI Audio Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
