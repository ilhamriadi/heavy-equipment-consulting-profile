"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Award,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-orange-100/20 dark:bg-orange-900/10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300">
                🏆 Ahli Alat Berat Terpercaya
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Konsultasi & Training
                <span className="block text-orange-600 dark:text-orange-400">
                  Alat Berat
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Solusi lengkap untuk konsultasi teknis, training operator, dan manajemen peralatan berat Anda.
                Tingkatkan produktivitas dan keamanan operasional dengan tim ahli kami.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Klien Terlayani</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Kepuasan</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group"
                onClick={() => window.location.href = '#contact'}
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => window.location.href = '#services'}
              >
                Lihat Layanan
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Tersertifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Terpercaya</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Hero Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="text-6xl">🏗️</div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Heavy Equipment Consulting
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic">
                        "Tim HeavyEquip Pro telah membantu meningkatkan efisiensi operasional kami hingga 40%.
                        Sangat profesional dan berpengalaman!"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-600">JD</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">John Doe</div>
                          <div className="text-xs text-gray-500">Operations Manager</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-orange-200 dark:border-orange-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-green-200 dark:border-green-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">ISO</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}