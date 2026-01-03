import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'London Cleaning Services | Clean Breeze Pro',
  description: 'Professional cleaning services in London. Expert residential and commercial cleaning across all London boroughs.',
}

export default function London() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🏛️</span>
            <h1 className={styles.heroTitle}>London</h1>
            <p className={styles.heroSubtitle}>Traditional Quality, Modern Service</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>London's Premier Cleaning Service</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings professional cleaning excellence to London's homes and 
                businesses. From Zone 1 to the suburbs, we deliver impeccable results with a 
                personal touch that Londoners appreciate and trust.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🚇</div>
                <h3>All London Zones</h3>
                <p>
                  Comprehensive coverage from Central London to all surrounding zones. 
                  No area too far, no job too small.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌿</div>
                <h3>Eco-Friendly</h3>
                <p>
                  We use environmentally responsible products that are safe for your 
                  family, pets, and the planet.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🕐</div>
                <h3>Punctual Service</h3>
                <p>
                  British precision meets modern efficiency. We arrive on time, 
                  every time, and respect your schedule.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>Services in London</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🏠 Home Cleaning</h4>
                  <p>Flats, houses, and estates cleaned to perfection</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Commercial Spaces</h4>
                  <p>Offices, shops, and commercial properties</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>✨ Spring Cleaning</h4>
                  <p>Deep, thorough cleaning for the changing seasons</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏗️ End of Tenancy</h4>
                  <p>Professional cleaning for rental properties</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    Central London, North, South,<br />
                    East, West London<br />
                    All Zones 1-6 covered
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: 020 7123 4567<br />
                    Email: london@cleanbreezepro.site<br />
                    Hours: Mon-Sun, 8 AM - 8 PM GMT
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    1,800+ Happy Clients<br />
                    12,000+ Cleanings Done<br />
                    4.9★ Average Rating
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Our Promise</h3>
                  <p>
                    Fully Insured<br />
                    DBS Checked Staff<br />
                    100% Satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h2>Book Your London Cleaning Today</h2>
              <p>
                Experience the Clean Breeze Pro difference. Trusted by Londoners 
                across the city for exceptional cleaning services.
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
