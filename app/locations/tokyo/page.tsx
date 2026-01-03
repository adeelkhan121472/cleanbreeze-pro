import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Tokyo Cleaning Services | Clean Breeze Pro',
  description: 'Professional cleaning services in Tokyo. Expert cleaning for homes and offices across all Tokyo wards.',
}

export default function Tokyo() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🗼</span>
            <h1 className={styles.heroTitle}>Tokyo</h1>
            <p className={styles.heroSubtitle}>Precision Cleaning, Japanese Excellence</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Tokyo's Trusted Cleaning Partner</h2>
              <p className={styles.lead}>
                Clean Breeze Pro combines international standards with Japanese attention to 
                detail. Serving all 23 wards of Tokyo, we deliver meticulous cleaning services 
                that honor the Japanese commitment to cleanliness and perfection.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎌</div>
                <h3>Japanese Standards</h3>
                <p>
                  Meticulous attention to detail combined with efficient modern 
                  techniques for superior results.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🚄</div>
                <h3>Swift Service</h3>
                <p>
                  Punctual and efficient service that respects your time and 
                  delivers exceptional results quickly.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌸</div>
                <h3>Cultural Respect</h3>
                <p>
                  Our bilingual team understands Japanese customs and provides 
                  service with courtesy and respect.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>Services in Tokyo</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🏠 Residential Cleaning</h4>
                  <p>Apartments and houses throughout Tokyo</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Office Cleaning</h4>
                  <p>Professional spaces maintained to perfection</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>✨ Deep Cleaning</h4>
                  <p>Thorough cleaning with Japanese precision</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏗️ Moving Services</h4>
                  <p>Complete cleaning for relocations</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    All 23 Wards of Tokyo<br />
                    Shibuya, Shinjuku, Minato,<br />
                    Chiyoda, and more
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: 03-1234-5678<br />
                    Email: tokyo@cleanbreezepro.site<br />
                    Hours: 7 Days, 8 AM - 8 PM JST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    2,200+ Happy Clients<br />
                    14,000+ Cleanings Done<br />
                    4.9★ Average Rating
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Our Commitment</h3>
                  <p>
                    Fully Licensed<br />
                    Trained Professionals<br />
                    Quality Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h2>Experience Tokyo's Best Cleaning</h2>
              <p>
                Join thousands of satisfied Tokyo residents and businesses. 
                Get your free quote and experience Japanese-quality cleaning today!
              </p>
              <a href="/quote" className={styles.ctaButton}>
                Get Your Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
