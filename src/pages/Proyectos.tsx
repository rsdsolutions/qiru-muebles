import type { ReactNode, PointerEvent } from 'react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const categories = ['Todos', 'Sala', 'Dormitorio', 'Cocina', 'Comedor', 'Estudio', 'Exterior'];

const projects = [
  { id: 1,  name: 'Residencia Cumbayá',    cat: 'Sala',      loc: 'Quito',       year: '2025', height: 'h-80', img: '/img/sala-living.jpeg' },
  { id: 2,  name: 'Departamento Norte',    cat: 'Cocina',    loc: 'Guayaquil',   year: '2024', height: 'h-96', img: '/img/cocina-simple.jpeg' },
  { id: 3,  name: 'Suite Parque',          cat: 'Dormitorio',loc: 'Cuenca',      year: '2024', height: 'h-64', img: '/img/dormitorio-closet.jpeg' },
  { id: 4,  name: 'Estudio de Abogados',   cat: 'Estudio',   loc: 'Quito',       year: '2025', height: 'h-96', img: '/img/escritorio.jpeg' },
  { id: 5,  name: 'Casa de Campo',         cat: 'Comedor',   loc: 'Machachi',    year: '2023', height: 'h-72', img: '/img/mueble-bar.jpeg' },
  { id: 6,  name: 'Cocina Premium',        cat: 'Cocina',    loc: 'Cumbayá',     year: '2025', height: 'h-80', img: '/img/cocina-isla-2.jpeg' },
  { id: 7,  name: 'Baño Moderno',          cat: 'Estudio',   loc: 'Quito',       year: '2024', height: 'h-96', img: '/img/bano-vanity.jpeg' },
  { id: 8,  name: 'Cocina Abierta',        cat: 'Cocina',    loc: 'Samborondón', year: '2025', height: 'h-64', img: '/img/cocina-isla-1.jpeg' },
  { id: 9,  name: 'Pérgola Residencial',   cat: 'Exterior',  loc: 'Quito',       year: '2023', height: 'h-80', img: '/img/pergola-1.jpeg' },
  { id: 10, name: 'Terraza Cubierta',      cat: 'Exterior',  loc: 'Cuenca',      year: '2024', height: 'h-72', img: '/img/pergola-exterior.jpeg' },
  { id: 11, name: 'Escalera de Roble',     cat: 'Sala',      loc: 'Cumbayá',     year: '2025', height: 'h-96', img: '/img/escalera-madera.jpeg' },
  { id: 12, name: 'Fachada Casa Club',     cat: 'Exterior',  loc: 'Quito',       year: '2024', height: 'h-80', img: '/img/fachada-casa.jpeg' },
  { id: 13, name: 'Puerta Principal',      cat: 'Exterior',  loc: 'Guayaquil',   year: '2024', height: 'h-64', img: '/img/puerta-principal.jpeg' },
];

const BeforeAfterSlider = ({ title, items, defaultPos = 50 }: { title: string; items: string; defaultPos?: number }) => {
  const [position, setPosition] = useState(defaultPos);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };
  const handlePointerMove = (e: PointerEvent) => { if (isDragging) handleMove(e.clientX); };
  const handlePointerUp = (e: PointerEvent) => {
    setIsDragging(false);
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-ew-resize touch-none select-none border border-qiru-border shadow-2xl hover:border-qiru-gold/50 transition-colors duration-300"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* AFTER */}
        <div className="absolute inset-0 bg-[#2A2420] flex items-center justify-center p-8">
          <svg viewBox="0 0 800 600" className="w-full h-full opacity-80" fill="none" strokeWidth="2">
            <path d="M0 0 L200 150 L200 450 L0 600 M800 0 L600 150 L600 450 L800 600 M200 150 L600 150 M200 450 L600 450" stroke="#3E342A" />
            <rect x="250" y="320" width="300" height="40" rx="4" stroke="#C9A96E" />
            <rect x="230" y="280" width="50" height="80" rx="8" stroke="#C9A96E" />
            <rect x="520" y="280" width="50" height="80" rx="8" stroke="#C9A96E" />
            <path d="M280 320 C280 270 300 250 400 250 C500 250 520 270 520 320" stroke="#C9A96E" />
            <path d="M350 410 L450 410 L470 430 L330 430 Z" stroke="#C9A96E" />
            <line x1="340" y1="430" x2="340" y2="460" stroke="#C9A96E" />
            <line x1="460" y1="430" x2="460" y2="460" stroke="#C9A96E" />
            <text x="750" y="550" fill="#C9A96E" fontSize="18" fontFamily="sans-serif" textAnchor="end" opacity="0.7">CON QIRU</text>
          </svg>
        </div>

        {/* BEFORE */}
        <div
          className="absolute inset-0 bg-[#3E342A] flex items-center justify-center p-8 border-r-2 border-qiru-gold"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <svg viewBox="0 0 800 600" className="w-full h-full opacity-40" fill="none" strokeWidth="2">
            <path d="M0 0 L200 150 L200 450 L0 600 M800 0 L600 150 L600 450 L800 600 M200 150 L600 150 M200 450 L600 450" stroke="#1C1812" />
            <text x="50" y="550" fill="#8C7B6A" fontSize="18" fontFamily="sans-serif">ANTES</text>
          </svg>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="w-9 h-9 bg-qiru-gold rounded-full shadow-[0_0_20px_rgba(201,169,110,0.5)] flex items-center justify-center text-qiru-dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l6-6-6-6" /><path d="M9 18l-6-6 6-6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="bg-qiru-dark/70 text-qiru-muted-dark text-[10px] uppercase tracking-widest px-2 py-1 rounded">Antes</span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="bg-qiru-gold/90 text-qiru-dark text-[10px] uppercase tracking-widest px-2 py-1 rounded font-semibold">Con QIRU</span>
        </div>
      </div>
      <div>
        <h4 className="font-serif text-[22px] text-qiru-dark mb-1">{title}</h4>
        <p className="text-qiru-muted-light text-sm">{items}</p>
      </div>
    </div>
  );
};

