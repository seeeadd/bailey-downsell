# Bailey Downsell Page - Working Website

This is a fully functional Next.js website showcasing the Bailey downsell page design.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

The production build will be optimized and ready to deploy.

## 📁 Project Structure

```
bailey-downsell/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main page component
│   └── globals.css              # Global styles & Tailwind imports
├── components/
│   └── downsell-page.tsx        # Main downsell component
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── CREATIVE-STRATEGY.md         # Design psychology documentation
└── README-WEBSITE.md            # This file
```

## 🎨 Features

- **Fully responsive design** - Works on mobile, tablet, and desktop
- **Optimized performance** - Static generation for blazing fast loads
- **Type-safe** - Full TypeScript support
- **Tailwind CSS** - Utility-first styling with custom Bailey brand colors
- **SEO optimized** - Proper meta tags and semantic HTML

## 🎯 Key Pages

- `/` - Main downsell page (Step 2 of 2 offer page)

## 🛠 Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Brand Colors

The Tailwind config includes custom Bailey brand colors:

```js
'bailey-cream': '#FAF7F4',
'bailey-pink': '#F4C7C3',
'bailey-pink-dark': '#E8B5B0',
'bailey-teal': '#9DB4A8',
'bailey-teal-dark': '#4A7C72',
'bailey-brown': '#5D4037',
'bailey-brown-light': '#8D6E63',
```

Use them in your components with Tailwind classes like:
- `bg-bailey-cream`
- `text-bailey-pink`
- `border-bailey-teal`

### Modifying Content

Edit `/components/downsell-page.tsx` to change:
- Copy/headlines
- Vault item descriptions
- Pricing
- CTAs
- FAQ questions

## 📝 Notes

- The design uses system fonts (no Google Fonts) for offline capability
- All colors and spacing follow the brand guidelines from CREATIVE-STRATEGY.md
- The component includes extensive psychology comments explaining design decisions

## 🚢 Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended) - Zero configuration
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

Just push to GitHub and connect your hosting provider!

## 📚 Documentation

See `CREATIVE-STRATEGY.md` for:
- Full creative concept explanation
- Conversion psychology breakdown
- Design decision justifications
- Mobile-first strategy
- Brand continuity details

## ⚡ Performance

The built site is:
- ✅ Static generated (fast)
- ✅ Optimized images and fonts
- ✅ Minimal JavaScript (87.4 KB first load)
- ✅ Responsive and accessible

## 🤝 Contributing

To make changes:
1. Create a new branch
2. Make your edits
3. Test with `npm run build`
4. Submit a pull request

---

**Built with Next.js 14, React 18, TypeScript, and Tailwind CSS**
