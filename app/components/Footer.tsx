import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.brand}>
              <span className={styles.brandIcon}>✨</span>
              <h3 className={styles.brandName}>Clean Breeze Pro</h3>
            </div>
            <p className={styles.tagline}>
              Professional cleaning services that bring freshness and comfort 
              to your home and business. Available across four global cities.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.list}>
              <li><Link href="/services/residential">Residential Cleaning</Link></li>
              <li><Link href="/services/commercial">Commercial Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning">Deep Cleaning</Link></li>
              <li><Link href="/services/move-in-out">Move In/Out</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Locations</h4>
            <ul className={styles.list}>
              <li><Link href="/locations/new-york">New York</Link></li>
              <li><Link href="/locations/london">London</Link></li>
              <li><Link href="/locations/tokyo">Tokyo</Link></li>
              <li><Link href="/locations/paris">Paris</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.list}>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/quote">Get a Quote</Link></li>
              <li><Link href="/">Careers</Link></li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Clean Breeze Pro. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/">Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="/">Terms of Service</Link>
            <span className={styles.separator}>•</span>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
