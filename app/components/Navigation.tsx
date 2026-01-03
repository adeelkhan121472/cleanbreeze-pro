'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navigation.module.css'

const locations = [
  { name: 'New York', path: '/locations/new-york' },
  { name: 'London', path: '/locations/london' },
  { name: 'Tokyo', path: '/locations/tokyo' },
  { name: 'Paris', path: '/locations/paris' },
]

const services = [
  { name: 'Residential Cleaning', path: '/services/residential' },
  { name: 'Commercial Cleaning', path: '/services/commercial' },
  { name: 'Deep Cleaning', path: '/services/deep-cleaning' },
  { name: 'Move In/Out', path: '/services/move-in-out' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✨</span>
          <span className={styles.logoText}>Clean Breeze Pro</span>
        </Link>
        
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link 
            href="/"
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle}>
              Services
              <span className={styles.arrow}>▾</span>
            </button>
            <div className={styles.dropdownMenu}>
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={service.path}
                  className={`${styles.dropdownLink} ${pathname === service.path ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownToggle}>
              Locations
              <span className={styles.arrow}>▾</span>
            </button>
            <div className={styles.dropdownMenu}>
              {locations.map((location) => (
                <Link
                  key={location.path}
                  href={location.path}
                  className={`${styles.dropdownLink} ${pathname === location.path ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/contact" 
            className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <Link 
            href="/quote" 
            className={styles.quoteButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
