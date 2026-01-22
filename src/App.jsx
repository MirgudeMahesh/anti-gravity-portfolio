import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';
import GithubGuide from './components/learning/GithubGuide';
import DockerGuide from './components/learning/DockerGuide';
import WebDevLifecycle from './components/learning/WebDevLifecycle';
const Home = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Learning />
            <Contact />
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '2rem', fontSize: '0.9rem' }}>
            <p className="text-mono">Built with React & Cyberpunk Aesthetics by Mahesh Kumar Mirgude</p>
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>
    </>
);

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learning/github" element={<GithubGuide />} />
                <Route path="/learning/devops" element={<DockerGuide />} />
                
                                <Route path="/learning/web-development" element={<WebDevLifecycle />} />

            </Routes>
        </div>
    );
}

export default App;
