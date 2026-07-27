import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './pages/Home'
import TechStackPage from './pages/TechStack'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Tech circuit pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(30, 167, 242, 0.4) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(24, 200, 232, 0.4) 0%, transparent 50%),
                         linear-gradient(90deg, rgba(30, 167, 242, 0.15) 1px, transparent 1px),
                         linear-gradient(rgba(30, 167, 242, 0.15) 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 100% 100%, 50px 50px, 50px 50px'
      }}></div>
      {/* Shiny blue overlay effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
      
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
