import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Khand } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const khandFont=Khand({
  variable:"--khand-mr",
  subsets:["devanagari"],
  weight:"400"
});

const InterFont=Inter({
  variable:"--Inter-serif",
  subsets:["latin"],
  weight:"400"
})

export const metadata: Metadata = {
  title: "Home | Nashik City Police",
  description: "Nashik City Police",
  icons: {
    icon: '/assets/PoliceLogo.svg',
    shortcut: '/assets/PoliceLogo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${khandFont.variable} antialiased`}
         cz-shortcut-listen="true"
      >
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
