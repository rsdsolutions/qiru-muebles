import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ white = false }) => (
  <div className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-full bg-qiru-olive flex flex-col items-center justify-center pt-1 transition-transform duration-300 hover:scale-105">
      <span className={`font-serif text-lg tracking-[0.05em] leading-none ${white ? 'text-qiru-white' : 'text-qiru-linen'}`}>QIRU</span>
      <span className={`font-sans text-[9px] font-medium tracking-[0.2em] leading-none mt-1 ${white ? 'text-qiru-white' : 'text-qiru-linen'}`}>MUEBLES</span>
    </div>
    <span className="font-serif text-[22px] text-qiru-white">QIRU</span>
  </div>
);

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Colecciones', path: '/colecciones' },
  { name: 'Proceso', path: '/proceso' },
  { name: 'Materiales', path: '/materiales' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Nosotros', path: '/nosotros' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
    isScrolled || !isHome
      ? 'bg-qiru-dark/95 backdrop-blur-sm border-b border-qiru-border py-4'
      : 'bg-transparent py-6'
  }`;

  return (
    <>
      <nav className={navClass} id="main-nav">
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-qiru-gold transition-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="z-50 relative group" aria-label="Ir al inicio">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 relative group ${
                      isActive ? 'text-qiru-white' : 'text-qiru-muted-dark hover:text-qiru-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] bg-qiru-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              to="/cotizar"
              className="btn-gold-shimmer px-6 py-2 bg-qiru-gold text-qiru-dark rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-qiru-gold-hover transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-lg hover:shadow-qiru-gold/30"
            >
              Diseña tu Mueble
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 relative text-qiru-gold p-1 rounded transition-transform duration-200 hover:scale-110 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-qiru-dark flex flex-col justify-center px-8"
          >
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at center, #9B7A55 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="flex flex-col gap-5 relative z-10">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`font-serif text-4xl block transition-colors duration-200 ${
                        isActive
                          ? 'text-qiru-gold border-l-2 border-qiru-gold pl-5'
                          : 'text-qiru-white pl-5 border-l-2 border-transparent hover:text-qiru-gold hover:border-qiru-gold/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + navLinks.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 pl-5"
              >
                <Link
                  to="/cotizar"
                  className="inline-block px-8 py-3 rounded-full bg-qiru-gold text-qiru-dark font-semibold text-lg hover:bg-qiru-gold-hover transition-colors active:scale-95"
                >
                  Diseña tu Mueble
                </Link>
              </motion.div>

              {/* Contact info at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pl-5 flex flex-col gap-2 border-t border-qiru-border pt-8"
              >
                <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer"
                  className="text-qiru-muted-dark text-sm hover:text-qiru-gold transition-colors">
                  WhatsApp: +593 99 999 9999
                </a>
                <a href="mailto:hola@qiru.com.ec"
                  className="text-qiru-muted-dark text-sm hover:text-qiru-gold transition-colors">
                  hola@qiru.com.ec
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
