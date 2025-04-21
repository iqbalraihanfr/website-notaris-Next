/**
 * @file page.tsx
 * @description Halaman utama website Notaris yang menampilkan informasi dan layanan utama
 * @author Iqbal Raihan Faturrahman Rahardjo
 * @created 2024
 */

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

/**
 * Data fitur-fitur utama yang ditampilkan di halaman utama
 * @type {Array<{title: string, description: string, icon: string}>}
 */
const features = [
  {
    title: "Akta Notaris",
    description: "Pembuatan dan legalisasi berbagai jenis akta notaris",
    icon: "📄",
  },
  {
    title: "Konsultasi Hukum",
    description: "Konsultasi hukum profesional untuk berbagai kebutuhan",
    icon: "⚖️",
  },
  {
    title: "Pendampingan",
    description: "Pendampingan dalam proses hukum dan bisnis",
    icon: "🤝",
  },
];

/**
 * Komponen Halaman Utama
 * @component
 * @returns {JSX.Element} Halaman utama yang telah dirender
 */
export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-notary font-serif">
                Notaris Profesional
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Melayani dengan profesional, jujur, dan terpercaya untuk semua kebutuhan hukum Anda
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/layanan">Lihat Layanan</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
