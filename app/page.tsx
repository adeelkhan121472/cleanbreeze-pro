import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import styles from './page.module.css'

const services = [
  {
    icon: '🌬️',
    title: 'Air Duct Cleaning',
    description: 'Professional air duct and ventilation cleaning to improve indoor air quality and system efficiency.',
    features: ['Complete duct cleaning', 'Debris removal', 'Sanitization & disinfection'],
    link: '/services/air-duct-cleaning'
  },
  {
    icon: '❄️',
    title: 'HVAC System Cleaning',
    description: 'Comprehensive HVAC cleaning and maintenance for optimal performance and energy savings.',
    features: ['Full system cleaning', 'Coil cleaning', 'Filter replacement'],
    link: '/services/hvac-cleaning'
  },
  {
    icon: '🏠',
    title: 'Residential HVAC',
    description: 'Expert HVAC and air duct cleaning services for homes, apartments, and condos.',
    features: ['Home air quality', 'Energy efficiency', 'Allergen reduction'],
    link: '/services/residential'
  },
  {
    icon: '🏢',
    title: 'Commercial HVAC',
    description: 'Professional HVAC cleaning for offices, buildings, and large commercial facilities.',
    features: ['Large-scale systems', 'Minimal disruption', 'Regular maintenance plans'],
    link: '/services/commercial'
  }
]

