import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

const faqs = [
  { q: "¿Atienden a todo el Ecuador?", a: "Sí, realizamos envíos e instalaciones a nivel nacional. Las instalaciones fuera de la provincia pueden tener un recargo de viáticos que será detallado en su cotización." },
  { q: "¿Cuánto tarda un mueble a medida?", a: "Depende de la complejidad. Generalmente, el proceso de fabricación toma entre 2 y 4 semanas una vez aprobado el diseño y recibido el anticipo." },
  { q: "¿Puedo ver el diseño antes de que fabriquen?", a: "¡Por supuesto! Todo proyecto incluye la presentación de bocetos (en 2D o 3D) para que apruebe cada detalle, material y acabado antes de pasar al taller." },
  { q: "¿Qué pasa si quiero hacer cambios al diseño?", a: "Durante la etapa de diseño, realizamos los ajustes necesarios basados en sus comentarios. El objetivo es que quede 100% satisfecho antes de iniciar la producción." },
  { q: "¿Ofrecen garantía en los muebles?", a: "Sí, todos nuestros muebles cuentan con 1 año de garantía sobre defectos de fabricación de la madera y herrajes." },
  { q: "¿Cuál es el precio mínimo de un proyecto?", a: "No tenemos un mínimo estricto, sin embargo nuestra línea se enfoca en proyectos a medida, por lo que nuestras piezas suelen iniciar en los $200 USD para módulos pequeños." },
];

