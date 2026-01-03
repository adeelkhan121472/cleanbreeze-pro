# Clean Breeze Pro - Professional Cleaning Services Website

A modern, professional Next.js website for Clean Breeze Pro cleaning services with locations in New York, London, Tokyo, and Paris.

## 🌟 Features

- **Multi-Location Support**: 4 dedicated location pages (New York, London, Tokyo, Paris)
- **Service Pages**: Residential, Commercial, Deep Cleaning, Move In/Out
- **Quote System**: Easy-to-use quote request form
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Modern UI**: Clean, fresh design with smooth animations
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized for speed and user experience

## 🎨 Design Features

- **Color Palette**: Fresh blue (#3b82f6) and cyan (#06b6d4) accent colors
- **Typography**: Poppins for headings, Quicksand for secondary text
- **Animations**: Smooth transitions, floating bubbles, fade-in effects
- **Interactive Elements**: Hover states, dropdowns, and dynamic forms
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
cleanbreeze-pro/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx         # Main navigation with dropdowns
│   │   ├── Navigation.module.css
│   │   ├── Footer.tsx             # Footer with links
│   │   └── Footer.module.css
│   ├── locations/
│   │   ├── new-york/
│   │   │   └── page.tsx           # New York location
│   │   ├── london/
│   │   │   └── page.tsx           # London location
│   │   ├── tokyo/
│   │   │   └── page.tsx           # Tokyo location
│   │   ├── paris/
│   │   │   └── page.tsx           # Paris location
│   │   └── location.module.css    # Shared location styles
│   ├── services/
│   │   ├── residential/
│   │   │   ├── page.tsx           # Residential service page
│   │   │   └── service.module.css
│   │   ├── commercial/            # Commercial cleaning (template ready)
│   │   ├── deep-cleaning/         # Deep cleaning (template ready)
│   │   └── move-in-out/           # Move service (template ready)
│   ├── quote/
│   │   ├── page.tsx               # Get quote page
│   │   └── quote.module.css
│   ├── contact/
│   │   ├── page.tsx               # Contact page
│   │   └── contact.module.css
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── page.module.css
│   └── globals.css                # Global styles
├── public/                        # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with statistics
- Service showcase
- Why choose us section
- Location highlights
- Customer testimonials
- CTA section

### Location Pages
- **New York** (`/locations/new-york`) - All 5 boroughs coverage
- **London** (`/locations/london`) - All London zones
- **Tokyo** (`/locations/tokyo`) - All 23 wards
- **Paris** (`/locations/paris`) - All 20 arrondissements

Each location features:
- City-specific hero
- Service highlights
- Local contact information
- Service offerings
- CTA for quotes

### Service Pages
- **Residential** (`/services/residential`) - Home cleaning services
- **Commercial** (`/services/commercial`) - Office & business cleaning
- **Deep Cleaning** (`/services/deep-cleaning`) - Thorough cleaning
- **Move In/Out** (`/services/move-in-out`) - Moving cleaning services

### Other Pages
- **Quote** (`/quote`) - Free quote request form
- **Contact** (`/contact`) - Contact information for all locations

## 🎨 Customization

### Update Colors
Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-accent: #06b6d4;
  --color-secondary: #10b981;
  /* ... */
}
```

### Add New Location
1. Create folder: `app/locations/[city-name]/`
2. Add `page.tsx` using existing templates
3. Update navigation in `app/components/Navigation.tsx`
4. Add to home page location grid

### Add New Service
1. Create folder: `app/services/[service-name]/`
2. Add `page.tsx` using residential template
3. Update navigation dropdown
4. Add to home page services section

### Modify Contact Information
Update phone numbers and emails in:
- `app/components/Footer.tsx`
- Location pages (`app/locations/*/page.tsx`)
- Contact page (`app/contact/page.tsx`)
- Quote page sidebar (`app/quote/page.tsx`)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 968px  
- **Desktop**: > 968px

## 🛠️ Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **CSS Modules**: Scoped component styling
- **Google Fonts**: Poppins & Quicksand

## ⚡ Performance Features

- Server-side rendering (SSR)
- Automatic code splitting
- Optimized CSS delivery
- Image optimization ready
- Fast page transitions

## 🔧 Development Tips

### Adding More Service Pages
Copy `app/services/residential/` folder structure and modify:
- Service title and description
- Pricing tiers
- Features list
- Metadata

### Custom Forms
Forms in quote and contact pages are ready for backend integration:
- Add form submission handlers
- Connect to email service (SendGrid, Mailgun)
- Integrate with CRM
- Add form validation

### SEO Optimization
Each page has metadata configuration:
```typescript
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

## 📞 Support & Contact

For questions about this website template:
- Check Next.js documentation: https://nextjs.org/docs
- React documentation: https://react.dev
- TypeScript documentation: https://www.typescriptlang.org/docs

## 📝 License

This project template is ready for commercial use.

---

**Clean Breeze Pro** - Bringing freshness and professionalism to cleaning services worldwide! ✨

Website: cleanbreezepro.site
