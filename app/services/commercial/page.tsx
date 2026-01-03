import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../residential/service.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial HVAC & Air Duct Cleaning Services',
  description: 'Professional commercial HVAC and air duct cleaning for offices, retail spaces, and corporate facilities. Improve air quality, reduce energy costs, NADCA certified. Serving New York, London, Tokyo, and Paris.',
  keywords: ['commercial HVAC cleaning', 'commercial air duct cleaning', 'office HVAC service', 'corporate HVAC maintenance', 'building HVAC cleaning'],
  openGraph: {
    title: 'Commercial HVAC & Air Duct Cleaning - Clean Breeze Pro',
    description: 'Professional commercial HVAC and air duct cleaning services for offices and businesses. NADCA certified, fully insured teams.',
    type: 'website',
  },
}

export default function CommercialCleaning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Breeze Pro"
    },
    "description": "Professional commercial cleaning services for offices, retail spaces, and corporate facilities",
    "areaServed": ["New York", "London", "Tokyo", "Paris"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "After-Hours Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Facility Cleaning"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Commercial HVAC &
              <span className={styles.highlight}> Air Duct Cleaning</span>
            </h1>
            <p className={styles.heroDescription}>
              Professional commercial HVAC and air duct cleaning solutions that improve workplace air quality,
              reduce energy costs, and create healthier environments for your employees. NADCA certified, fully insured teams.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/quote" className={styles.primaryButton}>
                Get Free Quote
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Commercial HVAC & Air Duct Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏢</div>
                <h3>Office Building HVAC</h3>
                <p>Complete HVAC system cleaning and maintenance for office buildings, improving air quality and reducing energy costs for your business.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌬️</div>
                <h3>Commercial Duct Cleaning</h3>
                <p>Professional air duct cleaning for commercial buildings using high-powered vacuum systems and NADCA-certified methods.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏭</div>
                <h3>Industrial HVAC Service</h3>
                <p>Heavy-duty HVAC cleaning for warehouses, manufacturing facilities, and large-scale commercial operations.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🛍️</div>
                <h3>Retail HVAC Maintenance</h3>
                <p>Specialized HVAC services for retail environments to ensure comfortable shopping experiences and reduce operating costs.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏥</div>
                <h3>Healthcare Facility HVAC</h3>
                <p>Medical-grade HVAC cleaning for healthcare facilities with strict air quality standards and infection control protocols.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⏰</div>
                <h3>After-Hours Service</h3>
                <p>Convenient scheduling outside business hours to minimize disruption to your operations while maintaining your HVAC systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Businesses Choose Clean Breeze Pro</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>✅</div>
                <h3>NADCA Certified</h3>
                <p>All technicians are NADCA certified, ensuring industry-standard commercial HVAC and duct cleaning practices.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚡</div>
                <h3>Reduce Energy Costs</h3>
                <p>Clean HVAC systems operate 15-25% more efficiently, significantly lowering your business's monthly energy bills.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h3>Minimize Downtime</h3>
                <p>After-hours scheduling and preventive maintenance keeps your business running without disruption or emergency breakdowns.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏥</div>
                <h3>Healthier Workplace</h3>
                <p>Improved air quality reduces employee sick days and creates a healthier, more productive work environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional Commercial HVAC & Air Duct Cleaning</h2>
              <p>
                Clean Breeze Pro delivers exceptional commercial HVAC and air duct cleaning services designed to improve
                workplace air quality, reduce energy costs, and create healthier business environments across New York,
                London, Tokyo, and Paris. Our NADCA-certified technicians provide comprehensive HVAC maintenance solutions
                that help businesses save money, reduce downtime, and protect employee health.
              </p>

              <h3>Why Commercial HVAC Cleaning Matters</h3>
              <p>
                Your commercial HVAC system is the heart of your building's comfort and air quality. Over time, dust, debris,
                allergens, and contaminants accumulate in ductwork and HVAC components, reducing system efficiency and
                circulating pollutants throughout your workspace. Dirty coils work harder, consuming more energy. Clogged
                ducts restrict airflow, creating hot and cold spots. Regular professional HVAC cleaning restores efficiency,
                improves indoor air quality, and prevents costly emergency breakdowns during critical business periods.
              </p>

              <h3>Comprehensive Commercial HVAC Services</h3>
              <p>
                Our commercial HVAC services include complete air duct cleaning using high-powered negative pressure vacuum
                systems, evaporator and condenser coil cleaning, blower motor maintenance, air handler cleaning, and filter
                replacement. We service office buildings, retail spaces, warehouses, medical facilities, and industrial
                operations of all sizes. Our after-hours scheduling ensures minimal disruption to your business operations
                while maintaining peak HVAC performance year-round.
              </p>

              <h3>Energy Savings and ROI</h3>
              <p>
                Clean commercial HVAC systems operate 15-25% more efficiently than dirty systems, providing immediate energy
                cost savings that often pay for the service within months. Beyond energy savings, regular HVAC maintenance
                extends equipment lifespan, reduces repair costs, decreases employee sick days, and maintains comfortable
                working conditions that boost productivity. Our maintenance plans provide priority scheduling and ensure
                your systems are always operating at peak efficiency.
              </p>

              <h3>NADCA Certified Excellence</h3>
              <p>
                All our commercial HVAC technicians are NADCA certified, meaning they've received specialized training in
                proper air duct cleaning and HVAC maintenance standards for commercial applications. We use professional-grade
                equipment, follow industry best practices, and carry comprehensive insurance for your protection. Get a free
                commercial HVAC assessment today and discover how much you can save on energy costs while improving workplace
                air quality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Reduce Energy Costs & Improve Air Quality?</h2>
            <p className={styles.ctaDescription}>
              Get your free commercial HVAC assessment today. NADCA certified, after-hours service, immediate energy savings.
            </p>
            <Link href="/quote" className={styles.ctaButton}>
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
