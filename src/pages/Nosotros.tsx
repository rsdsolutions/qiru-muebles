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
              {/* Craftsman Image */}
              <img src="https://images.unsplash.com/photo-1610996843063-ceb9cb256b82?auto=format&fit=crop&w=800&q=80" alt="Artesano tallando madera" className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-1000 grayscale-[20%]" />
              <div className="absolute inset-0 bg-qiru-dark/20 group-hover:bg-transparent transition-colors duration-1000"></div>
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
               {/* Team member photo */}
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Mateo Espinosa" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
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
