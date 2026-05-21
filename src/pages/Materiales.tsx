import { motion } from 'motion/react';

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

export default function Materiales() {
  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24 pb-24 text-qiru-white">
      {/* Mini Hero */}
      <section className="py-20 px-6 text-center border-b border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-[42px] lg:text-[56px] mb-6 tracking-[-0.01em]"
          >
            Materiales Nobles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-qiru-muted-dark text-lg"
          >
            La calidad de un mueble empieza en lo que no se ve.
          </motion.p>
        </div>
      </section>

      {/* Showcase Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
        
        {/* Material 1 - Maderas */}
        <FadeIn>
          <div className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden flex flex-col lg:flex-row min-h-[400px]">
            <div className="w-full lg:w-1/2 p-12 bg-qiru-dark border-b lg:border-b-0 lg:border-r border-qiru-border flex items-center justify-center relative">
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="h-24 bg-qiru-wood-dark rounded-sm flex items-end p-4 relative overflow-hidden shadow-lg transform -rotate-1">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at center, #9B7A55 1px, transparent 1px)', backgroundSize: '10px 20px' }}></div>
                  <span className="relative z-10 font-sans font-medium uppercase tracking-widest text-xs text-white">Nogal Oscuro</span>
                </div>
                <div className="h-24 bg-[#9B7A55] rounded-sm flex items-end p-4 relative overflow-hidden shadow-lg ml-6 transform rotate-1 border border-qiru-border">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, #5C4A3A 1px, transparent 1px)', backgroundSize: '20px 10px' }}></div>
                  <span className="relative z-10 font-sans font-medium uppercase tracking-widest text-xs text-qiru-dark">Roble Natural</span>
                </div>
                <div className="h-24 bg-[#C4A882] rounded-sm flex items-end p-4 relative overflow-hidden shadow-lg -mt-4 mr-6 border border-qiru-border">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #9B7A55 0px, #9B7A55 2px, transparent 2px, transparent 6px)' }}></div>
                  <span className="relative z-10 font-sans font-medium uppercase tracking-widest text-xs text-qiru-dark">Pino Claro</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="font-serif text-[32px] mb-6">Maderas con veta y carácter.</h2>
              <p className="text-qiru-muted-dark text-lg mb-8 leading-relaxed">
                Seleccionamos nuestras maderas pieza por pieza, buscando siempre aquellas que revelen una historia a través de su veta natural. La durabilidad y el tacto son innegociables.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Veta expuesta', 'Acabado mate o brillante', 'Resistente al uso diario', 'Personalizable en tono y color'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-qiru-muted-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-qiru-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-qiru-muted-dark italic">
                Se trabaja con: Nogal, Roble, Pino, MDF laqueado, Melamínico premium.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Material 2 - Tapizados */}
        <FadeIn>
          <div className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden flex flex-col lg:flex-row min-h-[400px]">
            <div className="order-2 lg:order-1 w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="font-serif text-[32px] mb-6">Confort que se siente y se ve.</h2>
              <p className="text-qiru-muted-dark text-lg mb-8 leading-relaxed">
                El revestimiento de un mueble define su alma. Contamos con catálogos importados y locales que aseguran texturas suaves, resistencia superior y facilidad de limpieza.
              </p>
              <ul className="flex flex-col gap-3">
                {['Lino natural', 'Terciopelo suave', 'Cuero genuino', 'Tela antimanchas', 'Chenille texturizado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-qiru-muted-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-qiru-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-1/2 p-12 bg-qiru-dark border-b lg:border-b-0 lg:border-l border-qiru-border flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="aspect-square bg-qiru-sand rounded-sm shadow-md"></div>
                <div className="aspect-square bg-qiru-olive rounded-sm shadow-md"></div>
                <div className="aspect-square bg-[#7A5030] rounded-sm shadow-md"></div>
                <div className="aspect-square bg-qiru-linen rounded-sm shadow-md"></div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Material 3 - Herrajes */}
        <FadeIn>
          <div className="bg-qiru-surface border border-qiru-border rounded-lg overflow-hidden flex flex-col lg:flex-row min-h-[400px]">
            <div className="w-full lg:w-1/2 p-12 bg-qiru-dark border-b lg:border-b-0 lg:border-r border-qiru-border flex items-center justify-center">
              {/* Hardware SVG */}
              <svg viewBox="0 0 400 300" className="w-[80%] max-w-[300px] text-qiru-gold stroke-qiru-gold" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Hinge */}
                <rect x="80" y="80" width="40" height="140" rx="4" />
                <rect x="120" y="120" width="60" height="60" rx="2" />
                <circle cx="100" cy="100" r="4" fill="currentColor" />
                <circle cx="100" cy="150" r="4" fill="currentColor" />
                <circle cx="100" cy="200" r="4" fill="currentColor" />
                
                {/* Handle */}
                <path d="M260 100 V200" strokeWidth="6" />
                <path d="M240 100 H260 M240 200 H260" strokeWidth="4" />
              </svg>
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="font-serif text-[32px] mb-6">Acabados y Herrajes.</h2>
              <p className="text-qiru-muted-dark text-lg mb-8 leading-relaxed">
                El verdadero lujo reside en los detalles mecánicos. Un cajón que cierra suavemente o una manija pulida cambian completamente la experiencia.
              </p>
              <ul className="flex flex-col gap-3">
                {['Herrajes en acero inox', 'Bisagras de suave cierre', 'Manijas minimalistas', 'Lacados en colores a pedido', 'Laminados texturizados'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-qiru-muted-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-qiru-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Palette Picker */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-[36px] mb-4">Elige tu paleta.</h2>
            <div className="w-16 h-px bg-qiru-gold mx-auto"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {[
            { name: "Nórdico", desc: "Blancos, roble claro, crema", colors: ["#FFFFFF", "#C4A882", "#E8DFD0", "#D9D1C7"] },
            { name: "Contemporáneo", desc: "Carbón, negro, latón", colors: ["#2A2420", "#1C1812", "#C9A96E", "#5C4A3A"] },
            { name: "Natural", desc: "Nogal, oliva, lino", colors: ["#5C4A3A", "#3D4A2E", "#F2EDE4", "#9B7A55"] }
          ].map((pal, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-qiru-surface border border-qiru-border p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="flex -space-x-4">
                    {pal.colors.map((c, j) => (
                      <div key={j} className="w-12 h-12 rounded-full border-2 border-qiru-surface shadow-sm" style={{ backgroundColor: c }}></div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-serif text-[22px] text-qiru-white">{pal.name}</h4>
                    <p className="text-qiru-muted-dark text-sm">{pal.desc}</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/593999999999?text=Hola%20QIRU,%20me%20interesa%20un%20proyecto%20con%20la%20paleta%20${pal.name}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-2 outline outline-1 outline-qiru-gold text-qiru-gold hover:bg-qiru-gold hover:text-qiru-dark rounded-sm text-sm font-medium transition-colors"
                >
                  Solicitar con esta paleta
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
