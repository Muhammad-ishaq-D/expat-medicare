"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-8 xl:px-10 transition-all duration-300 ${isScrolled ? "h-[70px] md:h-[76px]" : "h-[76px] md:h-[88px]"}`}>
        <a href="/" className="flex items-baseline text-[22px] md:text-[24px] xl:text-[26px] tracking-tight">
          <span className="text-navy font-extrabold">EXPAT</span>
          <span className="text-teal font-semibold">MEDICARE</span>
        </a>
        <nav className="hidden items-center gap-4 lg:gap-5 xl:gap-8 text-[14px] xl:text-[15px] font-medium text-foreground lg:flex">
          <button className="flex items-center gap-1 hover:text-navy whitespace-nowrap">Health Insurance <ChevronDown className="h-4 w-4" strokeWidth={2.5} /></button>
          <a href="#" className="hover:text-navy whitespace-nowrap">Travel Insurance</a>
          <a href="#" className="hover:text-navy whitespace-nowrap">Group Insurance</a>
          <a href="#" className="hover:text-navy">About</a>
          <a href="#" className="hover:text-navy">Blog</a>
          <a href="#" className="hover:text-navy">Contact</a>
        </nav>
        <div className="flex items-center gap-3 md:gap-5 xl:gap-6">
          <div className="hidden items-center gap-3 xl:gap-4 text-[13px] xl:text-[15px] font-medium text-muted-foreground lg:flex" style={{ fontFamily: "'Inter','Noto Sans SC',sans-serif" }}>
            <span className="h-5 w-px bg-border" />
            <button className="relative text-navy">
              EN
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-teal" />
            </button>
            <button className="hover:text-navy">FR</button>
            <button className="hover:text-navy">中文</button>
          </div>
          <button className="hidden md:block rounded-md bg-navy px-4 xl:px-6 py-2.5 xl:py-3 text-[14px] xl:text-[15px] font-semibold text-navy-foreground hover:bg-navy/90 transition-colors whitespace-nowrap">
            Get a Quote
          </button>
          <button 
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-5 flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-3 text-[16px] font-medium text-foreground">
            <button className="flex items-center justify-between py-2 border-b border-border hover:text-navy">Health Insurance <ChevronDown className="h-4 w-4" /></button>
            <a href="#" className="py-2 border-b border-border hover:text-navy">Travel Insurance</a>
            <a href="#" className="py-2 border-b border-border hover:text-navy">Group Insurance</a>
            <a href="#" className="py-2 border-b border-border hover:text-navy">About</a>
            <a href="#" className="py-2 border-b border-border hover:text-navy">Blog</a>
            <a href="#" className="py-2 border-b border-border hover:text-navy">Contact</a>
          </div>
          <div className="flex items-center gap-4 pt-2 text-[15px] font-medium text-muted-foreground">
            <button className="text-navy font-bold">EN</button>
            <span className="h-4 w-px bg-border" />
            <button className="hover:text-navy">FR</button>
            <span className="h-4 w-px bg-border" />
            <button className="hover:text-navy">中文</button>
          </div>
          <button className="mt-4 w-full rounded-md bg-navy px-6 py-3 text-[16px] font-semibold text-navy-foreground hover:bg-navy/90 transition-colors">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
