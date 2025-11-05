import type { Metadata } from "next";
import { Geist, Geist_Mono, Parkinsans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeavyEquip Pro - Konsultan & Training Alat Berat Terpercaya di Indonesia",
  description:
    "Solusi lengkap konsultasi teknis dan training alat berat. Tingkatkan produktivitas dan keamanan operasional dengan tim ahli berpengalaman 15+ tahun. Konsultasi gratis tersedia.",
  keywords: [
    "konsultan alat berat",
    "training alat berat",
    "operator alat berat",
    "heavy equipment consulting",
    "maintenance alat berat",
    "sertifikasi alat berat",
    "excavator training",
    "bulldozer training",
    "fleet management",
    "productivity improvement",
    "safety training",
    "project supervision",
    "Indonesia",
    "Jakarta",
    "Surabaya",
    "Balikpapan"
  ],
  authors: [{ name: "HeavyEquip Pro" }],
  creator: "HeavyEquip Pro",
  publisher: "HeavyEquip Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://heavyequip-pro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HeavyEquip Pro - Konsultan & Training Alat Berat Terpercaya",
    description: "Solusi lengkap konsultasi teknis dan training alat berat dengan pengalaman 15+ tahun di Indonesia.",
    url: "https://heavyequip-pro.com",
    siteName: "HeavyEquip Pro",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HeavyEquip Pro - Konsultan & Training Alat Berat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HeavyEquip Pro - Konsultan & Training Alat Berat",
    description: "Solusi lengkap konsultasi teknis dan training alat berat dengan pengalaman 15+ tahun di Indonesia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://heavyequip-pro.com",
    "name": "HeavyEquip Pro",
    "description": "Solusi lengkap konsultasi teknis dan training alat berat terpercaya di Indonesia",
    "url": "https://heavyequip-pro.com",
    "telephone": "+62 812-3456-7890",
    "email": "info@heavyequip-pro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sudirman No. 123",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.8456"
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "image": "https://heavyequip-pro.com/logo.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/heavyequip-pro",
      "https://www.facebook.com/heavyequippro"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan HeavyEquip Pro",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultasi Teknis Alat Berat",
            "description": "Analisis menyeluruh untuk pemilihan, penggunaan, dan optimasi alat berat"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Training Operator Alat Berat",
            "description": "Program pelatihan komprehensif untuk operator alat berat dengan sertifikasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manajemen Pemeliharaan",
            "description": "Sistem perencanaan dan pelaksanaan maintenance yang efektif"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
