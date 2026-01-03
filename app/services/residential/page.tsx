import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import styles from './service.module.css'

export const metadata = {
  title: 'Residential HVAC & Air Duct Cleaning | Clean Breeze Pro',
  description: 'Professional residential HVAC and air duct cleaning services for homes and apartments. Improve air quality, reduce energy costs, and breathe cleaner air.',
  keywords: ['residential HVAC cleaning', 'home air duct cleaning', 'residential HVAC service', 'home AC cleaning', 'furnace cleaning'],
}

export default function ResidentialCleaning() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>🏠</div>
            <h1 className={styles.heroTitle}>Residential HVAC & Air Duct Cleaning</h1>
            <p className={styles.heroSubtitle}>
              Your home deserves clean air. Professional HVAC and air duct cleaning that improves air quality, reduces energy costs, and keeps your family healthy.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <h2>Breathe Cleaner Air at Home</h2>
              <p>
                Our residential HVAC and air duct cleaning services are designed to improve your home's
                air quality, reduce allergens, and maximize your HVAC system's efficiency. Whether you need
                annual duct cleaning or complete HVAC maintenance, our NADCA-certified technicians deliver
                exceptional results that you can breathe.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.featureBox}>
                <h3>🌬️ Air Duct Cleaning</h3>
                <ul>
                  <li>Complete duct system cleaning</li>
                  <li>High-powered vacuum removal</li>
                  <li>Before/after camera inspection</li>
                  <li>Sanitization & deodorization</li>
                  <li>Register and vent cleaning</li>
                  <li>Debris and allergen removal</li>
                </ul>
              </div>

              <div className={styles.featureBox}>
                <h3>❄️ HVAC System Service</h3>
                <ul>
                  <li>Evaporator coil cleaning</li>
                  <li>Condenser coil cleaning</li>
                  <li>Blower motor maintenance</li>
                  <li>Air handler cleaning</li>
                  <li>Filter replacement</li>
                  <li>System performance testing</li>
                </ul>
              </div>

              <div className={styles.featureBox}>
                <h3>✅ Our Guarantee</h3>
                <ul>
                  <li>NADCA certified technicians</li>
                  <li>Advanced cleaning equipment</li>
                  <li>Safe, EPA-approved products</li>
                  <li>Fully insured service</li>
                  <li>Satisfaction guaranteed</li>
                  <li>Free estimates available</li>
                </ul>
              </div>
            </div>

            <div className={styles.pricing}>
              <h2>Service Packages</h2>
              <div className={styles.pricingGrid}>
                <div className={styles.pricingCard}>
                  <h3>Air Duct Cleaning</h3>
                  <div className={styles.price}>From $399</div>
                  <ul>
                    <li>Up to 10 Vents</li>
                    <li>Complete System Cleaning</li>
                    <li>Camera Inspection</li>
                    <li>Sanitization Included</li>
                  </ul>
                  <Link href="/quote" className={styles.priceButton}>Get Quote</Link>
                </div>

                <div className={styles.pricingCard}>
                  <h3>HVAC Maintenance</h3>
                  <div className={styles.price}>From $299</div>
                  <ul>
                    <li>Coil Cleaning</li>
                    <li>Blower Service</li>
                    <li>Filter Replacement</li>
                    <li>Performance Testing</li>
                  </ul>
                  <Link href="/quote" className={styles.priceButton}>Get Quote</Link>
                </div>

                <div className={styles.pricingCard}>
                  <h3>Complete Package</h3>
                  <div className={styles.price}>From $599</div>
                  <ul>
                    <li>Full Duct Cleaning</li>
                    <li>Complete HVAC Service</li>
                    <li>System Optimization</li>
                    <li>Annual Maintenance Plan</li>
                  </ul>
                  <Link href="/quote" className={styles.priceButton}>Get Quote</Link>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <h2>Ready for Cleaner, Healthier Air?</h2>
              <p>Book your residential HVAC and air duct cleaning service today and breathe easier at home.</p>
              <Link href="/quote" className={styles.ctaButton}>
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
