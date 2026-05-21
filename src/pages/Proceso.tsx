import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const faqs = [
  { q: '¿Atienden a todo el Ecuador?', a: 'Sí, realizamos envíos e instalaciones a nivel nacional. Las instalaciones fuera de la provincia pueden tener un recargo de viáticos que será detallado en su cotización.' },
  { q: '¿Cuánto tarda un mueble a medida?', a: 'Depende de la complejidad. Generalmente, el proceso de fabricación toma entre 2 y 4 semanas una vez aprobado el diseño y recibido el anticipo.' },
  { q: '¿Puedo ver el diseño antes de que fabriquen?', a: '¡Por supuesto! Todo proyecto incluye la presentación de bocetos (en 2D o 3D) para que apruebe cada detalle, material y acabado antes de pasar al taller.' },
  { q: '¿Qué pasa si quiero hacer cambios al diseño?', a: 'Durante la etapa de diseño, realizamos los ajustes necesarios basados en sus comentarios. El objetivo es que quede 100% satisfecho antes de iniciar la producción.' },
  { q: '¿Ofrecen garantía en los muebles?', a: 'Sí, todos nuestros muebles cuentan con 1 año de garantía sobre defectos de fabricación de la madera y herrajes.' },
  { q: '¿Cuál es el precio mínimo de un proyecto?', a: 'No tenemos un mínimo estricto, sin embargo nuestra línea se enfoca en proyectos a medida, por lo que nuestras piezas suelen iniciar en los $200 USD para módulos pequeños.' },
];

interface StepProps {
  num: string;
  title: string;
  children: ReactNode;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
  bg?: string;
}

const Step = ({ num, title, children, imgSrc, imgAlt, reverse = false, bg = 'bg-qiru-dark' }: StepProps) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[500px] border-b border-qiru-border ${bg}`}>
    {/* Image */}
    <div className={`${reverse ? 'order-1 lg:order-2 lg:border-l' : 'order-1 lg:border-r'} border-b lg:border-b-0 border-qiru-border overflow-hidden relative group min-h-[280px] lg:min-h-0`}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-qiru-dark/40 group-hover:bg-qiru-dark/20 transition-colors duration-700" />
    </div>

    {/* Text */}
    <div className={`${reverse ? 'order-2 lg:order-1' : 'order-2'} p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden`}>
      {/* Decorative number — absolute within this column */}
      <div className="absolute top-3 right-5 font-serif text-[96px] lg:text-[112px] text-qiru-gold/15 leading-none select-none pointer-events-none">
        {num}
      </div>
      <FadeIn>
        {children}
      </FadeIn>
    </div>
  </div>
);

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

        <Step num="01" title="Conversación & Diseño" imgSrc="/img/sala-living.jpeg" imgAlt="Sala de diseño QIRU" bg="bg-qiru-dark">
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
        </Step>

        <Step num="02" title="Boceto & Aprobación" imgSrc="/img/escritorio.jpeg" imgAlt="Diseño y boceto del proyecto" reverse bg="bg-qiru-surface">
          <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Boceto & Aprobación</h2>
          <p className="text-qiru-muted-dark text-lg leading-relaxed mb-6">
            Traducimos tus ideas en planos y bocetos. Podrás ver las medidas exactas, la distribución sugerida y la paleta de acabados propuesta.
          </p>
          <p className="text-qiru-gold font-serif text-2xl italic mb-8">
            "Sin sorpresas — solo empezamos cuando estás seguro/a."
          </p>
        </Step>

        <Step num="03" title="Fabricación Artesanal" imgSrc="/img/mueble-bar.jpeg" imgAlt="Fabricación artesanal QIRU" bg="bg-qiru-dark">
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
        </Step>

        <Step num="04" title="Entrega & Instalación" imgSrc="/img/dormitorio-closet.jpeg" imgAlt="Entrega e instalación final" reverse bg="bg-qiru-surface">
          <h2 className="font-serif text-[32px] text-qiru-white mb-6 relative z-10">Entrega & Instalación</h2>
          <p className="text-qiru-muted-dark text-lg leading-relaxed mb-8">
            Llevamos el mueble hasta tu hogar. Nuestro equipo se encarga de la instalación minuciosa, realizando cualquier ajuste fino in-situ. Cuidamos tu espacio como si fuera el nuestro.
          </p>
          <Link
            to="/cotizar"
            className="inline-block px-8 py-3 bg-qiru-gold text-qiru-dark hover:bg-qiru-gold-hover font-bold text-[11px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center w-max shadow-xl"
          >
            Comenzar mi proyecto
          </Link>
        </Step>

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
            <FadeIn key={i} delay={i * 0.07}>
              <div
                className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden cursor-pointer hover:border-qiru-gold/40 transition-colors duration-300"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
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
