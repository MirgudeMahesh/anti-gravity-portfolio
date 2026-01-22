import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, Lightbulb, Layout, Code, Database, Play, Smartphone, Server,
    Shield, CheckCircle, Zap, Clock, Users, Globe, BarChart3, ArrowLeft, Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevLifecycle = () => {
    const [activeStep, setActiveStep] = useState(null);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const lifecycleSteps = [
        {
            id: 1,
            title: "📋 1. Requirements Gathering",
            icon: <BookOpen size={24} />,
            color: "var(--accent-purple)",
            description: "Understand what the client needs and define project goals.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Process of collecting detailed requirements from stakeholders, users, and business goals to define project scope.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Key Activities:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>Client interviews and workshops</li>
                        <li>User surveys and feedback</li>
                        <li>Competitor analysis</li>
                        <li>Functional & non-functional requirements</li>
                        <li>Create User Stories and Use Cases</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Requirements Document (SRS), User Stories, Project Scope</p>
                </div>
            )
        },
        {
            id: 2,
            title: "🎨 2. Planning & Analysis",
            icon: <Lightbulb size={24} />,
            color: "#f59e0b",
            description: "Create roadmap, choose tech stack, and plan architecture.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Detailed planning phase where project timeline, resources, budget, and technical architecture are defined.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Key Decisions:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>Technology Stack (React/Node.js vs Next.js/Python)</li>
                        <li>Database choice (MySQL vs MongoDB)</li>
                        <li>Hosting/Cloud provider (AWS vs Vercel)</li>
                        <li>Project timeline & milestones</li>
                        <li>Team roles & responsibilities</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Project Plan, Tech Stack Decision, Sitemap, Wireframes</p>
                </div>
            )
        },
        {
            id: 3,
            title: "📐 3. UI/UX Design",
            icon: <Layout size={24} />,
            color: "var(--accent-cyan)",
            description: "Create wireframes, mockups, and final visual designs.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Design phase creating visual layouts, user flows, and interactive prototypes before coding begins.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Process:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>Wireframes (low-fidelity layouts)</li>
                        <li>Mobile-first responsive design</li>
                        <li>High-fidelity mockups (Figma/Adobe XD)</li>
                        <li>Interactive prototypes</li>
                        <li>Design system creation (colors, typography)</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Design assets, Style guide, Prototypes, Responsive layouts</p>
                </div>
            )
        },
        {
            id: 4,
            title: "💻 4. Frontend Development",
            icon: <Code size={24} />,
            color: "#10b981",
            description: "Build responsive UI using HTML, CSS, JavaScript, React.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Client-side development creating visual interface and user interactions using modern frontend technologies.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Technologies:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>HTML5, CSS3, JavaScript ES6+</li>
                        <li>React/Vue/Angular frameworks</li>
                        <li>Tailwind CSS / Styled Components</li>
                        <li>State management (Redux/Zustand)</li>
                        <li>Responsive design & animations</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Working frontend, Component library, API integration ready</p>
                </div>
            )
        },
        {
            id: 5,
            title: "🗄️ 5. Backend Development",
            icon: <Server size={24} />,
            color: "#8b5cf6",
            description: "Build APIs, database, authentication, business logic.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Server-side development handling data processing, business logic, APIs, and database operations.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Components:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>REST/GraphQL APIs</li>
                        <li>Database design (schema, relationships)</li>
                        <li>Authentication (JWT, OAuth)</li>
                        <li>File upload/storage</li>
                        <li>Email/SMS services</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Working APIs, Database, Authentication system</p>
                </div>
            )
        },
        {
            id: 6,
            title: "🧪 6. Testing & QA",
            icon: <Shield size={24} />,
            color: "#ef4444",
            description: "Test functionality, performance, security, and usability.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Systematic testing to ensure application works correctly across all browsers, devices, and scenarios.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Test Types:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>Unit Testing (Jest, Vitest)</li>
                        <li>Integration Testing (API endpoints)</li>
                        <li>End-to-End Testing (Cypress)</li>
                        <li>Cross-browser testing</li>
                        <li>Performance & Load testing</li>
                        <li>Security vulnerability scanning</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Bug-free application, Test reports, Performance metrics</p>
                </div>
            )
        },
        {
            id: 7,
            title: "🚀 7. Deployment",
            icon: <Play size={24} />,
            color: "#10b981",
            description: "Deploy to production servers with CI/CD pipeline.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Process of making application live on production servers accessible to end users.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Deployment Steps:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>CI/CD pipeline setup (GitHub Actions)</li>
                        <li>Environment configuration</li>
                        <li>Database migration</li>
                        <li>DNS configuration</li>
                        <li>SSL certificate installation</li>
                        <li>Production monitoring setup</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Platforms:</strong> Vercel, Netlify, AWS, Railway, Render</p>
                </div>
            )
        },
        {
            id: 8,
            title: "🔄 8. Maintenance",
            icon: <Clock size={24} />,
            color: "#06b6d4",
            description: "Monitor, update, and improve application continuously.",
            details: (
                <div className="prose" style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p><strong>Definition:</strong> Ongoing process of monitoring, updating, and improving application post-deployment.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Ongoing Activities:</strong></p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '1rem' }}>
                        <li>Performance monitoring</li>
                        <li>Security patches & updates</li>
                        <li>Bug fixes</li>
                        <li>New feature development</li>
                        <li>Database optimization</li>
                        <li>Backup & disaster recovery</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}><strong>Deliverables:</strong> Stable, secure, performant application</p>
                </div>
            )
        }
    ];

    return (
        <div className="page-container" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <div className="container">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', textDecoration: 'none' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Hero */}
                    <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1.5rem',
                            borderRadius: '50%',
                            background: 'rgba(56, 189, 248, 0.1)',
                            marginBottom: '2rem',
                            border: '2px solid var(--accent-cyan)'
                        }}>
                            <Globe size={56} color="var(--accent-cyan)" />
                        </div>
                        <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                            Web Development <span className="text-gradient">Lifecycle</span>
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.3rem' }}>
                            Complete 8-stage process from idea to production and maintenance.
                        </p>
                    </header>

                    {/* Interactive Lifecycle Steps */}
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', textAlign: 'center' }}>
                            <BarChart3 size={32} /> Complete Lifecycle - Click to Expand
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {lifecycleSteps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="card"
                                    style={{
                                        padding: '2.5rem 2rem',
                                        border: `3px solid ${activeStep === step.id ? step.color : 'var(--border-color)'}`,
                                        background: activeStep === step.id ? `${step.color}10` : 'var(--bg-card)',
                                        cursor: 'pointer',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            padding: '1rem',
                                            background: `${step.color}15`,
                                            borderRadius: '12px',
                                            border: `1px solid ${step.color}30`
                                        }}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: activeStep === step.id ? step.color : 'var(--text-primary)' }}>
                                                {step.title}
                                            </h3>
                                            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    {activeStep === step.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            style={{ marginTop: '1.5rem' }}
                                        >
                                            {step.details}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Recommended Tutorial */}
                    <div className="card" style={{ marginBottom: '3rem', padding: '2rem', background: 'linear-gradient(rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#ef4444' }}>
                            <Youtube size={32} /> Recommended Tutorial
                        </h2>
                        <a
                            href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tutorial-link"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem',
                                background: 'var(--bg-dark)',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-color)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ background: '#ef4444', padding: '1rem', borderRadius: '50%', display: 'flex' }}>
                                <Play size={24} color="white" fill="white" />
                            </div>
                            <div>
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Web Development Course</h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Full Stack Web Dev Playlist ↗</p>
                            </div>
                        </a>
                    </div>

                    {/* Final CTA */}
                    <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(145deg, var(--accent-cyan), rgba(56, 189, 248, 0.3))', border: 'none', color: 'white' }}>
                        <CheckCircle size={64} style={{ margin: '0 auto 2rem' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚀 Complete Lifecycle Ready!</h2>
                        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Follow these 8 stages for any web project - from startup MVP to enterprise application.
                        </p>
                    </div>
                </motion.div>
            </div >
        </div >
    );
};

export default WebDevLifecycle;
