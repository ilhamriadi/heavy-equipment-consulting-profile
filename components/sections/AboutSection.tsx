"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Shield,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  Globe
} from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Target className="h-6 w-6 text-orange-600" />,
      title: "Fokus pada Hasil",
      description: "Kami berkomitmen untuk memberikan solusi yang menghasilkan peningkatan produktivitas nyata bagi klien."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Keselamatan Prioritas",
      description: "Standar keselamatan tertinggi dalam setiap aspek konsultasi dan training alat berat."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Tim Profesional",
      description: "Tim ahli dengan pengalaman lebih dari 15 tahun di industri alat berat."
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Berkualitas Terbaik",
      description: "Sertifikasi internasional dan standar operasional prosedur yang teruji."
    }
  ];

  const achievements = [
    {
      number: "15+",
      label: "Tahun Pengalaman",
      description: "Melayani industri alat berat di seluruh Indonesia"
    },
    {
      number: "500+",
      label: "Klien Puas",
      description: "Perusahaan kontraktor dan pertambangan ternama"
    },
    {
      number: "1000+",
      label: "Operator Training",
      description: "Operator alat berat tersertifikasi"
    },
    {
      number: "50+",
      label: "Proyek Besar",
      description: "Konsultasi untuk proyek infrastruktur nasional"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ahli dalam Solusi
            <span className="block text-orange-600 dark:text-orange-400">
              Alat Berat
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HeavyEquip Pro telah menjadi mitra terpercaya untuk perusahaan kontraktor, pertambangan,
            dan konstruksi dalam menyediakan konsultasi teknis dan training alat berat yang komprehensif.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Perjalanan Kami
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Berdiri sejak tahun 2009, HeavyEquip Pro memulai perjalanan dengan visi untuk
                meningkatkan standar keselamatan dan efisiensi operasional alat berat di Indonesia.
              </p>
              <p>
                Dengan tim ahli yang berpengalaman dalam berbagai merek dan jenis alat berat,
                kami telah membantu ratusan perusahaan dalam mengoptimalkan penggunaan peralatan
                mereka dan mengurangi biaya operasional.
              </p>
              <p>
                Kami terus berinovasi dan mengikuti perkembangan teknologi terkini untuk
                memberikan solusi yang terbaik dan relevan dengan kebutuhan industri saat ini.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">Coverage</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Indonesia</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Seluruh Pulau</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Response</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24 Jam</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ready Service</div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Target className="h-6 w-6" />
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Menjadi penyedia layanan konsultasi dan training alat berat terdepan di Indonesia
                  yang mendukung keselamatan, efisiensi, dan keberlanjutan industri konstruksi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <TrendingUp className="h-6 w-6" />
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Menyediakan konsultasi teknis yang akurat dan solutif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Melakukan training operator yang berkualitas dan tersertifikasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Meningkatkan standar keselamatan kerja di industri alat berat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Memberikan solusi manajemen pemeliharaan yang efektif</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Nilai-Nilai Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Pencapaian Kami
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {achievement.number}
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {achievement.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}