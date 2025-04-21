import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ConsultationProvider } from '../context/ConsultationContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// This is the root layout that includes Navbar and Footer
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsultationProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ConsultationProvider>
      </body>
    </html>
  );
}

// This is a component that can be imported by pages
// It doesn't include Navbar and Footer since they're already in the root layout
export function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

