import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Tampa HVAC & Air Duct Cleaning Services | Clean Breeze Pro',
  description: 'Professional HVAC and air duct cleaning services in Tampa, Florida. Residential and commercial cleaning for all Tampa Bay areas.',
}

export default function Tampa() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🌴</span>
            <h1 className={styles.heroTitle}>Tampa, Florida</h1>
            <p className={styles.heroSubtitle}>Fresh Air for the Sunshine State</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Expert HVAC Cleaning in Tampa</h2>
              <p className={styles.lead}>
                Clean Breeze Pro delivers professional HVAC and air duct cleaning services throughout
                Tampa Bay's tropical climate. From downtown Tampa to the beaches, our expert team provides
                clean air solutions that combat Florida's heat and humidity for healthier indoor living.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌴</div>
                <h3>Tampa Bay Area</h3>
                <p>
                  We serve Tampa, St. Petersburg, Clearwater, Brandon, and all Tampa Bay
                  communities with exceptional quality service.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💨</div>
                <h3>Tropical Climate Solutions</h3>
                <p>
                  Our technicians specialize in Florida's humid climate, providing HVAC cleaning
                  that prevents mold and improves air quality year-round.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Fast Service</h3>
                <p>
                  Same-day and next-day service available throughout Tampa Bay.
                  Quick response for urgent HVAC needs.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>HVAC Services in Tampa</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🌬️ Air Duct Cleaning</h4>
                  <p>Remove humidity, allergens, and tropical buildup</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>❄️ AC System Cleaning</h4>
                  <p>Essential for Tampa's year-round AC usage</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏠 Residential Service</h4>
                  <p>Complete home HVAC and air quality solutions</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Commercial Service</h4>
                  <p>Professional office and building HVAC maintenance</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    Tampa, St. Petersburg,<br />
                    Clearwater, Brandon<br />
                    All Tampa Bay areas
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: (813) 555-CLEAN<br />
                    Email: tampa@cleanbreezepro.site<br />
                    Hours: 7 Days, 7 AM - 9 PM EST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    1,700+ Happy Clients<br />
                    11,000+ Systems Cleaned<br />
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
              <h2>Ready for Cleaner Air in Tampa?</h2>
              <p>
                Join thousands of satisfied Tampa Bay residents who trust Clean Breeze Pro.
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
