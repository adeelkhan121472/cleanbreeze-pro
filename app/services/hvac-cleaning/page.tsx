import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../residential/service.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC System Cleaning - Complete HVAC Cleaning Services',
  description: 'Professional HVAC system cleaning including coil cleaning, blower cleaning, and complete system maintenance. Improve efficiency, reduce energy costs. NADCA certified. Serving NYC, London, Tokyo, Paris.',
  keywords: ['HVAC cleaning', 'HVAC system cleaning', 'coil cleaning', 'HVAC maintenance', 'furnace cleaning', 'AC cleaning', 'HVAC efficiency'],
  openGraph: {
    title: 'HVAC System Cleaning Services - Clean Breeze Pro',
    description: 'Professional HVAC cleaning. Improve efficiency, reduce costs, extend equipment life. Complete system cleaning.',
    type: 'website',
  },
}

export default function HVACCleaning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC System Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Breeze Pro"
    },
    "description": "Professional HVAC system cleaning and maintenance services",
    "areaServed": ["New York", "London", "Tokyo", "Paris"]
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
              HVAC System
              <span className={styles.highlight}> Cleaning</span>
            </h1>
            <p className={styles.heroDescription}>
              Comprehensive HVAC cleaning and maintenance to maximize efficiency, reduce energy costs,
              and extend your system's lifespan. Professional service for residential and commercial systems.
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
            <h2 className={styles.sectionTitle}>Complete HVAC Cleaning Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>❄️</div>
                <h3>Evaporator Coil Cleaning</h3>
                <p>Deep cleaning of AC evaporator coils to improve cooling efficiency and prevent freezing issues.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔥</div>
                <h3>Condenser Coil Cleaning</h3>
                <p>Remove dirt, debris, and buildup from outdoor condenser coils for optimal heat transfer and efficiency.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💨</div>
                <h3>Blower Motor Cleaning</h3>
                <p>Clean blower wheels and motors to restore proper airflow and reduce system strain.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔧</div>
                <h3>Heat Exchanger Cleaning</h3>
                <p>Remove carbon deposits and buildup from heat exchangers for safe, efficient heating operation.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌡️</div>
                <h3>Air Handler Cleaning</h3>
                <p>Complete air handler cleaning including drain pans, coils, and internal components.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔄</div>
                <h3>Filter Replacement</h3>
                <p>Professional filter replacement with high-quality filters for optimal air filtration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Clean Your HVAC System?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚡</div>
                <h3>Lower Energy Bills</h3>
                <p>Clean HVAC systems run 15-20% more efficiently, significantly reducing monthly energy costs.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🛠️</div>
                <h3>Prevent Breakdowns</h3>
                <p>Regular cleaning prevents costly repairs and emergency breakdowns during peak seasons.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>📅</div>
                <h3>Extend Equipment Life</h3>
                <p>Proper maintenance can double your HVAC system's lifespan, protecting your investment.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🌡️</div>
                <h3>Better Performance</h3>
                <p>Restore peak heating and cooling performance with consistent temperatures throughout your space.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional HVAC System Cleaning</h2>
              <p>
                Clean Breeze Pro specializes in comprehensive HVAC system cleaning for residential and commercial
                properties in New York, London, Tokyo, and Paris. Our certified technicians clean every component
                of your heating and cooling system, from evaporator and condenser coils to blower motors and heat
                exchangers, ensuring peak performance and maximum efficiency.
              </p>

              <h3>The Importance of HVAC Cleaning</h3>
              <p>
                A dirty HVAC system works harder to heat and cool your space, consuming more energy and wearing out
                faster. Dust, dirt, and debris accumulate on coils, reducing heat transfer efficiency. Dirty blower
                wheels restrict airflow, causing uneven temperatures and system strain. Regular professional HVAC
                cleaning removes this buildup, restoring efficiency, reducing energy costs, and preventing expensive
                breakdowns that often occur during the hottest or coldest days of the year.
              </p>

              <h3>Our Comprehensive Cleaning Process</h3>
              <p>
                Our HVAC cleaning service goes far beyond changing filters. We clean evaporator coils to improve AC
                performance, condenser coils to enhance heat rejection, blower motors to restore proper airflow, and
                heat exchangers to ensure safe heating operation. We clean drain pans and lines to prevent water
                damage, inspect electrical connections, and test system performance. Every service includes a detailed
                report with recommendations for optimal operation.
              </p>

              <h3>Coil Cleaning for Maximum Efficiency</h3>
              <p>
                Coils are the heart of your HVAC system's efficiency. Evaporator coils absorb heat to cool your space,
                while condenser coils release that heat outdoors. When coils are coated with dust and debris, they
                can't transfer heat effectively. This forces your system to run longer cycles, consuming more energy
                and providing less comfort. Our professional coil cleaning uses specialized detergents and techniques
                to restore coils to like-new condition, dramatically improving system performance.
              </p>

              <h3>Maintenance Plans for Year-Round Comfort</h3>
              <p>
                Regular HVAC cleaning is essential for optimal performance. We recommend bi-annual service: spring
                cleaning before cooling season and fall cleaning before heating season. Our maintenance plans provide
                priority scheduling, discounted rates, and ensure your system is always ready when you need it most.
                Contact us today for a free quote and experience the difference professional HVAC cleaning makes in
                comfort, efficiency, and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Maximize Your HVAC Efficiency</h2>
            <p className={styles.ctaDescription}>
              Get your free HVAC cleaning quote today. Save energy, prevent breakdowns, extend system life.
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
