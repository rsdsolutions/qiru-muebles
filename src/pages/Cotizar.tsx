import type { ReactNode, FormEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { Upload, X, CheckCircle, ArrowRight, ImagePlus } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const MUEBLES_OPTIONS = ['Sofá', 'Cama', 'Closet', 'Mesa', 'Sillas', 'Anaquel', 'Escritorio', 'Otro'];

export default function Cotizar() {
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    ciudad: 'Quito',
    espacio: 'Sala / Living',
    muebles: [] as string[],
    estilo: 'Contemporáneo',
    presupuesto: '$1000–$2500',
    descripcion: '',
  });

  const [previews, setPreviews] = useState<{ url: string; name: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prod = params.get('producto');
    if (prod) {
      setFormData(prev => ({
        ...prev,
        descripcion: `Me interesa el diseño: ${prod}. `,
        muebles: [...prev.muebles, 'Otro'],
      }));
    }
  }, [location.search]);

  const toggleMueble = (m: string) => {
    setFormData(prev => ({
      ...prev,
      muebles: prev.muebles.includes(m) ? prev.muebles.filter(x => x !== m) : [...prev.muebles, m],
    }));
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newPreviews = Array.from(files)
      .filter(f => f.type.startsWith('image/'))
      .map(f => ({ url: URL.createObjectURL(f), name: f.name }));
    setPreviews(prev => [...prev, ...newPreviews].slice(0, 5));
  };

  const removePreview = (index: number) => {
    setPreviews(prev => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const msg = `Hola QIRU! Quiero cotizar un mueble a medida.

Espacio: ${formData.espacio}
Muebles: ${formData.muebles.length > 0 ? formData.muebles.join(', ') : 'No especificado'}
Estilo: ${formData.estilo}
Presupuesto: ${formData.presupuesto}
Ciudad: ${formData.ciudad}
${previews.length > 0 ? `\nReferencias: Adjunto ${previews.length} imagen(es) al chat.` : ''}
Detalles: ${formData.descripcion || 'Sin detalles adicionales'}

Mi nombre es: ${formData.nombre}
Contacto: ${formData.telefono}`;

    const wpUrl = `https://wa.me/593999999999?text=${encodeURIComponent(msg)}`;
    window.open(wpUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    }, 400);
  };

  const inputClass = "bg-transparent border-b border-qiru-border py-3 text-qiru-white focus:outline-none focus:border-qiru-gold transition-colors duration-200 placeholder-qiru-muted-dark/50";
  const labelClass = "text-qiru-muted-dark font-medium text-sm tracking-wide";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <div className="w-full bg-qiru-dark min-h-screen pt-24 pb-24">

      {/* Toast notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 right-8 z-[100] bg-qiru-olive text-qiru-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm border border-qiru-olive-light/20"
          >
            <CheckCircle size={20} className="flex-shrink-0 text-qiru-olive-light" />
            <div>
              <p className="font-semibold text-sm">¡Mensaje listo!</p>
              <p className="text-qiru-olive-light text-xs mt-0.5">Te abrimos WhatsApp para enviarlo.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="ml-2 text-qiru-olive-light hover:text-white transition-colors">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-qiru-border">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-qiru-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-4 block"
          >
            Consulta gratuita · Sin compromiso
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[42px] lg:text-[56px] text-qiru-white mb-6 tracking-[-0.01em]"
          >
            Diseña tu Mueble
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-qiru-muted-dark text-lg">
            Cuéntanos tu idea — te enviamos una propuesta sin costo.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">

        {/* ── FORM ── */}
        <div className="w-full lg:w-2/3">
          <FadeIn>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Nombre completo *</label>
                  <input
                    required type="text" placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>WhatsApp / Teléfono *</label>
                  <input
                    required type="tel" placeholder="+593 99 999 9999"
                    value={formData.telefono}
                    onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* City + Space */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Ciudad</label>
                  <select value={formData.ciudad} onChange={e => setFormData({ ...formData, ciudad: e.target.value })} className={selectClass}>
                    {['Quito', 'Guayaquil', 'Cuenca', 'Otra ciudad ecuatoriana'].map(c => (
                      <option key={c} value={c} className="bg-qiru-surface">{c}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Espacio a amueblar</label>
                  <select value={formData.espacio} onChange={e => setFormData({ ...formData, espacio: e.target.value })} className={selectClass}>
                    {['Sala / Living', 'Dormitorio', 'Cocina', 'Comedor', 'Estudio', 'Varios ambientes'].map(s => (
                      <option key={s} value={s} className="bg-qiru-surface">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Furniture Selection */}
              <div className="flex flex-col gap-4">
                <label className={labelClass}>Muebles de interés (puedes elegir varios)</label>
                <div className="flex flex-wrap gap-2">
                  {MUEBLES_OPTIONS.map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => toggleMueble(m)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:scale-[1.03] active:scale-95 ${
                        formData.muebles.includes(m)
                          ? 'bg-qiru-gold text-qiru-dark border-qiru-gold shadow-md shadow-qiru-gold/20'
                          : 'bg-transparent text-qiru-muted-dark border-qiru-border hover:border-qiru-gold/50 hover:text-qiru-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Estilo preferido</label>
                  <select value={formData.estilo} onChange={e => setFormData({ ...formData, estilo: e.target.value })} className={selectClass}>
                    {['Contemporáneo', 'Minimalista', 'Rústico/Natural', 'Nórdico', 'Me asesoran'].map(s => (
                      <option key={s} value={s} className="bg-qiru-surface">{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Presupuesto aproximado</label>
                  <select value={formData.presupuesto} onChange={e => setFormData({ ...formData, presupuesto: e.target.value })} className={selectClass}>
                    {['$200–$500', '$500–$1000', '$1000–$2500', '$2500+', 'Por definir'].map(p => (
                      <option key={p} value={p} className="bg-qiru-surface">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Describe tu proyecto</label>
                <textarea
                  rows={4}
                  value={formData.descripcion}
                  onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
                  placeholder="Medidas aproximadas del espacio, colores que te gustan, referencias de estilo..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* File Upload */}
              <div className="flex flex-col gap-3">
                <label className={labelClass}>
                  Adjuntar fotos o referencias
                  <span className="ml-2 text-qiru-muted-dark/60 font-normal">(Opcional · hasta 5 imágenes)</span>
                </label>

                {/* Drop zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                  className={`border border-dashed rounded-lg py-8 px-6 text-center cursor-pointer transition-all duration-300 group ${
                    dragOver
                      ? 'border-qiru-gold bg-qiru-gold/5 scale-[1.01]'
                      : 'border-qiru-border hover:border-qiru-gold hover:bg-qiru-gold/5'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={e => handleFiles(e.target.files)}
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-full border border-qiru-border flex items-center justify-center transition-all duration-300 ${dragOver ? 'border-qiru-gold bg-qiru-gold/10' : 'group-hover:border-qiru-gold group-hover:bg-qiru-gold/10'}`}>
                      <ImagePlus size={20} className={`transition-colors duration-300 ${dragOver ? 'text-qiru-gold' : 'text-qiru-muted-dark group-hover:text-qiru-gold'}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium transition-colors duration-300 ${dragOver ? 'text-qiru-gold' : 'text-qiru-muted-dark group-hover:text-qiru-gold'}`}>
                        {dragOver ? 'Suelta aquí tus imágenes' : 'Haz clic o arrastra imágenes aquí'}
                      </p>
                      <p className="text-qiru-muted-dark/60 text-xs mt-1">PNG, JPG, WEBP · Máx. 5 archivos</p>
                    </div>
                  </div>
                </div>

                {/* Image Previews */}
                <AnimatePresence>
                  {previews.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-wrap gap-3"
                    >
                      {previews.map((preview, i) => (
                        <motion.div
                          key={preview.url}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{ duration: 0.2 }}
                          className="relative w-24 h-24 rounded-lg overflow-hidden border border-qiru-border group/thumb"
                        >
                          <img src={preview.url} alt={preview.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-qiru-dark/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() => removePreview(i)}
                              className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                              <X size={13} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                      {previews.length < 5 && (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-24 h-24 rounded-lg border border-dashed border-qiru-border flex items-center justify-center text-qiru-muted-dark hover:border-qiru-gold hover:text-qiru-gold transition-colors duration-200"
                        >
                          <Upload size={18} />
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-gold-shimmer w-full lg:w-max px-12 py-4 bg-qiru-gold text-qiru-dark text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 mt-4 shadow-xl inline-flex items-center justify-center gap-3 group ${
                  isSubmitting
                    ? 'opacity-70 cursor-wait scale-[0.99]'
                    : 'hover:bg-qiru-gold-hover hover:scale-[1.02] active:scale-95 hover:shadow-qiru-gold/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-qiru-dark/30 border-t-qiru-dark rounded-full"
                    />
                    Preparando mensaje…
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Enviar por WhatsApp
                    <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-qiru-muted-dark text-sm -mt-2">
                Al enviar, se abrirá WhatsApp con tu mensaje prellenado.
              </p>
            </form>
          </FadeIn>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <FadeIn delay={0.15}>
            <div className="bg-qiru-surface border-t-2 border-qiru-gold rounded-b-lg p-8 shadow-2xl">
              <h3 className="font-serif text-[24px] text-qiru-white mb-6">Contacto Directo</h3>

              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer flex items-center gap-4 bg-qiru-gold text-qiru-dark p-4 rounded-lg mb-6 hover:bg-qiru-gold-hover transition-all duration-300 font-semibold hover:scale-[1.01] active:scale-[0.99] group"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp | +593 99 999 9999</span>
                <ArrowRight size={14} className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:hola@qiru.com.ec"
                className="flex items-center gap-3 text-qiru-white hover:text-qiru-gold transition-colors duration-200 mb-6 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="group-hover:underline underline-offset-4">hola@qiru.com.ec</span>
              </a>

              <p className="text-qiru-muted-dark text-sm leading-relaxed mb-8">
                Respondemos en menos de 24 horas con una propuesta personalizada y sin costo.
              </p>

              <div className="border-t border-qiru-border pt-6">
                <h4 className="font-serif text-[20px] text-qiru-white mb-4">Visita nuestro showroom</h4>
                <p className="text-qiru-muted-dark text-sm mb-4 leading-relaxed">
                  Av. Interoceánica Km 12 y Ruta Viva<br />
                  Cumbayá, Quito — Ecuador
                </p>
                <a
                  href="https://www.google.com/maps/search/Av.+Interoceánica+Km+12+Cumbayá+Quito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full h-32 bg-qiru-dark border border-qiru-border rounded-lg flex flex-col items-center justify-center relative shadow-inner overflow-hidden hover:border-qiru-gold transition-colors duration-300 cursor-pointer block"
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3E342A 0, #3E342A 1px, transparent 1px, transparent 10px)' }} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="relative z-10 text-qiru-muted-dark text-xs mt-2 group-hover:text-qiru-gold transition-colors duration-300">Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Benefits */}
          <FadeIn delay={0.25}>
            <div className="bg-transparent border border-qiru-olive rounded-lg p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} className="text-qiru-olive-light flex-shrink-0" />
                <h4 className="font-sans font-semibold text-qiru-olive-light text-sm">Sin costos de diseño</h4>
              </div>
              <p className="text-qiru-muted-dark text-sm leading-relaxed">
                El boceto inicial y cálculo de presupuesto es completamente gratis y sin compromiso.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="bg-transparent border border-qiru-border rounded-lg p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={16} className="text-qiru-gold flex-shrink-0" />
                <h4 className="font-sans font-semibold text-qiru-white text-sm">Proceso transparente</h4>
              </div>
              <p className="text-qiru-muted-dark text-sm leading-relaxed">
                Apruebas cada detalle antes de que comience la fabricación. Sin sorpresas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
