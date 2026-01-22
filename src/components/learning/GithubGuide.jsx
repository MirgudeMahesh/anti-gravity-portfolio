import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, GitBranch, GitMerge, Globe, BookOpen, ArrowLeft, Command, Cpu, UploadCloud, MessageCircle, Shield, Code2, Youtube, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubGuide = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const sections = [
        {
            title: "What is Git?",
            content: "Git is a distributed version control system that tracks changes in your code. It creates snapshots (commits) of your files, allowing you to revert changes, create branches, and collaborate safely without losing work.",
            icon: <Cpu size={24} color="var(--accent-purple)" />
        },
        {
            title: "What is GitHub?",
            content: "GitHub is a web platform that hosts Git repositories in the cloud. It provides collaboration tools like Pull Requests, Issues, Projects, and Actions for CI/CD, making team development easy.",
            icon: <Globe size={24} color="var(--accent-cyan)" />
        },
        {
            title: "Local vs Remote",
            content: "Local repository exists on your computer. Remote repository lives on GitHub. You push changes from local → remote and pull updates from remote → local to stay synchronized.",
            icon: <UploadCloud size={24} color="#10b981" />
        }
    ];

    const commands = [
        {
            cmd: 'git init',
            desc: "Create a new Git repository in current folder. Initializes .git directory to start tracking files.",
            icon: <Code2 size={16} />
        },
        {
            cmd: 'git clone <url>',
            desc: "Download a GitHub repository to your computer. Creates a local copy with full history.",
            icon: <Command size={16} />
        },
        {
            cmd: 'git branch <name>',
            desc: "Create a new branch to work on features safely without affecting main code.",
            icon: <GitBranch size={16} />
        },
        {
            cmd: 'git checkout <name>',
            desc: "Switch to a different branch. Changes your working files to match that branch.",
            icon: <GitBranch size={16} />
        },
        {
            cmd: 'git add .',
            desc: "Stage all changed files for commit. Prepares files to be saved in next commit.",
            icon: <Shield size={16} />
        },
        {
            cmd: 'git commit -m "message"',
            desc: "Save staged changes as a snapshot with descriptive message. Creates a permanent record.",
            icon: <MessageCircle size={16} />
        },
        {
            cmd: 'git push origin <branch>',
            desc: "Upload your local branch to GitHub. Makes your changes available online.",
            icon: <UploadCloud size={16} />
        },
        {
            cmd: 'git status',
            desc: "Show current state - which files are changed, staged, or untracked.",
            icon: <BookOpen size={16} />
        },
        {
            cmd: 'git log',
            desc: "Display commit history with messages, authors, dates, and changes.",
            icon: <BookOpen size={16} />
        },
        {
            cmd: 'git stash',
            desc: "Temporarily save uncommitted changes. Hide work in progress to switch branches.",
            icon: <Shield size={16} />
        },
        {
            cmd: 'git stash pop',
            desc: "Restore most recent stashed changes back to working directory.",
            icon: <Shield size={16} />
        },
        {
            cmd: 'git pull origin main',
            desc: "Fetch and merge latest changes from GitHub to your local repository.",
            icon: <GitMerge size={16} />
        }
    ];

    const pushSteps = [
        { step: 1, title: "git add .", desc: "Stage all your changes", cmd: "git add ." },
        { step: 2, title: "git commit", desc: "Save changes locally", cmd: 'git commit -m "feat: add login page"' },
        { step: 3, title: "git push", desc: "Upload to GitHub", cmd: "git push origin main" }
    ];

    const prSteps = [
        { step: 1, title: "Fork Repo", desc: "Create your copy on GitHub", icon: "📋" },
        { step: 2, title: "Clone Fork", desc: "Download your fork locally", cmd: "git clone YOUR-FORK-URL" },
        { step: 3, title: "Create Branch", desc: "Work on feature branch", cmd: "git checkout -b feature/login" },
        { step: 4, title: "Make Changes", desc: "Code + test your feature", icon: "💻" },
        { step: 5, title: "Push Branch", desc: "Upload your work", cmd: "git push origin feature/login" },
        { step: 6, title: "Create PR", desc: "Open Pull Request on GitHub", icon: "🔗" },
        { step: 7, title: "Review", desc: "Team reviews + approves", icon: "👥" },
        { step: 8, title: "Merge", desc: "Changes go to main branch", icon: "✅" }
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
                    <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1.5rem',
                            borderRadius: '50%',
                            background: 'rgba(34, 211, 238, 0.1)',
                            marginBottom: '2rem',
                            border: '2px solid var(--accent-cyan)'
                        }}>
                            <GitBranch size={56} color="var(--accent-cyan)" />
                        </div>
                        <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                            Git & <span className="text-gradient">GitHub</span> Guide
                        </h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            Complete beginner guide to version control, collaboration, and open-source contribution.
                        </p>
                    </header>

                    {/* Core Concepts */}
                    <div className="card" style={{ marginBottom: '3rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <BookOpen size={28} /> Core Concepts
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="card"
                                    style={{ padding: '2rem', background: 'var(--bg-card)' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                                            {section.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{section.title}</h3>
                                    </div>
                                    <div className="prose">
                                        <p style={{ color: 'var(--text-secondary)' }}>
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Essential Commands */}
                    <div className="card" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                            <Terminal size={32} /> Essential Commands
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {commands.map((c, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    padding: '1.5rem',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderRadius: '12px',
                                    alignItems: 'start'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                        {c.icon}
                                        <code style={{
                                            color: 'var(--accent-cyan)',
                                            fontFamily: 'monospace',
                                            fontSize: '0.95rem',
                                            fontWeight: '500'
                                        }}>
                                            {c.cmd}
                                        </code>
                                    </div>
                                    <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>
                                        {c.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Push to GitHub Steps */}
                    <div className="card" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>
                            📤 Push Code to GitHub (3 Steps)
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                            {pushSteps.map((step, i) => (
                                <div key={i} style={{
                                    padding: '2rem',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    borderRadius: '16px',
                                    borderLeft: '4px solid #10b981',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        background: '#10b981',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1rem',
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold'
                                    }}>
                                        {step.step}
                                    </div>
                                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#10b981' }}>{step.title}</h3>
                                    <p style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)' }}>{step.desc}</p>
                                    <code style={{
                                        display: 'block',
                                        background: 'rgba(0,0,0,0.3)',
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        color: 'var(--accent-cyan)'
                                    }}>
                                        {step.cmd}
                                    </code>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pull Request Flow */}
                    <div className="card">
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>
                            🔄 Complete Pull Request Flow
                        </h2>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '2rem',
                            position: 'relative'
                        }}>
                            {prSteps.map((item, index) => (
                                <div key={index} style={{
                                    flex: '1 1 200px',
                                    minWidth: '140px',
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 2,
                                    marginBottom: '2rem'
                                }}>
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        background: 'var(--accent-purple)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.25rem',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                                    }}>
                                        {item.icon ? item.icon : item.step}
                                    </div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                    {item.cmd ? (
                                        <code style={{
                                            display: 'block',
                                            background: 'rgba(0,0,0,0.3)',
                                            padding: '0.5rem',
                                            borderRadius: '6px',
                                            fontSize: '0.8rem',
                                            color: 'var(--accent-cyan)',
                                            marginTop: '0.25rem'
                                        }}>
                                            {item.cmd}
                                        </code>
                                    ) : (
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommended Tutorial */}
                    <div className="card" style={{ marginBottom: '3rem', padding: '2rem', background: 'linear-gradient(rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#ef4444' }}>
                            <Youtube size={32} /> Recommended Tutorial
                        </h2>
                        <a
                            href="https://www.youtube.com/watch?v=apGV9Kg7ics"
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
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Complete Git & GitHub Bootcamp</h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Watch Kunal Kushwaha's comprehensive guide ↗</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GithubGuide;
