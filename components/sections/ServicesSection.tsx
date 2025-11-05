"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  GraduationCap,
  ClipboardCheck,
  Award,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      title: "Konsultasi Teknis",
      description: "Analisis menyeluruh untuk pemilihan, penggunaan, dan optimasi alat berat sesuai kebutuhan proyek Anda.",
      features: [
        "Seleksi alat berat yang tepat",
        "Analisis produktivitas",
        "Optimasi penggunaan peralatan",
        "Troubleshooting masalah teknis"
      ],
      badge: "Populer",
      color: "orange"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Training Operator",
      description: "Program pelatihan komprehensif untuk operator alat berat dengan sertifikasi nasional dan internasional.",
      features: [
        "Training basic dan advanced",
        "Sertifikasi operator",
        "Safety training",
        "Upgrade skill operator"
      ],
      badge: "Best Seller",
      color: "blue"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-green-600" />,
      title: "Manajemen Pemeliharaan",
      description: "Sistem perencanaan dan pelaksanaan maintenance yang efektif untuk memaksimalkan umur alat berat.",
      features: [
        "Preventive maintenance planning",
        "Predictive maintenance system",
        "Spare parts management",
        "Maintenance schedule optimization"
      ],
      badge: "Recommended",
      color: "green"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Sertifikasi & Audit",
      description: "Layanan sertifikasi kompetensi dan audit keselamatan operasional alat berat sesuai standar internasional.",
      features: [
        "Sertifikasi kompetensi crew",
        "Safety audit compliance",
        "ISO certification preparation",
        "Regulatory compliance check"
      ],
      badge: "Premium",
      color: "purple"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: "Productivity Improvement",
      description: "Analisis dan implementasi strategi untuk meningkatkan produktivitas dan efisiensi operasional.",
      features: [
        "Productivity analysis",
        "Fleet optimization",
        "Cycle time reduction",
        "Cost optimization program"
      ],
      badge: "New",
      color: "red"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Project Supervision",
      description: "Tim ahli kami akan mendampingi dan mengawasi pelaksanaan proyek untuk memastikan hasil optimal.",
      features: [
        "On-site supervision",
        "Quality control monitoring",
        "Progress reporting",
        "Technical support 24/7"
      ],
      badge: "Limited",
      color: "teal"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Safety First",
      description: "Standar keselamatan tertinggi dalam setiap layanan"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "Certified Experts",
      description: "Tim profesional dengan sertifikasi internasional"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Proven Results",
      description: "Terbukti meningkatkan efisiensi hingga 40%"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "24/7 Support",
      description: "Dukungan teknis selama 24 jam setiap hari"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Solusi Lengkap untuk
            <span className="block text-orange-600 dark:text-orange-400">
              Kebutuhan Alat Berat Anda
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan konsultasi dan training yang komprehensif
            untuk mendukung kesuksesan proyek dan operasional perusahaan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              {/* Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <Badge className={`bg-${service.color}-100 text-${service.color}-800 hover:bg-${service.color}-200 dark:bg-${service.color}-900/30 dark:text-${service.color}-300`}>
                  {service.badge}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-6"
                  onClick={() => window.location.href = '#contact'}
                >
                  Konsultasi Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Memilih HeavyEquip Pro?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami memberikan nilai tambah yang nyata untuk bisnis Anda dengan layanan
              berkualitas tinggi dan hasil yang terbukti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8"
              onClick={() => window.location.href = '#contact'}
            >
              Dapatkan Penawaran Terbaik
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              Konsultasi gratis untuk layanan pilihan Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}