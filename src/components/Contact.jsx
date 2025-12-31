import React from 'react';
import { Mail, Phone, Linkedin, Github, Award, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
            <div className="container">

                {/* Certifications Subsection */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', borderColor: 'var(--primary-color)' }}>
                        <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.8rem', borderRadius: '50%' }}>
                            <Award size={32} color="var(--primary-color)" />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>Oracle Certified Associate</h3>
                            <p className="text-mono text-cyan" style={{ margin: 0, fontSize: '0.9rem' }}>:: Java SE 8 Programmer</p>
                        </div>
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

                    <div className="glass-card" style={{ padding: '3rem', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 className="text-mono" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>$ connect_via_socials</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <a href="https://github.com/MirgudeMahesh" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Github size={20} />
                                    <span>/MirgudeMahesh</span>
                                </div>
                                <ArrowUpRight size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/mirgude-mahesh-kumar-794546221/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Linkedin size={20} />
                                    <span>/in/mirgude-mahesh</span>
                                </div>
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
