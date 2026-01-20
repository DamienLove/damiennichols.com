import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Download, Code, Shield, Server, Smartphone, Cpu, Zap, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const OmniRemoteWiki = () => {
    return (
        <div className="page-container omni-wiki">
            <div className="wiki-nav-header">
                <Link to="/omniremote" className="back-link">
                    <ArrowLeft size={20} /> Back to OmniRemote
                </Link>
                <h1>Omni Project Remote Wiki</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead">
                        <strong>Omni Project Remote</strong> is a professional-grade suite for managing and accessing your development workstation from anywhere.
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>🏗️ Dynamic Dual-Host Architecture</h2>
                    <p>OmniRemote now supports a <strong>Dual-Host model</strong>, allowing you to choose the best integration for your workflow:</p>
                    <div className="card-grid">
                        <div className="wiki-card">
                            <Server className="card-icon cyan" />
                            <h3>Standalone Host</h3>
                            <p>A persistent Python-based background service for 24/7 access to your entire workstation.</p>
                        </div>
                        <div className="wiki-card">
                            <Code className="card-icon green" />
                            <h3>IDE Integrated Host</h3>
                            <p>The Android Studio plugin acts as the server. Zero-setup, project-specific remote control.</p>
                        </div>
                        <div className="wiki-card">
                            <Smartphone className="card-icon purple" />
                            <h3>Universal Client</h3>
                            <p>Native Android app with Firebase sync, biometric security, and a Chrome Remote Desktop bridge.</p>
                        </div>
                    </div>
                </section>

                <section className="wiki-section" id="installation">
                    <h2>📥 Installation Guide</h2>

                    <div className="subsection">
                        <h3>1. Remote Agent (Windows)</h3>
                        <p>The Remote Agent is the core of the system and must run on the workstation where projects are located.</p>
                        <div className="installation-steps">
                            <h4>Option A: Windows Installer (Recommended)</h4>
                            <ol>
                                <li>Download <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/OmniRemoteAgentSetup.exe">OmniRemoteAgentSetup.exe</a>.</li>
                                <li>Run the installer and follow the on-screen instructions.</li>
                                <li>Navigate to the installation directory (usually <code>C:\Program Files (x86)\OmniRemoteAgent</code>).</li>
                                <li>Copy <code>secrets.env.template</code> to <code>secrets.env</code>.</li>
                                <li>Edit <code>secrets.env</code> and set your <code>REMOTE_ACCESS_TOKEN</code>.</li>
                            </ol>

                            <h4>Option B: Portable Executable</h4>
                            <ol>
                                <li>Download <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/OmniRemoteAgentPortable.exe">OmniRemoteAgentPortable.exe</a>.</li>
                                <li>Place it in a folder of your choice.</li>
                                <li>Create a <code>secrets.env</code> file in the same folder with your configuration.</li>
                                <li>Run the executable.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>2. Android App</h3>
                        <ol>
                            <li>Download <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/OmniProjectRemote.apk">OmniProjectRemote.apk</a>.</li>
                            <li>Enable "Install from Unknown Sources" in your Android settings.</li>
                            <li>Install and launch the app.</li>
                            <li>Go to <strong>Setup</strong> and enter your PC's IP or Cloudflare URL, port, and access token.</li>
                        </ol>
                    </div>

                    <div className="subsection">
                        <h3>3. IDE Plugin (Host Mode)</h3>
                        <ol>
                            <li>Download <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/AndroidStudioPlugin.zip">AndroidStudioPlugin.zip</a>.</li>
                            <li>In Android Studio, go to <strong>Settings</strong> {'>'} <strong>Plugins</strong>.</li>
                            <li>Click the gear icon and select <strong>Install Plugin from Disk...</strong>.</li>
                            <li>Navigate to the <strong>Omni Remote</strong> tool window in the sidebar.</li>
                            <li>Go to <strong>Host Mode</strong>, set your token, and click <strong>Start Host</strong>.</li>
                        </ol>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>🎮 Features & Components</h2>

                    <div className="subsection">
                        <h3>Remote Agent Deep Dive</h3>
                        <p>The Remote Agent is a FastAPI-based Python server that serves as the heart of the Omni system.</p>
                        <ul>
                            <li><strong>Project Management:</strong> Optimized for high-speed file operations and state management between local and cloud workspaces.</li>
                            <li><strong>Shell Bridge:</strong> Provides a secure, real-time bridge to PowerShell and CMD using WebSockets with support for interactive inputs.</li>
                            <li><strong>WinGet Automation:</strong> Remotely trigger software installations and environment updates using the Windows Package Manager.</li>
                        </ul>
                    </div>

                    <div className="subsection">
                        <h3>Android Client Guide</h3>
                        <p>The mobile interface is a native Jetpack Compose application designed for efficient workstation management on the go.</p>
                        <ul>
                            <li><strong>Firebase Sync:</strong> Automatically sync host and token details between your PC and phone.</li>
                            <li><strong>Biometric Unlock:</strong> Secure your remote session with fingerprint or face recognition.</li>
                            <li><strong>CRD Bridge:</strong> Quick-launch Chrome Remote Desktop directly from the app for full UI control.</li>
                        </ul>
                    </div>

                    <div className="subsection">
                        <h3>IDE Plugin Guide</h3>
                        <p>Integrate OmniRemote directly into your development workflow with the Android Studio and IntelliJ plugin. Version 0.1.0 introduces <strong>Host Mode</strong>.</p>
                        <ul>
                            <li><strong>Host Mode Server:</strong> Run the Omni Agent directly inside your IDE. Your phone connects to the IDE's IP and port, bypassing the standalone Python agent.</li>
                            <li><strong>Remote Launch:</strong> Open local projects in new IDE windows directly from your mobile device.</li>
                            <li><strong>Status Monitoring:</strong> Real-time connection feedback directly in the IDE status bar.</li>
                            <li><strong>Embedded Terminal:</strong> Execute shell commands within the IDE's environment remotely.</li>
                        </ul>
                        <div className="note-box">
                            <strong>How to use Host Mode:</strong> Open the Omni Remote tool window in your IDE {'>'} Go to <strong>Host Mode</strong> tab {'>'} Set a Port and Token {'>'} Click <strong>Start Host</strong>.
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>🔒 Security Best Practices</h2>
                    <div className="note-box">
                        <strong>Important:</strong> Always use a strong, unique <code>REMOTE_ACCESS_TOKEN</code>.
                    </div>
                    <ul>
                        <li><strong>Cloudflare Tunnel:</strong> Use Cloudflare Tunnels to expose your agent securely without opening firewall ports.</li>
                        <li><strong>Firebase Sync:</strong> Use Firebase to securely sync connection details between your PC and mobile device.</li>
                        <li><strong>Biometrics:</strong> Enable biometric authentication in the Android app for an extra layer of protection.</li>
                    </ul>
                </section>
            </div>

            <style>{`
                .omni-wiki {
                    background-color: #0d0d15;
                    color: #e0e0e0;
                    min-height: 100vh;
                    padding-top: 2rem;
                }

                .wiki-nav-header {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    margin-bottom: 2rem;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #00f3ff;
                    text-decoration: none;
                    margin-bottom: 1rem;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .back-link:hover {
                    color: #bc13fe;
                }

                .wiki-nav-header h1 {
                    font-size: 2.8rem;
                    background: linear-gradient(to right, #00f3ff, #bc13fe);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                }

                .wiki-content {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 0 2rem 4rem 2rem;
                }

                .wiki-intro .lead {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    color: #aaa;
                    border-left: 4px solid #00f3ff;
                    padding-left: 1.5rem;
                    background: rgba(0, 243, 255, 0.05);
                    padding: 1.5rem;
                    border-radius: 0 12px 12px 0;
                }

                .wiki-section {
                    margin-bottom: 4rem;
                }

                .wiki-section h2 {
                    color: #fff;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 0.75rem;
                    margin-bottom: 2rem;
                    font-size: 1.8rem;
                }

                .subsection {
                    margin-bottom: 2.5rem;
                }

                .subsection h3 {
                    color: #00f3ff;
                    margin-bottom: 1.25rem;
                    font-size: 1.4rem;
                }

                .card-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin: 2rem 0;
                }

                .wiki-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 2rem;
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: transform 0.3s ease;
                }

                .wiki-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.05);
                }

                .card-icon {
                    width: 32px;
                    height: 32px;
                    margin-bottom: 1rem;
                }
                
                .cyan { color: #00f3ff; }
                .purple { color: #bc13fe; }
                .green { color: #00ff9d; }

                .wiki-card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.2rem;
                    color: #fff;
                }

                .wiki-card p {
                    margin: 0;
                    font-size: 0.95rem;
                    color: #aaa;
                    line-height: 1.5;
                }

                .installation-steps h4 {
                    color: #fff;
                    margin: 1.5rem 0 1rem 0;
                }

                .wiki-content ul, .wiki-content ol {
                    padding-left: 1.5rem;
                }

                .wiki-content li {
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }

                .wiki-content a {
                    color: #00f3ff;
                    text-decoration: none;
                }

                .wiki-content a:hover {
                    text-decoration: underline;
                }

                .note-box {
                    background: rgba(188, 19, 254, 0.1);
                    border: 1px solid rgba(188, 19, 254, 0.3);
                    padding: 1.25rem;
                    border-radius: 10px;
                    margin: 1.5rem 0;
                    color: #e0e0e0;
                }

                code {
                    background: rgba(255,255,255,0.1);
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                    font-family: monospace;
                    color: #ff00ff;
                }

                @media (max-width: 600px) {
                    .wiki-nav-header h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default OmniRemoteWiki;
