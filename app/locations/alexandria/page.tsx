import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Alexandria VA HVAC Cleaning [2025]: Historic Homes + Modern Tech',
  description: 'Old Town Alexandria HVAC issues? Expert cleaning for historic & modern homes. Cut energy bills 20%. Free quote in 60 seconds. NADCA certified technicians.',
}

export default function Alexandria() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🏛️</span>
            <h1 className={styles.heroTitle}>Alexandria, Virginia</h1>
            <p className={styles.heroSubtitle}>Historic City, Modern Clean Air Solutions</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Expert HVAC Cleaning in Alexandria</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings professional HVAC and air duct cleaning services to historic
                Alexandria, Virginia. Serving Old Town, Del Ray, and beyond, our expert team provides
                modern air quality solutions for Alexandria's blend of historic homes and contemporary buildings.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏛️</div>
                <h3>All Alexandria Areas</h3>
                <p>
                  We serve Old Town, Del Ray, West End, and all Alexandria neighborhoods
                  with exceptional HVAC cleaning quality.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏛️</div>
                <h3>Historic Home Expertise</h3>
                <p>
                  Our technicians are experienced in cleaning HVAC systems in both historic
                  properties and modern buildings throughout Alexandria.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Quick Response</h3>
                <p>
                  Same-day and next-day service available. Perfect for urgent HVAC cleaning
                  or seasonal maintenance needs.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>HVAC Services in Alexandria</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🌬️ Air Duct Cleaning</h4>
                  <p>Complete duct cleaning for all property types</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>❄️ HVAC System Cleaning</h4>
                  <p>Full system cleaning for optimal performance</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏠 Residential Service</h4>
                  <p>Expert home HVAC and air quality solutions</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Commercial Service</h4>
                  <p>Professional office and building HVAC cleaning</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    Old Town, Del Ray,<br />
                    West End, Carlyle<br />
                    All Alexandria neighborhoods
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: (703) 555-CLEAN<br />
                    Email: alexandria@cleanbreezepro.site<br />
                    Hours: 7 Days, 7 AM - 8 PM EST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    1,500+ Happy Clients<br />
                    10,000+ Systems Cleaned<br />
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
              <h2>Ready for Cleaner Air in Alexandria?</h2>
              <p>
                Join thousands of satisfied Alexandria residents who trust Clean Breeze Pro.
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
