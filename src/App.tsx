import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LinkedInPage from './pages/LinkedInPage';
import GoogleAnalyticsPage from './pages/GoogleAnalyticsPage';
import InstagramPage from './pages/InstagramPage';
import FacebookPage from './pages/FacebookPage';
import WhatsappPage from './pages/WhatsappPage';

function useEmbedMode() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return params.get('embed') === '1';
}

export default function App() {
  const embed = useEmbedMode();
  return (
    <div className={embed ? 'embed' : ''}>
      <div className="app">
        {!embed && (
          <aside className="sidebar">
            <div className="logo" aria-label="Logo Métricas Inteligentes">
              <span className="logo-badge">MI</span>
              <span>Métricas Inteligentes</span>
            </div>
            <nav className="nav">
              <NavLink to="/" end>Inicio</NavLink>
              <NavLink to="/linkedin">LinkedIn</NavLink>
              <NavLink to="/google-analytics">Google Analytics</NavLink>
              <NavLink to="/instagram">Instagram</NavLink>
              <NavLink to="/facebook">Facebook</NavLink>
              <NavLink to="/whatsapp">WhatsApp</NavLink>
            </nav>
          </aside>
        )}
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/linkedin" element={<LinkedInPage />} />
            <Route path="/google-analytics" element={<GoogleAnalyticsPage />} />
            <Route path="/instagram" element={<InstagramPage />} />
            <Route path="/facebook" element={<FacebookPage />} />
            <Route path="/whatsapp" element={<WhatsappPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
