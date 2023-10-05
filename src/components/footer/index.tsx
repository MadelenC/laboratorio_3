import styles from './styles.module.css'
import image from './img/logo del footer.jpeg'
const Footer = () => {

    return (
        <footer className={styles.footer}>
           <div className={styles.footerSection}>
            <div className={styles.footerText}>
                <p>Sitemas</p>
                <p>Home</p>
                <p>Post</p>
                <p>About</p>
            </div>
            <div className={styles.footerText2}>
                <p>Conéctate con nosotros</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Tik Tok</p>
            </div>
            <div className={styles.footerText3}>
                <p>▲NEXT.js</p>
            </div>
            <div className={styles.footerText4}>
                <p>Vercel</p>
            </div>
            <div className={styles.footerImage}>
            <img src={image.src} alt="image del footer" width={90}height={90}/>
            </div>
            </div>
        </footer>
    )
}
export default Footer
