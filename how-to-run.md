# How to Run DIGIGO E-SOFT Website

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Comes with Node.js

### Installation & Running

1. **Open Terminal/PowerShell** in the project directory:
   ```bash
   cd c:\DevFlow\Digigo
   ```

2. **Install Dependencies** (first time only):
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   - Visit: **http://localhost:3000**
   - If port 3000 is busy, it will use 3001 or next available port

---

## 📱 Available Pages

Once the server is running, you can visit:

### Main Pages
- **Home**: http://localhost:3000
- **Technology**: http://localhost:3000/technology
- **Applications**: http://localhost:3000/applications
- **Projects**: http://localhost:3000/projects
- **Government Projects**: http://localhost:3000/government-projects
- **Clients**: http://localhost:3000/clients
- **Impact & Savings**: http://localhost:3000/impact
- **FAQ**: http://localhost:3000/faq
- **Contact**: http://localhost:3000/contact

### Application Sectors
- **Agriculture**: http://localhost:3000/applications/agriculture
- **Residential**: http://localhost:3000/applications/residential
- **Commercial**: http://localhost:3000/applications/commercial
- **Industrial**: http://localhost:3000/applications/industrial
- **Hospitals**: http://localhost:3000/applications/hospitals

---

## 🛠️ Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Type checking
npm run type-check
```

---

## 🎨 Project Structure

```
Digigo/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Home page
│   ├── technology/              # Technology page
│   ├── applications/            # Applications pages
│   │   ├── page.tsx            # Overview
│   │   ├── agriculture/        # Agriculture sector
│   │   ├── residential/        # Residential sector
│   │   ├── commercial/         # Commercial sector
│   │   ├── industrial/         # Industrial sector
│   │   └── hospitals/          # Hospitals sector
│   ├── projects/               # Projects gallery
│   ├── government-projects/    # Government projects
│   ├── clients/                # Clients & testimonials
│   ├── impact/                 # ROI calculator
│   ├── faq/                    # FAQ page
│   ├── contact/                # Contact form
│   ├── actions/                # Server Actions
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   └── gallery/                # Gallery components
│       └── Lightbox.tsx        # Image lightbox
├── public/                      # Static assets
│   ├── logo.png                # Company logo
│   └── gallery/                # Project images
│       └── gallery.json        # Gallery data
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

---

## 🎯 Key Features

### Design
- ✅ Brand colors: Yellow, Orange, Red, Pink, Purple
- ✅ Professional typography (Inter + Outfit)
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion

### Functionality
- ✅ Multi-page navigation
- ✅ Gallery system with filtering
- ✅ Contact form with Server Actions
- ✅ ROI calculator
- ✅ FAQ with accordion
- ✅ WhatsApp integration
- ✅ Google Maps embed

### Performance
- ✅ Next.js 14 App Router
- ✅ TypeScript for type safety
- ✅ Optimized images
- ✅ SEO metadata on all pages

---

## 🔧 Troubleshooting

### Port Already in Use
If you see "Port 3000 is in use":
- Next.js will automatically try port 3001, 3002, etc.
- Or manually specify a port:
  ```bash
  npm run dev -- -p 3002
  ```

### Dependencies Issues
If you encounter errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📧 Contact Form Setup (Optional)

To enable email sending:

1. **Install email service** (choose one):
   ```bash
   npm install nodemailer
   # OR
   npm install resend
   ```

2. **Add environment variables** (create `.env.local`):
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@digigo.com
   ```

3. **Uncomment email code** in `app/actions/contact.ts`

---

## 🌐 Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms
- **Netlify**: Use Next.js plugin
- **AWS/Azure**: Use Docker or serverless
- **VPS**: Run `npm start` after build

---

## 📝 Notes

- **Logo**: Located at `/public/logo.png`
- **Gallery Images**: Add to `/public/gallery/` and update `gallery.json`
- **Brand Colors**: Defined in `tailwind.config.ts`
- **No Database**: All content is file-based (JSON)

---

## ✅ Current Status

**Phase 3 Complete**: All Technology and Applications pages are live!

**What's Working**:
- ✅ All 11 pages created and functional
- ✅ Navigation and routing
- ✅ Responsive design
- ✅ Animations and interactions
- ✅ Contact form (ready for email integration)
- ✅ Gallery system
- ✅ ROI calculator

**Ready for Production**: Yes! Just add real images and configure email.

---

## 🆘 Need Help?

- Check browser console for errors (F12)
- Review terminal output for build errors
- Ensure all dependencies are installed
- Verify Node.js version: `node --version`

---

**Happy Coding! 🚀**
