import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Services } from '@/components/landing/Services'
import { About } from '@/components/landing/About'
import { Insights } from '@/components/landing/Insights'
import { Contact } from '@/components/landing/Contact'
import { Footer } from '@/components/landing/Footer'
import { ArticleDetail } from '@/pages/ArticleDetail'

function HomePage() {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: 'var(--brand-cream)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
