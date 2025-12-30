import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/ofcnewlogo.png"
                    alt="Futsal Ottawa Logo"
                    width={80}
                    height={80}
                    className={styles.logoImage}
                    style={{ objectFit: 'contain' }}
                />
            </Link>

            <div className={styles.links}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/leagues" className={styles.navLink}>Leagues</Link>
                <Link href="/schedule" className={styles.navLink}>Schedule</Link>
                <Link href="/venues" className={styles.navLink}>Venues</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
            </div>

            <div className={styles.mobileMenuBtn}>
                {/* Simple Hamburger Icon */}
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
