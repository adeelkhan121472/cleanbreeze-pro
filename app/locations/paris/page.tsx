import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Paris Cleaning Services | Clean Breeze Pro',
  description: 'Professional cleaning services in Paris. Expert residential and commercial cleaning across all arrondissements.',
}

export default function Paris() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🗼</span>
            <h1 className={styles.heroTitle}>Paris</h1>
            <p className={styles.heroSubtitle}>L'Excellence du Nettoyage à Paris</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Paris's Premium Cleaning Service</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings elegance and efficiency to Parisian homes and businesses. 
                From the Marais to Montmartre, we provide exceptional cleaning services that match 
                the sophistication and charm of the City of Light.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>Parisian Elegance</h3>
                <p>
                  Cleaning services that respect the beauty and history of Paris's 
                  architecture and interiors.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🥐</div>
                <h3>Local Expertise</h3>
                <p>
                  Our bilingual team understands Parisian living and provides 
                  service with French savoir-faire.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>♻️</div>
                <h3>Eco-Conscious</h3>
                <p>
                  We use sustainable, eco-friendly products that protect your 
                  health and Paris's environment.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>Services in Paris</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🏠 Apartment Cleaning</h4>
                  <p>From studios to Haussmanian apartments</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Business Cleaning</h4>
                  <p>Offices, boutiques, and commercial spaces</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>✨ Grand Nettoyage</h4>
                  <p>Deep cleaning for complete freshness</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏗️ Déménagement</h4>
                  <p>Move in/out cleaning services</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    All 20 Arrondissements<br />
                    1er to 20ème<br />
                    Inner & Outer Paris
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: 01 23 45 67 89<br />
                    Email: paris@cleanbreezepro.site<br />
                    Hours: Lun-Dim, 8h - 20h CET
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    1,600+ Happy Clients<br />
                    11,000+ Cleanings Done<br />
                    4.9★ Average Rating
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Notre Engagement</h3>
                  <p>
                    Fully Insured<br />
                    Trained Staff<br />
                    Satisfaction Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h2>Réservez Votre Nettoyage à Paris</h2>
              <p>
                Experience Parisian quality cleaning with Clean Breeze Pro. 
                Get your free quote and discover why Parisians trust us!
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
