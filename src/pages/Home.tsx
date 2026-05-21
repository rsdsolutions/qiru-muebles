import type { ReactNode } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SlideIn = ({ children, delay = 0, from = 'left' }: { children: ReactNode; delay?: number; from?: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0, x: from === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen bg-qiru-dark flex flex-col pt-24 overflow-hidden border-b border-qiru-border">

        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="animate-float absolute w-[700px] h-[700px] rounded-full opacity-[0.035] blur-[80px]"
            style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)', top: '-15%', left: '-15%' }} />
          <div className="animate-float-slow absolute w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[60px]"
            style={{ background: 'radial-gradient(circle, #9B7A55 0%, transparent 70%)', bottom: '5%', right: '5%' }} />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0, #FFF 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="flex-grow max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row relative z-10">

          {/* Left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-20 lg:py-0 lg:pr-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-qiru-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-5 block">
                Atelier de Mobiliario · Ecuador
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[52px] lg:text-[66px] leading-[1.05] tracking-tight text-qiru-white mb-6 italic"
            >
              Diseñamos el mueble{' '}
              <br className="hidden lg:block" />
              <span className="not-italic">que imaginas.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-qiru-muted-dark text-lg mb-10 max-w-md leading-relaxed"
            >
              Muebles a medida para cada espacio del hogar. Diseño exclusivo,
              materiales nobles y fabricación artesanal en Ecuador.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/colecciones"
                className="btn-gold-shimmer group px-8 py-3 bg-qiru-gold hover:bg-qiru-gold-hover text-qiru-dark text-[12px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center shadow-lg hover:shadow-qiru-gold/25 flex items-center justify-center gap-2"
              >
                Ver Colecciones
                <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/proceso"
                className="group px-8 py-3 border border-qiru-gold text-qiru-gold hover:bg-qiru-gold hover:text-qiru-dark text-[12px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center"
              >
                Nuestro Proceso
              </Link>
            </motion.div>

            {/* Decorative stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-8 mt-12 pt-10 border-t border-qiru-border"
            >
              {[
                { num: '500+', label: 'Hogares transformados' },
                { num: '10+', label: 'Años de experiencia' },
                { num: '100%', label: 'A medida' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-[28px] text-qiru-gold">{s.num}</span>
                  <span className="text-qiru-muted-dark text-xs tracking-wide">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Desktop divider */}
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-qiru-gold/20" />
          </div>

          {/* Right – Hero Image with parallax */}
          <div className="w-full lg:w-1/2 pb-16 lg:pb-0 lg:pl-16 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ opacity: heroOpacity }}
              className="w-full aspect-[4/5] max-w-sm lg:max-w-md rounded-lg border border-qiru-border relative overflow-hidden group shadow-[0_0_60px_rgba(0,0,0,0.6)]"
            >
              <motion.img
                src="/img/sala-living.jpeg"
                alt="Proyecto de sala a medida QIRU"
                style={{ y: heroImgY }}
                className="w-full h-[115%] object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qiru-dark/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-qiru-dark/80 backdrop-blur-sm border border-qiru-gold/30 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-qiru-gold text-xs uppercase tracking-widest font-medium">Disponible ahora</p>
                    <p className="text-qiru-white text-sm font-medium">Sofá modular a medida</p>
                  </div>
                  <Link to="/colecciones" className="text-qiru-gold hover:text-qiru-white text-xs uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-1">
                    Ver colección <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-qiru-muted-dark"
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-qiru-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── OLIVE BAR ── */}
      <section className="bg-qiru-olive py-4 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4">
        <FadeIn>
          <p className="font-serif italic text-qiru-linen text-lg">
            "Cada mueble que fabricamos nace de una conversación."
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <span className="text-qiru-olive-light text-[10px] uppercase tracking-[0.2em]">Quito · Guayaquil · Cuenca</span>
            <div className="hidden sm:block w-px h-4 bg-qiru-olive-light opacity-30" />
            <a
              href="https://wa.me/593999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-qiru-linen text-[10px] uppercase tracking-[0.2em] font-bold hover:text-qiru-gold transition-colors"
            >
              WhatsApp: +593 99 999 9999
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── COLLECTIONS PREVIEW ── */}
      <section className="bg-qiru-linen py-24 px-6 text-qiru-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <span className="text-qiru-muted-light text-[11px] uppercase tracking-[0.2em] mb-4">Lo que fabricamos</span>
              <h2 className="font-serif text-[36px] lg:text-[48px] tracking-[-0.01em] mb-5 text-center">Nuestras Colecciones</h2>
              <div className="w-16 h-px bg-qiru-gold" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Sala & Living',
                badge: 'Sala',
                desc: 'Sofás, sillones, mesas de centro y módulos a medida.',
                img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Dormitorio',
                badge: 'Dormitorio',
                desc: 'Camas, veladores, cómodas y walk-in closets de diseño.',
                img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Cocina & Comedor',
                badge: 'Comedor',
                desc: 'Mesas de comedor, sillas tapizadas y anaqueles de cocina.',
                img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80',
              },
            ].map((col, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <Link
                  to="/colecciones"
                  className="group block bg-qiru-surface rounded-lg overflow-hidden border border-qiru-border transition-all duration-400 hover:border-qiru-gold hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  <div className="aspect-[4/3] relative overflow-hidden border-b border-qiru-border group-hover:border-qiru-gold/50 transition-colors duration-300">
                    <img
                      src={col.img}
                      alt={col.title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-qiru-dark/70 to-transparent" />
                    <div className="absolute top-4 left-4 bg-qiru-olive text-qiru-white px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.1em] uppercase">
                      {col.badge}
                    </div>
                  </div>
                  <div className="p-8 bg-qiru-dark">
                    <h3 className="font-serif text-[24px] text-qiru-white mb-3 group-hover:text-qiru-gold transition-colors duration-300">
                      {col.title}
                    </h3>
                    <p className="text-qiru-muted-dark text-[15px] leading-relaxed mb-4">{col.desc}</p>
                    <span className="text-qiru-gold text-[11px] uppercase tracking-wider font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver colección <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/colecciones"
              className="inline-flex items-center gap-2 text-qiru-gold hover:text-qiru-gold-hover font-medium border-b border-qiru-gold hover:border-qiru-gold-hover transition-colors pb-1 group"
            >
              Ver todas las colecciones
              <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS TEASER ── */}
      <section className="bg-qiru-dark py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-qiru-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-4 block">Así trabajamos</span>
              <h2 className="font-serif text-[36px] lg:text-[48px] tracking-[-0.01em] text-qiru-white">¿Cómo trabajamos?</h2>
            </div>
          </FadeIn>

          {/* Desktop connecting line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-[104px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-qiru-gold/30 to-transparent z-0" />
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
              {[
                { num: '1', title: 'Conversación', desc: 'Nos cuentas tu idea, espacio y necesidades.' },
                { num: '2', title: 'Diseño', desc: 'Creamos un boceto personalizado para tu aprobación.' },
                { num: '3', title: 'Fabricación', desc: 'Nuestros artesanos construyen tu mueble con materiales seleccionados.' },
                { num: '4', title: 'Entrega', desc: 'Instalamos y dejamos tu espacio listo.' },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.12} className="flex-1">
                  <Link to="/proceso" className="group block bg-qiru-surface border border-qiru-border rounded-lg p-8 relative z-10 hover:border-qiru-gold/60 hover:shadow-[0_0_30px_rgba(201,169,110,0.06)] transition-all duration-400 cursor-pointer">
                    <div
                      className="font-serif text-[52px] text-transparent mb-5 leading-none group-hover:text-qiru-gold/25 transition-colors duration-400"
                      style={{ WebkitTextStroke: '1px #C9A96E' }}
                    >
                      0{step.num}
                    </div>
                    <h3 className="font-serif text-[22px] text-qiru-gold mb-3">{step.title}</h3>
                    <p className="text-qiru-muted-dark text-[15px] leading-relaxed">{step.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-qiru-gold/50 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saber más <ArrowRight size={10} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/proceso" className="inline-flex items-center gap-2 text-qiru-gold text-sm hover:text-qiru-white transition-colors group">
              Ver el proceso completo <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MATERIALS TEASER ── */}
      <section className="bg-qiru-sand py-24 px-6 text-qiru-dark">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {[
              { bg: 'bg-wood-dark', label: 'Madera Nogal', offset: '', textColor: 'text-qiru-white' },
              { bg: 'bg-wood-mid', label: 'Roble Natural', offset: '-ml-4 lg:-ml-8 z-10 border border-[#b3956f]', textColor: 'text-qiru-dark' },
              { bg: 'bg-qiru-muted-dark', label: 'Tapizado / Tela', offset: '-mt-4 mr-4', textColor: 'text-qiru-white' },
            ].map((mat, i) => (
              <SlideIn key={i} delay={i * 0.1} from="left">
                <Link
                  to="/materiales"
                  className={`group ${mat.bg} rounded-lg p-6 ${mat.textColor} shadow-xl relative overflow-hidden block ${mat.offset} hover:brightness-110 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at center, #9B7A55 1px, transparent 1px)', backgroundSize: '20px 10px' }} />
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="font-sans font-semibold uppercase tracking-widest text-xs">{mat.label}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </SlideIn>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <FadeIn>
              <span className="text-qiru-muted-light text-[11px] uppercase tracking-[0.2em] mb-4 block">Materiales</span>
              <h2 className="font-serif text-[36px] lg:text-[48px] tracking-[-0.01em] mb-8">Materiales que duran una vida.</h2>
              <ul className="flex flex-col gap-5 mb-10">
                {[
                  'Maderas seleccionadas con veta expuesta',
                  'Tapizados en telas y cueros de calidad',
                  'Acabados personalizados en color y textura',
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-qiru-gold mt-2 flex-shrink-0 animate-pulse-ring" />
                    <span className="text-qiru-muted-light text-lg">{li}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/materiales"
                className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3 outline outline-1 outline-qiru-gold text-qiru-gold hover:bg-qiru-gold hover:text-qiru-dark rounded-sm transition-all duration-300 font-medium group"
              >
                Explorar materiales
                <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <section className="bg-qiru-dark overflow-hidden border-t border-qiru-border">
        <Link to="/proyectos" className="flex flex-col lg:flex-row w-full group cursor-pointer block">
          <div className="w-full lg:w-[60%] lg:min-h-[600px] bg-qiru-surface relative flex items-center justify-center border-r border-qiru-border overflow-hidden">
            <img
              src="/img/cocina-isla-1.jpeg"
              alt="Cocina Integral — Proyecto QIRU"
              className="w-full h-full object-cover opacity-90 group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-qiru-dark/20 group-hover:bg-transparent transition-colors duration-1000" />
          </div>
          <div className="w-full lg:w-[40%] flex flex-col justify-center p-10 lg:p-20">
            <FadeIn>
              <div className="inline-block bg-qiru-olive text-qiru-white px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.1em] uppercase mb-6">
                Proyecto Destacado
              </div>
              <h2 className="font-serif text-[32px] lg:text-[42px] leading-tight mb-6 text-qiru-white group-hover:text-qiru-gold transition-colors duration-300">
                Cocina Integral — Residencia Privada
              </h2>
              <p className="text-qiru-muted-dark text-lg mb-8 leading-relaxed">
                Diseño y fabricación completa de cocina con isla central en granito, gabinetes en melamínico nogal y detalles de madera en cielo raso. Un proyecto real de QIRU.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {['Cocina Integral', 'Isla Central', 'Cielo Madera'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-qiru-gold text-qiru-gold text-xs uppercase tracking-wider group-hover:bg-qiru-gold/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center text-qiru-gold hover:text-qiru-gold-hover transition-colors font-medium gap-2 group/link">
                Ver más proyectos
                <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </FadeIn>
          </div>
        </Link>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-qiru-linen py-24 px-6 text-qiru-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center mb-16">
              <h2 className="font-serif text-[36px] lg:text-[42px] tracking-[-0.01em] mb-5">Lo que dicen nuestros clientes</h2>
              <div className="w-16 h-px bg-qiru-gold" />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Entendieron exactamente lo que queríamos. El sofá modulado quedó perfecto en nuestra sala y la calidad de la madera es impresionante.', author: 'Carolina M.', loc: 'Guayaquil' },
              { text: 'El proceso fue muy transparente. Nos encantó ver los bocetos antes y poder opinar. El clóset a medida superó nuestras expectativas.', author: 'Roberto V.', loc: 'Quito' },
              { text: 'Un trato de primera y unos artesanos de verdad. Nuestra mesa de comedor es ahora el centro de reuniones de la casa.', author: 'Familia Sánchez', loc: 'Cuenca' },
            ].map((ts, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white/60 border border-qiru-border/15 p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="text-qiru-gold mb-6">
                    <Quote size={36} strokeWidth={1} />
                  </div>
                  <p className="text-qiru-muted-light text-lg mb-8 flex-grow leading-relaxed">"{ts.text}"</p>
                  <div className="flex flex-col">
                    <span className="font-semibold text-qiru-dark">{ts.author}</span>
                    <span className="text-qiru-muted-light text-sm">— {ts.loc}</span>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-qiru-gold fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="bg-qiru-dark py-32 px-6 text-center border-t border-qiru-border flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="animate-float-slow absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[80px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-2xl relative z-10">
          <FadeIn>
            <h2 className="font-serif text-[42px] lg:text-[56px] leading-[1.1] text-qiru-white mb-6 tracking-[-0.01em]">
              ¿Tienes un espacio en mente?
            </h2>
            <p className="text-qiru-muted-dark text-lg mb-10">
              Hablemos sobre diseño, medidas y posibilidades.
            </p>
            <Link
              to="/cotizar"
              className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-5 bg-qiru-gold hover:bg-qiru-gold-hover text-qiru-dark text-[13px] font-bold uppercase tracking-[0.12em] rounded-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl hover:shadow-qiru-gold/25 group"
            >
              Solicitar Cotización
              <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-qiru-muted-dark text-sm mt-6">Respuesta en menos de 24 horas. Sin costo.</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
