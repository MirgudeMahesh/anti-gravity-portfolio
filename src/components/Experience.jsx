import React from 'react';
import { Briefcase, Calendar, CheckCircle, Server, Code, Users, Cloud } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, achievements }) => (
    <div className="glass-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent-green)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.5rem' }}>{role}</h3>
                <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.2rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{company}</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Calendar size={16} />
                <span>{period}</span>
            </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.05rem' }}>{description}</p>

        <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>Key Impact & Deliverables:</h5>
        <div style={{ display: 'grid', gap: '1rem' }}>
            {achievements.map((item, idx) => (
                <div key={idx} style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'start',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ marginTop: '2px' }}>{item.icon}</div>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.text}</span>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <Briefcase size={32} color="var(--accent-green)" />
                    <h2 style={{ border: 'none', margin: 0, fontSize: '2.5rem' }}>Professional Experience</h2>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ExperienceItem
                        role="Full Stack Developer (Software Developer)"
                        company="Pulse Pharma"
                        period="May 2025 – Present" // Assuming 'Present' based on "work right now"
                        description="Spearheading the end-to-end SDLC for critical internal tools. I bridge the gap between business requirements and technical execution, translating complex production planning needs into scalable, user-centric software solutions used daily by ~2000 employees."
                        achievements={[
                            {
                                icon: <Code size={20} color="var(--neon-cyan)" />,
                                text: "Architected and delivered full-stack React applications from scratch, handling everything from requirement analysis and production planning to final deployment."
                            },
                            {
                                icon: <Cloud size={20} color="var(--neon-purple)" />,
                                text: "Managed company-wide AWS infrastructure and bare-metal servers, ensuring 99.9% availability for mission-critical apps."
                            },
                            {
                                icon: <Server size={20} color="var(--accent-blue)" />,
                                text: "Implemented robust CI/CD pipelines (GitHub Actions/Docker) for all applications, reducing deployment times by 70% and enabling automated testing."
                            },
                            {
                                icon: <Users size={20} color="var(--accent-green)" />,
                                text: "Scaled applications to support ~2000 active concurrent users, optimizing database queries and backend logic for high throughput."
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
