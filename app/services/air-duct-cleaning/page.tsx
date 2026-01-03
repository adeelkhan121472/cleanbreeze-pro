import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../residential/service.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Services - Professional Duct Cleaning',
  description: 'Professional air duct cleaning services to improve indoor air quality and HVAC efficiency. Remove dust, allergens, and contaminants. Serving New York, London, Tokyo, and Paris. NADCA certified.',
  keywords: ['air duct cleaning', 'duct cleaning', 'ventilation cleaning', 'air quality improvement', 'HVAC duct cleaning', 'residential duct cleaning', 'commercial duct cleaning'],
  openGraph: {
    title: 'Air Duct Cleaning Services - Clean Breeze Pro',
    description: 'Professional air duct cleaning. Improve air quality, reduce allergens, boost HVAC efficiency. NADCA certified technicians.',
    type: 'website',
  },
}

export default function AirDuctCleaning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Air Duct Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Breeze Pro"
    },
    "description": "Professional air duct and ventilation cleaning services",
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
              Air Duct Cleaning
              <span className={styles.highlight}> Services</span>
            </h1>
            <p className={styles.heroDescription}>
              Professional air duct cleaning to remove dust, allergens, and contaminants from your ventilation system.
              Breathe cleaner air, improve HVAC efficiency, and create a healthier indoor environment.
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
            <h2 className={styles.sectionTitle}>Our Air Duct Cleaning Process</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔍</div>
                <h3>Inspection</h3>
                <p>Comprehensive camera inspection to assess duct condition and identify problem areas before cleaning begins.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💨</div>
                <h3>Powerful Vacuum</h3>
                <p>High-powered negative pressure vacuum system removes dust, debris, and contaminants from your entire duct system.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔧</div>
                <h3>Mechanical Agitation</h3>
                <p>Rotary brushes and compressed air tools dislodge stubborn buildup from duct walls for thorough cleaning.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌿</div>
                <h3>Sanitization</h3>
                <p>EPA-approved sanitizers and deodorizers eliminate bacteria, mold, and odors for healthier air quality.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📸</div>
                <h3>Verification</h3>
                <p>Post-cleaning camera inspection and before/after photos document the thoroughness of our work.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>✅</div>
                <h3>System Check</h3>
                <p>Final system verification ensures proper airflow and optimal HVAC performance after cleaning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Benefits of Air Duct Cleaning</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🌬️</div>
                <h3>Better Air Quality</h3>
                <p>Remove dust, pollen, pet dander, and allergens that circulate through your home or office.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚡</div>
                <h3>Energy Savings</h3>
                <p>Clean ducts allow your HVAC system to run more efficiently, reducing energy costs by up to 20%.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏥</div>
                <h3>Health Benefits</h3>
                <p>Reduce asthma triggers, allergy symptoms, and respiratory issues caused by poor indoor air quality.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h3>System Longevity</h3>
                <p>Clean ductwork reduces strain on your HVAC system, extending equipment lifespan and preventing breakdowns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional Air Duct Cleaning Services</h2>
              <p>
                Clean Breeze Pro provides expert air duct cleaning services for residential and commercial properties
                across New York, London, Tokyo, and Paris. Our NADCA-certified technicians use advanced equipment and
                proven methods to thoroughly clean your entire duct system, improving indoor air quality and HVAC efficiency.
              </p>

              <h3>Why Air Duct Cleaning is Important</h3>
              <p>
                Your air ducts are the lungs of your home or business. Every time your HVAC system operates, air circulates
                through the ductwork, carrying dust, pollen, pet dander, mold spores, and other contaminants. Over time,
                these pollutants accumulate in your ducts, reducing air quality and system efficiency. Professional air
                duct cleaning removes years of buildup, helping you breathe cleaner air and saving money on energy costs.
              </p>

              <h3>Our Advanced Cleaning Process</h3>
              <p>
                We use state-of-the-art equipment including high-powered negative pressure vacuum systems, rotary brush
                systems, and compressed air tools. Our process begins with a camera inspection to assess your duct condition,
                followed by mechanical agitation to dislodge debris, powerful vacuuming to remove contaminants, and optional
                sanitization to eliminate bacteria and odors. We provide before-and-after documentation of our work.
              </p>

              <h3>When You Should Clean Your Air Ducts</h3>
              <p>
                The National Air Duct Cleaners Association (NADCA) recommends cleaning air ducts every 3-5 years. However,
                you should consider more frequent cleaning if you've recently renovated, have pets, suffer from allergies,
                notice visible mold growth, detect musty odors, or see dust blowing from vents. Post-construction cleaning
                is especially important to remove drywall dust and debris.
              </p>

              <h3>NADCA Certified Professionals</h3>
              <p>
                All our technicians are NADCA certified, meaning they've received specialized training in proper air duct
                cleaning methods. We follow industry best practices, use professional-grade equipment, and carry full
                insurance for your protection. Get a free quote today and experience the Clean Breeze Pro difference in
                air quality and HVAC performance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for Cleaner Air?</h2>
            <p className={styles.ctaDescription}>
              Get your free air duct cleaning quote today. NADCA certified, fully insured, satisfaction guaranteed.
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
