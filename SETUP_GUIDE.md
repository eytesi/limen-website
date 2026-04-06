# LIMEN WEBSITE - SETUP & DEPLOYMENT GUIDE

## ✨ Project Complete!

Your Limen branding agency website has been fully scaffolded with:
- **Next.js 15** + **React 19** architecture
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** (mobile-first)
- **6 Full Pages** with complete content
- **Chaotic Pattern Backgrounds** (fabric & geometric designs)
- **Serif Typography** (Cormorant font at all sizes)
- **E-commerce Ready** (Stripe integration structure)
- **Contact Form** (API route created)

---

## 🚀 QUICK START

### 1. Install Node.js & npm
If you haven't already:
- Download from: https://nodejs.org/ (LTS version recommended)
- Verify installation:
  ```
  node --version
  npm --version
  ```

### 2. Install Dependencies
Navigate to your project folder and run:
```bash
cd c:\Users\Usuario\Sitios\limen-website
npm install
```

This installs all required packages:
- Next.js, React, TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Stripe libraries
- Lucide React (icons)

### 3. Start Development Server
```bash
npm run dev
```

Then open: **http://localhost:3000**

You should see the beautiful Limen homepage with:
- Navigation header
- Hero section with patterns
- Featured products
- Why Limen section
- Call-to-action
- Footer

