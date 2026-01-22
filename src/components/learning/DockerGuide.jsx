import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Zap, ArrowRight, ArrowLeft, Server, LayoutTemplate, Database, Code, ShieldCheck, AlertTriangle, CheckCircle, Clock, Layers, Globe, Users, BarChart3, GitBranch, UploadCloud, Settings, Youtube, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsGuide = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        {
            id: 1,
            title: "🤔 What is DevOps?",
            icon: <Users size={24} />,
            color: "var(--accent-purple)",
            description: "Culture + Practices uniting Development and Operations teams.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> DevOps combines "Development" (Dev) and "Operations" (Ops) - a set of practices, tools, and cultural philosophies that automate and improve software delivery speed, quality, and collaboration between traditionally siloed teams.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Break down barriers between developers (who write code) and operations (who deploy/maintain systems) to enable faster, more reliable software releases through automation and shared responsibility.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Core Principles:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li>Collaboration between Dev and Ops teams</li>
                            <li>Automation of repetitive tasks</li>
                            <li>Continuous feedback and improvement</li>
                            <li>Shared responsibility for code quality</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "🐳 Docker",
            icon: <Container size={24} />,
            color: "#10b981",
            description: "Containerization platform to package applications consistently.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> Docker is a platform that uses OS-level virtualization to deliver software in packages called containers - lightweight, portable, and consistent environments containing an application and all its dependencies.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Solve "it works on my machine" problems by ensuring applications run identically across development, testing, and production environments.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Key Components:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li><strong>Dockerfile:</strong> Blueprint defining how to build a container</li>
                            <li><strong>Image:</strong> Read-only template created from Dockerfile</li>
                            <li><strong>Container:</strong> Running instance of an image</li>
                            <li><strong>Registry:</strong> Storage/distribution system (Docker Hub)</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "🔄 GitHub Actions",
            icon: <GitBranch size={24} />,
            color: "var(--accent-cyan)",
            description: "CI/CD platform integrated with GitHub repositories.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate software development workflows directly within GitHub repositories using YAML configuration files.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Automate build, test, and deployment processes triggered by GitHub events like pushes, pull requests, or scheduled times.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Key Features:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li>Event-driven workflows (push, PR, schedule)</li>
                            <li>Reusable actions marketplace</li>
                            <li>Matrix builds for multiple environments</li>
                            <li>Secrets management for secure deployments</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "☁️ AWS EC2",
            icon: <Server size={24} />,
            color: "#f59e0b",
            description: "Scalable virtual servers in Amazon Web Services cloud.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity in the cloud, allowing users to launch virtual servers (instances) with chosen operating systems, CPU, memory, and storage configurations.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Run applications in the cloud without managing physical hardware, with options for on-demand, reserved, or spot instances for cost optimization.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Key Features:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li>Multiple instance types (t3.micro, m5.large, etc.)</li>
                            <li>Auto Scaling Groups for traffic handling</li>
                            <li>Elastic Load Balancers for traffic distribution</li>
                            <li>Security Groups (firewall rules)</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            title: "📋 Docker Compose",
            icon: <LayoutTemplate size={24} />,
            color: "#8b5cf6",
            description: "Tool for defining and running multi-container applications.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> Docker Compose is a tool for defining and running multi-container Docker applications using a single YAML file that specifies services, networks, and volumes.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Simplify management of complex applications with multiple interconnected services (frontend, backend, database, etc.) using simple commands.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Key Components:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li><strong>Services:</strong> Definition of individual containers</li>
                            <li><strong>Networks:</strong> Private networks for service communication</li>
                            <li><strong>Volumes:</strong> Persistent data storage</li>
                            <li><strong>Depends_on:</strong> Service startup ordering</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 6,
            title: "🌐 Nginx",
            icon: <Globe size={24} />,
            color: "#06b6d4",
            description: "High-performance web server and reverse proxy.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> Nginx (Engine-X) is an open-source web server, reverse proxy server, load balancer, and HTTP cache that excels at handling high concurrency and static content efficiently.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Purpose:</strong> Serve static content quickly, proxy requests to backend applications, balance load across multiple servers, and provide SSL termination.</p>
                        <p style={{ marginTop: '1rem' }}><strong>Key Roles:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li>Reverse proxy (forward requests to backend services)</li>
                            <li>Load balancer (distribute traffic across servers)</li>
                            <li>Static file server (HTML, CSS, images)</li>
                            <li>SSL/TLS termination (HTTPS encryption)</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 7,
            title: "🔧 CI/CD",
            icon: <UploadCloud size={24} />,
            color: "#10b981",
            description: "Continuous Integration and Continuous Delivery/Deployment.",
            details: (
                <div style={{ padding: '1.5rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <div className="prose">
                        <p><strong>Definition:</strong> CI/CD refers to two practices: Continuous Integration (frequent code integration with automated testing) and Continuous Delivery/Deployment (automated release to production or staging environments).</p>
                        <p style={{ marginTop: '1rem' }}><strong>CI Purpose:</strong> Developers frequently merge code changes into a shared repository with automated builds and tests to detect integration issues early.</p>
                        <p style={{ marginTop: '1rem' }}><strong>CD Purpose:</strong> Automate the release process so code is always in a deployable state (Delivery) or automatically deployed to production (Deployment).</p>
                        <p style={{ marginTop: '1rem' }}><strong>Pipeline Stages:</strong></p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '1rem' }}>
                            <li>Build → Test → Package → Deploy → Monitor</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


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
                            <Settings size={56} color="var(--accent-cyan)" />
                        </div>
                        <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                            DevOps <span className="text-gradient">Guide</span>
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.3rem' }}>
                            Complete definitions and explanations of core DevOps concepts for beginners.
                        </p>
                    </header>

                    {/* Interactive Steps */}
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', textAlign: 'center' }}>
                            <BarChart3 size={32} /> Click any concept to read definition
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {steps.map((step) => (
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
                            href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak"
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
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>DevOps Bootcamp</h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Complete DevOps Roadmap & Tutorials ↗</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DevOpsGuide;
