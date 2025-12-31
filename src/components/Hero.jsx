import React, { useEffect, useState } from 'react';
import { FileText, Mail, ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = '> Hello, I am Mahesh Kumar Mirgude...';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ position: 'relative' }}>
                {/* Background Decorator */}
                <div style={{
                    position: 'absolute', top: -100, right: -100, width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                    zIndex: -1, pointerEvents: 'none'
                }}></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                        <Terminal size={18} className="text-cyan" />
                        <span className="text-mono text-cyan" style={{ fontSize: '0.9rem' }}>SYSTEM_READY: V.2.0.4</span>
                    </div>

                    <h1 className="text-mono" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', minHeight: '3.5rem', fontSize: '1.8rem' }}>
                        {text}<motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="text-cyan"
                        >_</motion.span>
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        style={{ fontSize: '3.5rem', marginTop: '0', marginBottom: '1.5rem', lineHeight: '1.1' }}
                    >
                        Full Stack Developer & <br />
                        <span className="text-cyan" style={{ position: 'relative' }}>
                            DevOps Engineer
                            <svg style={{ position: 'absolute', bottom: -5, left: 0, width: '100%', height: '8px' }} viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="var(--primary-color)" strokeWidth="2" fill="none" opacity="0.5" />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="text-muted"
                        style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.7' }}
                    >
                        Architecting scalable digital ecosystems. Specializing in high-performance React architectures, Node.js microservices, and automated AWS pipelines.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 }}
                        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                       
                        <a href="#contact" className="btn btn-outline">
                            <Mail size={18} /> Contact System <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    style={{ marginTop: '5rem', padding: '1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--border-color)', borderRadius: '4px' }}
                    className="text-mono"
                >
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span className="text-muted">$ current_role:</span>
                            <span className="text-cyan">Full Stack Developer @ Pulse Pharma</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span className="text-muted">$ uptime:</span>
                            <span className="text-cyan">99.99%</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span className="text-muted">$ location:</span>
                            <span className="text-cyan">Hyderabad</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
