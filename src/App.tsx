import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Colecciones from './pages/Colecciones';
import Proceso from './pages/Proceso';
import Materiales from './pages/Materiales';
import Proyectos from './pages/Proyectos';
import Cotizar from './pages/Cotizar';
import Nosotros from './pages/Nosotros';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colecciones" element={<Colecciones />} />
          <Route path="proceso" element={<Proceso />} />
          <Route path="materiales" element={<Materiales />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="cotizar" element={<Cotizar />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}