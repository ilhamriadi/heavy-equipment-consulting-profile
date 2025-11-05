"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Save,
  Eye,
  FileText,
  Building,
  Star,
  Settings
} from "lucide-react";

export default function ContentManagement() {
  const [heroContent, setHeroContent] = useState({
    title: "Konsultasi & Training Alat Berat",
    subtitle: "Solusi lengkap untuk konsultasi teknis dan training alat berat",
    description: "Tingkatkan produktivitas dan keamanan operasional dengan tim ahli kami.",
    buttonText: "Konsultasi Gratis",
    secondaryButtonText: "Lihat Layanan",
  });

  const [aboutContent, setAboutContent] = useState({
    companyName: "HeavyEquip Pro",
    tagline: "Ahli Alat Berat Terpercaya",
    story: "Berdiri sejak tahun 2009, HeavyEquip Pro memulai perjalanan dengan visi untuk meningkatkan standar keselamatan dan efisiensi operasional alat berat di Indonesia.",
    mission: "Menyediakan konsultasi teknis yang akurat dan solutif untuk mendukung kesuksesan proyek Anda.",
    vision: "Menjadi penyedia layanan konsultasi dan training alat berat terdepan di Indonesia.",
  });

  const [contactInfo, setContactInfo] = useState({
    phone: "+62 812-3456-7890",
    email: "info@heavyequip-pro.com",
    whatsapp: "+62 812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "HeavyEquip Pro - Konsultan & Training Alat Berat Terpercaya",
    metaDescription: "Solusi lengkap konsultasi teknis dan training alat berat. Tingkatkan produktivitas dan keamanan operasional dengan tim ahli berpengalaman 15+ tahun.",
    metaKeywords: "konsultan alat berat, training alat berat, operator alat berat",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (section: string) => {
    setIsSaving(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSaving(false);
    // Show success message
    alert(`${section} content saved successfully!`);
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">
            Manage your website content and SEO settings
          </p>
        </div>
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Preview Site
        </Button>
      </div>

      <Tabs defaultValue="hero" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hero" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Hero Section
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            About
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            Contact Info
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            SEO Settings
          </TabsTrigger>
        </TabsList>

        {/* Hero Section Content */}
        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Content</CardTitle>
              <CardDescription>
                Update the main hero section content displayed on your homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="heroTitle">Main Title</Label>
                  <Input
                    id="heroTitle"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                    placeholder="Main hero title"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="heroSubtitle">Subtitle</Label>
                  <Input
                    id="heroSubtitle"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                    placeholder="Hero subtitle"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="heroDescription">Description</Label>
                  <Textarea
                    id="heroDescription"
                    value={heroContent.description}
                    onChange={(e) => setHeroContent({ ...heroContent, description: e.target.value })}
                    placeholder="Hero description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="heroButtonText">Primary Button Text</Label>
                    <Input
                      id="heroButtonText"
                      value={heroContent.buttonText}
                      onChange={(e) => setHeroContent({ ...heroContent, buttonText: e.target.value })}
                      placeholder="Primary button text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="heroSecondaryButtonText">Secondary Button Text</Label>
                    <Input
                      id="heroSecondaryButtonText"
                      value={heroContent.secondaryButtonText}
                      onChange={(e) => setHeroContent({ ...heroContent, secondaryButtonText: e.target.value })}
                      placeholder="Secondary button text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("Hero")} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Hero Content"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* About Section Content */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About Section Content</CardTitle>
              <CardDescription>
                Update your company information, story, mission, and vision
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={aboutContent.companyName}
                      onChange={(e) => setAboutContent({ ...aboutContent, companyName: e.target.value })}
                      placeholder="Company name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={aboutContent.tagline}
                      onChange={(e) => setAboutContent({ ...aboutContent, tagline: e.target.value })}
                      placeholder="Company tagline"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="story">Company Story</Label>
                  <Textarea
                    id="story"
                    value={aboutContent.story}
                    onChange={(e) => setAboutContent({ ...aboutContent, story: e.target.value })}
                    placeholder="Your company story"
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="mission">Mission</Label>
                    <Textarea
                      id="mission"
                      value={aboutContent.mission}
                      onChange={(e) => setAboutContent({ ...aboutContent, mission: e.target.value })}
                      placeholder="Company mission"
                      rows={3}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="vision">Vision</Label>
                    <Textarea
                      id="vision"
                      value={aboutContent.vision}
                      onChange={(e) => setAboutContent({ ...aboutContent, vision: e.target.value })}
                      placeholder="Company vision"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("About")} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save About Content"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Info */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your company contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder="info@company.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    value={contactInfo.whatsapp}
                    onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Office Address</Label>
                  <Textarea
                    id="address"
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                    placeholder="Your office address"
                    rows={2}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("Contact")} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save Contact Info"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Configure SEO metadata for better search engine visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    value={seoSettings.metaTitle}
                    onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
                    placeholder="SEO meta title"
                  />
                  <p className="text-sm text-muted-foreground">
                    Recommended: 50-60 characters
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={seoSettings.metaDescription}
                    onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
                    placeholder="SEO meta description"
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    Recommended: 150-160 characters
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="metaKeywords">Meta Keywords</Label>
                  <Input
                    id="metaKeywords"
                    value={seoSettings.metaKeywords}
                    onChange={(e) => setSeoSettings({ ...seoSettings, metaKeywords: e.target.value })}
                    placeholder="keyword1, keyword2, keyword3"
                  />
                  <p className="text-sm text-muted-foreground">
                    Separate keywords with commas
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("SEO")} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? "Saving..." : "Save SEO Settings"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}