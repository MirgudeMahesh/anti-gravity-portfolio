import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Award, ArrowUpRight, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import certPdf from '../oracle_cert.pdf';

const Contact = () => {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
            <div className="container">

                {/* Certifications Subsection */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="glass-card" style={{ display: 'inline-flex', flexDirection: 'column', gap: '1rem', borderColor: 'var(--primary-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                                <Award size={32} color="var(--primary-color)" />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>Oracle Certified Associate</h3>
                                <p className="text-mono text-cyan" style={{ margin: 0, fontSize: '0.9rem' }}>:: Java SE 8 Programmer</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowPreview(true)}
                            className="btn btn-outline"
                            style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
                        >
                            <Eye size={16} /> Preview Certificate
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: '1.1' }}>
                            Ready to <br />
                            <span className="text-cyan">Scale Your Systems?</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '500px' }}>
                            I am currently open to new opportunities. Let's discuss how I can act as a force multiplier for your engineering team.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:mirgudemahesh2002@gmail.com" className="text-mono" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                                <Mail size={20} className="text-cyan" />
                                mirgudemahesh2002@gmail.com
                            </a>

                            <a href="tel:+919676200234" className="text-mono" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                                <Phone size={20} className="text-cyan" />
                                +91 9676200234
                            </a>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 className="text-mono" style={{ marginBottom: '2rem', fontSize: '1.25rem', overflowWrap: 'break-word' }}>$ connect_via_socials</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <a href="https://github.com/MirgudeMahesh" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent: 'space-between', width: '100%', whiteSpace: 'normal', height: 'auto', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
                                    <Github size={20} style={{ flexShrink: 0 }} />
                                    <span style={{ overflowWrap: 'anywhere', textAlign: 'left' }}>/MirgudeMahesh</span>
                                </div>
                                <ArrowUpRight size={16} style={{ flexShrink: 0 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/mirgude-mahesh-kumar-794546221/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'space-between', width: '100%', whiteSpace: 'normal', height: 'auto', padding: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
                                    <Linkedin size={20} style={{ flexShrink: 0 }} />
                                    <span style={{ overflowWrap: 'anywhere', textAlign: 'left' }}>/in/mirgude-mahesh</span>
                                </div>
                                <ArrowUpRight size={16} style={{ flexShrink: 0 }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPreview(false)}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 1000,
                            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', p: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ position: 'relative', width: '90%', maxWidth: '800px', height: '80vh', background: 'var(--bg-card)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}
                        >
                            <button
                                onClick={() => setShowPreview(false)}
                                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                src={certPdf}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="Certificate Preview"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
