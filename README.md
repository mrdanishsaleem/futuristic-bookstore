# Cyberpunk Bookstore - 2050 Edition

A futuristic, production-ready static bookstore website built with Next.js 16 and cutting-edge 3D web technologies.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

4. **Deploy to Vercel**
   - Push to GitHub
   - Import project in Vercel
   - Deploy! (No environment variables needed)

## 🎨 Features

- **Futuristic UI**: Dark mode, neon glows, glassmorphism, 3D effects
- **Static Site**: No database required - all data is static
- **Smart Shopping**: Advanced filters, search, persistent cart (localStorage)
- **Production Ready**: SEO optimized, image optimization, mobile responsive
- **42 Books**: Pre-loaded with diverse genres and realistic data

## 📁 Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/             # Utilities and static data
│   └── data/        # Static books data
└── public/          # Static assets
```

## 🛠 Tech Stack

- Next.js 16.0.5 (App Router)
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- TypeScript
- Zustand (for cart state)

## 📝 Notes

- Cart is persisted in localStorage
- Forms show success messages (no actual submission)
- All book data is static in `lib/data/books.ts`
- Ready to deploy as a static site

## 📝 License

MIT

