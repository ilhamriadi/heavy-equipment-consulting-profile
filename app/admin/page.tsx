"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Save,
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  Settings,
  Mail,
  MessageCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  isActive: boolean;
  sortOrder: number;
}

interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  isActive: boolean;
  sortOrder: number;
}

interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  address?: string;
  googleMapsUrl?: string;
  workingHours?: string;
}

interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  keywords?: string;
  logoUrl?: string;
  faviconUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState("");

  // Content state
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  // Form states
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "Wrench",
    imageUrl: ""
  });

  const [newGalleryItem, setNewGalleryItem] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "general"
  });

  // Check if admin is authenticated (simple check for demo)
  useEffect(() => {
    // In a real app, this would check authentication state
    // For now, we'll just load the admin page
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      // Mock data for demo - in real app, these would be API calls
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
          imageUrl: "/api/placeholder/400/300",
          isActive: true,
          sortOrder: 0
        },
        {
          id: 2,
          title: "Pelatihan Operator",
          description: "Program pelatihan bersertifikat untuk operator peralatan berat dengan standar keselamatan internasional.",
          icon: "Users",
          imageUrl: "/api/placeholder/400/300",
          isActive: true,
          sortOrder: 1
        },
        {
          id: 3,
          title: "Maintenance & Service",
          description: "Layanan perawatan dan servis peralatan berat untuk memastikan performa optimal dan umur panjang.",
          icon: "Award",
          imageUrl: "/api/placeholder/400/300",
          isActive: true,
          sortOrder: 2
        }
      ]);

      setGallery([
        {
          id: 1,
          title: "Proyek Konstruksi",
          description: "Supervisi penggunaan excavator di proyek infrastruktur",
          imageUrl: "/api/placeholder/600/400",
          category: "konstruksi",
          isActive: true,
          sortOrder: 0
        },
        {
          id: 2,
          title: "Training Session",
          description: "Pelatihan operator bulldozer sertifikasi",
          imageUrl: "/api/placeholder/600/400",
          category: "training",
          isActive: true,
          sortOrder: 1
        }
      ]);

      setContactInfo({
        email: "info@heavyequipment.co.id",
        phone: "+62 21 5555 1234",
        whatsapp: "+62 812 3456 7890",
        address: "Jl. Industri Raya No. 123, Jakarta Selatan, 12345",
        googleMapsUrl: "https://maps.google.com/?q=Jakarta",
        workingHours: "Senin - Jumat: 08:00 - 17:00, Sabtu: 08:00 - 12:00"
      });

      setSiteSettings({
        siteTitle: "Heavy Equipment Consulting & Training",
        siteDescription: "Solusi terpercaya untuk konsultasi dan pelatihan peralatan berat Anda",
        keywords: "heavy equipment, konsultasi alat berat, pelatihan operator, maintenance alat berat",
        facebookUrl: "https://facebook.com/heavyequipment",
        instagramUrl: "https://instagram.com/heavyequipment"
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error loading content:", error);
      setIsLoading(false);
    }
  };

  const saveAbout = async () => {
    setSaveMessage("Menyimpan...");
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage("Data About berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const saveContact = async () => {
    setSaveMessage("Menyimpan...");
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage("Data kontak berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const saveSiteSettings = async () => {
    setSaveMessage("Menyimpan...");
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage("Pengaturan situs berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const addService = async () => {
    try {
      const serviceToAdd = {
        ...newService,
        isActive: true,
        sortOrder: services.length
      };

      // API call would go here
      setServices([...services, { ...serviceToAdd, id: Date.now() }]);
      setNewService({ title: "", description: "", icon: "Wrench", imageUrl: "" });
      setSaveMessage("Layanan berhasil ditambahkan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const addGalleryItem = async () => {
    try {
      const itemToAdd = {
        ...newGalleryItem,
        isActive: true,
        sortOrder: gallery.length
      };

      // API call would go here
      setGallery([...gallery, { ...itemToAdd, id: Date.now() }]);
      setNewGalleryItem({ title: "", description: "", imageUrl: "", category: "general" });
      setSaveMessage("Item galeri berhasil ditambahkan!");
      setTimeout(() => setSaveMessage(""), 3000);
    } catch (error) {
      setSaveMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  const toggleServiceActive = (id: number) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, isActive: !service.isActive } : service
    ));
  };

  const toggleGalleryActive = (id: number) => {
    setGallery(gallery.map(item =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const deleteService = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus layanan ini?")) {
      setServices(services.filter(service => service.id !== id));
      setSaveMessage("Layanan berhasil dihapus!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const deleteGalleryItem = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus item galeri ini?")) {
      setGallery(gallery.filter(item => item.id !== id));
      setSaveMessage("Item galeri berhasil dihapus!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Admin Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-orange-600 hover:text-orange-700">
                <Eye className="w-5 h-5" />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {saveMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200 rounded-lg">
            {saveMessage}
          </div>
        )}

        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Layanan</TabsTrigger>
            <TabsTrigger value="gallery">Galeri</TabsTrigger>
            <TabsTrigger value="contact">Kontak</TabsTrigger>
            <TabsTrigger value="settings">Pengaturan</TabsTrigger>
            <TabsTrigger value="messages">Pesan</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kelola Konten About</CardTitle>
                <CardDescription>
                  Perbarui informasi tentang perusahaan Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="about-title">Judul</Label>
                  <Input
                    id="about-title"
                    value={aboutContent?.title || ""}
                    onChange={(e) => setAboutContent({ ...aboutContent!, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="about-description">Deskripsi</Label>
                  <Textarea
                    id="about-description"
                    rows={4}
                    value={aboutContent?.description || ""}
                    onChange={(e) => setAboutContent({ ...aboutContent!, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="about-mission">Misi</Label>
                  <Textarea
                    id="about-mission"
                    rows={3}
                    value={aboutContent?.mission || ""}
                    onChange={(e) => setAboutContent({ ...aboutContent!, mission: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="about-vision">Visi</Label>
                  <Textarea
                    id="about-vision"
                    rows={3}
                    value={aboutContent?.vision || ""}
                    onChange={(e) => setAboutContent({ ...aboutContent!, vision: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="about-history">Sejarah</Label>
                  <Textarea
                    id="about-history"
                    rows={4}
                    value={aboutContent?.history || ""}
                    onChange={(e) => setAboutContent({ ...aboutContent!, history: e.target.value })}
                  />
                </div>
                <Button onClick={saveAbout} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Perubahan
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tambah Layanan Baru</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service-title">Judul Layanan</Label>
                    <Input
                      id="service-title"
                      value={newService.title}
                      onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="service-icon">Icon</Label>
                    <select
                      id="service-icon"
                      value={newService.icon}
                      onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Wrench">Wrench</option>
                      <option value="Users">Users</option>
                      <option value="Award">Award</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="service-description">Deskripsi</Label>
                  <Textarea
                    id="service-description"
                    rows={3}
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  />
                </div>
                <Button onClick={addService}>
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Layanan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daftar Layanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={service.isActive ? "default" : "secondary"}>
                            {service.isActive ? "Aktif" : "Non-aktif"}
                          </Badge>
                          <span className="text-xs text-gray-500">Order: {service.sortOrder}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={service.isActive}
                          onCheckedChange={() => toggleServiceActive(service.id)}
                        />
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteService(service.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tambah Item Galeri Baru</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gallery-title">Judul</Label>
                    <Input
                      id="gallery-title"
                      value={newGalleryItem.title}
                      onChange={(e) => setNewGalleryItem({ ...newGalleryItem, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gallery-category">Kategori</Label>
                    <select
                      id="gallery-category"
                      value={newGalleryItem.category}
                      onChange={(e) => setNewGalleryItem({ ...newGalleryItem, category: e.target.value })}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="general">General</option>
                      <option value="konstruksi">Konstruksi</option>
                      <option value="training">Training</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="konsultasi">Konsultasi</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="gallery-description">Deskripsi</Label>
                  <Textarea
                    id="gallery-description"
                    rows={2}
                    value={newGalleryItem.description}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="gallery-image">Image URL</Label>
                  <Input
                    id="gallery-image"
                    value={newGalleryItem.imageUrl}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, imageUrl: e.target.value })}
                  />
                </div>
                <Button onClick={addGalleryItem}>
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Item
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daftar Galeri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gallery.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={item.isActive ? "default" : "secondary"}>
                            {item.isActive ? "Aktif" : "Non-aktif"}
                          </Badge>
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={item.isActive}
                            onCheckedChange={() => toggleGalleryActive(item.id)}
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteGalleryItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kelola Informasi Kontak</CardTitle>
                <CardDescription>
                  Perbarui informasi kontak yang akan ditampilkan di website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactInfo?.email || ""}
                      onChange={(e) => setContactInfo({ ...contactInfo!, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Telepon</Label>
                    <Input
                      id="contact-phone"
                      value={contactInfo?.phone || ""}
                      onChange={(e) => setContactInfo({ ...contactInfo!, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                    <Input
                      id="contact-whatsapp"
                      value={contactInfo?.whatsapp || ""}
                      onChange={(e) => setContactInfo({ ...contactInfo!, whatsapp: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-hours">Jam Kerja</Label>
                    <Input
                      id="contact-hours"
                      value={contactInfo?.workingHours || ""}
                      onChange={(e) => setContactInfo({ ...contactInfo!, workingHours: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-address">Alamat</Label>
                  <Textarea
                    id="contact-address"
                    rows={3}
                    value={contactInfo?.address || ""}
                    onChange={(e) => setContactInfo({ ...contactInfo!, address: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-maps">Google Maps URL</Label>
                  <Input
                    id="contact-maps"
                    value={contactInfo?.googleMapsUrl || ""}
                    onChange={(e) => setContactInfo({ ...contactInfo!, googleMapsUrl: e.target.value })}
                  />
                </div>
                <Button onClick={saveContact} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Kontak
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Situs</CardTitle>
                <CardDescription>
                  Kelola pengaturan umum dan SEO situs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="site-title">Judul Situs</Label>
                  <Input
                    id="site-title"
                    value={siteSettings?.siteTitle || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings!, siteTitle: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="site-description">Deskripsi Situs</Label>
                  <Textarea
                    id="site-description"
                    rows={3}
                    value={siteSettings?.siteDescription || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings!, siteDescription: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="site-keywords">Keywords (SEO)</Label>
                  <Input
                    id="site-keywords"
                    value={siteSettings?.keywords || ""}
                    onChange={(e) => setSiteSettings({ ...siteSettings!, keywords: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="site-facebook">Facebook URL</Label>
                    <Input
                      id="site-facebook"
                      value={siteSettings?.facebookUrl || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings!, facebookUrl: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="site-instagram">Instagram URL</Label>
                    <Input
                      id="site-instagram"
                      value={siteSettings?.instagramUrl || ""}
                      onChange={(e) => setSiteSettings({ ...siteSettings!, instagramUrl: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={saveSiteSettings} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Pengaturan
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pesan Masuk</CardTitle>
                <CardDescription>
                  Daftar pesan dari formulir kontak
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Belum ada pesan baru</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pesan dari formulir kontak akan muncul di sini
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}