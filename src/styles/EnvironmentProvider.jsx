import React, { createContext, useContext, useState, useEffect } from 'react';

const EnvironmentContext = createContext();

export const useEnvironment = () => {
    return useContext(EnvironmentContext);
};

export const EnvironmentProvider = ({ children }) => {
    const [environment, setEnvironment] = useState({
        location: null, // { city, region, country, lat, lon }
        weather: null,  // { condition, temp, isDay } (condition: 'clear', 'rain', 'clouds', 'snow')
        timeOfDay: 'day', // 'morning', 'day', 'evening', 'night'
        theme: 'default',
        loading: true,
    });

    // Helper to determine time of day
    const calculateTimeOfDay = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'day';
        if (hour >= 17 && hour < 20) return 'evening';
        return 'night';
    };

    // Helper to map clear weather code to our simplified conditions
    // WMO Weather interpretation codes (WW)
    const getWeatherCondition = (code) => {
        // 0: Clear sky
        // 1, 2, 3: Mainly clear, partly cloudy, and overcast
        // 45, 48: Fog
        // 51, 53, 55: Drizzle
        // 56, 57: Freezing Drizzle
        // 61, 63, 65: Rain
        // 66, 67: Freezing Rain
        // 71, 73, 75: Snow fall
        // 77: Snow grains
        // 80, 81, 82: Rain showers
        // 85, 86: Snow showers
        // 95: Thunderstorm
        // 96, 99: Thunderstorm with slight and heavy hail

        if (code === 0 || code === 1) return 'clear';
        if (code === 2 || code === 3 || code === 45 || code === 48) return 'clouds';
        if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return 'rain';
        if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
        return 'clear';
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Get Location
                // Using ipapi.co for free IP-based location
                const locRes = await fetch('https://ipapi.co/json/');
                if (!locRes.ok) throw new Error('Location fetch failed');
                const locData = await locRes.json();

                const location = {
                    city: locData.city,
                    region: locData.region,
                    country: locData.country_name,
                    lat: locData.latitude,
                    lon: locData.longitude,
                };

                // 2. Get Weather
                // Using Open-Meteo for free weather data matching lat/lon
                const weatherRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
                );
                if (!weatherRes.ok) throw new Error('Weather fetch failed');
                const weatherData = await weatherRes.json();
                const current = weatherData.current_weather;

                const weather = {
                    temp: current.temperature,
                    condition: getWeatherCondition(current.weathercode),
                    isDay: current.is_day === 1,
                    windSpeed: current.windspeed
                };

                // 3. Set State
                const timeOfDay = calculateTimeOfDay();

                // Determine theme (simple logic for now)
                let theme = 'default';
                if (weather.condition === 'rain') theme = 'rainy';
                if (weather.condition === 'snow') theme = 'snowy';
                if (timeOfDay === 'night') theme = 'night';

                setEnvironment({
                    location,
                    weather,
                    timeOfDay,
                    theme,
                    loading: false,
                });

            } catch (error) {
                console.error("Failed to load environment data:", error);
                // Fallback / Defaults
                setEnvironment(prev => ({
                    ...prev,
                    location: { city: 'Unknown', region: '', country: '' },
                    weather: { condition: 'clear', temp: 20, isDay: true },
                    timeOfDay: calculateTimeOfDay(),
                    loading: false
                }));
            }
        };

        fetchData();

        // Update time of day every minute
        const interval = setInterval(() => {
            setEnvironment(prev => ({
                ...prev,
                timeOfDay: calculateTimeOfDay()
            }));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <EnvironmentContext.Provider value={environment}>
            {children}
        </EnvironmentContext.Provider>
    );
};
