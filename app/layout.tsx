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
  title: {
    default: "Heavy Equipment Consulting & Training | Solusi Peralatan Berat Terpercaya",
    template: "%s | Heavy Equipment Consulting"
  },
  description:
    "Konsultan dan pelatih peralatan berat profesional untuk industri konstruksi dan pertambangan. Layanan konsultasi, pelatihan operator, dan maintenance alat berat bersertifikat.",
  keywords: [
    "heavy equipment consulting",
    "konsultan alat berat",
    "pelatihan operator alat berat",
    "maintenance peralatan berat",
    "excavator training",
    "bulldozer certification",
    "konstruksi alat berat",
    "pertambangan equipment",
    "heavy equipment rental",
    "operator training Indonesia"
  ],
  authors: [{ name: "Heavy Equipment Consulting Team" }],
  creator: "Heavy Equipment Consulting",
  publisher: "Heavy Equipment Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://heavyequipment.co.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://heavyequipment.co.id",
    title: "Heavy Equipment Consulting & Training | Solusi Peralatan Berat Terpercaya",
    description: "Konsultan dan pelatih peralatan berat profesional untuk industri konstruksi dan pertambangan.",
    siteName: "Heavy Equipment Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heavy Equipment Consulting - Heavy Equipment Training and Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Equipment Consulting & Training",
    description: "Konsultan dan pelatih peralatan berat profesional untuk industri konstruksi dan pertambangan.",
    images: ["/og-image.jpg"],
    creator: "@heavyequipment",
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
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${parkinsans.variable} antialiased`}
      >
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
