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
    "Portfolio website showcasing my skills in full-stack development, featuring projects in React, Next.js, Node.js, and modern web technologies.",
  keywords:
    "Rayhan Alsauqi, Full Stack Developer, React, Next.js, JavaScript, TypeScript, Portfolio, Web Developer",
  authors: [{ name: "Rayhan Alsauqi" }],
  creator: "Rayhan Alsauqi",
  openGraph: {
    title: "Portfolio Rayhan Alsauqi - Full Stack Developer",
    description:
      "Portfolio website showcasing my skills in full-stack development, featuring projects in React, Next.js, Node.js, and modern web technologies.",
    url: "https://portfoliorayhan.netlify.app",
    siteName: "Portfolio Rayhan Alsauqi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Rayhan Alsauqi - Full Stack Developer",
    description:
      "Portfolio website showcasing my skills in full-stack development, featuring projects in React, Next.js, Node.js, and modern web technologies.",
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
  },
  alternates: {
    canonical: "https://portfoliorayhan.netlify.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
