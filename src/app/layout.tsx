
import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { FirebaseClientProvider } from '@/firebase';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Flowzonic Solutions | Web Development & Google Automation Agency',
  description: 'Transform your business with expert Web Development (Next.js, React), Google Workspace Automation (Apps Script), and high-end Graphic Design. Fast turnaround, transparent pricing.',
  keywords: ['Web Development India', 'Google Apps Script Automation', 'Graphic Design Agency', 'Next.js Developer', 'Automation Expert', 'Flowzonic Solutions'],
  authors: [{ name: 'Flowzonic Team' }],
  metadataBase: new URL('https://flowzonicsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Flowzonic Solutions | Automate, Build, Grow',
    description: 'Engineering elite digital systems and automation for modern businesses.',
    url: 'https://flowzonicsolutions.com',
    siteName: 'Flowzonic Solutions',
    images: [
      {
        url: '/header-logo.png',
        width: 1200,
        height: 630,
        alt: 'Flowzonic Solutions Branding',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowzonic Solutions | Web & Automation Experts',
    description: 'Reclaim your time with intelligent automation and high-performance web development.',
    images: ['/header-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/flowzone-icon.png',
    shortcut: '/flowzone-icon.png',
    apple: '/flowzone-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFBFF] text-[#4B5563] antialiased selection:bg-[#7B2FBE]/20 selection:text-[#7B2FBE] overflow-x-hidden min-h-screen flex flex-col">
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5QTW9ZZHC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R5QTW9ZZHC');
          `}
        </Script>

        <FirebaseClientProvider>
          <Navbar />
          {/* Main content wrapper with min-height to prevent layout shifts */}
          <div className="flex-grow flex flex-col min-h-[60vh]">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
