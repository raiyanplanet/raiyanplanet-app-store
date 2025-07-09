This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Adding New Apps to Your App Store

1. **Edit `app/apps.json`:**
   - Add a new object for each app with these fields:
     - `id`: Unique string (e.g., "3")
     - `name`: App name
     - `package`: Android package name
     - `description`: Short description
     - `version`: App version
     - `icon`: Path to icon image (e.g., `/myapp-icon.png` in `public/`)
     - `screenshots`: Array of image paths (e.g., `/myapp-1.png`)
     - `download`: Path or URL to APK/AAB file
     - `category`: App category (e.g., "Productivity", "Games")
     - `features`: Array of feature strings (e.g., ["Offline", "Dark Mode"])

2. **Place Files:**
   - Put icons, screenshots, and APKs in the `public/` folder, or use external URLs.

3. **Example Entry:**
```json
{
  "id": "3",
  "name": "My New App",
  "package": "com.example.mynewapp",
  "description": "A cool new app!",
  "version": "1.0.0",
  "icon": "/mynewapp-icon.png",
  "screenshots": ["/mynewapp-1.png"],
  "download": "/mynewapp.apk",
  "category": "Productivity",
  "features": ["Offline", "Dark Mode"]
}
```

4. **Restart the dev server** if you add new files.

## Features
- Beautiful, modern design with TailwindCSS
- Prominent header with your app store name (Planet App Store)
- Search bar to find apps by name, category, or feature
- App cards show icon, name, category, features, description, and download button
- App detail pages with screenshots, features, and a big download link
