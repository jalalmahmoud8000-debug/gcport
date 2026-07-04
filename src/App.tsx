import React, { useState, useEffect } from 'react';
import { Globe, Droplets, ShieldCheck, Factory, Award, ArrowRight, ArrowLeft, Sparkles, Target, Lightbulb, Heart, TrendingUp, Coins, MapPin, Truck, Briefcase, ShoppingCart, MonitorSmartphone, Scale, Layers, Tag, PackageCheck, AlertCircle, Leaf, FileText, Smartphone, Megaphone, Presentation, Star, FileCheck, FlaskConical, Gift, Table, Calendar, Milestone } from 'lucide-react';
import { motion } from 'motion/react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vxedsjxzpekozeyhwbgg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZWRzanh6cGVrb3pleWh3YmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxNzE4NTEsImV4cCI6MjA5ODc0Nzg1MX0.IUBTga3l0L-diSKRW45-m5O_a6Z6JHVjVwKlSKcyrwU';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      contact: "Contact"
    },
    hero: {
      subtitle: "Professional Cleaning & Care Products",
      title: "GOLD CLEAN",
      cta: "Explore Our Profile"
    },
    executiveSummary: {
      title: "Executive Summary",
      paragraphs: [
        "GOLD CLEAN is a European–Saudi manufacturer of professional cleaning and care products, founded in 2017. The company operates factories in two locations – Egypt’s Second Industrial Zone (Fayoum) and Benghazi, Libya – and focuses on high-quality formulations for both household and commercial cleaning applications.",
        "Its flagship offering is a multi-purpose stain-removing cleaner, and the product portfolio includes floor cleaners, air fresheners, fabric softeners, disinfectants, car care products, and specialized fragrances for gyms and hotels.",
        "GOLD CLEAN holds ISO 9001 certification for quality management and adheres to Good Manufacturing Practices (GMP) to ensure product safety and consistency. The company exports to major markets including Saudi Arabia, Libya, and several countries in Europe.",
        "This profile provides an overview of GOLD CLEAN’s facts, products, certifications, strategy and market positioning in both English and Arabic."
      ],
      features: [
        { icon: Factory, title: "Dual Manufacturing", desc: "Factories in Egypt & Libya" },
        { icon: Award, title: "ISO 9001 Certified", desc: "Quality management systems" },
        { icon: ShieldCheck, title: "GMP Standards", desc: "Good Manufacturing Practices" },
        { icon: Droplets, title: "Diverse Portfolio", desc: "Household & commercial solutions" },
      ]
    },
    companyFacts: {
      title: "Company Facts",
      facts: [
        { label: "Name", value: "GOLD CLEAN" },
        { label: "Founded", value: "2017" },
        { label: "Corporate Identity", value: "European–Saudi" },
        { label: "Factories", value: "Egypt*: Second Industrial Zone, Fayoum\nLibya*: Benghazi" },
        { label: "Key Markets", value: "Egypt (domestic) | Saudi Arabia | Libya | Europe*" },
        { label: "Quality Certifications", value: "ISO 9001 (Quality Management); GMP compliance (Good Manufacturing Practices)" },
        { label: "Major Partners", value: "Distributors and retail chains in KSA, and commercial accounts (hotels, malls, gyms)" }
      ]
    },
    products: {
      title: "Products & Services",
      description: "GOLD CLEAN offers a comprehensive range of cleaning and care products for both household and professional use. Our most prominent flagship product is the Floor Freshener. Other product lines include:",
      lines: [
        "Floor Freshener: Our most important and prominent product, featuring long-lasting ambient fragrances for floors and rooms.",
        "All-Purpose Stain Remover: Effective on grease and tough stains.",
        "Floor Cleaners & Disinfectants: Liquid detergents for ceramic, tile, and stone floors; some formulations include antibacterial disinfectants for hygiene.",
        "Fabric Softeners: Liquid fabric conditioners with softening agents and fragrances.",
        "Car Care Products: Car wash shampoos, waxes, and interior cleaners safe for upholstery and plastics.",
        "Specialty Cleaners: Such as oven degreasers and stainless-steel polishes."
      ],
      tableHeader: ["Product Line", "Key Application"],
      table: [
        { name: "Floor Freshener", app: "Our flagship product. Ambient and floor fragrance with long-lasting effect." },
        { name: "All-Purpose Stain Remover", app: "Multi-surface degreasing and stain removal (floors, kitchen, etc.)" },
        { name: "Floor Cleaner & Disinfectant", app: "Cleaning and sanitizing hard floors (tiles, marble, stone)." },
        { name: "Fabric Softener", app: "Softening and freshening laundry." },
        { name: "Car Wash & Care", app: "Exterior wash and interior upholstery cleaning." },
        { name: "Gym/Commercial Fragrances", app: "Long-lasting air fresheners for gyms, locker rooms, hotel lobbies." }
      ]
    },
    facilities: {
      title: "Facilities & Operations",
      paragraphs: [
        "GOLD CLEAN’s manufacturing footprint spans two countries: the Egyptian facility in the Second Industrial Zone (Fayoum) serves the local and regional markets, while the Benghazi factory in Libya caters to North Africa and nearby regions. The Libya plant is strategically positioned to supply local demand and re-export to nearby African markets. Both sites employ automated mixing lines for liquids and powders, with separate filling and packaging sections.",
        "Quality control and R&D laboratories are (expected to be) co-located at the Egyptian site (details confidential). All raw materials (surfactants, enzymes, fragrances) are sourced from certified suppliers. The production lines conform to both ISO 9001 and GMP standards, ensuring consistent product quality. Process controls include batch record-keeping, in-process testing of viscosity and pH, and final product microbiological checks."
      ]
    },
    certifications: {
      title: "Quality Certifications",
      items: [
        {
          title: "ISO 9001:2015 (Quality Management)",
          desc: "Ensures a systematic approach to consistent product quality and continual improvement. This international standard underpins GOLD CLEAN’s quality assurance."
        },
        {
          title: "GMP (Good Manufacturing Practices)",
          desc: "Adherence to GMP means the company applies strict sanitation, traceability, and documentation protocols in its production. (In chemical and personal-care manufacturing, GMP certification is often required by large clients.)"
        }
      ]
    },
    vision: {
      title: "Vision, Mission & Values",
      vision: {
        title: "Vision",
        desc: "By 2030, GOLD CLEAN aims to be the preferred cleaning products brand across Gulf Cooperation Council (GCC) and Arab markets, known for innovative, eco-friendly, and high-performance solutions. The company envisions expansion into wider global markets, leveraging its dual European–Saudi heritage for quality and regional insight."
      },
      mission: {
        title: "Mission",
        desc: "To develop and manufacture cleaning solutions that deliver superior cleaning efficacy and safety. We commit to innovation in formulation and packaging, meeting international standards (ISO/GMP) and satisfying customer needs. GOLD CLEAN strives to build lasting partnerships with distributors and clients by offering reliability, technical support, and value-added service."
      },
      values: {
        title: "Values",
        desc: "Quality first, Integrity, Innovation, Customer Focus, Environmental Responsibility, and Partnership. GOLD CLEAN emphasizes trust in its brand, sustainable practices, and responsiveness to market trends."
      }
    },
    usp: {
      title: "USP & Competitive Advantage",
      description: "GOLD CLEAN differentiates itself through its integrated manufacturer-distributor model. By formulating products in-house while also managing distribution, the company can tailor solutions rapidly to client needs. As noted by industry peers, having an in-house formulation capability helps “develop products to suit specific needs,” speeding time-to-market for customers. Other competitive strengths include:",
      items: [
        { icon: ShieldCheck, title: "Quality & Compliance", desc: "Proven ISO 9001 system and GMP practices attract institutional buyers (hotels, hospitals) requiring certified suppliers." },
        { icon: Coins, title: "Cost-Effectiveness", desc: "Lean manufacturing and regional factories help keep prices competitive (no premium for European import)." },
        { icon: MapPin, title: "Local Presence", desc: "Presence in Saudi and Libya via logistics centers/distributors shortens lead times in key markets." },
        { icon: Globe, title: "Market Coverage", desc: "Current distribution spans the entire value chain (wholesale, retail, hospitality); plans are in place to cover all Egyptian governorates through partnerships with local dealers." },
        { icon: Lightbulb, title: "Product Innovation", desc: "Continuous R&D (in collaboration with cosmetic and chemical experts) yields new variants (e.g., eco-friendly and antibacterial lines) – positioning GOLD CLEAN as forward-looking." }
      ]
    },
    targetMarkets: {
      title: "Target Markets & Segments",
      description: "Gold Clean targets both retail and institutional segments across the Middle East and North Africa (MENA) and selective global markets. Key segments include:",
      segments: [
        {
          title: "Hospitality & Facilities",
          desc: "Hotels, resorts, hospitals, schools and gyms (bulk tenders for cleaning chemicals and fragrances). Presence in Saudi hotels and malls indicates traction in this segment."
        },
        {
          title: "Retail (Mass & Trade)",
          desc: "Supermarkets, hypermarkets, and wholesale distributors supplying households and small businesses in Egypt, Libya, and the Gulf."
        },
        {
          title: "Export Markets",
          desc: "The GCC (especially KSA and UAE) and EU countries (unidentified) represent export markets. Notably, the MENA consumer goods market is large – Egypt (~$67B) and Saudi (~$65B) are the two largest markets in the region. Targeting these economies aligns with GOLD CLEAN’s regional strategy."
        }
      ],
      conclusion: "Market research shows rising demand in MENA for high-quality and eco-conscious cleaning solutions. For example, the MENA fast-moving consumer goods (FMCG) market surpassed $460 billion in 2024. Growth in personal and home care categories is driven by population growth and higher incomes. GOLD CLEAN will adapt formulations (e.g., concentrated, biodegradable formulas) to appeal to consumers and B2B buyers."
    },
    logistics: {
      title: "Distribution & Logistics",
      paragraphs: [
        "GOLD CLEAN relies on both sea and land transport to reach its markets. As noted for the Gulf region, international distributors have traditionally favored sea freight, with improving land networks (e.g., new GCC rail links) enhancing cross-border trade. The company partners with local logistics firms for warehousing in Jeddah (KSA) and Tripoli (Libya) to ensure inventory is close to customers.",
        "To achieve nationwide coverage in Egypt, GOLD CLEAN is establishing relationships with wholesalers in each governorate. It maintains nimble supply chains to accommodate the MENA region’s expanding trade connectivity. (For example, Saudi investment in north-south rail networks promises easier inland distribution.)"
      ]
    },
    salesAndPricing: {
      title: "Sales Channels & Pricing",
      channelsDesc: "Sales channels include:",
      channels: [
        {
          title: "Distributors & Dealers",
          desc: "Using a network of agents in KSA, Libya, and Europe to supply regional markets. B2B contracts (for hotels and offices) are managed through direct sales teams."
        },
        {
          title: "Retail Chains",
          desc: "Agreements with major Egyptian and Saudi retailers to carry GOLD CLEAN lines. Private label opportunities for large chains may be explored."
        },
        {
          title: "E-commerce",
          desc: "Emerging online sales via regional B2C platforms and corporate websites (to reach consumers directly)."
        }
      ],
      pricingDesc: "Pricing is positioned as competitive for the quality offered. Common pricing strategies include value-based pricing (higher price for premium formulations) and volume discounts for bulk orders. Key considerations:",
      pricing: [
        {
          title: "Market Parity",
          desc: "Align with mid-tier brands in each market to enter the market, then gradually leverage quality to gain share."
        },
        {
          title: "Tiered Pricing",
          desc: "Offering different package sizes (e.g. smaller bottles for retail, large drums for institutions) to suit client budgets."
        },
        {
          title: "Promotions",
          desc: "Limited-time promotions or bundled offers (e.g., “starter kits”) for new retailers/distributors to incentivize trial."
        }
      ]
    },
    packaging: {
      title: "Packaging & Labeling",
      description: "GOLD CLEAN must comply with diverse regulations for packaging and labeling in its markets:",
      regions: [
        {
          title: "Egypt",
          desc: "Mandatory Arabic labels including manufacturer name & address, country of origin, product name, ingredients, net weight, expiration and production dates, storage instructions, etc. Packaging must also protect product integrity and consumer safety."
        },
        {
          title: "Saudi Arabia (SASO/GSO)",
          desc: "Packaging must be tamper-evident and child-resistant if containing hazardous chemicals. Labels (in Arabic and optionally English) must list the product name, manufacturer/trademark, and safety instructions. Conformity with SASO technical regulation for detergents is required."
        },
        {
          title: "European Union",
          desc: "Compliance with the EU Detergents Regulation (EC 648/2004) entails listing all ingredients, usage instructions, hazard symbols, and meeting biodegradability criteria. English (and local language as needed) labeling is mandatory."
        }
      ],
    },
    tables: {
      title: "Comparative Tables",
      factories: {
        title: "Table 1: Factories & Certifications",
        headers: ["Location / Certification", "Details"],
        rows: [
          ["Egypt – 2nd Industrial Zone, Fayoum", "Industrial production line (liquids/powders), in-house QC lab. (Exact address proprietary.)"],
          ["Libya – Benghazi industrial area", "Filling & packaging lines for North African market. (Details confidential.)"],
          ["ISO 9001", "Quality management system (framework for consistency)."],
          ["GMP", "Good Manufacturing Practices – strict production & hygiene protocols (aligns with chemical/pharma standards)."]
        ]
      },
      exportMarkets: {
        title: "Table 2: Export Markets & Distribution",
        headers: ["Region / Country", "Status"],
        rows: [
          ["Saudi Arabia", "Established presence: major retailer accounts and hotel chains. Ongoing expansion via local distributors."],
          ["Libya", "Local production covers domestic demand. Export to neighboring North African markets (Tunisia, etc.)."],
          ["Europe", "Selective exports to EU countries (retail and B2B). EU Detergents compliance ensures market entry."],
          ["Egypt", "Home market (launch in 2026). Planning full national coverage (using wholesalers across all governorates)."]
        ]
      }
    },
    timeline: {
      title: "Growth & Expansion Timeline (to 2030)",
      description: "This timeline outlines milestones (actual and planned) for GOLD CLEAN’s growth. It highlights the foundation, certifications, market entries, and future vision.",
      events: [
        { year: "Foundation", title: "Establishment", desc: "Production lines established in Fayoum (Egypt) and Benghazi (Libya)." },
        { year: "Certifications", title: "Quality & Standards", desc: "Obtained ISO 9001 and GMP certifications, ensuring international compliance." },
        { year: "Expansion", title: "Regional Markets", desc: "Successful export to Saudi Arabia, Libya, and European markets." },
        { year: "2026", title: "Egypt Launch", desc: "Planned full national coverage across all Egyptian governorates." },
        { year: "2030", title: "Future Vision", desc: "Leading the MENA region in high-quality, sustainable cleaning solutions." }
      ]
    },
    footer: {
      rights: "© 2024 GOLD CLEAN. All rights reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "منتجاتنا",
      contact: "اتصل بنا"
    },
    hero: {
      subtitle: "منتجات التنظيف والعناية المحترفة",
      title: "جولد كلين",
      cta: "اكتشف ملفنا التعريفي"
    },
    executiveSummary: {
      title: "الملخص التنفيذي",
      paragraphs: [
        "شركة جولد كلين هي شركة مصنعة ذات ملكية أوروبية–سعودية متخصصة في منتجات التنظيف والعناية المحترفة، تأسست عام 2017. تمتلك الشركة مصانع في موقعين رئيسيين – في المنطقة الصناعية الثانية بمحافظة الفيوم (مصر) ومدينة بنغازي (ليبيا) – وترتكز في تقديم تركيبات عالية الجودة للاستخدامات المنزلية والتجارية.",
        "المنتج الرئيسي للشركة هو منظف متعدد الاستخدامات لإزالة البقع، وتشمل محفظتها من المنتجات منظفات الأرضيات، معطرات الجو، منعمات الملابس، المطهرات، منتجات العناية بالسيارات، ومعطرات متخصصة لصالات الرياضة والفنادق.",
        "حصلت جولد كلين على شهادة ISO 9001 لنظام إدارة الجودة وتطبق ممارسات التصنيع الجيد GMP لضمان سلامة المنتجات واتساقها. تصدر الشركة منتجاتها إلى أسواق رئيسية منها المملكة العربية السعودية وليبيا وعدد من دول أوروبا.",
        "تقدم هذه الوثيقة عرضًا شاملاً عن حقائق الشركة، ومنتجاتها، وشهاداتها، واستراتيجيتها التسويقية باللغتين الإنجليزية والعربية."
      ],
      features: [
        { icon: Factory, title: "تصنيع مزدوج", desc: "مصانع في مصر وليبيا" },
        { icon: Award, title: "شهادة ISO 9001", desc: "أنظمة إدارة الجودة" },
        { icon: ShieldCheck, title: "معايير GMP", desc: "ممارسات التصنيع الجيد" },
        { icon: Droplets, title: "محفظة متنوعة", desc: "حلول منزلية وتجارية" },
      ]
    },
    companyFacts: {
      title: "حقائق الشركة",
      facts: [
        { label: "اسم الشركة", value: "جولد كلين" },
        { label: "سنة التأسيس", value: "2017" },
        { label: "هوية الشركة", value: "شركة أوروبية-سعودية" },
        { label: "المصانع", value: "مصر*: منطقة صناعية ثانية, محافظة الفيوم\nليبيا*: بنغازي" },
        { label: "الأسواق الرئيسية", value: "مصر (محلياً) | السعودية | ليبيا | أوروبا*" },
        { label: "شهادات الجودة", value: "ISO 9001 (إدارة الجودة)؛ وتطبيق ممارسات التصنيع الجيد (GMP)" },
        { label: "الشركاء الرئيسيون", value: "الموزعون وسلاسل التجزئة في السعودية، والحسابات التجارية (فنادق، مراكز تجارية، صالات رياضية)" }
      ]
    },
    products: {
      title: "المنتجات والخدمات",
      description: "تقدم جولد كلين مجموعة شاملة من منتجات التنظيف والعناية للاستخدام المنزلي والاحترافي. المنتج الأهم والأبرز لدينا هو معطر الأرضيات الذي يحظى بطلب عالٍ لثباته الطويل. تشمل خطوط الإنتاج الأخرى:",
      lines: [
        "معطر الأرضيات: منتجنا الأهم والأكثر طلباً، يتميز بعطور تدوم طويلاً لتعطير الأرضيات والمساحات.",
        "منظف مزيل بقع شامل: فعال على الدهون والبقع المستعصية.",
        "منظفات ومطهرات أرضيات: منظفات سائلة لأرضيات السيراميك والبلاط والحجر؛ بعض التركيبات تتضمن مطهرات مضادة للبكتيريا للنظافة الصحية.",
        "منعمات الملابس: منعمات أقمشة سائلة تحتوي على عوامل تنعيم وعطور.",
        "منتجات العناية بالسيارات: شامبو غسيل السيارات، الشمع، ومنظفات داخلية آمنة على المفروشات والبلاستيك.",
        "منظفات متخصصة: مثل مزيلات دهون الأفران وملمعات الفولاذ المقاوم للصدأ."
      ],
      tableHeader: ["خط الإنتاج", "الاستخدام الرئيسي"],
      table: [
        { name: "معطر الأرضيات", app: "منتجنا الأبرز. تعطير الأرضيات والأجواء بفعالية وثبات فائقين." },
        { name: "منظف مزيل بقع شامل", app: "إزالة الدهون والبقع من أسطح متعددة (الأرضيات، المطبخ، إلخ)" },
        { name: "منظف ومطهر أرضيات", app: "تنظيف وتعقيم الأرضيات الصلبة (البلاط، الرخام، الحجر)." },
        { name: "منعم ملابس", app: "تنعيم وتعطير الغسيل." },
        { name: "منتجات غسل السيارات", app: "غسيل خارجي وتنظيف المفروشات الداخلية." },
        { name: "معطرات مخصصة لصالات رياضية", app: "معطرات جو تدوم طويلاً للصالات الرياضية وغرف تغيير الملابس وردهات الفنادق." }
      ]
    },
    facilities: {
      title: "المصانع والعمليات",
      paragraphs: [
        "يمتد التواجد الصناعي لشركة جولد كلين في دولتين: المنشأة المصرية في المنطقة الصناعية الثانية (الفيوم) تخدم الأسواق المحلية والإقليمية، بينما مصنع بنغازي في ليبيا يلبي احتياجات شمال إفريقيا والمناطق المجاورة. يتميز مصنع ليبيا بموقع استراتيجي لتوريد الطلب المحلي وإعادة التصدير إلى الأسواق الأفريقية المجاورة. يعتمد كلا الموقعين على خطوط خلط آلية للسوائل والمساحيق، مع أقسام منفصلة للتعبئة والتغليف.",
        "تقع مختبرات مراقبة الجودة والبحث والتطوير (كما هو متوقع) في الموقع المصري (التفاصيل سرية). يتم الحصول على جميع المواد الخام (المواد الخافضة للتوتر السطحي، الإنزيمات، العطور) من موردين معتمدين. تتوافق خطوط الإنتاج مع معايير ISO 9001 و GMP، مما يضمن جودة منتج متسقة. تشمل ضوابط العملية الاحتفاظ بسجلات الدفعات، والاختبار أثناء العملية للزوجة ودرجة الحموضة، والفحوصات الميكروبيولوجية للمنتج النهائي."
      ]
    },
    certifications: {
      title: "شهادات الجودة",
      items: [
        {
          title: "الأيزو 9001:2015 (إدارة الجودة)",
          desc: "تضمن نهجًا منهجيًا لجودة المنتج المتسقة والتحسين المستمر. يعزز هذا المعيار الدولي ضمان الجودة لدى جولد كلين."
        },
        {
          title: "ممارسات التصنيع الجيد (GMP)",
          desc: "الالتزام بـ GMP يعني أن الشركة تطبق بروتوكولات صارمة للصرف الصحي والتتبع والتوثيق في إنتاجها. (في تصنيع المواد الكيميائية والعناية الشخصية، غالباً ما تكون شهادة GMP مطلوبة من قبل كبار العملاء.)"
        }
      ]
    },
    vision: {
      title: "الرؤية، الرسالة، والقيم",
      vision: {
        title: "الرؤية",
        desc: "بحلول عام 2030، تهدف جولد كلين إلى أن تكون العلامة التجارية المفضلة لمنتجات التنظيف عبر دول مجلس التعاون الخليجي والأسواق العربية، والمعروفة بحلولها المبتكرة والصديقة للبيئة وذات الأداء العالي. تتطلع الشركة للتوسع في أسواق عالمية أوسع، معتمدة على تراثها الأوروبي-السعودي المزدوج لتقديم الجودة والفهم الإقليمي."
      },
      mission: {
        title: "الرسالة",
        desc: "تطوير وتصنيع حلول تنظيف توفر فعالية وسلامة فائقة. نحن نلتزم بالابتكار في التركيبات والتعبئة، وتلبية المعايير الدولية (ISO/GMP) واحتياجات العملاء. تسعى جولد كلين لبناء شراكات دائمة مع الموزعين والعملاء من خلال تقديم الموثوقية والدعم الفني والخدمات ذات القيمة المضافة."
      },
      values: {
        title: "القيم",
        desc: "الجودة أولاً، النزاهة، الابتكار، التركيز على العملاء، المسؤولية البيئية، والشراكة. تؤكد جولد كلين على الثقة في علامتها التجارية، والممارسات المستدامة، والاستجابة لاتجاهات السوق."
      }
    },
    usp: {
      title: "المزايا التنافسية والعوامل الفريدة",
      description: 'تميز جولد كلين نفسها من خلال نموذجها المتكامل كشركة مصنعة وموزعة. من خلال تركيب المنتجات داخليًا وإدارة التوزيع أيضًا، يمكن للشركة تصميم الحلول بسرعة لتلبية احتياجات العملاء. وكما يلاحظ الخبراء في هذا المجال، فإن امتلاك قدرة صياغة داخلية يساعد في "تطوير منتجات تناسب احتياجات محددة"، مما يسرع وقت طرحها في السوق للعملاء. تشمل نقاط القوة التنافسية الأخرى ما يلي:',
      items: [
        { icon: ShieldCheck, title: "الجودة والامتثال", desc: "نظام ISO 9001 الموثوق وممارسات التصنيع الجيد (GMP) تجذب المشترين المؤسسيين (الفنادق والمستشفيات) الذين يطلبون موردين معتمدين." },
        { icon: Coins, title: "فعالية التكلفة", desc: "التصنيع المرن والمصانع الإقليمية تساعد في الحفاظ على أسعار تنافسية (بدون تكلفة إضافية للاستيراد الأوروبي)." },
        { icon: MapPin, title: "التواجد المحلي", desc: "التواجد في السعودية وليبيا عبر مراكز لوجستية/موزعين يقصر فترات التسليم في الأسواق الرئيسية." },
        { icon: Globe, title: "تغطية السوق", desc: "يمتد التوزيع الحالي ليشمل سلسلة القيمة بأكملها (الجملة، التجزئة، الضيافة)؛ وهناك خطط لتغطية جميع محافظات مصر من خلال الشراكات مع الوكلاء المحليين." },
        { icon: Lightbulb, title: "ابتكار المنتجات", desc: "البحث والتطوير المستمر (بالتعاون مع خبراء مستحضرات التجميل والكيمياء) ينتج متغيرات جديدة (مثل الخطوط الصديقة للبيئة والمضادة للبكتيريا) - مما يضع جولد كلين كشركة تتطلع للمستقبل." }
      ]
    },
    targetMarkets: {
      title: "الأسواق المستهدفة والعملاء",
      description: "تستهدف جولد كلين كلاً من قطاعات التجزئة والمؤسسات عبر الشرق الأوسط وشمال إفريقيا (MENA) وأسواق عالمية مختارة. تشمل القطاعات الرئيسية:",
      segments: [
        {
          title: "الضيافة والمرافق",
          desc: "الفنادق والمنتجعات والمستشفيات والمدارس والصالات الرياضية (مناقصات الجملة للمواد الكيميائية الخاصة بالتنظيف والعطور). يشير التواجد في الفنادق والمراكز التجارية السعودية إلى قوة الجذب في هذا القطاع."
        },
        {
          title: "التجزئة (الجملة والتجارة)",
          desc: "محلات السوبر ماركت والهايبر ماركت وموزعي الجملة الذين يوردون للأسر والشركات الصغيرة في مصر وليبيا والخليج."
        },
        {
          title: "أسواق التصدير",
          desc: "دول مجلس التعاون الخليجي (خاصة السعودية والإمارات) ودول الاتحاد الأوروبي (غير محددة) تمثل أسواق تصدير. والجدير بالذكر أن سوق السلع الاستهلاكية في منطقة الشرق الأوسط وشمال إفريقيا كبير – مصر (حوالي 67 مليار دولار) والسعودية (حوالي 65 مليار دولار) هما أكبر سوقين في المنطقة. يتوافق استهداف هذه الاقتصادات مع استراتيجية جولد كلين الإقليمية."
        }
      ],
      conclusion: "تظهر أبحاث السوق زيادة الطلب في منطقة الشرق الأوسط وشمال إفريقيا على حلول التنظيف عالية الجودة والصديقة للبيئة. على سبيل المثال، تجاوز سوق السلع الاستهلاكية سريعة التداول (FMCG) في منطقة الشرق الأوسط وشمال إفريقيا 460 مليار دولار في عام 2024. يُدفع النمو في فئات العناية الشخصية والمنزلية من خلال النمو السكاني وارتفاع الدخل. ستقوم جولد كلين بتكييف التركيبات (مثل التركيبات المركزة والقابلة للتحلل الحيوي) لجذب المستهلكين ومشتري الشركات (B2B)."
    },
    logistics: {
      title: "التوزيع واللوجستيات",
      paragraphs: [
        "تعتمد جولد كلين على كل من النقل البحري والبري للوصول إلى أسواقها. وكما لوحظ بالنسبة لمنطقة الخليج، فقد فضل الموزعون الدوليون تقليدياً الشحن البحري، مع تحسين شبكات الطرق البرية (مثل خطوط السكك الحديدية الجديدة لدول مجلس التعاون الخليجي) التي تعزز التجارة عبر الحدود. تعقد الشركة شراكات مع شركات لوجستية محلية للتخزين في جدة (السعودية) وطرابلس (ليبيا) لضمان قرب المخزون من العملاء.",
        "لتحقيق تغطية وطنية في مصر، تعمل جولد كلين على إقامة علاقات مع تجار الجملة في كل محافظة. وتحافظ على سلاسل توريد مرنة لاستيعاب الترابط التجاري المتوسع في منطقة الشرق الأوسط وشمال أفريقيا. (على سبيل المثال، الاستثمار السعودي في شبكات السكك الحديدية بين الشمال والجنوب يعد بتسهيل التوزيع الداخلي.)"
      ]
    },
    salesAndPricing: {
      title: "قنوات المبيعات والاستراتيجية السعرية",
      channelsDesc: "تشمل قنوات المبيعات:",
      channels: [
        {
          title: "الموزعون والوكلاء",
          desc: "استخدام شبكة من الوكلاء في السعودية، وليبيا، وأوروبا لتوريد الأسواق الإقليمية. تُدار عقود B2B (للفنادق والمكاتب) من خلال فرق مبيعات مباشرة."
        },
        {
          title: "سلاسل التجزئة",
          desc: "اتفاقيات مع كبار تجار التجزئة في مصر والسعودية لتقديم خطوط جولد كلين. يمكن استكشاف فرص العلامات التجارية الخاصة للسلاسل الكبيرة."
        },
        {
          title: "التجارة الإلكترونية",
          desc: "مبيعات عبر الإنترنت ناشئة من خلال منصات B2C الإقليمية ومواقع الشركات (للوصول إلى المستهلكين مباشرة)."
        }
      ],
      pricingDesc: "يتم تحديد الأسعار لتكون تنافسية بالنسبة للجودة المقدمة. تشمل استراتيجيات التسعير الشائعة التسعير القائم على القيمة (سعر أعلى للتركيبات الممتازة) وخصومات الحجم للطلبات الكبيرة. الاعتبارات الرئيسية:",
      pricing: [
        {
          title: "التكافؤ في السوق",
          desc: "التوافق مع العلامات التجارية من الفئة المتوسطة في كل سوق لدخول السوق، ثم الاستفادة تدريجياً من الجودة لكسب حصة سوقية."
        },
        {
          title: "التسعير المتدرج",
          desc: "تقديم أحجام عبوات مختلفة (مثل زجاجات أصغر للتجزئة، براميل كبيرة للمؤسسات) لتناسب ميزانيات العملاء."
        },
        {
          title: "العروض الترويجية",
          desc: "عروض ترويجية لفترة محدودة أو عروض مجمعة (مثل \"مجموعات البداية\") لتجار التجزئة/الموزعين الجدد لتشجيع التجربة."
        }
      ]
    },
    packaging: {
      title: "التعبئة والملصقات",
      description: "يجب أن تمتثل جولد كلين للوائح المتنوعة للتعبئة والملصقات في أسواقها:",
      regions: [
        {
          title: "مصر",
          desc: "ملصقات إلزامية باللغة العربية تتضمن اسم الشركة المصنعة وعنوانها، بلد المنشأ، اسم المنتج، المكونات، الوزن الصافي، تواريخ الإنتاج والانتهاء، تعليمات التخزين، إلخ. يجب أن تحمي التعبئة أيضًا سلامة المنتج وسلامة المستهلك."
        },
        {
          title: "المملكة العربية السعودية (SASO/GSO)",
          desc: "يجب أن تكون التعبئة مانعة للعبث ومقاومة للأطفال إذا كانت تحتوي على مواد كيميائية خطرة. يجب أن تدرج الملصقات (باللغة العربية واختياريًا باللغة الإنجليزية) اسم المنتج، والشركة المصنعة/العلامة التجارية، وتعليمات السلامة. التوافق مع اللائحة الفنية لـ SASO للمنظفات مطلوب."
        },
        {
          title: "الاتحاد الأوروبي",
          desc: "الامتثال للائحة المنظفات في الاتحاد الأوروبي (EC 648/2004) يستلزم إدراج جميع المكونات، تعليمات الاستخدام، رموز الخطر، وتلبية معايير القابلية للتحلل الحيوي. وضع العلامات باللغة الإنجليزية (واللغة المحلية حسب الحاجة) إلزامي."
        }
      ],
    },
    marketing: {
      title: "مواد التسويق وعرض الموزعين",
      description: "تشمل المواد الترويجية المقترحة:",
      materials: [
        { title: "كتيب الشركة ثنائي اللغة", desc: "ملف PDF باللغتين الإنجليزية/العربية يبرز المنتجات، والشهادات، وشهادات العملاء (منسق مثل هذا الملف)." },
        { title: "أوراق المنتجات", desc: "أوراق مواصفات من صفحة واحدة (EN/AR) لكل فئة منتج، مع تعليمات الاستخدام وبيانات السلامة." },
        { title: "عينات ومجموعات", desc: "زجاجات عينات تحمل العلامة التجارية للمنتجات الرئيسية للموزعين/الفنادق المحتملين." },
        { title: "المحتوى الرقمي", desc: "موقع ويب متعدد اللغات ووسائل التواصل الاجتماعي تعرض التطبيقات (مثل العروض التوضيحية للتنظيف)." }
      ],
      pitchTitle: "عرض ترويجي للموزعين (صفحة واحدة)",
      pitchSubtitle: "(ثنائي اللغة) - يلخص نقاط قوة الشركة، ومجموعة المنتجات، وبرنامج الدعم (مثل التدريب، بدل التسويق). نقاط رئيسية مقترحة للعرض:",
      pitchPoints: [
        "كن شريكًا لشركة مصنعة معتمدة (ISO 9001 و GMP) - لضمان جودة يمكنك الوثوق بها.",
        "مجموعة منتجات شاملة (منزلية إلى صناعية) مصممة خصيصًا لاحتياجات الشرق الأوسط.",
        "خبرة تصدير مثبتة إلى السعودية وليبيا وأوروبا - مستعدون لخدمة سوقك.",
        "دعم مخصص: تدريب فني، ومواد ترويجية، وخدمات لوجستية سريعة."
      ]
    },
    tables: {
      title: "جداول توضيحية",
      factories: {
        title: "الجدول 1: المصانع والشهادات",
        headers: ["الموقع / الشهادة", "تفاصيل"],
        rows: [
          ["مصر - المنطقة الصناعية الثانية، الفيوم", "خط إنتاج صناعي (سوائل/مساحيق)، مختبر داخلي لمراقبة الجودة. (العنوان الدقيق سري)."],
          ["ليبيا - المنطقة الصناعية ببنغازي", "خطوط تعبئة وتغليف لسوق شمال إفريقيا. (التفاصيل سرية)."],
          ["ISO 9001", "نظام إدارة الجودة (إطار عمل للاتساق)."],
          ["GMP", "ممارسات التصنيع الجيد - بروتوكولات إنتاج ونظافة صارمة (تتوافق مع المعايير الكيميائية/الصيدلانية)."]
        ]
      },
      exportMarkets: {
        title: "الجدول 2: الأسواق التصديرية والتوزيع",
        headers: ["المنطقة / البلد", "الحالة"],
        rows: [
          ["السعودية", "حضور راسخ: حسابات تجار التجزئة الكبرى وسلاسل الفنادق. توسع مستمر عبر الموزعين المحليين."],
          ["ليبيا", "الإنتاج المحلي يغطي الطلب المحلي. التصدير إلى أسواق شمال إفريقيا المجاورة (تونس، إلخ)."],
          ["أوروبا", "صادرات انتقائية لدول الاتحاد الأوروبي (التجزئة و B2B). الامتثال للوائح المنظفات الأوروبية يضمن دخول السوق."],
          ["مصر", "السوق المحلي (إطلاق عام 2026). التخطيط لتغطية وطنية شاملة (باستخدام تجار الجملة في جميع المحافظات)."]
        ]
      }
    },
    timeline: {
      title: "مخطط زمني للتوسع (حتى 2030)",
      description: "يوضح هذا المخطط الزمني المعالم (الفعلية والمخطط لها) لنمو جولد كلين. يسلط الضوء على التأسيس، والشهادات، ودخول الأسواق، والرؤية المستقبلية.",
      events: [
        { year: "التأسيس", title: "تأسيس الشركة", desc: "تأسيس خطوط الإنتاج في الفيوم (مصر) وبنغازي (ليبيا)." },
        { year: "الشهادات", title: "الجودة والمعايير", desc: "الحصول على شهادات ISO 9001 و GMP، لضمان الامتثال الدولي." },
        { year: "التوسع", title: "الأسواق الإقليمية", desc: "التصدير الناجح إلى المملكة العربية السعودية، وليبيا، والأسواق الأوروبية." },
        { year: "2026", title: "إطلاق السوق المصري", desc: "التخطيط لتغطية وطنية شاملة عبر جميع المحافظات المصرية." },
        { year: "2030", title: "الرؤية المستقبلية", desc: "الريادة في منطقة الشرق الأوسط وشمال إفريقيا في حلول التنظيف المستدامة وعالية الجودة." }
      ]
    },
    footer: {
      rights: "© 2024 جولد كلين. جميع الحقوق محفوظة."
    }
  }
};

