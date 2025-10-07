import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Files from './pages/FIles'
import Contact from './pages/Contact'

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/files" element={<Files />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}
