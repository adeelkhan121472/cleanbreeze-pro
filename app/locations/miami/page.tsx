import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Miami HVAC & Air Duct Cleaning Services | Clean Breeze Pro',
  description: 'Professional HVAC and air duct cleaning services in Miami, Florida. Residential and commercial cleaning for all Miami-Dade areas.',
}

export default function Miami() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🌊</span>
            <h1 className={styles.heroTitle}>Miami</h1>
            <p className={styles.heroSubtitle}>Clean Air for the Magic City</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Expert HVAC Cleaning in Miami</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings professional HVAC and air duct cleaning services to Miami's
                vibrant tropical environment. From South Beach to Coral Gables, our expert team delivers
                clean air solutions that combat Miami's intense heat and coastal humidity for optimal indoor comfort.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌊</div>
                <h3>Greater Miami Area</h3>
                <p>
                  We serve Miami Beach, Coral Gables, Kendall, Brickell, and all Miami-Dade
                  neighborhoods with exceptional quality service.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💨</div>
                <h3>Coastal Climate Experts</h3>
                <p>
                  Our technicians understand Miami's unique coastal climate, providing HVAC cleaning
                  that prevents salt air damage and mold growth.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Rapid Response</h3>
                <p>
                  Same-day and next-day service available throughout Miami-Dade.
                  Fast response for urgent HVAC cleaning needs.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>HVAC Services in Miami</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🌬️ Air Duct Cleaning</h4>
                  <p>Combat salt air, humidity, and allergens</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>❄️ AC System Cleaning</h4>
                  <p>Critical for Miami's year-round cooling needs</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏠 Residential Service</h4>
                  <p>Complete home HVAC and air quality solutions</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Commercial Service</h4>
                  <p>Professional high-rise and building HVAC cleaning</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    Miami Beach, Coral Gables,<br />
                    Kendall, Brickell, Hialeah<br />
                    All Miami-Dade areas
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: (305) 555-CLEAN<br />
                    Email: miami@cleanbreezepro.site<br />
                    Hours: 7 Days, 7 AM - 9 PM EST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    2,100+ Happy Clients<br />
                    13,500+ Systems Cleaned<br />
                    4.9★ Average Rating
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Why Choose Us</h3>
                  <p>
                    NADCA Certified<br />
                    Licensed & Insured<br />
                    Satisfaction Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h2>Ready for Cleaner Air in Miami?</h2>
              <p>
                Join thousands of satisfied Miami residents who trust Clean Breeze Pro.
                Get your free HVAC cleaning quote today!
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
