import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ADmyBRAND AI - AI-Powered Marketing Intelligence",
    template: "%s | ADmyBRAND AI",
  },
  description:
    "Transform your marketing with AI-powered intelligence. Automate campaigns, analyze performance, and scale your brand with our comprehensive AI marketing suite. Increase ROI by 300% in just 30 days.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "campaign optimization",
    "ROI improvement",
    "digital marketing",
    "marketing intelligence",
  ],
  authors: [{ name: "ADmyBRAND AI Team" }],
  creator: "ADmyBRAND AI",
  publisher: "ADmyBRAND AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://admybrand-ai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://admybrand-ai.com",
    title: "ADmyBRAND AI - AI-Powered Marketing Intelligence",
    description:
      "Transform your marketing with AI-powered intelligence. Automate campaigns, analyze performance, and scale your brand.",
    siteName: "ADmyBRAND AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI - AI-Powered Marketing Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI - AI-Powered Marketing Intelligence",
    description:
      "Transform your marketing with AI-powered intelligence. Automate campaigns, analyze performance, and scale your brand.",
    images: ["/og-image.jpg"],
    creator: "@admybrand_ai",
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
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