### 4. Explore the Pages
- **Home** (http://localhost:3000/) - Landing page
- **Sobre Limen** (http://localhost:3000/sobre-limen) - About page
- **Servicios** (http://localhost:3000/servicios) - Services
- **Productos** (http://localhost:3000/productos) - Products pricing
- **Portafolio** (http://localhost:3000/portafolio) - Project showcase
- **Contacto** (http://localhost:3000/contacto) - Contact form

---

## 📁 PROJECT STRUCTURE

```
limen-website/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── api/
│   │   │   └── contact/route.ts     # Contact form API
│   │   ├── contacto/page.tsx        # Contact page
│   │   ├── productos/page.tsx       # Products page
│   │   ├── servicios/page.tsx       # Services page
│   │   ├── portafolio/page.tsx      # Portfolio page
│   │   └── sobre-limen/page.tsx     # About page
│   │
│   ├── components/                   # Reusable components
│   │   ├── Navigation.tsx           # Header/Nav
│   │   ├── Footer.tsx               # Footer
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── ProductCard.tsx          # Product cards
│   │   ├── PatternBackground.tsx    # Pattern utilities
│   │   ├── Button.tsx               # Button component
│   │   ├── Section.tsx              # Section wrapper
│   │   └── Container.tsx            # Container wrapper
│   │
│   ├── lib/                          # Utilities & helpers
│   │   ├── constants.ts             # Site constants
│   │   ├── utils.ts                 # Helper functions
│   │   └── stripe.ts                # Stripe config
│   │
│   └── styles/
│       └── globals.css              # Global styles & patterns
│
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind setup
├── next.config.ts                   # Next.js config
├── postcss.config.js                # PostCSS config
├── .env.local                       # Environment variables
└── README.md                        # Full documentation
```

---

## 🎨 DESIGN SYSTEM

### Colors
- **Black**: #0A0A0A (primary)
- **White**: #FFFFFF (background)
- **Cream**: #F5F3F0 (sections)
- **Accent Red**: #E63946 (highlights)
- **Accent Blue**: #457B9D (secondary)
- **Accent Gold**: #D4A574 (tertiary)

### Typography
- **Font Family**: Cormorant (Google Fonts)
- **Headings**: SERIF, UPPERCASE, Bold
- **Subtitles**: Serif, light italic, small caps
- **Body**: Serif, light weight

### Patterns
5 unique chaotic background patterns:
1. **fabric-1**: Radial gradients (soft)
2. **fabric-2**: Linear woven texture
3. **fabric-3**: Complex radial weave
4. **animal**: Geometric animal-print style
5. **geometric**: Conic gradient mix

Use with: `pattern-fabric-1`, `pattern-fabric-2`, etc.

---

## ⚙️ CUSTOMIZATION

### Change Colors
Edit [tailwind.config.ts](./tailwind.config.ts):
```typescript
colors: {
  limen: {
    black: "#0A0A0A",
    accent: "#YOUR_NEW_COLOR",  // Change this
  }
}
```

### Add Navigation Links
Edit [src/lib/constants.ts](./src/lib/constants.ts):
```typescript
export const NAV_ITEMS = [
  { label: "NEW ITEM", href: "/new-page" },
  // ...
];
```

### Update Products
Edit [src/lib/constants.ts](./src/lib/constants.ts):
```typescript
export const PRODUCTS = [
  {
    id: "your-product",
    name: "Product Name",
    price: 999,
    features: ["Feature 1", "Feature 2"],
  },
];
```

### Modify Animations
All animations use **Framer Motion**. Edit component files:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## 🔧 FORM & INTEGRATIONS

### Contact Form Setup

1. **Current Status**: Form logs to console (development)

2. **Choose Email Service**:
   - **SendGrid** (recommended): https://sendgrid.com/
   - **Mailgun**: https://mailgun.com/
   - **Resend**: https://resend.com/
   - **Gmail + Nodemailer**

3. **Example: SendGrid Setup**
   ```bash
   npm install @sendgrid/mail
   ```
   
   Update [src/app/api/contact/route.ts](./src/app/api/contact/route.ts):
   ```typescript
   import sgMail from '@sendgrid/mail';
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   await sgMail.send({
     to: 'hola@limen.com',
     from: 'noreply@limen.com',
     subject: `New message from ${data.name}`,
     html: htmlContent,
   });
   ```

4. **Add to .env.local**:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```

### Stripe E-Commerce (Optional)

1. **Create Account**: https://stripe.com/
2. **Get API Keys**: https://dashboard.stripe.com/apikeys
3. **Add to .env.local**:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
4. **Create Checkout Page**: See [src/lib/stripe.ts](./src/lib/stripe.ts) for example

### Google Analytics (Optional)

Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXXXXX
```

Then create [src/components/Analytics.tsx](./src/components/Analytics.tsx) and import in layout.

---

## 📦 BUILD & DEPLOYMENT

### Build for Production
```bash
npm run build
```

### Run Production Build Locally
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com/
3. Import your repository
4. Add environment variables
5. Deploy automatically on push

### Deploy to Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### Deploy to Other Platforms
- **AWS Amplify**: Similar to Netlify
- **Heroku**: Use Procfile with Node.js buildpack
- **DigitalOcean**: Run on Ubuntu with PM2

---

## 📝 CONTENT TO UPDATE

Before launching, update:

### [ ] Contact Information
- Email: `hola@limen.com`
- WhatsApp: `+1 (555) 123-4567`
- Social media links

### [ ] Portfolio Projects
Add real projects to [src/lib/constants.ts](./src/lib/constants.ts):
```typescript
{
  title: "Your Project",
  category: "Branding + Web",
  description: "Project description",
  image: "portfolio-image.jpg",
}
```

### [ ] Pricing & Products
Update product details in [src/lib/constants.ts](./src/lib/constants.ts)

### [ ] Team Information
Add team members to the "Sobre Limen" page

### [ ] Service Details
Customize service descriptions on `/servicios`

### [ ] Images & Assets
- Add logo to `/public/`
- Add portfolio project images
- Add team photos
- Update favicon

---

## 🧪 TESTING

### Mobile Responsiveness
- Chrome DevTools (F12) → Toggle device toolbar
- Test on actual phone devices
- All pages should work on 375px+ width

### Browser Testing
- Chrome, Firefox, Safari, Edge
- Test on iOS and Android
- Check form submissions
- Verify animations smooth

### Performance
```bash
npm run build  # Check bundle size
```

Test with: https://web.dev/measure/

---

## 🚨 TROUBLESHOOTING

### "npm not found"
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001

### Styling not working
- Delete `.next` folder
- Run `npm run dev` again
- Clear browser cache

### Images not loading
- Check `public/` folder permissions
- Use relative paths: `/images/file.jpg`
- Ensure image formats are web-optimized

### Form not working
- Check browser console (F12)
- Verify API route exists: `/api/contact`
- Check environment variables

---

## 📚 RESOURCES

- **Next.js Docs**: https://nextjs.org/docs
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Stripe Integration**: https://stripe.com/docs/stripe-js
- **Vercel Deployment**: https://vercel.com/docs

---

## 📞 SUPPORT

For issues or questions:
1. Check the [README.md](./README.md) for full documentation
2. Review component files for examples
3. Check [.github/copilot-instructions.md](./.github/copilot-instructions.md)

---

## 🎯 NEXT STEPS

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Customize colors and content
4. ✅ Set up email service for contact form
5. ✅ Add portfolio projects and images
6. ✅ Test on mobile devices
7. ✅ Deploy to Vercel or your hosting

---

**Ready to make Limen visible!** 🚀

Your website is set up with modern best practices, responsive design, and bold animations. Focus on content, images, and integrations—the design and structure are ready to go.

¡Tu mundo, visible! ✨
