import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from '../residential/service.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deep Cleaning Services - Thorough Home & Office Cleaning',
  description: 'Professional deep cleaning services for homes and offices. Complete sanitization, appliance cleaning, grout & tile work. Eco-friendly products, trusted cleaners. Available in New York, London, Tokyo, Paris.',
  keywords: ['deep cleaning', 'thorough cleaning', 'spring cleaning', 'detailed cleaning', 'sanitization services', 'intensive cleaning'],
  openGraph: {
    title: 'Deep Cleaning Services - Clean Breeze Pro',
    description: 'Professional deep cleaning services. Complete sanitization, appliance cleaning, hard-to-reach areas. Eco-friendly, thorough, trusted.',
    type: 'website',
  },
}

export default function DeepCleaning() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deep Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Clean Breeze Pro"
    },
    "description": "Thorough, detailed deep cleaning services for homes and offices",
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
              Deep Cleaning
              <span className={styles.highlight}> Services</span>
            </h1>
            <p className={styles.heroDescription}>
              Thorough, intensive cleaning that reaches every corner and tackles stubborn dirt.
              Perfect for spring cleaning, post-renovation, or when your space needs extra attention.
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
            <h2 className={styles.sectionTitle}>What's Included in Deep Cleaning</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🧽</div>
                <h3>Complete Sanitization</h3>
                <p>Thorough cleaning and sanitization of all surfaces, including high-touch areas, light switches, and door handles.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔧</div>
                <h3>Appliance Cleaning</h3>
                <p>Inside and outside cleaning of refrigerators, ovens, microwaves, dishwashers, and other appliances.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>✨</div>
                <h3>Grout & Tile Work</h3>
                <p>Deep scrubbing of grout lines, tile surfaces, and hard-to-clean bathroom and kitchen areas.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🪟</div>
                <h3>Window & Blind Cleaning</h3>
                <p>Interior window washing, window sill cleaning, and blind dusting for crystal-clear views.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🛋️</div>
                <h3>Furniture Detailing</h3>
                <p>Moving furniture to clean underneath and behind, dusting all surfaces, and vacuuming upholstery.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🚿</div>
                <h3>Bathroom Deep Clean</h3>
                <p>Intensive cleaning of showers, tubs, toilets, sinks with lime scale and soap scum removal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need Deep Cleaning */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>When You Need Deep Cleaning</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🌸</div>
                <h3>Spring Cleaning</h3>
                <p>Seasonal deep cleaning to refresh your entire home or office after winter months.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🏗️</div>
                <h3>Post-Renovation</h3>
                <p>Thorough cleaning after construction or renovation work to remove dust and debris.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🎉</div>
                <h3>Before Special Events</h3>
                <p>Deep clean your space before hosting parties, gatherings, or important events.</p>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🦠</div>
                <h3>Health & Allergies</h3>
                <p>Reduce allergens and improve air quality with thorough dust and grime removal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional Deep Cleaning Services</h2>
              <p>
                Clean Breeze Pro's deep cleaning services provide the most thorough, intensive cleaning for your
                home or office. Unlike regular cleaning that maintains day-to-day cleanliness, deep cleaning tackles
                built-up dirt, grime, and those hard-to-reach areas that often get overlooked. Our professional
                cleaners have the expertise, tools, and eco-friendly products to transform your space.
              </p>

              <h3>Comprehensive Deep Cleaning Process</h3>
              <p>
                Our deep cleaning service is a meticulous, room-by-room process that covers every surface. We start
                by moving furniture to access hidden areas, then work from top to bottom cleaning ceiling fans, light
                fixtures, walls, baseboards, and floors. In kitchens, we deep clean inside appliances, scrub grout
                lines, and degrease all surfaces. Bathrooms receive intensive treatment with lime scale removal,
                grout cleaning, and thorough sanitization.
              </p>

              <h3>Perfect for Special Situations</h3>
              <p>
                Deep cleaning is ideal for spring cleaning, post-renovation cleanup, preparing for house guests,
                or move-in/move-out situations. It's also excellent for improving indoor air quality and reducing
                allergens. Many clients schedule deep cleaning seasonally or after periods of neglect to restore
                their space to pristine condition. Our service is perfect when regular cleaning isn't enough.
              </p>

              <h3>Professional Equipment & Eco-Friendly Products</h3>
              <p>
                We use commercial-grade cleaning equipment and environmentally safe products that deliver superior
                results. Our cleaners are trained in advanced techniques for removing stubborn stains, eliminating
                odors, and sanitizing surfaces. All our products are non-toxic, biodegradable, and safe for children
                and pets, ensuring a clean, healthy environment without harsh chemicals.
              </p>

              <h3>Experienced, Insured Cleaning Teams</h3>
              <p>
                Every deep cleaning project is handled by our experienced, background-checked professionals. We're
                fully licensed, bonded, and insured, giving you complete peace of mind. Our teams arrive with all
                necessary supplies and equipment, work efficiently to minimize disruption, and leave your space
                immaculately clean. Get your free quote today and experience the Clean Breeze Pro difference.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for a Deep Clean?</h2>
            <p className={styles.ctaDescription}>
              Transform your space with our thorough deep cleaning service. Professional, detailed, and eco-friendly.
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
