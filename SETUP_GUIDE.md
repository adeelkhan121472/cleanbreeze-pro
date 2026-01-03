# 🚀 Quick Setup Guide for Clean Breeze Pro

## Step-by-Step Installation

### 1. Extract the Project
Download and extract the `cleanbreeze-pro` folder to your computer.

### 2. Open Terminal/Command Prompt
Navigate to the project folder:

**On Windows:**
```bash
cd C:\path\to\cleanbreeze-pro
```

**On Mac/Linux:**
```bash
cd /path/to/cleanbreeze-pro
```

### 3. Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- All other dependencies

**Note:** This may take 2-5 minutes depending on your internet speed.

### 4. Start Development Server
Once installation is complete, run:
```bash
npm run dev
```

You should see output like:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.5s
```

### 5. Open in Browser
Navigate to: **http://localhost:3000**

You should see the Clean Breeze Pro homepage! 🎉

## 🛠️ Common Commands

### Development
```bash
npm run dev          # Start development server
```

### Production Build
```bash
npm run build        # Build for production
npm start            # Run production server
```

### Linting
```bash
npm run lint         # Check for code issues
```

## 📝 Next Steps

### 1. Update Contact Information
Edit these files to add your real contact details:

- `app/components/Footer.tsx` - Footer contact info
- `app/locations/*/page.tsx` - Each location's contact details
- `app/contact/page.tsx` - Main contact page
- `app/quote/page.tsx` - Quote page sidebar

### 2. Add Real Images (Optional)
Replace emoji icons with actual images:
- Create `/public/images/` folder
- Add location photos, team photos, before/after shots
- Update image references in components

### 3. Connect Forms
The quote and contact forms need backend integration:

**Option A: Email Service**
- Use Resend, SendGrid, or Mailgun
- Add API routes in `app/api/`
- Handle form submissions

**Option B: Form Services**
- Formspree
- Netlify Forms
- Google Forms integration

### 4. Deploy Your Website

**Vercel (Recommended - Free):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Other Options:**
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Troubleshooting

### "npm: command not found"
You need to install Node.js first:
- Download from: https://nodejs.org/
- Install the LTS version
- Restart your terminal

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Installation Errors
```bash
# Clear npm cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **TypeScript Docs:** https://www.typescriptlang.org/docs

## ✅ Checklist Before Going Live

- [ ] Update all contact information
- [ ] Test all forms
- [ ] Update metadata for SEO
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Test quote form functionality
- [ ] Add privacy policy & terms
- [ ] Configure email notifications

---

**Ready to launch Clean Breeze Pro!** 🌟

Your professional cleaning website is ready to go live!
