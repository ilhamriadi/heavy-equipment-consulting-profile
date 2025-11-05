"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Play,
  Image as ImageIcon,
  Video,
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "Semua", count: 24 },
    { id: "projects", name: "Proyek", count: 8 },
    { id: "training", name: "Training", count: 6 },
    { id: "equipment", name: "Peralatan", count: 6 },
    { id: "team", name: "Tim", count: 4 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "projects",
      title: "Proyek Konstruksi Jalan Tol",
      description: "Supervisi alat berat untuk proyek jalan tol Trans Jawa",
      type: "image",
      thumbnail: "🏗️"
    },
    {
      id: 2,
      category: "training",
      title: "Training Operator Excavator",
      description: "Pelatihan operator excavator tingkat advanced",
      type: "image",
      thumbnail: "👷"
    },
    {
      id: 3,
      category: "equipment",
      title: "Fleet Management System",
      description: "Implementasi sistem manajemen armada terintegrasi",
      type: "image",
      thumbnail: "🚜"
    },
    {
      id: 4,
      category: "team",
      title: "Tim Konsultan Profesional",
      description: "Tim ahli HeavyEquip Pro dalam rapat koordinasi",
      type: "image",
      thumbnail: "👥"
    },
    {
      id: 5,
      category: "projects",
      title: "Proyek Pertambangan",
      description: "Konsultasi teknis untuk operasional pertambangan",
      type: "image",
      thumbnail: "⛏️"
    },
    {
      id: 6,
      category: "training",
      title: "Sertifikasi Safety",
      description: "Program sertifikasi keselamatan kerja alat berat",
      type: "image",
      thumbnail: "🛡️"
    },
    {
      id: 7,
      category: "equipment",
      title: "Maintenance Planning",
      description: "Perencanaan maintenance preventif untuk armada",
      type: "image",
      thumbnail: "🔧"
    },
    {
      id: 8,
      category: "projects",
      title: "Proyek Bendungan",
      description: "Supervisi khusus untuk proyek konstruksi bendungan",
      type: "image",
      thumbnail: "🌊"
    },
    {
      id: 9,
      category: "training",
      title: "Training Bulldozer",
      description: "Pelatihan khusus operator bulldozer untuk konstruksi",
      type: "video",
      thumbnail: "📹"
    },
    {
      id: 10,
      category: "team",
      title: "Workshop Client",
      description: "Workshop optimasi produktivitas alat berat",
      type: "image",
      thumbnail: "📚"
    },
    {
      id: 11,
      category: "equipment",
      title: "GPS Tracking System",
      description: "Instalasi sistem pelacakan GPS untuk fleet management",
      type: "image",
      thumbnail: "📡"
    },
    {
      id: 12,
      category: "projects",
      title: "Proyek Pelabuhan",
      description: "Konsultasi untuk penggunaan alat berat di pelabuhan",
      type: "image",
      thumbnail: "⚓"
    }
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const openImageModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300">
            Galeri Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Dokumentasi
            <span className="block text-orange-600 dark:text-orange-400">
              Proyek & Layanan
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lihat berbagai proyek yang telah kami kerjakan dan dokumentasi kegiatan
            training serta konsultasi yang kami laksanakan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`px-6 py-2 ${
                filter === category.id
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setFilter(category.id)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => openImageModal(item.id)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 overflow-hidden">
                {/* Thumbnail/Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {item.thumbnail}
                </div>

                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <Badge className={`${
                    item.type === 'video'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {item.type === 'video' ? (
                      <Video className="h-3 w-3 mr-1" />
                    ) : (
                      <ImageIcon className="h-3 w-3 mr-1" />
                    )}
                    {item.type === 'video' ? 'Video' : 'Gambar'}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            <Download className="h-4 w-4 mr-2" />
            Download Portfolio Lengkap
          </Button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </Button>

              {/* Modal Content */}
              <Card className="bg-white dark:bg-gray-800 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">
                      {galleryItems.find(item => item.id === selectedImage)?.thumbnail}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Preview gambar/video
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {galleryItems.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {galleryItems.find(item => item.id === selectedImage)?.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Fullscreen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Proyek Selesai
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                1000+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Training Session
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Klien Puas
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                15+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}