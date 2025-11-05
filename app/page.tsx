"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Wrench,
  Users,
  Award,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

interface AboutContent {
  title: string;
  description: string;
  mission?: string;
  vision?: string;
  history?: string;
  imageUrl?: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  address?: string;
  workingHours?: string;
}

interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  logoUrl?: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Content state
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  // Load content from API
  useEffect(() => {
    const loadContent = async () => {
      try {
        // In a real app with database, these would be actual API calls
        // For now, we'll use mock data
        setAboutContent({
          title: "Tentang Heavy Equipment Consulting",
          description: "Kami adalah konsultan dan pelatih peralatan berat terkemuka yang berdedikasi untuk memberikan layanan terbaik kepada industri konstruksi dan pertambangan.",
          mission: "Menjadi mitra terpercaya dalam mengoptimalkan penggunaan peralatan berat untuk kesuksesan proyek Anda.",
          vision: "Menjadi leader dalam solusi konsultasi dan pelatihan peralatan berat di Indonesia.",
          history: "Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan perusahaan meningkatkan efisiensi dan produktivitas operasional mereka."
        });

        setServices([
          {
            id: 1,
            title: "Konsultasi Peralatan",
            description: "Layanan konsultasi profesional untuk pemilihan dan penggunaan peralatan berat yang tepat untuk proyek Anda.",
            icon: "Wrench",
            imageUrl: "/api/placeholder/400/300"
          },
          {
            id: 2,
            title: "Pelatihan Operator",
            description: "Program pelatihan bersertifikat untuk operator peralatan berat dengan standar keselamatan internasional.",
            icon: "Users",
            imageUrl: "/api/placeholder/400/300"
          },
          {
            id: 3,
            title: "Maintenance & Service",
            description: "Layanan perawatan dan servis peralatan berat untuk memastikan performa optimal dan umur panjang.",
            icon: "Award",
            imageUrl: "/api/placeholder/400/300"
          }
        ]);

        setGallery([
          {
            id: 1,
            title: "Proyek Konstruksi",
            description: "Supervisi penggunaan excavator di proyek infrastruktur",
            imageUrl: "/api/placeholder/600/400",
            category: "konstruksi"
          },
          {
            id: 2,
            title: "Training Session",
            description: "Pelatihan operator bulldozer sertifikasi",
            imageUrl: "/api/placeholder/600/400",
            category: "training"
          },
          {
            id: 3,
            title: "Maintenance Heavy Equipment",
            description: "Perawatan rutin unit crane dan alat berat",
            imageUrl: "/api/placeholder/600/400",
            category: "maintenance"
          },
          {
            id: 4,
            title: "Project Consultation",
            description: "Konsultasi pemilihan alat berat untuk pertambangan",
            imageUrl: "/api/placeholder/600/400",
            category: "konsultasi"
          }
        ]);

        setContactInfo({
          email: "info@heavyequipment.co.id",
          phone: "+62 21 5555 1234",
          whatsapp: "+62 812 3456 7890",
          address: "Jl. Industri Raya No. 123, Jakarta Selatan, 12345",
          workingHours: "Senin - Jumat: 08:00 - 17:00, Sabtu: 08:00 - 12:00"
        });

        setSiteSettings({
          siteTitle: "Heavy Equipment Consulting & Training",
          siteDescription: "Solusi terpercaya untuk konsultasi dan pelatihan peralatan berat Anda"
        });
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    loadContent();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench": return <Wrench className="w-8 h-8" />;
      case "Users": return <Users className="w-8 h-8" />;
      case "Award": return <Award className="w-8 h-8" />;
      default: return <Wrench className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">{siteSettings?.siteTitle || "Heavy Equipment Consulting"}</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="hover:text-orange-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection("about")} className="hover:text-orange-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection("services")} className="hover:text-orange-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection("gallery")} className="hover:text-orange-600 transition-colors">Galeri</button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-orange-600 transition-colors">Kontak</button>
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection("home")} className="text-left hover:text-orange-600 transition-colors">Beranda</button>
                <button onClick={() => scrollToSection("about")} className="text-left hover:text-orange-600 transition-colors">Tentang</button>
                <button onClick={() => scrollToSection("services")} className="text-left hover:text-orange-600 transition-colors">Layanan</button>
                <button onClick={() => scrollToSection("gallery")} className="text-left hover:text-orange-600 transition-colors">Galeri</button>
                <button onClick={() => scrollToSection("contact")} className="text-left hover:text-orange-600 transition-colors">Kontak</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Konsultan & Pelatih
                <span className="text-orange-600"> Peralatan Berat</span>
                Profesional
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Solusi terpercaya untuk konsultasi, pelatihan, dan maintenance peralatan berat industri konstruksi dan pertambangan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("services")}
                >
                  Lihat Layanan
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">🚜</div>
                <h3 className="text-2xl font-bold mb-2">Expert Since 2014</h3>
                <p className="mb-4">Lebih dari 10 tahun pengalaman dalam industri peralatan berat</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Klien Puas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm">Proyek Selesai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {aboutContent?.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-6xl">🏗️</div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    Misi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{aboutContent?.mission}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    Visi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{aboutContent?.vision}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    Sejarah Kami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{aboutContent?.history}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan peralatan berat industri Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                    <div className="text-orange-600 dark:text-orange-400">
                      {getIcon(service.icon || "Wrench")}
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Galeri Proyek
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dokumentasi proyek dan kegiatan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    🏗️
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center px-4">
                      {item.description}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Siap membantu kebutuhan peralatan berat Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo?.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <span>{contactInfo.email}</span>
                    </div>
                  )}
                  {contactInfo?.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <span>{contactInfo.phone}</span>
                    </div>
                  )}
                  {contactInfo?.address && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span>{contactInfo.address}</span>
                    </div>
                  )}
                  {contactInfo?.workingHours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span>{contactInfo.workingHours}</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h3 className="font-semibold text-green-900 dark:text-green-100">
                      WhatsApp Consultation
                    </h3>
                  </div>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    Dapatkan konsultasi gratis melalui WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${contactInfo?.whatsapp?.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat via WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    submitMessage.includes("terkirim")
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200"
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${contactInfo?.whatsapp?.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">
                  {siteSettings?.siteTitle || "Heavy Equipment Consulting"}
                </span>
              </div>
              <p className="text-gray-400">
                Solusi terpercaya untuk konsultasi dan pelatihan peralatan berat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Konsultasi Peralatan</li>
                <li>Pelatihan Operator</li>
                <li>Maintenance & Service</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Proyek</li>
                <li>Karir</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{contactInfo?.email}</li>
                <li>{contactInfo?.phone}</li>
                <li>{contactInfo?.address}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Heavy Equipment Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}