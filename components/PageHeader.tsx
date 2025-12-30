import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
    const bgStyle = image
        ? { backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(${image})` }
        : {};

    return (
        <div className={styles.header} style={bgStyle}>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
