import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../location.module.css'

export const metadata = {
  title: 'New York Cleaning Services | Clean Breeze Pro',
  description: 'Professional cleaning services in New York City. Residential and commercial cleaning for Manhattan, Brooklyn, Queens, and more.',
}

export default function NewYork() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>🗽</span>
            <h1 className={styles.heroTitle}>New York</h1>
            <p className={styles.heroSubtitle}>Where Clean Meets the City That Never Sleeps</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2 className={styles.sectionTitle}>Expert Cleaning in the Heart of NYC</h2>
              <p className={styles.lead}>
                Clean Breeze Pro brings professional, reliable cleaning services to New York City's 
                bustling streets. Whether you're in Manhattan, Brooklyn, Queens, or the Bronx, our 
                expert team delivers spotless results that match the high standards of New York living.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏙️</div>
                <h3>All 5 Boroughs</h3>
                <p>
                  We serve Manhattan, Brooklyn, Queens, the Bronx, and Staten Island with 
                  the same exceptional quality and attention to detail.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🚇</div>
                <h3>Flexible Scheduling</h3>
                <p>
                  Work around your busy NYC lifestyle with early morning, evening, and 
                  weekend appointments available.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Quick Response</h3>
                <p>
                  Same-day and next-day service available. Perfect for last-minute cleanings 
                  or urgent situations.
                </p>
              </div>
            </div>

            <div className={styles.servicesOffered}>
              <h2 className={styles.sectionTitle}>Services in New York</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceItem}>
                  <h4>🏠 Apartment Cleaning</h4>
                  <p>Studio to penthouse, we handle all apartment sizes</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>🏢 Office Cleaning</h4>
                  <p>Keep your workspace professional and productive</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>✨ Deep Cleaning</h4>
                  <p>Thorough cleaning for every corner and surface</p>
                </div>
                <div className={styles.serviceItem}>
                  <h4>📦 Move In/Out</h4>
                  <p>Spotless spaces for moving day stress relief</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                  <h3>Service Areas</h3>
                  <p>
                    Manhattan, Brooklyn, Queens,<br />
                    Bronx, Staten Island<br />
                    All neighborhoods covered
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Contact Us</h3>
                  <p>
                    Phone: (212) 555-CLEAN<br />
                    Email: newyork@cleanbreezepro.site<br />
                    Hours: 7 Days, 7 AM - 9 PM EST
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Quick Stats</h3>
                  <p>
                    2,500+ Happy Clients<br />
                    15,000+ Cleanings Done<br />
                    4.9★ Average Rating
                  </p>
                </div>

                <div className={styles.infoBlock}>
                  <h3>Why Choose Us</h3>
                  <p>
                    Licensed & Insured<br />
                    Background-Checked Staff<br />
                    Satisfaction Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h2>Ready for a Cleaner NYC Space?</h2>
              <p>
                Join thousands of satisfied New Yorkers who trust Clean Breeze Pro. 
                Get your free quote today and experience the difference!
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