export default function Proceso() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24">
      {/* Mini Hero */}
      <section className="py-20 px-6 text-center border-b border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-[42px] lg:text-[56px] text-qiru-white mb-6 tracking-[-0.01em]"
          >
            El Arte de Fabricar a Medida
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-qiru-muted-dark text-lg"
          >
            De tu idea al mueble perfecto — así trabajamos en QIRU.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="flex flex-col">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[500px] border-b border-qiru-border bg-qiru-linen">
          <div className="flex items-center justify-center p-12 lg:p-24 bg-qiru-surface border-b lg:border-b-0 lg:border-r border-qiru-border">
            {/* SVG Placeholder people at table */}
            <svg viewBox="0 0 400 300" className="w-[80%] max-w-[300px] text-qiru-wood-dark stroke-qiru-wood-mid" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M100 250 L300 250 M120 250 V200 M280 250 V200 M60 200 H340 V180 H60 Z" />
              <path d="M150 180 C150 120 180 100 200 100 C220 100 250 120 250 180" />
              <circle cx="200" cy="80" r="20" />
            </svg>
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-qiru-dark">
            <FadeIn>
              <div className="font-serif text-[100px] lg:text-[120px] text-qiru-gold/20 leading-none absolute top-4 right-8 lg:right-auto lg:left-[52%] select-none pointer-events-none">01</div>
              <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Conversación & Diseño</h2>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
                Todo empieza con un café (incluso si es virtual). Nos cuentas qué tienes en mente, medimos los espacios y entendemos tu rutina para diseñar algo verdaderamente funcional.
              </p>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-8">
                Hablamos de materiales, luces, maderas, y definimos el estilo que mejor acompaña la arquitectura actual de tu casa.
              </p>
              <div className="bg-qiru-surface border border-qiru-border px-4 py-2 rounded-sm inline-block w-fit text-sm text-qiru-muted-light font-medium tracking-wide">
                DURACIÓN: 1–2 DÍAS
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[500px] border-b border-qiru-border bg-qiru-dark">
          <div className="order-2 lg:order-1 p-12 lg:p-24 flex flex-col justify-center">
            <FadeIn>
              <div className="font-serif text-[100px] lg:text-[120px] text-qiru-gold/20 leading-none absolute top-4 right-8 select-none pointer-events-none">02</div>
              <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Boceto & Aprobación</h2>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
                Traducimos tus ideas en planos y bocetos. Podrás ver las medidas exactas, la distribución sugerida y la paleta de acabados propuesta.
              </p>
              <p className="text-qiru-gold font-serif text-2xl italic mb-8">
                "Sin sorpresas — solo empezamos cuando estás seguro/a."
              </p>
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center bg-qiru-surface border-b lg:border-b-0 lg:border-l border-qiru-border overflow-hidden relative group">
            {/* Blueprint/Design Unsplash Image */}
            <img src="https://images.unsplash.com/photo-1621252178225-b46187abaff2?auto=format&fit=crop&w=800&q=80" alt="Boceto arquitectónico" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out absolute inset-0" />
            <div className="absolute inset-0 bg-qiru-dark/50 group-hover:bg-qiru-dark/30 transition-colors duration-700"></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[500px] border-b border-qiru-border bg-qiru-linen">
          <div className="flex items-center justify-center bg-qiru-surface border-b lg:border-b-0 lg:border-r border-qiru-border overflow-hidden relative group">
            {/* Workshop Unsplash Image */}
            <img src="https://images.unsplash.com/photo-1610996843063-ceb9cb256b82?auto=format&fit=crop&w=800&q=80" alt="Taller de carpintería" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out absolute inset-0 grayscale-[50%]" />
            <div className="absolute inset-0 bg-qiru-dark/50 group-hover:bg-qiru-dark/20 transition-colors duration-700"></div>
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-qiru-dark">
            <FadeIn>
              <div className="font-serif text-[100px] lg:text-[120px] text-qiru-gold/20 leading-none absolute top-4 right-8 lg:right-auto lg:left-[52%] select-none pointer-events-none">03</div>
              <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Fabricación Artesanal</h2>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
                En nuestro taller en Ecuador, las manos de nuestros artesanos se encargan de dar vida al diseño. Seleccionamos cuidadosamente la madera por su veta y color.
              </p>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-8">
                Aplicamos técnicas de ebanistería clásicas combinadas con precisión moderna para que tu mueble resista el paso del tiempo.
              </p>
              <div className="bg-qiru-surface border border-qiru-border px-4 py-2 rounded-sm inline-block w-fit text-sm text-qiru-muted-light font-medium tracking-wide">
                DURACIÓN: 2–4 SEMANAS
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative min-h-[500px] bg-qiru-dark">
          <div className="order-2 lg:order-1 p-12 lg:p-24 flex flex-col justify-center">
            <FadeIn>
              <div className="font-serif text-[100px] lg:text-[120px] text-qiru-gold/20 leading-none absolute top-4 right-8 select-none pointer-events-none">04</div>
              <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Entrega & Instalación</h2>
              <p className="text-qiru-muted-dark text-lg leading-relaxed mb-8">
                Llevamos el mueble hasta tu hogar. Nuestro equipo se encarga de la instalación minuciosa, realizando cualquier ajuste fino in-situ. Cuidamos tu espacio como si fuera el nuestro.
              </p>
              <Link to="/cotizar" className="inline-block px-8 py-3 bg-qiru-gold text-qiru-dark hover:bg-qiru-gold-hover font-bold text-[11px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center w-max shadow-xl">
                Comenzar mi proyecto
              </Link>
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2 flex items-center justify-center bg-qiru-surface border-b lg:border-b-0 lg:border-l border-qiru-border overflow-hidden relative group">
            {/* Delivery Unsplash Image */}
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Entrega final" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out absolute inset-0" />
            <div className="absolute inset-0 bg-qiru-dark/50 group-hover:bg-qiru-dark/30 transition-colors duration-700"></div>
          </div>
        </div>
      </section>

      {/* Materials Note */}
      <section className="bg-qiru-olive py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h3 className="font-serif text-[28px] lg:text-[36px] text-qiru-white mb-6">
              Usamos solo materiales de primera calidad — seleccionados uno a uno para cada proyecto.
            </h3>
            <Link to="/materiales" className="inline-block border-b border-qiru-white text-qiru-white hover:text-qiru-gold hover:border-qiru-gold transition-colors pb-1">
              Ver detalles de materiales
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-[36px] text-center text-qiru-white mb-12">Preguntas Frecuentes</h2>
        </FadeIn>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center bg-transparent">
                  <h4 className="font-medium text-qiru-white pr-4">{faq.q}</h4>
                  <ChevronDown className={`text-qiru-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                <div 
                  className="px-6 text-qiru-muted-dark transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: openFaq === i ? '200px' : '0px', paddingBottom: openFaq === i ? '24px' : '0px' }}
                >
                  <p className="leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
