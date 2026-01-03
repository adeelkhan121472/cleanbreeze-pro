import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import styles from './quote.module.css'

export const metadata = {
  title: 'Get Free Quote | Clean Breeze Pro',
  description: 'Get your free, no-obligation cleaning quote. Quick response within 24 hours.',
}

export default function Quote() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Get Your Free Quote</h1>
          <p>Fill out the form below and we'll get back to you within 24 hours with a personalized quote.</p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.formSection}>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">Location *</label>
                  <select id="location" name="location" required>
                    <option value="">Select your city</option>
                    <option value="new-york">New York</option>
                    <option value="london">London</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="paris">Paris</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Type *</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move In/Out</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="propertyType">Property Type *</label>
                    <select id="propertyType" name="propertyType" required>
                      <option value="">Select type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="office">Office</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="size">Size (sq ft or bedrooms)</label>
                    <input type="text" id="size" name="size" placeholder="e.g., 1200 sq ft or 2 bedroom" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="frequency">Cleaning Frequency</label>
                  <select id="frequency" name="frequency">
                    <option value="">Select frequency</option>
                    <option value="one-time">One-Time</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about any special requirements, areas of focus, or questions..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Get My Free Quote
                </button>
              </form>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3>📞 Quick Response</h3>
                <p>We'll review your request and send you a detailed quote within 24 hours.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>💰 No Obligation</h3>
                <p>Our quotes are completely free with no commitment required.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>✨ Transparent Pricing</h3>
                <p>All quotes include a breakdown of services and costs. No hidden fees.</p>
              </div>

              <div className={styles.contactCard}>
                <h3>Prefer to Call?</h3>
                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <strong>🗽 New York</strong>
                    <p>(212) 555-CLEAN</p>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>🏛️ London</strong>
                    <p>020 7123 4567</p>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>🗼 Tokyo</strong>
                    <p>03-1234-5678</p>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>🗼 Paris</strong>
                    <p>01 23 45 67 89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
