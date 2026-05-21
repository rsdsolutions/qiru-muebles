import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

const categories = ['Todos', 'Sala & Living', 'Dormitorio', 'Cocina & Comedor', 'Estudio', 'Exteriores'];

const products = [
  { id: 1,  name: 'Módulo de TV con estantes',     cat: 'Sala & Living',    badge: 'Sala',      desc: 'Repisas flotantes y módulo TV lacado, acabado minimalista.',   price: '890',   img: '/img/sala-living.jpeg' },
  { id: 2,  name: 'Sofá modular 3 puestos',        cat: 'Sala & Living',    badge: 'Sala',      desc: 'Tapizado de lino y estructura de roble sólido.',               price: '1,450', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80' },
  { id: 3,  name: 'Sillón individual tapizado',    cat: 'Sala & Living',    badge: 'Sala',      desc: 'Diseño ergonómico, tela antimanchas de alta durabilidad.',     price: '580',   img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80' },
  { id: 4,  name: 'Clóset corredizo 3 puertas',   cat: 'Dormitorio',       badge: 'Dormitorio',desc: 'A medida en melamínico nogal, distribución interior a elección.', price: '1,800', img: '/img/dormitorio-closet.jpeg' },
  { id: 5,  name: 'Cama matrimonial con cabecero', cat: 'Dormitorio',       badge: 'Dormitorio',desc: 'Estructura sólida, cabecero tapizado ranurado.',               price: '1,100', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80' },
  { id: 6,  name: 'Velador flotante',              cat: 'Dormitorio',       badge: 'Dormitorio',desc: 'Diseño sin patas, cajón con corredera oculta.',               price: '180',   img: '/img/dormitorio-closet.jpeg' },
  { id: 7,  name: 'Cocina integral con isla',      cat: 'Cocina & Comedor', badge: 'Cocina',    desc: 'Gabinetes en melamínico nogal, isla en granito, campana.',     price: '4,500', img: '/img/cocina-isla-1.jpeg' },
  { id: 8,  name: 'Anaquel de cocina',             cat: 'Cocina & Comedor', badge: 'Cocina',    desc: 'Muebles altos y bajos, melamínico resistente al agua.',        price: '2,200', img: '/img/cocina-simple.jpeg' },
  { id: 9,  name: 'Mueble bar y bodega',           cat: 'Cocina & Comedor', badge: 'Comedor',   desc: 'Módulo con bodega de vinos, gavetas y repisas en nogal.',      price: '1,100', img: '/img/mueble-bar.jpeg' },
  { id: 10, name: 'Escritorio ejecutivo en L',     cat: 'Estudio',          badge: 'Estudio',   desc: 'Escritorio en L con gavetas, melamínico bicolor.',             price: '850',   img: '/img/escritorio.jpeg' },
  { id: 11, name: 'Puerta interior madera',        cat: 'Exteriores',       badge: 'Puertas',   desc: 'Puerta en melamínico nogal, marco y tapajuntas incluidos.',   price: '320',   img: '/img/puerta-interior.jpeg' },
  { id: 12, name: 'Puerta principal madera',       cat: 'Exteriores',       badge: 'Puertas',   desc: 'Puerta principal en madera sólida, bisagras ocultas.',         price: '980',   img: '/img/puerta-principal.jpeg' },
  { id: 13, name: 'Puerta exterior pivotante',     cat: 'Exteriores',       badge: 'Puertas',   desc: 'Puerta pivotante en tablero de madera con cerradura digital.', price: '1,200', img: '/img/puerta-exterior-gris.jpeg' },
  { id: 14, name: 'Pérgola de madera',             cat: 'Exteriores',       badge: 'Exterior',  desc: 'Estructura de pérgola en madera tratada, diseño personalizado.', price: '2,800', img: '/img/pergola-1.jpeg' },
  { id: 15, name: 'Cubierta de madera exterior',   cat: 'Exteriores',       badge: 'Exterior',  desc: 'Techo en madera de laurel con vigas y tablillas vistas.',      price: '3,500', img: '/img/pergola-exterior.jpeg' },
  { id: 16, name: 'Mueble para baño flotante',     cat: 'Estudio',          badge: 'Baño',      desc: 'Vanity flotante en melamínico, mesón de cuarzo, espejo.',      price: '750',   img: '/img/bano-vanity.jpeg' },
];

export default function Colecciones() {
  const [activeCat, setActiveCat] = useState('Todos');

  const filteredProducts = activeCat === 'Todos' ? products : products.filter(p => p.cat === activeCat);

  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24">

      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-qiru-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-4 block"
          >
            Fabricación a medida
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[42px] lg:text-[56px] text-qiru-white mb-6 tracking-[-0.01em]"
          >
            Nuestras Colecciones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-qiru-muted-dark text-lg"
          >
            Muebles diseñados y fabricados a medida para cada rincón de tu hogar.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-7xl mx-auto">

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2 text-qiru-muted-dark text-sm">
            <SlidersHorizontal size={15} />
            <span className="text-[11px] uppercase tracking-[0.15em]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
            </span>
          </div>
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
        </div>

        {/* Product Grid with AnimatePresence */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -8 }}
                    transition={{ duration: 0.28, delay: Math.min(i, 7) * 0.045, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-qiru-dark border border-qiru-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-qiru-gold hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="aspect-square relative flex items-center justify-center border-b border-qiru-border overflow-hidden bg-qiru-surface group-hover:border-qiru-gold/40 transition-colors duration-400">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-qiru-dark/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 bg-qiru-olive text-qiru-white px-2.5 py-1 rounded-full text-[10px] font-sans font-medium tracking-[0.1em] uppercase shadow-lg">
                        {p.badge}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-[20px] text-qiru-white mb-2 group-hover:text-qiru-gold transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-qiru-muted-dark text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>

                      <div className="flex flex-col gap-4 mt-auto">
                        <div className="font-serif text-qiru-gold text-[24px]">
                          Desde ${p.price}
                        </div>
                        <Link
                          to={`/cotizar?producto=${encodeURIComponent(p.name)}`}
                          className="btn-gold-shimmer w-full py-2.5 outline outline-1 outline-qiru-gold text-qiru-gold hover:bg-qiru-gold hover:text-qiru-dark rounded-sm text-center font-bold text-[11px] uppercase tracking-[0.15em] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group/btn"
                        >
                          Solicitar este diseño
                          <ArrowRight size={12} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24 text-qiru-muted-dark"
            >
              No hay productos en esta categoría por el momento.
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center mt-20 pt-12 border-t border-qiru-border">
          <p className="text-qiru-muted-dark text-lg mb-6">
            ¿No encuentras lo que buscas? Lo fabricamos a tu medida.
          </p>
          <Link
            to="/cotizar"
            className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-4 bg-qiru-gold hover:bg-qiru-gold-hover text-qiru-dark font-bold text-[11px] uppercase tracking-widest rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl group"
          >
            Diseñar Mueble a Medida
            <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
