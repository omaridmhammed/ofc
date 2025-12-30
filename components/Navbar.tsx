"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
                <Image
                    src="/ofc/ofcnewlogo.png"
                    alt="Futsal Ottawa Logo"
                    width={50}
                    height={50}
                    className={styles.logoImage}
                    style={{ objectFit: 'contain' }}
                />
                <span className={styles.logoText}>FUTSAL OTTAWA</span>
            </Link>

            <div className={`${styles.links} ${isMenuOpen ? styles.linksActive : ''}`}>
                <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
                <Link href="/leagues" className={styles.navLink} onClick={closeMenu}>Leagues</Link>
                <Link href="/schedule" className={styles.navLink} onClick={closeMenu}>Schedule</Link>
                <Link href="/venues" className={styles.navLink} onClick={closeMenu}>Venues</Link>
                <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
            </div>

            <button
                className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.btnActive : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <div className={styles.hamburger}></div>
            </button>

            {/* Backdrop */}
            {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;
