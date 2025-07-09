import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Planet App Store",
  description: "A beautiful app store for your Android apps, inspired by Google Play Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-sans`}
        style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
