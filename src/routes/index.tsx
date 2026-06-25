import { createFileRoute } from "@tanstack/react-router";
import { Shield, ChevronDown, Check, Minus, ArrowRight, PlayCircle, CalendarDays, Award, Globe, Headphones, Phone, Lock } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "International Health Insurance for Expats | ExpatMedicare" },
      { name: "description", content: "Compare leading international health insurance plans and get expert, independent advice for you, your partner and family—wherever life takes you." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-10">
          <a href="/" className="flex items-baseline gap-0 text-[26px] font-bold tracking-tight">
            <span className="text-navy">EXPAT</span>
            <span className="text-teal">MEDICARE</span>
          </a>
          <nav className="hidden items-center gap-9 text-[15px] font-medium text-foreground lg:flex">
            <button className="flex items-center gap-1 hover:text-navy">Health Insurance <ChevronDown className="h-4 w-4" /></button>
            <a href="#" className="hover:text-navy">Travel Insurance</a>
            <a href="#" className="hover:text-navy">Group Insurance</a>
            <a href="#" className="hover:text-navy">About</a>
            <a href="#" className="hover:text-navy">Blog</a>
            <a href="#" className="hover:text-navy">Contact</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-4 text-[15px] font-medium text-muted-foreground md:flex">
              <span className="border-r border-border pr-4">|</span>
              <button className="relative text-navy">
                EN
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-teal" />
              </button>
              <button className="hover:text-navy">FR</button>
              <button className="hover:text-navy">中文</button>
            </div>
            <button className="rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-navy-foreground hover:bg-navy/90">
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-hero-bg">
        <div className="relative mx-auto max-w-[1440px] px-10 pt-14 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div className="relative z-10 max-w-[600px]">
              <h1 className="font-serif text-[58px] leading-[1.08] tracking-tight text-navy">
                International Health Insurance for Expats,{" "}
                <span className="relative italic text-teal">
                  Made Simple.
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 380 10" preserveAspectRatio="none">
                    <path d="M2 6 Q 95 1, 190 5 T 378 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-teal" />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 max-w-[520px] text-[16px] leading-[1.7] text-muted-foreground">
                Compare leading international health insurance plans and get expert, independent advice tailored for you, your partner and your family—wherever life takes you.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-[16px] font-semibold text-navy-foreground hover:bg-navy/90">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-white/70"><Check className="h-3.5 w-3.5" /></span>
                  Get Free Quote
                </button>
                <button className="inline-flex items-center gap-3 rounded-md border-2 border-navy bg-white px-7 py-4 text-[16px] font-semibold text-navy hover:bg-navy/5">
                  <PlayCircle className="h-6 w-6" />
                  How It Works
                </button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 text-[14px] text-foreground">
                <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-teal" /> Independent advice</div>
                <div className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-teal" /> Since 2008</div>
                <div className="flex items-center gap-2"><Award className="h-5 w-5 text-teal" /> No-obligation comparison</div>
              </div>
            </div>

            {/* Right – image + cards */}
            <div className="relative">
              <img
                src={heroFamily}
                alt="Happy expat family"
                width={1280}
                height={896}
                className="h-[560px] w-full rounded-md object-cover"
              />
              {/* Compare Plans card */}
              <div className="absolute -left-16 top-6 hidden w-[300px] rounded-xl bg-white p-5 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] xl:block">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-bold text-navy">Compare Plans</h3>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-teal/10"><Shield className="h-4 w-4 text-teal" /></div>
                </div>
                <div className="mt-4 grid grid-cols-[1fr_auto_auto_auto] gap-x-4 gap-y-3 text-[12px]">
                  <span className="font-semibold text-muted-foreground">Insurer</span>
                  <span className="font-semibold text-muted-foreground">Essential</span>
                  <span className="font-semibold text-muted-foreground">Classic</span>
                  <span className="font-semibold text-muted-foreground">Premium</span>

                  {[
                    { l: "A", c: "bg-navy" },
                    { l: "B", c: "bg-teal" },
                    { l: "C", c: "bg-[oklch(0.6_0.2_290)]" },
                  ].map((r, i) => (
                    <Row key={r.l} letter={r.l} color={r.c} cells={[i!==2, true, i!==1]} />
                  ))}
                </div>
                <button className="mt-4 flex w-full items-center justify-between rounded-md bg-muted px-3 py-2.5 text-[13px] font-semibold text-navy">
                  View all plans <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Comprehensive Coverage card */}
              <div className="absolute -right-6 bottom-6 hidden w-[280px] rounded-xl bg-white p-5 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] xl:block">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-bold text-navy">Comprehensive Coverage</h3>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-teal/10"><Shield className="h-4 w-4 text-teal" /></div>
                </div>
                <ul className="mt-4 space-y-2.5 text-[13px] text-foreground">
                  {[
                    "Inpatient & day-patient care",
                    "Outpatient & specialist consultations",
                    "Emergency & evacuation",
                    "Maternity & newborn care",
                    "Mental health support",
                    "Worldwide coverage",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-navy text-navy-foreground">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-10 py-6 text-[15px] lg:grid-cols-4">
            <TrustItem icon={<Globe className="h-6 w-6" />}><strong>Worldwide support</strong>, wherever life takes you.</TrustItem>
            <TrustItem icon={<Headphones className="h-6 w-6" />}>Local experts</TrustItem>
            <TrustItem icon={<Phone className="h-6 w-6" />}>24/7 Assistance</TrustItem>
            <TrustItem icon={<Shield className="h-6 w-6" />}>Trusted by expats in 170+ countries</TrustItem>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-8 px-10 py-8 md:grid-cols-3 lg:grid-cols-6">
          <Review brand="feefo" rating="4.9/5 from 1,200+ reviews" color="text-[#2d2d2d]" />
          <Review brand="★ TrustPilot" rating="4.8/5 from 900+ reviews" color="text-[#00b67a]" />
          <Review brand="Google" rating="4.9/5 from 900+ reviews" colored />
          <div className="text-[13px]">
            <div className="text-muted-foreground">Broker at</div>
            <div className="mt-1 inline-block border border-foreground px-3 py-1 font-serif text-[15px] font-bold tracking-wider">LLOYD'S</div>
            <div className="mt-1 text-muted-foreground">Lloyd's Broker</div>
          </div>
          <div className="text-[13px]">
            <div className="text-[22px] font-extrabold text-navy">IAPA</div>
            <div className="text-navy">International Association</div>
            <div className="text-navy">of Providers of Assistance</div>
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            <Lock className="h-7 w-7 text-foreground" />
            <div>
              <div className="font-medium">Your data is secure</div>
              <div className="text-muted-foreground">and confidential</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Row({ letter, color, cells }: { letter: string; color: string; cells: boolean[] }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className={`grid h-6 w-6 place-items-center rounded text-[11px] font-bold text-white ${color}`}>{letter}</span>
        <span className="text-[13px] font-medium text-foreground">Insurer {letter}</span>
      </div>
      {cells.map((on, i) => (
        <div key={i} className="flex items-center justify-center">
          {on ? (
            <span className="grid h-5 w-5 place-items-center rounded-full bg-teal/15"><Check className="h-3 w-3 text-teal" /></span>
          ) : (
            <Minus className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </>
  );
}

function TrustItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function Review({ brand, rating, color = "", colored = false }: { brand: string; rating: string; color?: string; colored?: boolean }) {
  return (
    <div>
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
