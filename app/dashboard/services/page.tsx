"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Wrench,
  GraduationCap,
  ClipboardCheck,
  Award,
  TrendingUp,
  Users
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  badge: string;
  isActive: boolean;
  sortOrder: number;
}

const serviceIcons = {
  consulting: Wrench,
  training: GraduationCap,
  maintenance: ClipboardCheck,
  certification: Award,
  productivity: TrendingUp,
  supervision: Users,
};

const serviceCategories = [
  { value: "consulting", label: "Konsultasi" },
  { value: "training", label: "Training" },
  { value: "maintenance", label: "Pemeliharaan" },
  { value: "certification", label: "Sertifikasi" },
  { value: "productivity", label: "Productivity" },
  { value: "supervision", label: "Supervisi" },
];

// Mock data - in real app, this would come from API
const mockServices: Service[] = [
  {
    id: "1",
    title: "Konsultasi Teknis",
    slug: "konsultasi-teknis",
    category: "consulting",
    description: "Analisis menyeluruh untuk pemilihan, penggunaan, dan optimasi alat berat",
    icon: "Wrench",
    features: ["Seleksi alat berat", "Analisis produktivitas", "Optimasi peralatan"],
    badge: "Populer",
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "2",
    title: "Training Operator",
    slug: "training-operator",
    category: "training",
    description: "Program pelatihan komprehensif untuk operator alat berat",
    icon: "GraduationCap",
    features: ["Training basic", "Sertifikasi operator", "Safety training"],
    badge: "Best Seller",
    isActive: true,
    sortOrder: 2,
  },
];

export default function ServicesManagement() {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    features: "",
    badge: "",
    isActive: true,
    sortOrder: 0,
  });

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      category: service.category,
      description: service.description,
      features: service.features.join(", "),
      badge: service.badge,
      isActive: service.isActive,
      sortOrder: service.sortOrder,
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingService(null);
    setFormData({
      title: "",
      category: "",
      description: "",
      features: "",
      badge: "",
      isActive: true,
      sortOrder: services.length + 1,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceData = {
      ...formData,
      features: formData.features.split(",").map(f => f.trim()).filter(Boolean),
      slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
      icon: serviceIcons[formData.category as keyof typeof serviceIcons]?.name || "Settings",
    };

    if (editingService) {
      setServices(services.map(s =>
        s.id === editingService.id
          ? { ...s, ...serviceData }
          : s
      ));
    } else {
      const newService = {
        id: Date.now().toString(),
        ...serviceData,
      };
      setServices([...services, newService]);
    }

    setIsDialogOpen(false);
    setEditingService(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setServices(services.map(s =>
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Services Management</h2>
          <p className="text-muted-foreground">
            Manage your service offerings and descriptions
          </p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
          <CardDescription>
            Edit and manage your service offerings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Badge</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => {
                const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Settings;
                return (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                          <IconComponent className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {service.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {serviceCategories.find(c => c.value === service.category)?.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {service.badge && (
                        <Badge variant="secondary">{service.badge}</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={service.isActive}
                        onCheckedChange={() => handleToggleActive(service.id)}
                      />
                    </TableCell>
                    <TableCell>{service.sortOrder}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(service)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(service.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {editingService ? "Edit Service" : "Add New Service"}
            </DialogTitle>
            <DialogDescription>
              {editingService
                ? "Update the service information below."
                : "Create a new service for your offerings."
              }
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Service Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Konsultasi Teknis"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the service"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="features">Features (comma-separated)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="badge">Badge (optional)</Label>
                <Input
                  id="badge"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  placeholder="e.g., Popular, Best Seller"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sortOrder">Sort Order</Label>
                <Input
                  id="sortOrder"
                  type="number"
                  value={formData.sortOrder}
                  onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) })}
                  min="0"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {editingService ? "Update Service" : "Add Service"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}