import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-full bg-qiru-olive flex flex-col items-center justify-center pt-1 transition-transform duration-300 group-hover:scale-105">
      <span className="font-serif text-lg tracking-[0.05em] leading-none text-qiru-white">QIRU</span>
      <span className="font-sans text-[9px] font-medium tracking-[0.2em] leading-none mt-1 text-qiru-white">MUEBLES</span>
    </div>
    <span className="font-serif text-[22px] text-qiru-white group-hover:text-qiru-gold transition-colors duration-300">QIRU</span>
  </div>
);

const navLinks = [
  { name: 'Colecciones', path: '/colecciones' },
  { name: 'Proceso', path: '/proceso' },
  { name: 'Materiales', path: '/materiales' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Cotizar', path: '/cotizar' },
];

export default function Footer() {
  return (
    <footer className="bg-qiru-dark border-t border-qiru-border" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="group w-fit" aria-label="Ir al inicio">
            <Logo />
          </Link>
          <p className="text-qiru-muted-dark text-sm max-w-xs leading-relaxed">
            Diseñamos el mueble que imaginas.
            <br />
            Ecuador · Fabricación a medida.
          </p>
          <div className="flex gap-3 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-qiru-gold text-qiru-gold flex items-center justify-center hover:bg-qiru-gold hover:text-qiru-dark transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-qiru-gold text-qiru-gold flex items-center justify-center hover:bg-qiru-gold hover:text-qiru-dark transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-qiru-gold text-qiru-gold flex items-center justify-center hover:bg-qiru-gold hover:text-qiru-dark transition-all duration-200 hover:scale-110 active:scale-95 font-serif font-bold text-xs"
              aria-label="Pinterest"
            >
              P
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          {navLinks.slice(0, 3).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-qiru-muted-dark hover:text-qiru-gold transition-colors duration-200 text-sm h-fit"
            >
              {link.name}
            </Link>
          ))}
          {navLinks.slice(3).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-qiru-muted-dark hover:text-qiru-gold transition-colors duration-200 text-sm h-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col md:items-end gap-5">
          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer px-6 py-2 rounded-full border border-qiru-gold text-qiru-gold hover:bg-qiru-gold hover:text-qiru-dark transition-all duration-300 inline-flex items-center gap-2 text-sm hover:scale-[1.03] active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp +593 99 999 9999
          </a>
          <a
            href="mailto:hola@qiru.com.ec"
            className="text-qiru-white hover:text-qiru-gold transition-colors duration-200 text-sm"
          >
            hola@qiru.com.ec
          </a>
          <p className="text-qiru-muted-dark text-xs">
            Quito · Guayaquil · Cuenca
          </p>
        </div>
      </div>

      <div className="bg-qiru-surface py-5 border-t border-qiru-border/50 text-center">
        <p className="text-qiru-muted-dark text-xs sm:text-sm">
          © 2026 QIRU Muebles · Ecuador · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
