import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Us | Clean Breeze Pro',
  description: 'Get in touch with Clean Breeze Pro. Contact us in New York, London, Tokyo, or Paris.',
}

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Contact Us</h1>
          <p>We're here to help! Reach out to us in any of our locations.</p>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.locationCards}>
              <div className={styles.locationCard}>
                <div className={styles.cardIcon}>🗽</div>
                <h3>New York</h3>
                <div className={styles.cardDetails}>
                  <p><strong>Phone:</strong> (212) 555-CLEAN</p>
                  <p><strong>Email:</strong> newyork@cleanbreezepro.site</p>
                  <p><strong>Hours:</strong> 7 Days, 7 AM - 9 PM EST</p>
                  <p><strong>Service Areas:</strong> All 5 Boroughs</p>
                </div>
                <Link href="/locations/new-york" className={styles.cardButton}>
                  Learn More
                </Link>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.cardIcon}>🏛️</div>
                <h3>London</h3>
                <div className={styles.cardDetails}>
                  <p><strong>Phone:</strong> 020 7123 4567</p>
                  <p><strong>Email:</strong> london@cleanbreezepro.site</p>
                  <p><strong>Hours:</strong> Mon-Sun, 8 AM - 8 PM GMT</p>
                  <p><strong>Service Areas:</strong> All London Zones</p>
                </div>
                <Link href="/locations/london" className={styles.cardButton}>
                  Learn More
                </Link>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.cardIcon}>🗼</div>
                <h3>Tokyo</h3>
                <div className={styles.cardDetails}>
                  <p><strong>Phone:</strong> 03-1234-5678</p>
                  <p><strong>Email:</strong> tokyo@cleanbreezepro.site</p>
                  <p><strong>Hours:</strong> 7 Days, 8 AM - 8 PM JST</p>
                  <p><strong>Service Areas:</strong> All 23 Wards</p>
                </div>
                <Link href="/locations/tokyo" className={styles.cardButton}>
                  Learn More
                </Link>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.cardIcon}>🗼</div>
                <h3>Paris</h3>
                <div className={styles.cardDetails}>
                  <p><strong>Phone:</strong> 01 23 45 67 89</p>
                  <p><strong>Email:</strong> paris@cleanbreezepro.site</p>
                  <p><strong>Hours:</strong> Lun-Dim, 8h - 20h CET</p>
                  <p><strong>Service Areas:</strong> All 20 Arrondissements</p>
                </div>
                <Link href="/locations/paris" className={styles.cardButton}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className={styles.quickContact}>
              <h2>Quick Inquiry</h2>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
