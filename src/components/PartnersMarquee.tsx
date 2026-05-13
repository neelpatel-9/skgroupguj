import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Arvind Limited", industry: "Textiles & Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ARVIND%20LIMITED-x3vNiumF8Vabzza1e7ySItYbvChLAy.png" },
  { name: "Shanti Inorgochem", industry: "Inorganic Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-3AlGwUJrPJT31orzH9eiryCOmvaM3I.webp" },
  { name: "AMCA", industry: "Cleaning Association", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMCA-CmMIwz42gAOHngNYg3XkGJkJoJ2ynp.png" },
  { name: "Asiatic Colour", industry: "Dyes & Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asiatic%20colour-GVeDyMQ8VTyCKYfl9CL8t8lpBwD9HZ.png" },
  { name: "Valiant Organics", industry: "Specialty Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-3-QyrTq9jEm39TNtGi1JTVR9Fwa0omJh.png" },
  { name: "NEPL", industry: "Environmental Solutions", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-07%20at%2012.05.43-HNyNWKzZNPabAMO9mtqZXkfzwOhGmE.jpeg" },
  { name: "Radikale Engineering", industry: "Engineering Services", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/repl_logo.jpg-zEXmWxZeAunsqLhcxxmPRESzwKumTu.jpeg" },
  { name: "Elixir Pharma", industry: "Pharmaceuticals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elixir%20pharma-WB1oEqaolpj1eNsxBlRtvJY72ei7vS.png" },
  { name: "AksharChem", industry: "Chemical Manufacturing", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/akshar%20chemicals-CeiXvf7XUXPafs3S4mkksT9GXwvtx9.png" },
  { name: "Bodal Chemicals", industry: "Specialty Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BODAL%20CHEMICALS-zNVnPArjRnsM0oU91AcXv7lx6DzPjI.png" },
  { name: "Kyati Chemicals", industry: "Chemical Manufacturing", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KYATI%20CHEMICALS-TBdU6upIaKrCnnhjsjZ1oNTLhbANK6.png" },
  { name: "Envisol", industry: "Environmental Solutions", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ARVIND-LtX5VNqkG3xlPWEpGYgzmu1PI7uoqS.png" },
  { name: "Rama Polycon", industry: "Polymer Manufacturing", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rama-6YSDAnrgAlwtk5RAtEMKeKi1p5cRNV.png" },
  { name: "Narayan NOPL", industry: "Chemical Manufacturing", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NARAYAN%20LOGO-ZEZQPaDI5aL5xe2fNisyl6LpfKvUw7.png" },
  { name: "RDIL", industry: "Chemical Industries", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RDIL-qDPaiqDmb0KTTs9sBl8a1E11KmPm17.png" },
  { name: "Unity Organics", industry: "Organic Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unity%20organic-KzpwYCm8TegpMeMarcnEOK4zN4bli6.jpeg" },
  { name: "Pranav Chemicals", industry: "Chemical Manufacturing", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRANAV%20CHEMICALS-bMuPXnblS1BkZgV753Hr2YvTZLQvFG.png" },
  { name: "Navpad Pigments", industry: "Pigments & Chemicals", logo: "https://blobs.vusercontent.net/blob/navpad-logo-2aGKzYhd8A67QAlztPMQaX8Lvq0s62.svg" },
  { name: "Gujarat Police", industry: "Government Security", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gujarat-police-logo-png_seeklogo-611297-JrLRAIfXHWomnWYZ22m7uWEoQZJYGU.png" },
  { name: "K Raheja Corp", industry: "Real Estate Development", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/K_Raheja_Corp.svg-hFTsdtCf83aapX9mJX9h9uY2SL3z6v.png" },
  { name: "i-Hub Gujarat", industry: "Government Enterprise", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ihub-jVDoPCF4n3S6uPSP5Pvc2LTfTukOY6.png" },
  { name: "Dorf Ketal", industry: "Specialty Chemicals", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dorf%20Ketal-0i2XmFuFcgQsh6pw4fsGaTvfKEHCUU.jpeg" },
];

type Partner = { name: string; industry: string; logo: string };

function MarqueeRow({ items, reverse, duration }: { items: Partner[]; reverse: boolean; duration: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const dragState = useRef({ dragging: false, startX: 0, startTx: 0, currentTx: 0, moved: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getTx = () => {
      const m = new DOMMatrixReadOnly(getComputedStyle(track).transform);
      return m.m41;
    };

    const onDown = (clientX: number) => {
      dragState.current.dragging = true;
      dragState.current.moved = false;
      dragState.current.startX = clientX;
      dragState.current.startTx = getTx();
      dragState.current.currentTx = dragState.current.startTx;
      track.style.animation = "none";
      track.style.transform = `translateX(${dragState.current.startTx}px)`;
      setPaused(true);
    };
    const onMove = (clientX: number) => {
      if (!dragState.current.dragging) return;
      const delta = clientX - dragState.current.startX;
      if (Math.abs(delta) > 3) dragState.current.moved = true;
      let tx = dragState.current.startTx + delta;
      const halfWidth = track.scrollWidth / 2;
      if (tx <= -halfWidth) tx += halfWidth;
      if (tx > 0) tx -= halfWidth;
      dragState.current.currentTx = tx;
      track.style.transform = `translateX(${tx}px)`;
    };
    const onUp = () => {
      if (!dragState.current.dragging) return;
      dragState.current.dragging = false;
      const halfWidth = track.scrollWidth / 2;
      const progress = -dragState.current.currentTx / halfWidth;
      track.style.transform = "";
      track.style.animation = "";
      track.style.animationDelay = `${-progress * duration}s`;
      setPaused(false);
    };

    const ts = (e: TouchEvent) => onDown(e.touches[0].clientX);
    const tm = (e: TouchEvent) => onMove(e.touches[0].clientX);
    const te = () => onUp();
    const md = (e: MouseEvent) => { e.preventDefault(); onDown(e.clientX); };
    const mm = (e: MouseEvent) => onMove(e.clientX);
    const mu = () => onUp();

    track.addEventListener("touchstart", ts, { passive: true });
    track.addEventListener("touchmove", tm, { passive: true });
    track.addEventListener("touchend", te);
    track.addEventListener("mousedown", md);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => {
      track.removeEventListener("touchstart", ts);
      track.removeEventListener("touchmove", tm);
      track.removeEventListener("touchend", te);
      track.removeEventListener("mousedown", md);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", mu);
    };
  }, [duration]);

  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={`marquee-track flex gap-6 w-max cursor-grab active:cursor-grabbing ${paused ? "marquee-paused" : ""}`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="shrink-0 w-44 sm:w-52 h-32 bg-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-4 hover:shadow-card transition-shadow"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={p.logo}
                alt={p.name}
                draggable={false}
                className="max-h-14 max-w-[80%] object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-2">
              <p className="text-xs font-semibold text-foreground leading-tight">{p.name}</p>
              <p className="text-[10px] text-muted-foreground">{p.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  // Split into 3 roughly equal rows
  const rows: Partner[][] = [[], [], []];
  partners.forEach((p, i) => rows[i % 3].push(p));

  return (
    <div className="flex flex-col gap-6">
      <MarqueeRow items={rows[0]} reverse={false} duration={45} />
      <MarqueeRow items={rows[1]} reverse={true} duration={50} />
      <MarqueeRow items={rows[2]} reverse={false} duration={55} />
    </div>
  );
}
