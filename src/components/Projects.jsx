import React, { useState } from 'react';
import { Github, ExternalLink, Cpu, Database, Globe, Scan, Terminal, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Social Media Platform",
        type: "Advanced Social Ecosystem",
        description: "A secure, global social platform enabling user interaction through friend requests, real-time messaging, and media sharing. Implemented end-to-end encryption for secure communication and seamless frontend-backend integration. Features AI-driven content curation and sentiment analysis.",
        stack: ["React", "Express", "Node.js", "MongoDB", "Aiven Cloud", "Socket.io"],
        aiAnalysis: "DETECTED: Secure Communication Architecture. \n> Encryption: AES-256 End-to-End.\n> Real-time: Low-latency Socket.io pipelines.\n> AI Intergration: Sentiment-aware logic found.",
        icon: <Globe size={24} color="var(--neon-cyan)" />
    },
    {
        id: 2,
        title: "Event & Travel Booking Portal",
        type: "IRCTC-style Booking System",
        description: "A full-scale booking application featuring user registration, cancellation, and history management. Designed secure login with session handling and real-time availability tracking for dynamic route updates. Enhanced with AI-based demand forecasting.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Redis"],
        aiAnalysis: "DETECTED: High-Volume Transaction Engine. \n> Integrity: ACID compliant.\n> Dynamic Updates: Real-time availability tracking.\n> AI Integration: Heuristic demand forecasting active.",
        icon: <Database size={24} color="var(--neon-purple)" />
    }
];

const AIHighlight = ({ text }) => {
    const [displayed, setDisplayed] = useState('');

    React.useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="ai-terminal"
            style={{
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid var(--accent-green)',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-green)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-green), transparent)', animation: 'scanline 2s linear infinite' }}></div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{displayed}</pre>
        </motion.div>
    );
};

const ProjectCard = ({ project }) => {
    const [analyzing, setAnalyzing] = useState(false);

    return (
        <motion.div
            className="card"
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}
        >
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', transform: 'rotate(45deg)', pointerEvents: 'none' }}></div>

            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        {project.icon}
                    </div>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{project.title}</h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{project.type}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href="#" className="text-gray icon-btn"><Github size={20} /></a>
                    <a href="#" className="text-gray icon-btn"><ExternalLink size={20} /></a>
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.stack.map(tech => (
                        <span key={tech} style={{
                            fontSize: '0.75rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--accent-blue)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontFamily: 'var(--font-mono)'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <button
                        onClick={() => setAnalyzing(!analyzing)}
                        className="btn-outline"
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            borderColor: analyzing ? 'var(--accent-green)' : 'var(--border-color)',
                            color: analyzing ? 'var(--accent-green)' : 'var(--text-secondary)'
                        }}
                    >
                        {analyzing ? <Terminal size={16} /> : <Scan size={16} />}
                        {analyzing ? 'Analysis Complete' : 'Run AI Analysis'}
                    </button>

                    <AnimatePresence>
                        {analyzing && <AIHighlight text={project.aiAnalysis} />}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <Cpu size={32} color="var(--neon-purple)" />
                    <h2 style={{ border: 'none', margin: 0, fontSize: '2.5rem' }}>
                        Projects
                    </h2>
                </div>

                <div className="projects-grid">
                    {projects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
