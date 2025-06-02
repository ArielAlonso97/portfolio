import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/context/LanguageContext";
import AlertProvider from "@/context/AlertContext";
import "keen-slider/keen-slider.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domainurl = "https://portfolio-hazel-zeta-80.vercel.app";

export const metadata: Metadata = {
  title: "Ariel Dev | Portafolio",
  description:
    "Soy Ariel, desarrollador frontend especializado en React y .NET. Mira mis proyectos y habilidades.",
  keywords: [
    "desarrollador",
    "frontend",
    "React",
    ".NET",
    "portafolio",
    "Ariel",
  ],
  authors: [{ name: "Ariel", url: domainurl }],
  creator: "Ariel",
  metadataBase: new URL(domainurl),
  openGraph: {
    title: "Ariel Dev | Portafolio",
    description:
      "Explora mis proyectos y habilidades como desarrollador frontend.",
    url: domainurl,
    siteName: "Ariel Dev",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo de Ariel Dev",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariel Dev | Portafolio",
    description:
      "Soy Ariel, desarrollador frontend. Mira mis proyectos en React y .NET.",
    images: ["/logo.png"],
    creator: "@tuTwitter", // opcional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AlertProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
