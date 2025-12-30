"use client";

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/ofc/hero-1.webp',
        '/ofc/hero-2.webp',
        '/ofc/hero-3.webp',
        '/ofc/hero-4.webp',
        '/ofc/hero-5.webp'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7)), url(${images[currentImageIndex]})` }}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    OTTAWA'S PREMIER <br />
                    <span className={styles.highlight}>FUTSAL LEAGUE</span>
                </h1>
                <p className={styles.subtitle}>
                    Competitive leagues, elite training, and tournaments for all levels.
                    Experience the speed and skill of the beautiful game indoors.
                </p>
                <div className={styles.ctaGroup}>
                    <a href="/register" className="btn btn-solid">ABSOLUTE REGISTRATION</a>
                    <a href="/leagues" className="btn btn-primary">VIEW LEAGUES</a>
                </div>
            </div>

            {/* Optional: Slide Indicators */}
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
