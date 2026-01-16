import React, { useMemo, useState, useEffect } from 'react';
import { useEnvironment } from '../styles/EnvironmentProvider';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicBackground = () => {
    const { location, weather, timeOfDay, loading } = useEnvironment();
    const [bgImage, setBgImage] = useState(null);

    // Construct the prompt for the AI image generator
    const prompt = useMemo(() => {
        if (loading || !location || !weather) return null;

        const parts = [];

        // Time
        parts.push(timeOfDay === 'night' ? 'night time' : 'day time');

        // Location/Terrain hints
        // We don't have detailed terrain data from IP, so we infer or genericize
        // If we had region, we could guess. For now, let's mix it up or use city name if safe.
        // Using city name might yield specific skylines which is cool.
        if (location.city) {
            parts.push(`${location.city} city skyline view`);
        } else {
            parts.push('beautiful landscape view');
        }

        // Weather
        parts.push(weather.condition);
        if (weather.condition === 'rain') parts.push('rainy');
        if (weather.condition === 'snow') parts.push('snowy');
        if (weather.condition === 'clear') parts.push('clear sky');
        if (weather.condition === 'clouds') parts.push('cloudy');

        // Style
        parts.push('hyperrealistic', 'cinematic', '8k', 'landscape canvas', 'wide shot', 'no text');

        return parts.join(' ');
    }, [location, weather, timeOfDay, loading]);

    useEffect(() => {
        if (!prompt) return;

        // Pollinations.ai URL
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1920&height=1080&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;

        // Preload image
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setBgImage(url);
        };
    }, [prompt]);

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

                .weather-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: -1;
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
