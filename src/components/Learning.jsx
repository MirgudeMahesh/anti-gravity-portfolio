import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GitMerge, ChevronRight, Truck, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Learning = () => {
    const navigate = useNavigate();

    return (
        <section id="learning" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <BookOpen size={32} color="var(--primary-color)" />
                        <h2 style={{ border: 'none', margin: 0, fontSize: '2.5rem' }}>
                            Knowledge Hub
                        </h2>
                    </div>

                    <div className="learning-grid" style={{ marginBottom: '2rem' }}>
                        {/* 1. Git & GitHub Module */}
                        <motion.div
                            className="glass-card blog-preview-card"
                            whileHover={{ y: -5 }}
                            onClick={() => navigate('/learning/github')}
                            style={{
                                cursor: 'pointer',
                                height: '100%',
                                borderTop: '4px solid var(--accent-cyan)'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(34, 211, 238, 0.1)',
                                    marginBottom: '1.5rem'
                                }}>
                                    <GitMerge size={32} color="var(--accent-cyan)" />
                                </div>
                                <h3 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.75rem'
                                }}>
                                    Git & GitHub Mastery
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6'
                                }}>
                                    Master version control, understand the open-source workflow, and learn key commands for collaboration.
                                </p>
                            </div>
                            <div style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--accent-cyan)',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                Read Guide <ChevronRight size={16} />
                            </div>
                        </motion.div>

                        {/* 2. DevOps Module */}
                        <motion.div
                            className="glass-card blog-preview-card"
                            whileHover={{ y: -5 }}
                            onClick={() => navigate('/learning/devops')}
                            style={{
                                cursor: 'pointer',
                                height: '100%',
                                borderTop: '4px solid var(--accent-blue)'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    marginBottom: '1.5rem'
                                }}>
                                    <Truck size={32} color="var(--accent-blue)" />
                                </div>
                                <h3 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.75rem'
                                }}>
                                    DevOps Journey
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6'
                                }}>
                                    Production-ready pipelines. Learn Docker, CI/CD, and conquer the "works on my machine" problem.
                                </p>
                            </div>
                            <div style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--accent-blue)',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                Read Guide <ChevronRight size={16} />
                            </div>
                        </motion.div>

                        {/* 3. Web Development Module */}
                        <motion.div
                            className="glass-card blog-preview-card"
                            whileHover={{ y: -5 }}
                            onClick={() => navigate('/learning/web-development')}
                            style={{
                                cursor: 'pointer',
                                height: '100%',
                                borderTop: '4px solid var(--primary-color)'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    marginBottom: '1.5rem'
                                }}>
                                    <Globe size={32} color="var(--primary-color)" />
                                </div>
                                <h3 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.75rem'
                                }}>
                                    Web Development Lifecycle
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6'
                                }}>
                                    Master web development from scratch - complete tech stack for frontend, backend, and database.
                                </p>
                            </div>
                            <div style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'var(--primary-color)',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                Read Guide <ChevronRight size={16} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Learning;