const locations = [
  { name: 'New York', icon: '🗽', slug: 'new-york', clients: '2,500+' },
  { name: 'London', icon: '🏛️', slug: 'london', clients: '1,800+' },
  { name: 'Tokyo', icon: '🗼', slug: 'tokyo', clients: '2,200+' },
  { name: 'Paris', icon: '🗼', slug: 'paris', clients: '1,600+' },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York',
    rating: 5,
    text: 'Clean Breeze Pro transformed my apartment! The team was professional, thorough, and used eco-friendly products. Highly recommend!'
  },
  {
    name: 'James Chen',
    location: 'Tokyo',
    rating: 5,
    text: 'Our office has never looked better. The cleaning crew is reliable and always does an amazing job. Worth every penny!'
  },
  {
    name: 'Emma Williams',
    location: 'London',
    rating: 5,
    text: 'The deep cleaning service exceeded my expectations. They tackled areas I didn\'t even know needed attention. Fantastic service!'
  }
]

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Clean Breeze Pro",
    "image": "https://cleanbreezepro.com/og-image.jpg",
    "description": "Expert professional cleaning services across New York, London, Tokyo, and Paris. Residential, commercial, deep cleaning & move-in/out services.",
    "url": "https://cleanbreezepro.com",
    "telephone": "+1-555-CLEAN-PRO",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Tokyo",
        "addressCountry": "JP"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "8000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": "New York"
      },
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "City",
        "name": "Tokyo"
      },
      {
        "@type": "City",
        "name": "Paris"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Cleaning",
            "description": "Professional home cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "description": "Office and workplace cleaning solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Thorough detailed cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move In/Out Cleaning",
            "description": "Moving cleaning services"
          }
        }
      ]
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What cleaning services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive cleaning services including residential cleaning, commercial cleaning, deep cleaning, and move-in/move-out cleaning services across New York, London, Tokyo, and Paris."
        }
      },
      {
        "@type": "Question",
        "name": "Are your cleaning products eco-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We use environmentally safe, non-toxic cleaning products that are effective yet gentle on your home and the environment."
        }
      },
      {
        "@type": "Question",
        "name": "How much does professional cleaning cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is transparent with no hidden fees. The cost depends on the size of your space, type of service, and frequency. Get a free quote to receive an accurate estimate tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are you insured and bonded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Clean Breeze Pro is fully licensed, bonded, and insured for your peace of mind and protection."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} fade-in-up`}>
              Professional HVAC &
              <span className={styles.highlight}> Air Duct Cleaning</span>
            </h1>
            <p className={`${styles.heroDescription} fade-in-up`} style={{animationDelay: '0.2s'}}>
              Breathe cleaner air with our expert HVAC and air duct cleaning services.
              Improve indoor air quality, boost energy efficiency, and extend your system's lifespan
              with professional cleaning tailored to your home or business.
            </p>
            <div className={`${styles.heroButtons} fade-in-up`} style={{animationDelay: '0.4s'}}>
              <Link href="/quote" className={styles.primaryButton}>
                Get Free Quote
              </Link>
              <Link href="/services/air-duct-cleaning" className={styles.secondaryButton}>
                Our Services
              </Link>
            </div>
            <div className={`${styles.heroStats} fade-in-up`} style={{animationDelay: '0.6s'}}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>8,000+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50,000+</div>
                <div className={styles.statLabel}>Systems Cleaned</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statLabel}>Global Cities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Services</h2>
              <p className={styles.sectionDescription}>
                Professional HVAC and air duct cleaning solutions for healthier indoor air
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={styles.serviceCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Link href={service.link} className={styles.serviceLink}>
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChoose}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Clean Breeze Pro?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h3>Certified Technicians</h3>
                <p>NADCA-certified professionals with years of HVAC cleaning experience</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚙️</div>
                <h3>Advanced Equipment</h3>
                <p>State-of-the-art tools and technology for thorough duct cleaning</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>💨</div>
                <h3>Better Air Quality</h3>
                <p>Remove allergens, dust, and contaminants for healthier indoor air</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>⚡</div>
                <h3>Energy Savings</h3>
                <p>Clean HVAC systems run more efficiently, reducing energy costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className={styles.locations}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>We Serve 4 Global Cities</h2>
              <p className={styles.sectionDescription}>
                Find us in your city and experience world-class cleaning
              </p>
            </div>

            <div className={styles.locationGrid}>
              {locations.map((location, index) => (
                <Link 
                  href={`/locations/${location.slug}`}
                  key={location.slug}
                  className={styles.locationCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.locationIcon}>{location.icon}</div>
                  <h3 className={styles.locationName}>{location.name}</h3>
                  <p className={styles.locationClients}>{location.clients} satisfied clients</p>
                  <span className={styles.locationArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={styles.testimonialCard}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionDescription}>
                Everything you need to know about our professional cleaning services
              </p>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What cleaning services do you offer?</h3>
                <p className={styles.faqAnswer}>
                  We offer comprehensive cleaning services including residential cleaning, commercial cleaning,
                  deep cleaning, and move-in/move-out cleaning services across New York, London, Tokyo, and Paris.
                  Our professional cleaners are trained to handle all types of cleaning needs with eco-friendly products.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Are your cleaning products eco-friendly?</h3>
                <p className={styles.faqAnswer}>
                  Yes! We use environmentally safe, non-toxic cleaning products that are effective yet gentle on
                  your home and the environment. All our cleaning solutions are certified green and safe for
                  children and pets.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much does professional cleaning cost?</h3>
                <p className={styles.faqAnswer}>
                  Our pricing is transparent with no hidden fees. The cost depends on the size of your space,
                  type of service, and frequency. Get a free quote to receive an accurate estimate tailored to
                  your specific cleaning needs.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Are you insured and bonded?</h3>
                <p className={styles.faqAnswer}>
                  Yes, Clean Breeze Pro is fully licensed, bonded, and insured for your peace of mind and
                  protection. All our professional cleaners undergo background checks and comprehensive training.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How do I schedule a cleaning service?</h3>
                <p className={styles.faqAnswer}>
                  Scheduling is easy! Simply click "Get Free Quote" to fill out our quick form, or contact us
                  directly. We offer flexible scheduling including same-day and after-hours cleaning services
                  to fit your busy lifestyle.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What makes Clean Breeze Pro different?</h3>
                <p className={styles.faqAnswer}>
                  We combine 5-star service with eco-friendly practices, transparent pricing, and fully insured
                  professional cleaners. With over 8,000 satisfied clients and 50,000+ successful cleanings,
                  we're the trusted choice for quality cleaning services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className={styles.seoContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h2>Professional HVAC & Air Duct Cleaning Services</h2>
              <p>
                Clean Breeze Pro is your trusted choice for professional HVAC and air duct cleaning services across four global cities.
                Whether you need residential air duct cleaning for your home, commercial HVAC maintenance for your office, or
                specialized system cleaning, our certified technicians deliver superior results that improve air quality and system efficiency.
              </p>

              <h3>Why Air Duct Cleaning Matters</h3>
              <p>
                Your air ducts circulate air throughout your home or business, but over time they accumulate dust, allergens,
                pet dander, mold spores, and other contaminants. Professional air duct cleaning removes these pollutants,
                improving indoor air quality and helping those with allergies or respiratory conditions breathe easier. Clean
                ducts also improve HVAC efficiency, potentially lowering energy bills by up to 20%.
              </p>

              <h3>Comprehensive HVAC System Cleaning</h3>
              <p>
                Our HVAC cleaning services go beyond just the ductwork. We clean evaporator coils, condenser coils, blower
                motors, heat exchangers, and air handlers. This comprehensive approach ensures your entire HVAC system operates
                at peak efficiency. Regular HVAC cleaning extends equipment lifespan, prevents costly breakdowns, and maintains
                optimal heating and cooling performance year-round.
              </p>

              <h3>Serving Residential & Commercial Clients</h3>
              <p>
                With locations in New York, London, Tokyo, and Paris, Clean Breeze Pro serves both residential and commercial
                properties. Our teams use advanced equipment including high-powered vacuum systems, rotary brushes, and camera
                inspection tools to thoroughly clean your ductwork. We're NADCA-certified, fully insured, and committed to
                industry best practices for safe, effective HVAC and air duct cleaning.
              </p>

              <h3>The Clean Breeze Pro Difference</h3>
              <p>
                Professional HVAC and air duct cleaning is an investment in your health, comfort, and energy savings. Our
                certified technicians use state-of-the-art equipment and proven methods to deliver exceptional results. We
                provide before-and-after inspection reports, transparent pricing, and a satisfaction guarantee. Experience
                cleaner air, better HVAC performance, and peace of mind with Clean Breeze Pro.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for Cleaner, Healthier Air?</h2>
            <p className={styles.ctaDescription}>
              Get your free HVAC and air duct cleaning quote today. Improve air quality, save energy, breathe better!
            </p>
            <Link href="/quote" className={styles.ctaButton}>
              Get Your Free Quote Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
