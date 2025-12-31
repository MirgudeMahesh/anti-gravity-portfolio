import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Terminal, Cpu } from 'lucide-react';

const SkillCategory = ({ title, icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5 }}
        style={{ marginBottom: '3rem' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            {icon}
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{title}</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
            {skills.map((skill, idx) => (
                <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)', backgroundColor: 'rgba(56, 189, 248, 0.05)' }}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        padding: '1rem',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        cursor: 'default',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)'
                    }}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}
                >
                    <Cpu size={32} color="var(--primary-color)" />
                    <h2 style={{ border: 'none', margin: 0, fontSize: '2.5rem' }}>Technical Arsenal</h2>
                </motion.div>

                <div className="skills-grid">
                    <SkillCategory
                        title="Frontend Architecture"
                        icon={<Code size={20} color="var(--accent-cyan)" />}
                        skills={["React", "Redux", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"]}
                        delay={0.1}
                    />

                    <SkillCategory
                        title="Backend & Data"
                        icon={<Server size={20} color="var(--accent-blue)" />}
                        skills={["Node.js", "Express", "Java", "Python", "GraphQL", "Socket.io"]}
                        delay={0.2}
                    />

                    <SkillCategory
                        title="Cloud & DevOps"
                        icon={<Cloud size={20} color="var(--primary-color)" />}
                        skills={["AWS EC2", "Docker", "Kubernetes", "CI/CD", "Nginx", "Redis"]}
                        delay={0.3}
                    />

                    <SkillCategory
                        title="Database Systems"
                        icon={<Database size={20} color="var(--text-muted)" />}
                        skills={["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"]}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
