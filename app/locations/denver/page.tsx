import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'Denver HVAC Cleaning [2025]: Same-Day Service | Mile High Air Quality',
  description: 'Denver\'s altitude affecting your HVAC? Expert cleaning removes allergens & saves 20% on energy. Serving all Denver metro. Free quote in 60 seconds. NADCA certified.',
}

export default function Denver() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🏔️</span>
            <h1 className={styles.heroTitle}>Denver, Colorado</h1>
            <p className={styles.heroSubtitle}>Clean Air for the Mile High City</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Expert HVAC Cleaning in Denver</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings professional HVAC and air duct cleaning services to Denver's
                high-altitude environment. From downtown Denver to the suburbs, our expert team delivers
                clean air solutions that help you breathe easier in Colorado's unique climate.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏔️</div>
                <h3>Denver Metro Coverage</h3>
                <p>
                  We serve all Denver metro areas including Aurora, Lakewood, Littleton,
                  and surrounding communities with exceptional quality.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>❄️</div>
                <h3>Climate-Specific Service</h3>
                <p>
                  Our technicians understand Denver's unique climate challenges and provide
                  tailored HVAC cleaning solutions for optimal year-round performance.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Quick Response</h3>
                <p>
                  Same-day and next-day service available. Perfect for urgent HVAC cleaning
                  needs or seasonal maintenance.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>HVAC Services in Denver</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🌬️ Air Duct Cleaning</h4>
                  <p>Complete duct cleaning for homes and businesses</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>❄️ HVAC System Cleaning</h4>
                  <p>Full system cleaning for optimal efficiency</p>
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
                    Denver, Aurora, Lakewood,<br />
                    Littleton, Arvada<br />
                    All metro neighborhoods
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: (303) 555-CLEAN<br />
                    Email: denver@cleanbreezepro.site<br />
                    Hours: 7 Days, 7 AM - 8 PM MST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    1,900+ Happy Clients<br />
                    12,000+ Systems Cleaned<br />
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
              <h2>Ready for Cleaner Air in Denver?</h2>
              <p>
                Join thousands of satisfied Denver residents who trust Clean Breeze Pro.
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
