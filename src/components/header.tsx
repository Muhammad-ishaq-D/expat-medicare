"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-[#f8fafc]/95 backdrop-blur-md shadow-sm border-transparent py-0" 
          : "bg-white border-border"
      }`}
    >
      <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-10 transition-all duration-300 ${isScrolled ? "h-[76px]" : "h-[88px]"}`}>
        <a href="/" className="flex items-baseline text-[26px] tracking-tight">
          <span className="text-navy font-extrabold">EXPAT</span>
          <span className="text-teal font-semibold">MEDICARE</span>
        </a>
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-foreground lg:flex">
          <button className="flex items-center gap-1 hover:text-navy">Health Insurance <ChevronDown className="h-4 w-4" strokeWidth={2.5} /></button>
          <a href="#" className="hover:text-navy">Travel Insurance</a>
          <a href="#" className="hover:text-navy">Group Insurance</a>
          <a href="#" className="hover:text-navy">About</a>
          <a href="#" className="hover:text-navy">Blog</a>
          <a href="#" className="hover:text-navy">Contact</a>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 text-[15px] font-medium text-muted-foreground md:flex" style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif" }}>
            <span className="h-5 w-px bg-border" />
            <button className="relative text-navy">
              EN
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-teal" />
            </button>
            <button className="hover:text-navy">FR</button>
            <button className="hover:text-navy">中文</button>
          </div>
          <button className="rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-navy-foreground hover:bg-navy/90 transition-colors">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
