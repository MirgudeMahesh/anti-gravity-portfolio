import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '2rem', fontSize: '0.9rem' }}>
                <p className="text-mono">Built with React & Cyberpunk Aesthetics by Mahesh Kumar Mirgude</p>
                <p>© {new Date().getFullYear()} All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
