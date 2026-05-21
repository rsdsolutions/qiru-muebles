import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PenTool, HeartHandshake, Leaf, Ruler } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Nosotros() {
  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24 text-qiru-white">
      {/* Mini Hero */}
      <section className="py-24 px-6 text-center border-b border-qiru-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #9B7A55 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-[48px] lg:text-[64px] mb-6 tracking-[-0.01em]"
          >
            Quiénes Somos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-qiru-muted-dark text-xl"
          >
            Artesanos del mueble con pasión por el diseño.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2">
          <FadeIn>
            <div className="w-full aspect-[4/5] bg-qiru-surface rounded-lg relative overflow-hidden shadow-2xl flex items-center justify-center border border-qiru-border group">
              <svg viewBox="0 0 400 500" className="w-[75%] max-w-[280px] opacity-60" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Workbench */}
                <rect x="60" y="320" width="280" height="16" rx="3" stroke="#C9A96E" strokeWidth="2" fill="#2A2420"/>
                <line x1="90" y1="336" x2="90" y2="420" stroke="#9B7A55" strokeWidth="2"/>
                <line x1="310" y1="336" x2="310" y2="420" stroke="#9B7A55" strokeWidth="2"/>
                {/* Wood plank on bench */}
                <rect x="100" y="290" width="200" height="32" rx="4" stroke="#C9A96E" strokeWidth="1.5" fill="#322C26"/>
                <line x1="130" y1="290" x2="130" y2="322" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                <line x1="200" y1="290" x2="200" y2="322" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                <line x1="270" y1="290" x2="270" y2="322" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                {/* Chisel / tool */}
                <line x1="230" y1="240" x2="230" y2="295" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round"/>
                <rect x="220" y="232" width="20" height="12" rx="2" stroke="#C9A96E" strokeWidth="1.5" fill="#2A2420"/>
                {/* Artisan figure */}
                <circle cx="200" cy="140" r="38" stroke="#C9A96E" strokeWidth="2" fill="#1C1812"/>
                {/* Face details */}
                <circle cx="188" cy="136" r="4" fill="#C9A96E" opacity="0.6"/>
                <circle cx="212" cy="136" r="4" fill="#C9A96E" opacity="0.6"/>
                <path d="M188 158 Q200 168 212 158" stroke="#C9A96E" strokeWidth="1.5"/>
                {/* Body */}
                <path d="M145 280 C145 230 165 205 200 200 C235 205 255 230 255 280" stroke="#C9A96E" strokeWidth="2" fill="#1C1812"/>
                {/* Arms reaching down to bench */}
                <path d="M155 230 Q130 255 140 290" stroke="#9B7A55" strokeWidth="2"/>
                <path d="M245 230 Q265 255 250 290" stroke="#9B7A55" strokeWidth="2"/>
                {/* Wood shavings */}
                <path d="M160 360 Q175 350 185 358 Q195 366 180 370" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                <path d="M220 355 Q235 345 242 354 Q249 363 238 367" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                {/* Grain lines on plank */}
                <path d="M110 305 Q155 301 200 306 Q245 311 290 305" stroke="#C9A96E" strokeWidth="0.8" opacity="0.4"/>
              </svg>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-qiru-gold/50 text-[10px] uppercase tracking-[0.2em] font-sans">Artesanía QIRU</span>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-[36px] lg:text-[42px] leading-tight mb-8">Nació de un amor profundo por la madera y el diseño.</h2>
            <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
              QIRU comenzó como un pequeño taller familiar en Quito. Nuestro fundador, nieto de ebanistas, creció viendo cómo un tronco rústico se transformaba en la mesa donde la familia se reunía cada noche.
            </p>
            <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
              El nombre <span className="text-qiru-white font-serif italic text-xl">Qiru</span> proviene del Kichwa y significa madera o árbol. Para nosotros, es un recordatorio constante de nuestro origen y del respeto que le debemos al material con el que trabajamos.
            </p>
            <p className="text-qiru-muted-dark text-lg leading-relaxed">
              Hoy, fusionamos las técnicas de carpintería tradicional ecuatoriana con el diseño contemporáneo, creando piezas únicas que no solo llenan un espacio, sino que cuentan una historia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-qiru-linen text-qiru-dark py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: PenTool, title: "Diseño Exclusivo", desc: "Cada línea es pensada para tu espacio." },
            { icon: Leaf, title: "Materiales Nobles", desc: "Maderas y telas seleccionadas con rigor." },
            { icon: Ruler, title: "Fabricación Artesanal", desc: "Hecho a mano en Ecuador, a tu medida." },
            { icon: HeartHandshake, title: "Compromiso", desc: "Acompañamiento desde el boceto hasta la entrega." }
          ].map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-transparent border border-qiru-border/20 p-8 rounded-lg h-full flex flex-col items-start gap-4 hover:border-qiru-gold transition-colors duration-300">
                <v.icon className="text-qiru-gold" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-[24px] text-qiru-dark">{v.title}</h3>
                <p className="text-qiru-muted-light text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team / Atelier */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto min-h-[400px] bg-qiru-dark relative border-b lg:border-b-0 lg:border-r border-qiru-border flex items-center justify-center overflow-hidden group">
              <svg viewBox="0 0 300 380" className="w-[55%] max-w-[200px] opacity-55" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Portrait silhouette */}
                <circle cx="150" cy="90" r="60" stroke="#C9A96E" strokeWidth="2" fill="#1C1812"/>
                {/* Hair */}
                <path d="M92 72 Q95 38 150 32 Q205 38 208 72" stroke="#9B7A55" strokeWidth="2" fill="#2A2420"/>
                {/* Face */}
                <circle cx="132" cy="88" r="6" fill="#C9A96E" opacity="0.5"/>
                <circle cx="168" cy="88" r="6" fill="#C9A96E" opacity="0.5"/>
                <path d="M132 112 Q150 124 168 112" stroke="#C9A96E" strokeWidth="1.5"/>
                {/* Beard */}
                <path d="M115 108 Q120 140 150 148 Q180 140 185 108" stroke="#9B7A55" strokeWidth="1.5" fill="#2A2420" opacity="0.7"/>
                {/* Shoulders / body */}
                <path d="M50 370 C50 290 90 260 150 255 C210 260 250 290 250 370" stroke="#C9A96E" strokeWidth="2" fill="#1C1812"/>
                {/* Collar / shirt detail */}
                <path d="M130 255 L150 285 L170 255" stroke="#9B7A55" strokeWidth="1.5"/>
                {/* Arms */}
                <path d="M55 300 Q42 330 48 370" stroke="#9B7A55" strokeWidth="2"/>
                <path d="M245 300 Q258 330 252 370" stroke="#9B7A55" strokeWidth="2"/>
                {/* Pocket */}
                <rect x="160" y="305" width="35" height="28" rx="3" stroke="#9B7A55" strokeWidth="1" opacity="0.5"/>
                {/* Name initial badge */}
                <circle cx="150" cy="210" r="22" stroke="#C9A96E" strokeWidth="1.5" opacity="0.4"/>
                <text x="150" y="217" textAnchor="middle" fill="#C9A96E" fontSize="20" fontFamily="serif" opacity="0.6">M</text>
              </svg>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-qiru-gold/40 text-[10px] uppercase tracking-[0.2em] font-sans">Fundador</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="font-serif text-[36px] text-qiru-white mb-2">Mateo Espinosa</h3>
              <p className="text-qiru-gold font-sans text-sm tracking-widest uppercase mb-8">Maestro Artesano · Fundador</p>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-10">
                Con más de 15 años entre planos y aserrín. Su visión es demostrar que en Ecuador se puede fabricar mobiliario de lujo con la misma precisión que en los grandes estudios europeos.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Carpintería Blanca', 'Diseño de Interiores', 'Acabados'].map((badge, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-qiru-gold text-qiru-gold text-xs uppercase tracking-wider bg-qiru-gold/5">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="bg-[#211C15] py-24 px-6 border-y border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-[36px] text-center mb-16 text-qiru-white">Nuestra Historia</h2>
          </FadeIn>
          <div className="relative border-l border-qiru-gold/30 ml-4 lg:ml-1/2 flex flex-col gap-12">
            {[
              { y: '2015', text: 'Primeros muebles fabricados en un pequeño taller familiar.' },
              { y: '2018', text: 'Expansión a proyectos residenciales completos y cocinas.' },
              { y: '2021', text: 'Incorporación de diseño asistido y bocetos digitales en 3D.' },
              { y: '2023', text: 'Apertura del showroom y consolidación de la marca QIRU.' },
              { y: '2026', text: 'Cientos de hogares transformados en todo el Ecuador.' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative pl-10">
                  <div className="absolute w-3 h-3 bg-qiru-gold rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(201,169,110,0.5)]"></div>
                  <h4 className="font-serif text-2xl text-qiru-gold mb-2">{t.y}</h4>
                  <p className="text-qiru-muted-dark text-lg">{t.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="border-l-2 border-qiru-gold pl-8 py-4">
              <h3 className="font-sans font-medium tracking-widest text-sm text-qiru-gold uppercase mb-4">Nuestra Misión</h3>
              <p className="font-serif text-[28px] text-qiru-white leading-snug">
                "Fabricar muebles a medida que reflejen la personalidad de cada hogar, con materiales nobles y artesanía honesta."
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-l-2 border-qiru-gold pl-8 py-4">
              <h3 className="font-sans font-medium tracking-widest text-sm text-qiru-gold uppercase mb-4">Nuestra Visión</h3>
              <p className="font-serif text-[28px] text-qiru-white leading-snug">
                "Ser la marca de referencia en muebles personalizados en Ecuador, reconocida por la calidad de sus obras y la calidez de su trato."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-qiru-dark py-32 px-6 text-center border-t border-qiru-border">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <FadeIn>
            <h2 className="font-serif text-[42px] lg:text-[56px] text-qiru-white mb-10 tracking-[-0.01em]">
              ¿Listo para tu primer mueble QIRU?
            </h2>
            <Link to="/cotizar" className="px-10 py-5 bg-qiru-gold hover:bg-qiru-gold-hover text-qiru-dark font-bold text-[11px] uppercase tracking-[0.15em] rounded-sm transition-colors shadow-2xl">
              Solicitar Cotización
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
