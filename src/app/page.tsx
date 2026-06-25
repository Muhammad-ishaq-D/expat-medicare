import { Shield, ChevronDown, Check, Minus, ArrowRight, PlayCircle, CalendarDays, Award, Globe, Headphones, Phone, Lock, ShieldCheck } from "lucide-react";
import heroFamily from "@/assets/hero-family.png";
import { Header } from "@/components/header";
import Image from "next/image";

export const metadata = {
  title: "International Health Insurance for Expats | ExpatMedicare",
  description: "Compare leading international health insurance plans and get expert, independent advice for you, your partner and family—wherever life takes you.",
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        {/* Full Bleed Right Image */}
        <div className="absolute right-0 top-0 h-[55%] lg:h-full w-full lg:w-[60%] z-0">
          <Image
            src={heroFamily}
            alt="Happy expat family"
            fill
            priority
            className="object-cover object-top lg:object-[65%_top]"
          />
          {/* Blur strip on the left edge of the image (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block pointer-events-none absolute left-0 top-0 h-full w-[160px]"
            style={{
              backdropFilter: "blur(14px)",
              WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
            }}
          />
          {/* Color fade blending image into hero background (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block pointer-events-none absolute left-0 top-10 h-full w-[260px]"
            style={{
              background:
                "linear-gradient(to right, var(--color-hero-bg) 0%, color-mix(in oklab, var(--color-hero-bg) 65%, transparent) 35%, transparent 100%)",
            }}
          />
          {/* Mobile blur strip on the bottom edge */}
          <div
            aria-hidden
            className="lg:hidden pointer-events-none absolute left-0 bottom-0 w-full h-[140px]"
            style={{
              backdropFilter: "blur(14px)",
              WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
            }}
          />
          {/* Mobile color fade blending image into hero background */}
          <div
            aria-hidden
            className="lg:hidden pointer-events-none absolute left-0 bottom-0 w-full h-[520px]"
            style={{
              background:
                "linear-gradient(to top, var(--color-hero-bg) 0%, color-mix(in oklab, var(--color-hero-bg) 75%, transparent) 40%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-8 xl:px-10 pt-[180px] sm:pt-[240px] lg:pt-20 pb-16 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center min-h-[400px] md:min-h-[500px]">
            {/* Left */}
            <div className="max-w-[620px] relative z-20">
              <h1 className="font-serif text-[42px] sm:text-[48px] md:text-[50px] xl:text-[58px] font-bold leading-[1.1] md:leading-[1.08] tracking-tight text-navy">
                International Health Insurance for Expats,{" "}
                <span className="relative italic font-medium text-teal whitespace-nowrap">
                  Made Simple.
                  <svg className="absolute -bottom-2 left-0 w-[92%]" height="10" viewBox="0 0 380 10" preserveAspectRatio="none">
                    <path d="M2 6 Q 95 1, 190 5 T 378 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 md:mt-8 max-w-[520px] text-[15px] md:text-[16px] leading-[1.6] md:leading-[1.7] text-muted-foreground">
                Compare leading international health insurance plans and get expert, independent advice tailored for you, your partner and your family—wherever life takes you.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <button className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-md bg-navy px-7 py-4 text-[16px] font-semibold text-navy-foreground hover:bg-navy/90 transition-colors">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-white/70"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                  Get Free Quote
                </button>
                <button className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-md border border-navy bg-white/80 backdrop-blur-sm lg:bg-white px-7 py-4 text-[16px] font-semibold text-navy hover:bg-muted transition-colors">
                  <PlayCircle className="h-6 w-6" strokeWidth={1.5} />
                  How It Works
                </button>
              </div>
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-6 text-[13px] sm:text-[14px] font-medium text-navy">
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-teal" /> Independent advice</div>
                <div className="hidden sm:block h-4 w-px bg-navy/20"></div>
                <div className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-teal" /> Since 2008</div>
                <div className="hidden sm:block h-4 w-px bg-navy/20"></div>
                <div className="flex items-center gap-2"><Award className="h-5 w-5 text-teal" /> No-obligation comparison</div>
              </div>
            </div>

            {/* Right – cards */}
            <div className="relative h-full w-full hidden lg:block z-20">
              {/* Compare Plans card – top right */}
              <div className="absolute right-0 top-[-40px] w-[260px] rounded-xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-bold text-navy">Compare Plans</h3>
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-teal/10"><ShieldCheck className="h-3.5 w-3.5 text-teal" /></div>
                </div>
                <div className="mt-3 grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-4 gap-y-2.5 text-[11px]">
                  <span className="font-semibold text-muted-foreground">Insurer</span>
                  <span className="font-semibold text-muted-foreground">Essential</span>
                  <span className="font-semibold text-muted-foreground">Classic</span>
                  <span className="font-semibold text-muted-foreground">Premium</span>

                  <InsurerRow icon={<ShieldCheck className="h-3 w-3 text-white" />} bg="bg-[#2563eb]" label="Insurer A" cells={[true, true, true]} />
                  <InsurerRow letter="B" bg="bg-[#10b981]" label="Insurer B" cells={[true, true, false]} />
                  <InsurerRow letter="C" bg="bg-[#a855f7]" label="Insurer C" cells={[false, true, true]} />
                </div>
                <button className="mt-3 flex w-full items-center justify-between rounded-md bg-muted px-2.5 py-2 text-[12px] font-semibold text-navy hover:bg-muted/80 transition-colors">
                  View all plans <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Comprehensive Coverage card – bottom right */}
              <div className="absolute right-[20px] bottom-[-20px] w-[240px] rounded-xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-bold text-navy">Comprehensive Coverage</h3>
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/10"><ShieldCheck className="h-3.5 w-3.5 text-teal" /></div>
                </div>
                <ul className="mt-3 space-y-2 text-[12px] text-foreground">
                  {[
                    "Inpatient & day-patient care",
                    "Outpatient & specialist consultations",
                    "Emergency & evacuation",
                    "Maternity & newborn care",
                    "Mental health support",
                    "Worldwide coverage",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-muted-foreground leading-snug">
                      <span className="grid h-3.5 w-3.5 mt-0.5 shrink-0 place-items-center rounded-full bg-teal"><Check className="h-2 w-2 text-white" strokeWidth={4} /></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-30 bg-navy text-navy-foreground border-t border-white/10">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-5 md:px-10 py-6 text-[14px] md:text-[15px] lg:grid-cols-4">
            <TrustItem icon={<Globe className="h-5 w-5" strokeWidth={1.5} />}><strong className="font-semibold">Worldwide support</strong>, wherever life takes you.</TrustItem>
            <TrustItem icon={<Headphones className="h-5 w-5" strokeWidth={1.5} />}>Local experts</TrustItem>
            <TrustItem icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}>24/7 Assistance</TrustItem>
            <TrustItem icon={<Shield className="h-5 w-5" strokeWidth={1.5} />}>Trusted by expats in 170+ countries</TrustItem>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-b border-border bg-white relative z-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-between gap-6 md:gap-8 px-5 md:px-10 py-8 lg:flex lg:flex-nowrap">
          <Review brand="feefo" rating="4.9/5 from 1,200+ reviews" color="text-[#2d2d2d]" />
          <Review brand="★ TrustPilot" rating="4.8/5 from 900+ reviews" color="text-[#00b67a]" />
          <Review brand="Google" rating="4.9/5 from 900+ reviews" colored />
          <div className="text-[13px] shrink-0">
            <div className="text-muted-foreground">Broker at</div>
            <div className="mt-1 inline-block border border-foreground px-3 py-1 font-serif text-[15px] font-bold tracking-wider">LLOYD'S</div>
            <div className="mt-1 text-muted-foreground">Lloyd's Broker</div>
          </div>
          <div className="text-[13px] shrink-0">
            <div className="text-[22px] font-extrabold text-navy leading-none">IAPA</div>
            <div className="mt-1 text-navy">International Association</div>
            <div className="text-navy">of Providers of Assistance</div>
          </div>
          <div className="flex items-center gap-3 text-[13px] shrink-0 sm:col-span-2 lg:col-span-1">
            <Lock className="h-7 w-7 text-foreground" strokeWidth={1.5} />
            <div>
              <div className="font-medium text-navy">Your data is secure</div>
              <div className="text-muted-foreground">and confidential</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InsurerRow({ letter, icon, bg, label, cells }: { letter?: string; icon?: React.ReactNode; bg: string; label: string; cells: boolean[] }) {
  return (
    <>
      <div className="flex items-center gap-1.5">
        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded text-[10px] font-bold text-white ${bg}`}>
          {icon ?? letter}
        </span>
        <span className="text-[12px] font-medium text-navy">{label}</span>
      </div>
      {cells.map((on, i) => (
        <div key={i} className="flex items-center justify-center">
          {on ? (
            <span className="grid h-4 w-4 place-items-center rounded-full bg-teal/15"><Check className="h-2.5 w-2.5 text-teal" strokeWidth={3.5} /></span>
          ) : (
            <Minus className="h-3.5 w-3.5 text-muted-foreground/40" />
          )}
        </div>
      ))}
    </>
  );
}

function TrustItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white/90">{icon}</span>
      <span className="text-white/90">{children}</span>
    </div>
  );
}

function Review({ brand, rating, color = "", colored = false }: { brand: string; rating: string; color?: string; colored?: boolean }) {
  return (
    <div className="shrink-0">
      <div className="flex items-center gap-2">
        {colored ? (
          <span className="text-[20px] font-medium">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        ) : (
          <span className={`text-[18px] font-bold ${color}`}>{brand}</span>
        )}
        <span className="text-[14px] tracking-tight text-[#f5a623]">★★★★★</span>
      </div>
      <div className="mt-1 text-[12px] text-muted-foreground">{rating}</div>
    </div>
  );
}