export default function Proyectos() {
  const [activeCat, setActiveCat] = useState('Todos');
  const filteredProjects = activeCat === 'Todos' ? projects : projects.filter(p => p.cat === activeCat);

  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24">

      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-qiru-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-4 block">
            Portafolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[42px] lg:text-[56px] text-qiru-white mb-6 tracking-[-0.01em]"
          >
            Proyectos Realizados
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-qiru-muted-dark text-lg">
            Espacios transformados con diseño a medida.
          </motion.p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-2xl hover:border-qiru-gold/40 transition-colors duration-500">
            <div className="w-full lg:w-[60%] lg:min-h-[500px] bg-qiru-dark relative border-b lg:border-b-0 lg:border-r border-qiru-border overflow-hidden">
              <img
                src="/img/cocina-isla-1.jpeg"
                alt="Cocina Abierta — Casa Club"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-qiru-surface/20 pointer-events-none" />
            </div>
            <div className="w-full lg:w-[40%] p-12 flex flex-col justify-center">
              <h2 className="font-serif text-[32px] mb-4 text-qiru-white">Cocina Abierta — Casa Club</h2>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 rounded-full border border-qiru-gold text-qiru-gold text-[10px] uppercase tracking-widest">Residencial</span>
                <span className="px-3 py-1 rounded-full border border-qiru-border text-qiru-muted-dark text-[10px] uppercase tracking-widest">Cocina</span>
              </div>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
                Transformación de una cocina cerrada en un espacio abierto y social. Fabricación de isla monumental en roble y gabinetes lacados en tono oliva oscuro.
              </p>
              <div className="mb-8">
                <span className="block text-xs font-sans text-qiru-muted-dark tracking-widest uppercase mb-2">Materiales</span>
                <span className="text-qiru-white text-sm">Roble Natural, Laca Mate Oliva, Herrajes Push-to-Open</span>
              </div>
              <Link
                to="/cotizar"
                className="btn-gold-shimmer mt-auto px-6 py-3 bg-qiru-gold text-qiru-dark hover:bg-qiru-gold-hover text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center shadow-xl inline-flex items-center justify-center gap-2 group"
              >
                ¿Te gusta este estilo? Cotiza el tuyo
                <ArrowRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Before/After */}
      <section className="bg-qiru-linen py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-[36px] lg:text-[42px] text-qiru-dark text-center mb-4">El Poder del Diseño a Medida</h2>
            <div className="w-16 h-px bg-qiru-dark mx-auto mb-4"></div>
            <p className="text-qiru-muted-light text-center mb-12 text-sm uppercase tracking-[0.15em]">Arrastra para comparar</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <BeforeAfterSlider
                title="Renovación de Sala Familiar"
                items="Sofá curvo a medida, pared panelada en MDF, mesa de centro lacada."
                defaultPos={30}
              />
              <BeforeAfterSlider
                title="Estudio y Biblioteca"
                items="Librero de pared a pared en Nogal, escritorio flotante integrado."
                defaultPos={60}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 gap-6">
          <h2 className="font-serif text-[36px] text-qiru-white">Galería de Trabajos</h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                  activeCat === cat
                    ? 'bg-qiru-gold text-qiru-dark font-semibold shadow-lg shadow-qiru-gold/20'
                    : 'bg-transparent border border-qiru-border text-qiru-muted-dark hover:text-qiru-white hover:border-qiru-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-qiru-muted-dark text-xs uppercase tracking-[0.15em]">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
          </p>
        </div>

        {/* Masonry using CSS Columns */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCat}
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group w-full ${p.height} bg-qiru-surface rounded-lg border border-qiru-border overflow-hidden break-inside-avoid mb-6 hover:border-qiru-gold/50 transition-colors duration-300`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qiru-dark/95 via-qiru-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-7 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <div className="inline-block bg-qiru-olive text-qiru-white px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-widest mb-3">
                      {p.cat}
                    </div>
                    <h3 className="font-serif text-[22px] text-qiru-white mb-1">{p.name}</h3>
                    <div className="flex items-center gap-3 text-qiru-muted-dark text-sm mb-5">
                      <span className="flex items-center gap-1"><MapPin size={11} /> {p.loc}</span>
                      <span className="flex items-center gap-1"><Calendar size={11} /> {p.year}</span>
                    </div>
                    <Link
                      to="/cotizar"
                      className="inline-flex items-center gap-1.5 border-b border-qiru-gold text-qiru-gold text-[11px] uppercase tracking-widest font-bold pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-75 hover:text-qiru-white hover:border-qiru-white"
                    >
                      Cotizar algo similar <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Bottom CTA */}
      <section className="bg-qiru-olive py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h3 className="font-serif text-[28px] lg:text-[36px] text-qiru-white mb-6">
              ¿Tu hogar puede ser el próximo proyecto?
            </h3>
            <Link
              to="/cotizar"
              className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-4 bg-qiru-white text-qiru-dark font-bold text-[11px] uppercase tracking-widest rounded-sm hover:bg-qiru-gold transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
            >
              Empezar mi proyecto
              <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