type Lang = 'en' | 'ar';

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const t = content[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase.storage.from('gcport').list();
        if (error) throw error;
        
        if (data && data.length > 0) {
          // Filter for image files and construct full URLs
          const imageUrls = data
            .filter(file => file.name.match(/\.(jpeg|jpg|gif|png)$/i))
            .map(file => supabase.storage.from('gcport').getPublicUrl(file.name).data.publicUrl);
            
          if (imageUrls.length > 0) {
            setGalleryImages(imageUrls);
          }
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-200 ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-xl font-bold tracking-widest uppercase text-white">
                {lang === 'en' ? 'Gold Clean' : 'جولد كلين'}
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8">
                {Object.values(t.nav).map((item, i) => (
                  <a key={i} href="#" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors">
                    {item}
                  </a>
                ))}
              </div>
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-white/5 cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-[#D4AF37] font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              {t.hero.subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
               {lang === 'en' ? 'GOLD CLEAN Company Profile' : 'الملف التعريفي لشركة جولد كلين'}
            </p>
            <a href="#about" className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              {t.hero.cta}
              <ArrowIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="about">
        <div className="absolute -left-[20rem] top-0 w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#D4AF37]"></span>
                {t.executiveSummary.title}
              </h3>
              <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
                {t.executiveSummary.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.executiveSummary.features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-all relative z-10">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 relative z-10">{feat.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="py-24 bg-black relative overflow-hidden" id="facts">
        <div className="absolute right-[10rem] top-[10rem] w-[30rem] h-[30rem] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.companyFacts.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.companyFacts.facts.map((fact, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
              >
                <h4 className="text-[#D4AF37] text-sm font-semibold mb-3 uppercase tracking-wider">{fact.label}</h4>
                <div className="text-neutral-300">
                  {fact.value.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`mt-12 p-4 bg-neutral-900/30 border-y md:border-y-0 ${isRtl ? 'md:border-r-4' : 'md:border-l-4'} border-[#D4AF37]/50 rounded-lg`}
          >
            <p className="text-neutral-400 text-sm leading-relaxed italic">
              {t.companyFacts.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="products">
        <div className="absolute -left-[10rem] top-[20rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.products.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {t.products.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {t.products.lines.map((line, i) => {
                const [title, desc] = line.split(':');
                const isFeatured = i === 0;
                return (
                  <div key={i} className={`flex gap-4 p-4 rounded-xl transition-colors ${
                    isFeatured 
                      ? 'bg-gradient-to-r from-[#D4AF37]/20 to-black border-2 border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                      : 'bg-black border border-white/5 hover:border-[#D4AF37]/30'
                  }`}>
                    <div className="mt-1">
                      {isFeatured ? (
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                           <Sparkles className="w-3 h-3 text-black" />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
                      )}
                    </div>
                    <div>
                      <span className={`font-semibold ${isFeatured ? 'text-[#D4AF37] text-lg' : 'text-white'}`}>{title}:</span>
                      <span className={`leading-relaxed ml-2 rtl:ml-0 rtl:mr-2 ${isFeatured ? 'text-white' : 'text-neutral-400'}`}>{desc}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] group h-full min-h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              <img 
                src="https://vxedsjxzpekozeyhwbgg.supabase.co/storage/v1/object/public/gcport/WhatsApp%20Image%202026-07-03%20at%2002.56.31%20(2).jpeg" 
                alt="Floor Freshener" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-full mb-3 backdrop-blur-md">
                   <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">{lang === 'en' ? 'Featured Product' : 'المنتج المميز'}</span>
                </div>
                <h4 className="text-white font-bold text-2xl md:text-3xl drop-shadow-md mb-2">
                  {lang === 'en' ? 'Floor Freshener' : 'معطر الأرضيات'}
                </h4>
                <p className="text-neutral-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  {lang === 'en' ? 'Our most prominent and requested product' : 'المنتج الأبرز والأكثر طلباً لدينا'}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-neutral-900/50">
                  <th className="py-4 px-6 text-[#D4AF37] font-semibold">{t.products.tableHeader[0]}</th>
                  <th className="py-4 px-6 text-[#D4AF37] font-semibold">{t.products.tableHeader[1]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {t.products.table.map((row, i) => {
                  const isFeatured = i === 0;
                  return (
                    <tr key={i} className={`transition-colors ${isFeatured ? 'bg-[#D4AF37]/10' : 'hover:bg-white/[0.02]'}`}>
                      <td className={`py-4 px-6 font-medium ${isFeatured ? 'text-[#D4AF37]' : 'text-white'}`}>
                        {isFeatured && <Sparkles className="w-4 h-4 inline-block mr-2 rtl:mr-0 rtl:ml-2" />}
                        {row.name}
                      </td>
                      <td className={`py-4 px-6 ${isFeatured ? 'text-white' : 'text-neutral-400'}`}>{row.app}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>

          {/* Product Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 mb-8"
          >
             <h4 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                {lang === 'en' ? 'Product Gallery' : 'معرض المنتجات'}
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
             </h4>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((imageUrl, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-white/10 group aspect-square relative bg-neutral-900/50">
                    <img 
                      src={imageUrl} 
                      alt={`Product ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                       <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                          <Target className="w-6 h-6 text-[#D4AF37]" />
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-neutral-500 text-sm italic bg-neutral-900/20 py-3 px-6 rounded-full inline-block border border-white/5">
              {t.products.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities & Operations Section */}
      <section className="py-24 bg-black relative overflow-hidden" id="facilities">
        <div className="absolute right-[10rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.facilities.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-neutral-300 leading-relaxed text-lg"
            >
              {t.facilities.paragraphs.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 relative group hover:border-[#D4AF37]/30 transition-colors">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  <p className="relative z-10">{p}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="certifications">
        <div className="absolute -left-[10rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.certifications.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {t.certifications.items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-all relative z-10">
                   {i === 0 ? <Award className="w-10 h-10 text-[#D4AF37]" /> : <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-neutral-500 text-sm italic">
              {t.certifications.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-24 bg-black relative overflow-hidden" id="vision">
        <div className="absolute right-[20rem] bottom-0 w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.vision.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.vision.title}</h4>
              <p className="text-neutral-400 leading-relaxed">{t.vision.vision.desc}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.mission.title}</h4>
              <p className="text-neutral-400 leading-relaxed">{t.vision.mission.desc}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                <Heart className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{t.vision.values.title}</h4>
              <p className="text-neutral-400 leading-relaxed">{t.vision.values.desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="usp">
        <div className="absolute left-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.usp.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {t.usp.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {t.usp.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-colors group flex gap-6 items-start ${i === t.usp.items.length - 1 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''}`}
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="inline-block px-8 py-4 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full font-medium border border-[#D4AF37]/20">
              {t.usp.conclusion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Markets Section */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="target-markets">
        <div className="absolute right-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.targetMarkets.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed">
              {t.targetMarkets.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.targetMarkets.segments.map((segment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                     <Target className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{segment.title}</h4>
                </div>
                <p className="text-neutral-400 leading-relaxed">{segment.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
               <div className="shrink-0">
                  <TrendingUp className="w-12 h-12 text-[#D4AF37]" />
               </div>
               <p className="text-neutral-300 leading-relaxed md:text-lg">
                 {t.targetMarkets.conclusion}
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Distribution & Logistics Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="logistics">
        <div className="absolute left-[10rem] top-[5rem] w-[30rem] h-[30rem] bg-[#D4AF37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.logistics.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-neutral-300 leading-relaxed text-lg"
            >
              {t.logistics.paragraphs.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 relative group hover:border-[#D4AF37]/30 transition-colors">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  <p className="relative z-10">{p}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sales & Pricing Section */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="sales-pricing">
        <div className="absolute right-[5rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.salesAndPricing.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Sales Channels */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
               >
                 <h4 className="text-2xl font-semibold text-white mb-4">{t.salesAndPricing.channelsDesc}</h4>
               </motion.div>

               <div className="space-y-6">
                  {t.salesAndPricing.channels.map((channel, i) => {
                    const icons = [Briefcase, ShoppingCart, MonitorSmartphone];
                    const Icon = icons[i % icons.length];
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
                      >
                         <div className="shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                            <Icon className="w-6 h-6 text-[#D4AF37]" />
                         </div>
                         <div>
                            <h5 className="text-xl font-bold text-white mb-2">{channel.title}</h5>
                            <p className="text-neutral-400 leading-relaxed">{channel.desc}</p>
                         </div>
                      </motion.div>
                    )
                  })}
               </div>
            </div>

            {/* Pricing Strategy */}
            <div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
               >
                 <p className="text-lg text-neutral-300 leading-relaxed">{t.salesAndPricing.pricingDesc}</p>
               </motion.div>

               <div className="space-y-6">
                  {t.salesAndPricing.pricing.map((item, i) => {
                    const icons = [Scale, Layers, Tag];
                    const Icon = icons[i % icons.length];
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex gap-6 items-start p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
                      >
                         <div className="shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors">
                            <Icon className="w-6 h-6 text-[#D4AF37]" />
                         </div>
                         <div>
                            <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                            <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                         </div>
                      </motion.div>
                    )
                  })}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Labeling Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="packaging">
        <div className="absolute left-[20rem] bottom-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.packaging.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {t.packaging.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {t.packaging.regions.map((region, i) => {
              const icons = [Globe, ShieldCheck, PackageCheck];
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-black border border-white/5 hover:border-[#D4AF37]/30 transition-all group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                     <Icon className="w-32 h-32 text-[#D4AF37]" />
                  </div>
                  <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/50 transition-colors relative z-10">
                    <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{region.title}</h4>
                  <p className="text-neutral-400 leading-relaxed relative z-10">{region.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="shrink-0 p-4 rounded-full bg-[#D4AF37]/10">
              <Leaf className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <p className="text-neutral-300 leading-relaxed md:text-lg">
              {t.packaging.conclusion}
            </p>
          </motion.div>
        </div>
      </section>



      {/* Tables Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="tables">
        <div className="absolute left-[10rem] top-[10rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.tables.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
          </motion.div>

          <div className="space-y-16">
            {/* Table 1: Factories & Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Table className="w-6 h-6 text-[#D4AF37]" />
                  {t.tables.factories.title}
               </h4>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-white/10 bg-neutral-900/50">
                       <th className="py-4 px-6 font-semibold text-[#D4AF37] whitespace-nowrap">{t.tables.factories.headers[0]}</th>
                       <th className="py-4 px-6 font-semibold text-[#D4AF37]">{t.tables.factories.headers[1]}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {t.tables.factories.rows.map((row, i) => (
                       <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                         <td className="py-4 px-6 text-white font-medium align-top whitespace-nowrap">{row[0]}</td>
                         <td className="py-4 px-6 text-neutral-400 align-top">{row[1]}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </motion.div>

            {/* Table 2: Export Markets */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Table className="w-6 h-6 text-[#D4AF37]" />
                  {t.tables.exportMarkets.title}
               </h4>
               <div className="overflow-x-auto mb-4">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-white/10 bg-neutral-900/50">
                       <th className="py-4 px-6 font-semibold text-[#D4AF37] whitespace-nowrap">{t.tables.exportMarkets.headers[0]}</th>
                       <th className="py-4 px-6 font-semibold text-[#D4AF37]">{t.tables.exportMarkets.headers[1]}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {t.tables.exportMarkets.rows.map((row, i) => (
                       <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                         <td className="py-4 px-6 text-white font-medium align-top whitespace-nowrap">{row[0]}</td>
                         <td className="py-4 px-6 text-neutral-400 align-top">{row[1]}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <p className="text-sm text-neutral-500 italic px-6">{t.tables.exportMarkets.note}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="timeline">
        <div className="absolute right-[10rem] top-[5rem] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-4 mb-6">
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
              {t.timeline.title}
              <span className="hidden md:block w-12 h-[2px] bg-[#D4AF37]"></span>
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {t.timeline.description}
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className={`absolute ${isRtl ? 'right-[23px]' : 'left-[23px]'} md:left-1/2 md:right-auto top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2`} />
            
            <div className="space-y-12">
              {t.timeline.events.map((event, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0"
                  >
                    {/* Center Dot */}
                    <div className={`absolute ${isRtl ? 'right-[24px] translate-x-1/2' : 'left-[24px] -translate-x-1/2'} md:left-1/2 md:right-auto w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)] transform md:-translate-x-1/2 z-10`} />

                    {/* Content (Left or Right) */}
                    <div className={`w-full md:w-1/2 ${isRtl ? 'pr-16 md:pr-0' : 'pl-16 md:pl-0'} ${
                      isEven 
                        ? (isRtl ? 'md:pl-16 text-right md:text-left' : 'md:pr-16 text-left md:text-right')
                        : (isRtl ? 'md:mr-auto md:pr-16 text-right' : 'md:ml-auto md:pl-16 text-left')
                    }`}>
                      <div className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-[#D4AF37]/30 transition-colors group">
                        <span className="inline-flex items-center gap-2 text-[#D4AF37] font-mono text-sm mb-3">
                           <Calendar className="w-4 h-4" />
                           {event.year}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">{event.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-neutral-500 text-sm">
        <p>{t.footer.rights}</p>
      </footer>
    </div>
  );
}
