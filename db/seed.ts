import 'dotenv/config';
import { db } from './index';
import {
  siteContent,
  aboutContent,
  services,
  contactInfo,
  officeLocations,
  testimonials,
  seoSettings,
  settings
} from './schema';

async function seed() {
  console.log('🌱 Starting database seeding...');

  try {
    // Insert default site content
    await db.insert(siteContent).values({
      key: 'hero_section',
      title: 'Konsultasi & Training Alat Berat',
      subtitle: 'Solusi lengkap untuk konsultasi teknis dan training alat berat',
      description: 'Tingkatkan produktivitas dan keamanan operasional dengan tim ahli kami.',
      content: 'HeavyEquip Pro adalah mitra terpercaya untuk solusi alat berat di Indonesia.',
      metadata: {
        buttonText: 'Konsultasi Gratis',
        secondaryButtonText: 'Lihat Layanan',
        stats: [
          { number: '15+', label: 'Tahun Pengalaman' },
          { number: '500+', label: 'Klien Terlayani' },
          { number: '100%', label: 'Kepuasan' }
        ]
      },
      isActive: true,
    });

    // Insert about content
    await db.insert(aboutContent).values({
      companyName: 'HeavyEquip Pro',
      tagline: 'Ahli Alat Berat Terpercaya',
      story: 'Berdiri sejak tahun 2009, HeavyEquip Pro memulai perjalanan dengan visi untuk meningkatkan standar keselamatan dan efisiensi operasional alat berat di Indonesia.',
      mission: 'Menyediakan konsultasi teknis yang akurat dan solutif, melakukan training operator yang berkualitas dan tersertifikasi, meningkatkan standar keselamatan kerja di industri alat berat, memberikan solusi manajemen pemeliharaan yang efektif.',
      vision: 'Menjadi penyedia layanan konsultasi dan training alat berat terdepan di Indonesia yang mendukung keselamatan, efisiensi, dan keberlanjutan industri konstruksi.',
      values: [
        { icon: 'Target', title: 'Fokus pada Hasil', description: 'Kami berkomitmen untuk memberikan solusi yang menghasilkan peningkatan produktivitas nyata bagi klien.' },
        { icon: 'Shield', title: 'Keselamatan Prioritas', description: 'Standar keselamatan tertinggi dalam setiap aspek konsultasi dan training alat berat.' },
        { icon: 'Users', title: 'Tim Profesional', description: 'Tim ahli dengan pengalaman lebih dari 15 tahun di industri alat berat.' },
        { icon: 'Award', title: 'Berkualitas Terbaik', description: 'Sertifikasi internasional dan standar operasional prosedur yang teruji.' }
      ],
      achievements: [
        { number: '15+', label: 'Tahun Pengalaman', description: 'Melayani industri alat berat di seluruh Indonesia' },
        { number: '500+', label: 'Klien Puas', description: 'Perusahaan kontraktor dan pertambangan ternama' },
        { number: '1000+', label: 'Operator Training', description: 'Operator alat berat tersertifikasi' },
        { number: '50+', label: 'Proyek Besar', description: 'Konsultasi untuk proyek infrastruktur nasional' }
      ],
      teamSize: 25,
      yearsExperience: 15,
      projectsCompleted: 500,
      clientsCount: 500,
      isActive: true,
    });

    // Insert services
    await db.insert(services).values([
      {
        title: 'Konsultasi Teknis',
        slug: 'konsultasi-teknis',
        category: 'consulting',
        description: 'Analisis menyeluruh untuk pemilihan, penggunaan, dan optimasi alat berat sesuai kebutuhan proyek Anda.',
        longDescription: 'Layanan konsultasi teknis kami mencakup evaluasi komprehensif kebutuhan proyek, seleksi alat berat yang tepat, analisis produktivitas, optimasi penggunaan peralatan, serta troubleshooting masalah teknis yang mungkin timbul selama operasional.',
        icon: 'Wrench',
        features: [
          'Seleksi alat berat yang tepat',
          'Analisis produktivitas',
          'Optimasi penggunaan peralatan',
          'Troubleshooting masalah teknis'
        ],
        badge: 'Populer',
        sortOrder: 1,
        isActive: true,
      },
      {
        title: 'Training Operator',
        slug: 'training-operator',
        category: 'training',
        description: 'Program pelatihan komprehensif untuk operator alat berat dengan sertifikasi nasional dan internasional.',
        longDescription: 'Program pelatihan operator kami dirancang untuk menghasilkan operator alat berat yang kompeten dan tersertifikasi, mencakup training basic dan advanced, sertifikasi operator yang diakui, safety training, serta program upgrade skill operator.',
        icon: 'GraduationCap',
        features: [
          'Training basic dan advanced',
          'Sertifikasi operator',
          'Safety training',
          'Upgrade skill operator'
        ],
        badge: 'Best Seller',
        sortOrder: 2,
        isActive: true,
      },
      {
        title: 'Manajemen Pemeliharaan',
        slug: 'manajemen-pemeliharaan',
        category: 'maintenance',
        description: 'Sistem perencanaan dan pelaksanaan maintenance yang efektif untuk memaksimalkan umur alat berat.',
        longDescription: 'Sistem manajemen pemeliharaan kami membantu Anda merencanakan dan melaksanakan maintenance yang efektif termasuk preventive maintenance planning, predictive maintenance system, spare parts management, dan maintenance schedule optimization.',
        icon: 'ClipboardCheck',
        features: [
          'Preventive maintenance planning',
          'Predictive maintenance system',
          'Spare parts management',
          'Maintenance schedule optimization'
        ],
        badge: 'Recommended',
        sortOrder: 3,
        isActive: true,
      },
      {
        title: 'Sertifikasi & Audit',
        slug: 'sertifikasi-audit',
        category: 'certification',
        description: 'Layanan sertifikasi kompetensi dan audit keselamatan operasional alat berat sesuai standar internasional.',
        longDescription: 'Layanan sertifikasi dan audit kami mencakup sertifikasi kompetensi crew, safety audit compliance, ISO certification preparation, dan regulatory compliance check untuk memastikan operasional Anda memenuhi standar internasional.',
        icon: 'Award',
        features: [
          'Sertifikasi kompetensi crew',
          'Safety audit compliance',
          'ISO certification preparation',
          'Regulatory compliance check'
        ],
        badge: 'Premium',
        sortOrder: 4,
        isActive: true,
      },
      {
        title: 'Productivity Improvement',
        slug: 'productivity-improvement',
        category: 'productivity',
        description: 'Analisis dan implementasi strategi untuk meningkatkan produktivitas dan efisiensi operasional.',
        longDescription: 'Program peningkatan produktivitas kami meliputi productivity analysis mendalam, fleet optimization untuk penggunaan alat yang optimal, cycle time reduction untuk efisiensi waktu, dan cost optimization program untuk mengurangi biaya operasional.',
        icon: 'TrendingUp',
        features: [
          'Productivity analysis',
          'Fleet optimization',
          'Cycle time reduction',
          'Cost optimization program'
        ],
        badge: 'New',
        sortOrder: 5,
        isActive: true,
      },
      {
        title: 'Project Supervision',
        slug: 'project-supervision',
        category: 'supervision',
        description: 'Tim ahli kami akan mendampingi dan mengawasi pelaksanaan proyek untuk memastikan hasil optimal.',
        longDescription: 'Layanan supervisi proyek menyediakan tim ahli yang akan mendampingi Anda langsung di lapangan, termasuk on-site supervision berkelanjutan, quality control monitoring, progress reporting teratur, dan technical support 24/7.',
        icon: 'Users',
        features: [
          'On-site supervision',
          'Quality control monitoring',
          'Progress reporting',
          'Technical support 24/7'
        ],
        badge: 'Limited',
        sortOrder: 6,
        isActive: true,
      }
    ]);

    // Insert contact info
    await db.insert(contactInfo).values([
      {
        type: 'phone',
        label: 'Telepon',
        value: '+62 812-3456-7890',
        description: 'Senin - Jumat, 08:00 - 17:00',
        sortOrder: 1,
        isActive: true,
      },
      {
        type: 'email',
        label: 'Email',
        value: 'info@heavyequip-pro.com',
        description: 'Respon dalam 24 jam',
        sortOrder: 2,
        isActive: true,
      },
      {
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '+62 812-3456-7890',
        description: 'Chat langsung untuk respon cepat',
        sortOrder: 3,
        isActive: true,
      },
      {
        type: 'support',
        label: 'Jam Operasional',
        value: '24/7 Support',
        description: 'Emergency hotline tersedia',
        sortOrder: 4,
        isActive: true,
      }
    ]);

    // Insert office locations
    await db.insert(officeLocations).values([
      {
        name: 'Jakarta Head Office',
        address: 'Jl. Sudirman No. 123, Jakarta Pusat',
        phone: '+62 21 1234-5678',
        email: 'jakarta@heavyequip-pro.com',
        isMainOffice: true,
        sortOrder: 1,
        isActive: true,
      },
      {
        name: 'Surabaya Branch',
        address: 'Jl. Ahmad Yani No. 456, Surabaya',
        phone: '+62 31 8765-4321',
        email: 'surabaya@heavyequip-pro.com',
        isMainOffice: false,
        sortOrder: 2,
        isActive: true,
      },
      {
        name: 'Balikpapan Branch',
        address: 'Jl. MT Haryono No. 789, Balikpapan',
        phone: '+62 542 1357-2468',
        email: 'balikpapan@heavyequip-pro.com',
        isMainOffice: false,
        sortOrder: 3,
        isActive: true,
      }
    ]);

    // Insert testimonials
    await db.insert(testimonials).values([
      {
        customerName: 'John Doe',
        customerTitle: 'Operations Manager',
        customerCompany: 'PT. Konstruksi Maju',
        rating: 5,
        content: 'Tim HeavyEquip Pro telah membantu meningkatkan efisiensi operasional kami hingga 40%. Sangat profesional dan berpengalaman!',
        isFeatured: true,
        sortOrder: 1,
        isActive: true,
      },
      {
        customerName: 'Budi Santoso',
        customerTitle: 'Project Director',
        customerCompany: 'PT. Tambang Sukses',
        rating: 5,
        content: 'Training operator yang diberikan sangat berkualitas dan komprehensif. Operator kami menjadi lebih terampil dan produktif.',
        isFeatured: true,
        sortOrder: 2,
        isActive: true,
      },
      {
        customerName: 'Ahmad Rahman',
        customerTitle: 'CEO',
        customerCompany: 'PT. Infrastruktur Nusantara',
        rating: 5,
        content: 'Konsultasi teknis dari HeavyEquip Pro sangat membantu dalam pemilihan alat berat yang tepat untuk proyek kami. Highly recommended!',
        isFeatured: false,
        sortOrder: 3,
        isActive: true,
      }
    ]);

    // Insert SEO settings
    await db.insert(seoSettings).values([
      {
        page: 'home',
        metaTitle: 'HeavyEquip Pro - Konsultan & Training Alat Berat Terpercaya di Indonesia',
        metaDescription: 'Solusi lengkap konsultasi teknis dan training alat berat. Tingkatkan produktivitas dan keamanan operasional dengan tim ahli berpengalaman 15+ tahun.',
        metaKeywords: 'konsultan alat berat, training alat berat, operator alat berat, heavy equipment consulting',
        ogTitle: 'HeavyEquip Pro - Konsultan & Training Alat Berat Terpercaya',
        ogDescription: 'Solusi lengkap konsultasi teknis dan training alat berat dengan pengalaman 15+ tahun di Indonesia.',
        canonicalUrl: '/',
        robotsTag: 'index, follow',
        isActive: true,
      },
      {
        page: 'about',
        metaTitle: 'Tentang HeavyEquip Pro - Ahli Konsultan Alat Berat Berpengalaman',
        metaDescription: 'Pelajari lebih lanjut tentang HeavyEquip Pro, konsultan alat berat dengan 15+ tahun pengalaman melayani industri konstruksi dan pertambangan di Indonesia.',
        canonicalUrl: '/about',
        robotsTag: 'index, follow',
        isActive: true,
      },
      {
        page: 'services',
        metaTitle: 'Layanan Konsultan & Training Alat Berat - HeavyEquip Pro',
        metaDescription: 'Layanan lengkap konsultasi teknis, training operator, manajemen pemeliharaan, sertifikasi, dan supervisi proyek alat berat terpercaya di Indonesia.',
        canonicalUrl: '/services',
        robotsTag: 'index, follow',
        isActive: true,
      },
      {
        page: 'contact',
        metaTitle: 'Hubungi HeavyEquip Pro - Konsultan Alat Berat Indonesia',
        metaDescription: 'Kontak HeavyEquip Pro untuk konsultasi gratis dan informasi lengkap tentang layanan konsultasi dan training alat berat terbaik di Indonesia.',
        canonicalUrl: '/contact',
        robotsTag: 'index, follow',
        isActive: true,
      }
    ]);

    // Insert global settings
    await db.insert(settings).values([
      {
        key: 'site_name',
        value: 'HeavyEquip Pro',
        type: 'string',
        description: 'Nama situs perusahaan',
        isPublic: true,
      },
      {
        key: 'site_tagline',
        value: 'Ahli Alat Berat Terpercaya',
        type: 'string',
        description: 'Tagline situs',
        isPublic: true,
      },
      {
        key: 'whatsapp_number',
        value: '+62 812-3456-7890',
        type: 'string',
        description: 'Nomor WhatsApp untuk kontak',
        isPublic: true,
      },
      {
        key: 'email_contact',
        value: 'info@heavyequip-pro.com',
        type: 'string',
        description: 'Email kontak utama',
        isPublic: true,
      },
      {
        key: 'phone_contact',
        value: '+62 812-3456-7890',
        type: 'string',
        description: 'Nomor telepon kontak utama',
        isPublic: true,
      },
      {
        key: 'company_address',
        value: 'Jl. Sudirman No. 123, Jakarta Pusat',
        type: 'string',
        description: 'Alamat kantor pusat',
        isPublic: true,
      },
      {
        key: 'maintenance_mode',
        value: 'false',
        type: 'boolean',
        description: 'Aktifkan mode maintenance',
        isPublic: false,
      },
      {
        key: 'enable_contact_form',
        value: 'true',
        type: 'boolean',
        description: 'Aktifkan form kontak',
        isPublic: false,
      }
    ]);

    console.log('✅ Database seeding completed successfully!');
    console.log('📊 Summary:');
    console.log('   - Site content: 1');
    console.log('   - About content: 1');
    console.log('   - Services: 6');
    console.log('   - Contact info: 4');
    console.log('   - Office locations: 3');
    console.log('   - Testimonials: 3');
    console.log('   - SEO settings: 4');
    console.log('   - Settings: 8');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log('🎉 Seeding process completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}

export default seed;