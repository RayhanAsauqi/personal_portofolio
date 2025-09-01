import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Rayhan Alsauqi - Full Stack Developer",
  description:
    "Portfolio website of Rayhan Alsauqi, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects and experience.",
  keywords:
    "Rayhan Alsauqi, Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Developer, Portfolio",
  authors: [{ name: "Rayhan Alsauqi" }],
  creator: "Rayhan Alsauqi",
  publisher: "Rayhan Alsauqi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.portfoliorayhan.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio Rayhan Alsauqi - Full Stack Developer",
    description:
      "Portfolio website of Rayhan Alsauqi, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://www.portfoliorayhan.netlify.app",
    siteName: "Portfolio Rayhan Alsauqi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Rayhan Alsauqi - Full Stack Developer",
    description:
      "Portfolio website of Rayhan Alsauqi, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
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
    google: "G-Z3HLVXZFF5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3HLVXZFF5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z3HLVXZFF5');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
