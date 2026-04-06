# Limen - Branding Agency Website

A modern, responsive website for Limen, a branding agency specializing in visual identity, web design, and brand redefinition.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** (mobile-first)
- **Chaotic Pattern Backgrounds** (fabric-like designs)
- **Serif Typography** (Cormorant font)
- **E-commerce Integration Ready** (Stripe)
- **Dark/Light Mode Support**

## Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS3
- **Animations**: Framer Motion
- **Payments**: Stripe
- **Forms**: React Form handling
- **Icons**: Lucide React

## Project Structure

```
limen-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── contacto/           # Contact page
│   │   ├── productos/          # Products page
│   │   ├── servicios/          # Services page
│   │   ├── portafolio/         # Portfolio page
│   │   └── sobre-limen/        # About page
│   ├── components/
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ProductCard.tsx     # Product card component
│   │   └── PatternBackground.tsx # Pattern backgrounds
│   └── styles/
│       └── globals.css         # Global styles & patterns
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd limen-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Stripe Configuration (optional for e-commerce)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key

# Email Configuration (for contact form)
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_url
```

## Color Palette

- **Black**: #0A0A0A
- **White**: #FFFFFF
- **Cream**: #F5F3F0
- **Accent Red**: #E63946
- **Accent Blue**: #457B9D
- **Accent Gold**: #D4A574

## Typography

- **Serif Font**: Cormorant (Light, Regular, Bold, 300-700)
- **Display Font**: Cormorant Display
- **All headlines**: Serif in UPPERCASE
- **Subtitles**: Serif in light italic

## Pattern Backgrounds

The website features five unique chaotic pattern styles:

1. **Fabric-1**: Radial gradients with subtle opacity layers
2. **Fabric-2**: Linear gradients creating woven texture
3. **Fabric-3**: Complex radial patterns with gentle overlays
4. **Animal Print**: Geometric lines simulating animal patterns
5. **Geometric Mix**: Conic gradients and linear combinations

## Pages

### Home (`/`)
- Hero section with CTA
- Featured services/products
- Why Limen section with benefits
- Call-to-action section

### Sobre Limen (`/sobre-limen`)
- Company story
- Mission statement
- Core values
- Team introduction

### Servicios (`/servicios`)
- Three main services:
  1. Branding
  2. Web Design
  3. Brand Redefinition
- Work process explanation
- CTA

### Productos (`/productos`)
- Three product offerings:
  1. **Umbral** ($800): Complete brand identity
  2. **Territorio** ($1,800): Identity + web presence
  3. **Mundo** ($600): Web design only
- Additional services
- Detailed process

### Portafolio (`/portafolio`)
- Project showcase (6 featured projects)
- Statistics/metrics
- Project details on hover

### Contacto (`/contacto`)
- Contact form
- Alternative contact methods (email, WhatsApp, social media)
- Form submission handling

## Components

### Navigation
- Fixed header with logo
- Desktop menu with hover effects
- Mobile-responsive hamburger menu
- Smooth navigation transitions

### Hero
- Full-height or custom height variants
- Dynamic pattern backgrounds
- Staggered animations
- CTA buttons support

### ProductCard
- Hover animations
- Feature list display
- Pricing display
- Badge support (optional)
- Highlight mode for featured products

### PatternBackground
- Multiple pattern options
- Customizable className prop
- Background patterns in CSS

### Footer
- Links organized by category
- Social media links
- Copyright information
- Responsive grid layout

## Animations

The site features bold, experimental animations using Framer Motion:

- Fade-in animations on scroll
- Staggered text animations
- Hover scale effects
- Smooth transitions
- Page transitions

## Forms & Integration

### Contact Form
Currently handles:
- Name, email, company name
- Service selection
- Message textarea
- Form validation

To connect to a backend:
1. Update form submission in `/contacto/page.tsx`
2. Add API route for form handling
3. Integrate email service (SendGrid, Mailgun, etc.)

### E-commerce (Stripe)
Ready for integration:
- Stripe React library installed
- Payment components ready to implement
- Update `.env.local` with Stripe keys
- Create checkout flow in products page

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with Next.js Image component
- CSS animations for performance (prefer transforms)
- Code splitting with Next.js App Router
- Font optimization with Google Fonts
- Responsive images with Tailwind

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Alt text for decorative elements

## SEO

- Meta tags properly configured
- Open Graph tags ready
- Twitter cards support
- Sitemap ready to be generated
- Mobile-friendly responsive design

## Customization

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  limen: {
    black: "#0A0A0A",
    white: "#FFFFFF",
    cream: "#F5F3F0",
    accent: "#YOUR_COLOR",
  }
}
```

### Adding New Patterns

Add to `globals.css`:
```css
.pattern-your-pattern {
  background-image: /* your pattern */;
}
```

### Modifying Typography

Update `tailwind.config.ts` fontSize or `globals.css` font-family variables.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically on push

### Other Platforms

- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Similar to Netlify
- **Self-hosted**: Use `npm run build` then `npm start`

## License

© 2026 Limen. All rights reserved.

## Support

For questions or issues, contact: hola@limen.com

---

**Note**: Replace all placeholder contact information, social links, and portfolio items with actual content before launching.
