import React, { useMemo, useState, useEffect } from 'react';
import { useEnvironment } from '../styles/EnvironmentProvider';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicBackground = () => {
    const { location, weather, timeOfDay, loading } = useEnvironment();
    const [bgImage, setBgImage] = useState(null);

    // Select background image based on current route
    useEffect(() => {
        let newBg = '/assets/backgrounds/home.png'; // Default

        const path = location.pathname;

        if (path.includes('pulselink')) {
            newBg = '/assets/backgrounds/pulselink.png';
        } else if (path.includes('betamax')) {
            newBg = '/assets/backgrounds/betamax.png';
        } else if (path.includes('books') || path.includes('reader')) {
            newBg = '/assets/backgrounds/books.png';
        } else if (path.includes('omni-remote')) {
            newBg = '/assets/backgrounds/omniremote.png';
        } else if (path.includes('qa-verify') || path.includes('facebook-search')) {
            newBg = '/assets/backgrounds/home.png'; // Reuse home or add specific ones later
        }

        setBgImage(newBg);
    }, [location.pathname]);

    // Reactive Mouse Effect
    const canvasRef = React.useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.origX = this.x;
                this.origY = this.y;
            }

            update() {
                // Ambient movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction (repel/attract)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 150;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    const directionX = dx / distance;
                    const directionY = dy / distance;
                    this.x -= directionX * force * 2;
                    this.y -= directionY * force * 2;
                } else {
                    // Return to somewhat original if drifted too far (optional, for now just wrap)
                }

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < 150; i++) {
                particles.push(new Particle());
            }
        };

        createParticles();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            particles.forEach(a => {
                const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (loading) return null;

    return (
        <div className="dynamic-background-container">
            <AnimatePresence>
                {bgImage && (
                    <motion.div
                        key={bgImage} // Triggers animation on new image
                        className="dynamic-bg-layer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                )}
            </AnimatePresence>

            {/* Reactive Overlay */}
            <canvas ref={canvasRef} className="reactive-overlay" />

            {/* Weather Effects Overlay */}
            <div className={`weather-overlay ${weather?.condition}`}>
                {weather?.condition === 'rain' && <div className="rain-effect"></div>}
                {weather?.condition === 'snow' && <div className="snow-effect"></div>}
            </div>

            <style>{`
                .dynamic-background-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: -2;
                    overflow: hidden;
                    background-color: #0f0f13; /* Fallback color */
                }

                .dynamic-bg-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }

                .reactive-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0; /* Between bg (-2) and content (above) */
                    pointer-events: none;
                }

                .weather-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1; /* Above reactive overlay */
                    /* Glass/Vignette effect */
                    background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.6) 100%);
                }

                /* Rain Effect (Simple CSS implementation) */
                .rain-effect {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('https://raw.githubusercontent.com/redstapler/rain-effect/master/rain.png');
                    animation: rain .3s linear infinite;
                    opacity: 0.7;
                }

                @keyframes rain {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 20% 100%; }
                }

                /* Snow Effect */
                 .snow-effect {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('https://raw.githubusercontent.com/ywain/halloween-css/master/images/snow.png');
                    animation: snow 10s linear infinite;
                    opacity: 0.8;
                }
                 @keyframes snow {
                    0% { background-position: 0 0; }
                    100% { background-position: 100px 500px; }
                }

            `}</style>
        </div>
    );
};

export default DynamicBackground;
