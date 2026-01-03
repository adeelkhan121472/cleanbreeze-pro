import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../residential/service.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Move In/Out Cleaning Services - Moving Cleaning Experts',
  description: 'Professional move-in and move-out cleaning services. Full property cleaning, inspection ready, quick turnaround. Perfect for tenants, landlords, and homeowners. Serving NYC, London, Tokyo, Paris.',
  keywords: ['move in cleaning', 'move out cleaning', 'moving cleaning', 'end of tenancy cleaning', 'rental cleaning', 'property cleaning'],
  openGraph: {
    title: 'Move In/Out Cleaning Services - Clean Breeze Pro',
    description: 'Professional move-in/move-out cleaning. Full property clean, inspection ready, quick turnaround. Stress-free moving.',
    type: 'website',
  },
}

export default function MoveInOutCleaning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Move In/Out Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Breeze Pro"
    },
    "description": "Professional move-in and move-out cleaning services for stress-free moving",
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
              Move In/Out
              <span className={styles.highlight}> Cleaning</span>
            </h1>
            <p className={styles.heroDescription}>
              Stress-free moving with our comprehensive move-in and move-out cleaning services.
              Full property cleaning, inspection-ready results, and quick turnaround for tenants and landlords.
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
            <h2 className={styles.sectionTitle}>Our Move In/Out Cleaning Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Full Property Clean</h3>
                <p>Complete cleaning of entire property including all rooms, bathrooms, kitchen, and common areas.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>✅</div>
                <h3>Inspection Ready</h3>
                <p>Thorough cleaning that meets landlord inspection standards for security deposit return.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>Quick Turnaround</h3>
                <p>Fast, efficient service to accommodate tight moving schedules and deadlines.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧼</div>
                <h3>Deep Kitchen Cleaning</h3>
                <p>Appliance cleaning inside and out, cabinet wiping, countertop sanitization, and floor scrubbing.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🚿</div>
                <h3>Bathroom Sanitization</h3>
                <p>Complete bathroom cleaning including toilet, shower, tub, sink, mirrors, and floor disinfection.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🪟</div>
                <h3>Windows & Walls</h3>
                <p>Window cleaning, wall spot removal, baseboard wiping, and door frame cleaning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Perfect For</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>👤</div>
                <h3>Tenants Moving Out</h3>
                <p>Get your security deposit back with professional end-of-tenancy cleaning that meets landlord standards.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏘️</div>
                <h3>Landlords & Property Managers</h3>
                <p>Prepare rental properties for new tenants with thorough cleaning between occupancies.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏡</div>
                <h3>New Homeowners</h3>
                <p>Move into a spotless, sanitized home with our comprehensive move-in cleaning service.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏢</div>
                <h3>Real Estate Agents</h3>
                <p>Show properties at their best with professional cleaning for open houses and viewings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional Move In/Out Cleaning Services</h2>
              <p>
                Moving is stressful enough without worrying about cleaning. Clean Breeze Pro's move-in and move-out
                cleaning services take this burden off your shoulders, ensuring properties are spotless whether you're
                leaving or arriving. Our comprehensive cleaning meets landlord inspection standards and helps tenants
                secure their security deposit return. Serving New York, London, Tokyo, and Paris.
              </p>

              <h3>Complete Move-Out Cleaning</h3>
              <p>
                Our move-out cleaning service is specifically designed to meet end-of-tenancy requirements. We clean
                every room from top to bottom, including inside appliances, cabinets, closets, and all those areas
                landlords inspect. Our thorough approach includes kitchen deep cleaning with appliance degreasing,
                bathroom sanitization, wall and baseboard wiping, and floor cleaning. We ensure your old place is
                inspection-ready for a smooth security deposit return.
              </p>

              <h3>Fresh Start Move-In Cleaning</h3>
              <p>
                Moving into a new home? Our move-in cleaning service ensures you start fresh in a completely sanitized,
                spotless space. We deep clean and disinfect all surfaces before you unpack, giving you peace of mind
                that your new home is hygienically clean. This is especially important for families with children,
                those with allergies, or anyone who wants to know exactly how clean their new space is.
              </p>

              <h3>Fast Service for Tight Schedules</h3>
              <p>
                We understand moving timelines are often tight. That's why we offer quick turnaround times and
                flexible scheduling to accommodate your moving dates. Whether you need same-day service or want to
                book in advance, our efficient teams work fast without compromising quality. We can clean while
                movers are working or schedule around your moving timeline for maximum convenience.
              </p>

              <h3>Landlords & Property Managers Trust Us</h3>
              <p>
                Property managers and landlords rely on Clean Breeze Pro for turnover cleaning between tenants. Our
                consistent, thorough service ensures rental properties are always showing well and ready for new
                occupants. We offer competitive rates for regular property management clients and can work with your
                schedule to minimize vacancy time. All our cleaners are background-checked, insured, and professional.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Stress-Free Moving Starts Here</h2>
            <p className={styles.ctaDescription}>
              Get your free move in/out cleaning quote today. Professional service, inspection-ready results, quick turnaround.
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
