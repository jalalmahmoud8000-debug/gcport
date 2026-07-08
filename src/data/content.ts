import {
  Globe,
  Droplets,
  ShieldCheck,
  Factory,
  Award,
  Lightbulb,
  Coins,
  MapPin
} from 'lucide-react';

/**
 * تعريف نوع اللغة المدعومة في التطبيق (English أو العربية).
 */
export type Lang = 'en' | 'ar';

/**
 * كائن الترجمة والبيانات الخاص بموقع Gold Clean (جولد كلين).
 * يحتوي على النصوص باللغتين الإنجليزية والعربية لكافة أقسام الموقع.
 */
export const content = {
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
        "GOLD CLEAN is an American-Saudi-Egyptian manufacturer of professional cleaning and care products, founded in 2017. The company operates factories in three locations – Saudi Arabia (Khamis Mushait), Egypt (Fayoum), and Benghazi, Libya – and focuses on high-quality formulations for both household and commercial cleaning applications.",
        "Its flagship offering is a multi-purpose stain-removing cleaner, and the product portfolio includes floor cleaners, air fresheners, fabric softeners, disinfectants, car care products, and specialized fragrances for gyms and hotels.",
        "GOLD CLEAN holds ISO 9001 certification for quality management and adheres to American Quality Safety Standards to ensure product safety and consistency. The company exports to major markets including Saudi Arabia, Libya, and several countries in Europe.",
        "This profile provides an overview of GOLD CLEAN’s facts, products, certifications, strategy and market positioning in both English and Arabic."
      ],
      features: [
        { icon: Factory, title: "Dual Manufacturing", desc: "Factories in Egypt & Libya" },
        { icon: Award, title: "ISO 9001 Certified", desc: "Quality management systems" },
        { icon: ShieldCheck, title: "AQSS", desc: "American Quality Safety Standards" },
        { icon: Droplets, title: "Diverse Portfolio", desc: "Household & commercial solutions" },
      ]
    },
    companyFacts: {
      title: "Company Facts",
      facts: [
        { label: "Name", value: "GOLD CLEAN" },
        { label: "Founded", value: "2017" },
        { label: "Corporate Identity", value: "American-Saudi-Egyptian" },
        { label: "Headquarters", value: "Riyadh, Saudi Arabia" },
        { label: "Factories", value: "Saudi Arabia: Khamis Mushait\nEgypt: Fayoum\nLibya: Benghazi" },
        { label: "Key Markets", value: "Egypt (domestic) | Saudi Arabia | Libya | Europe*" },
        { label: "Quality Certifications", value: "ISO 9001 (Quality Management); American Quality Safety Standards" },
        { label: "Major Partners", value: "Distributors and retail chains in KSA, and commercial accounts (hotels, malls, gyms)" }
      ],
      note: "* Europe exports are subject to selective distribution."
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
      ],
      note: "Note: Product availability and formulations may vary by country."
    },
    facilities: {
      title: "Facilities & Operations",
      paragraphs: [
        "GOLD CLEAN’s manufacturing footprint spans two countries: the Egyptian facility in the Second Industrial Zone (Fayoum) serves the local and regional markets, while the Benghazi factory in Libya caters to North Africa and nearby regions. The Libya plant is strategically positioned to supply local demand and re-export to nearby African markets. Both sites employ automated mixing lines for liquids and powders, with separate filling and packaging sections.",
        "Quality control and R&D laboratories are (expected to be) co-located at the Egyptian site (details confidential). All raw materials (surfactants, enzymes, fragrances) are sourced from certified suppliers. The production lines conform to both ISO 9001 and American Quality Safety Standards, ensuring consistent product quality. Process controls include batch record-keeping, in-process testing of viscosity and pH, and final product microbiological checks."
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
          title: "American Quality Safety Standards",
          desc: "Adherence to American Quality Safety Standards means the company applies strict sanitation, traceability, and documentation protocols in its production. (In chemical and personal-care manufacturing, this certification is often required by large clients.)"
        }
      ],
      note: "Certificates are verified annually by certified third-party auditors."
    },
    vision: {
      title: "Vision, Mission & Values",
      vision: {
        title: "Vision",
        desc: "By 2030, GOLD CLEAN aims to be the preferred cleaning products brand across Gulf Cooperation Council (GCC) and Arab markets, known for innovative, eco-friendly, and high-performance solutions. The company envisions expansion into wider global markets, leveraging its dual European–Saudi heritage for quality and regional insight."
      },
      mission: {
        title: "Mission",
        desc: "To develop and manufacture cleaning solutions that deliver superior cleaning efficacy and safety. We commit to innovation in formulation and packaging, meeting international standards (ISO & American Quality Safety Standards) and satisfying customer needs. GOLD CLEAN strives to build lasting partnerships with distributors and clients by offering reliability, technical support, and value-added service."
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
        { icon: ShieldCheck, title: "Quality & Compliance", desc: "Proven ISO 9001 system and American Quality Safety Standards attract institutional buyers (hotels, hospitals) requiring certified suppliers." },
        { icon: Coins, title: "Cost-Effectiveness", desc: "Lean manufacturing and regional factories help keep prices competitive (no premium for European import)." },
        { icon: MapPin, title: "Local Presence", desc: "Presence in Saudi and Libya via logistics centers/distributors shortens lead times in key markets." },
        { icon: Globe, title: "Market Coverage", desc: "Current distribution spans the entire value chain (wholesale, retail, hospitality); plans are in place to cover all Egyptian governorates through partnerships with local dealers." },
        { icon: Lightbulb, title: "Product Innovation", desc: "Continuous R&D (in collaboration with cosmetic and chemical experts) yields new variants (e.g., eco-friendly and antibacterial lines) – positioning GOLD CLEAN as forward-looking." }
      ],
      conclusion: "In short, GOLD CLEAN combines global quality standards with local operational efficiency."
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
      conclusion: "Our design team ensures all designs meet specific local legal requirements without sacrificing visual appeal."
    },
    tables: {
      title: "Comparative Tables",
      factories: {
        title: "Factories & Certifications",
        headers: ["Location / Certification", "Details"],
        rows: [
          ["Egypt – 2nd Industrial Zone, Fayoum", "Industrial production line (liquids/powders), in-house QC lab. (Exact address proprietary.)"],
          ["Libya – Benghazi industrial area", "Filling & packaging lines for North African market. (Details confidential.)"],
          ["ISO 9001", "Quality management system (framework for consistency)."],
          ["GMP", "Good Manufacturing Practices – strict production & hygiene protocols (aligns with chemical/pharma standards)."]
        ]
      },
      exportMarkets: {
        title: "Export Markets & Distribution",
        headers: ["Region / Country", "Status"],
        rows: [
          ["Saudi Arabia", "Established presence: major retailer accounts and hotel chains. Ongoing expansion via local distributors."],
          ["Libya", "Local production covers domestic demand. Export to neighboring North African markets (Tunisia, etc.)."],
          ["Europe", "Selective exports to EU countries (retail and B2B). EU Detergents compliance ensures market entry."],
          ["Egypt", "Home market (launch in 2026). Planning full national coverage (using wholesalers across all governorates)."]
        ]
      },
      priceList: {
        title: "Price List",
        headers: ["Product", "Price (SAR)"],
        rows: [
          ["Citrus (American)", "840"],
          ["Citrus (Egyptian)", "750"],
          ["GC Air Freshener (Gulf)", "750"],
          ["AQ Air Freshener (Gulf)", "480"],
          ["Flora Floor Cleaner (500ml)", "420"],
          ["GC Fabric Softener (3L)", "620"],
          ["GC Fabric Softener (1L)", "690"]
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
        "شركة جولد كلين هي شركة مصنعة ذات ملكية أمريكية-سعودية-مصرية متخصصة في منتجات التنظيف والعناية المحترفة، تأسست عام 2017. تمتلك الشركة مصانع في ثلاثة مواقع رئيسية – في المملكة العربية السعودية (خميس مشيط)، ومصر (محافظة الفيوم)، وليبيا (مدينة بنغازي) – وترتكز في تقديم تركيبات عالية الجودة للاستخدامات المنزلية والتجارية.",
        "المنتج الرئيسي للشركة هو منظف متعدد الاستخدامات لإزالة البقع، وتشمل محفظتها من المنتجات منظفات الأرضيات، معطرات الجو، منعمات الملابس، المطهرات، منتجات العناية بالسيارات، ومعطرات متخصصة لصالات الرياضة والفنادق.",
        "حصلت جولد كلين على شهادة ISO 9001 لنظام إدارة الجودة وتطبق المعايير الأمريكية لسلامة الجودة لضمان سلامة المنتجات واتساقها. تصدر الشركة منتجاتها إلى أسواق رئيسية منها المملكة العربية السعودية وليبيا وعدد من دول أوروبا.",
        "تقدم هذه الوثيقة عرضًا شاملاً عن حقائق الشركة، ومنتجاتها، وشهاداتها، واستراتيجيتها التسويقية باللغتين الإنجليزية والعربية."
      ],
      features: [
        { icon: Factory, title: "تصنيع مزدوج", desc: "مصانع في مصر وليبيا" },
        { icon: Award, title: "شهادة ISO 9001", desc: "أنظمة إدارة الجودة" },
        { icon: ShieldCheck, title: "(GMP) : المعايير الأمريكية لسلامة الجودة", desc: "المعايير الأمريكية لسلامة الجودة" },
        { icon: Droplets, title: "محفظة متنوعة", desc: "حلول منزلية وتجارية" },
      ]
    },
    companyFacts: {
      title: "حقائق الشركة",
      facts: [
        { label: "اسم الشركة", value: "جولد كلين" },
        { label: "سنة التأسيس", value: "2017" },
        { label: "هوية الشركة", value: "شركة أمريكية-سعودية-مصرية" },
        { label: "المقر الرئيسي", value: "المملكة العربية السعودية، الرياض.\n مصر، الجيزة، اكتوبر." },
        { label: "المصانع", value: "السعودية: خميس مشيط\nمصر: الفيوم، المنطقة الصناعية\nليبيا: بنغازي" },
        { label: "الأسواق الرئيسية", value: "مصر (محلياً) | السعودية | ليبيا | أوروبا" },
        { label: "شهادات الجودة", value: "ISO 9001 (إدارة الجودة)؛ وتطبيق المعايير الأمريكية لسلامة الجودة" },
        { label: "الشركاء الرئيسيون", value: "الموزعون وسلاسل التجزئة في السعودية، والحسابات التجارية (فنادق، مراكز تجارية، صالات رياضية)" }
      ],
    },
    products: {
      title: "المنتجات والخدمات",
      description: "تقدم جولد كلين مجموعة شاملة من منتجات التنظيف والعناية للاستخدام المنزلي والاحترافي. المنتج الأهم والأبرز لدينا هو المنظف الشامل الذي يحظى بطلب عالٍ لثباته الطويل. تشمل خطوط الإنتاج الأخرى:",
      lines: [
        "منظف مزيل بقع شامل: فعال على الدهون والبقع المستعصية.",
        "معطر الأرضيات: منتجنا الأهم والأكثر طلباً، يتميز بعطور تدوم طويلاً لتعطير الأرضيات والمساحات.",
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
      ],
    },
    facilities: {
      title: "المصانع والعمليات",
      paragraphs: [
        "يمتد التواجد الصناعي لشركة جولد كلين في دولتين: المنشأة المصرية في المنطقة الصناعية الثانية (الفيوم) تخدم الأسواق المحلية والإقليمية، بينما مصنع بنغازي في ليبيا يلبي احتياجات شمال إفريقيا والمناطق المجاورة. يتميز مصنع ليبيا بموقع استراتيجي لتوريد الطلب المحلي وإعادة التصدير إلى الأسواق الأفريقية المجاورة. يعتمد كلا الموقعين على خطوط خلط آلية للسوائل والمساحيق, مع أقسام منفصلة للتعبئة والتغليف.",
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
          title: "المعايير الأمريكية لسلامة الجودة",
          desc: "الالتزام بـ المعايير الأمريكية لسلامة الجودة يعني أن الشركة تطبق بروتوكولات صارمة للصرف الصحي والتتبع والتوثيق في إنتاجها. (في تصنيع المواد الكيميائية والعناية الشخصية، غالباً ما تكون هذه الشهادة مطلوبة من قبل كبار العملاء.)"
        }
      ],
      note: "تخضع جميع الشهادات للتدقيق والتحقق السنوي من جهات مستقلة معتمدة."
    },
    vision: {
      title: "الرؤية، الرسالة، والقيم",
      vision: {
        title: "الرؤية",
        desc: "بحلول عام 2030، تهدف جولد كلين إلى أن تكون العلامة التجارية المفضلة لمنتجات التنظيف عبر دول مجلس التعاون الخليجي والأسواق العربية، والمعروفة بحلولها المبتكرة والصديقة للبيئة وذات الأداء العالي. تتطلع الشركة للتوسع في أسواق عالمية أوسع، معتمدة على تراثها الأوروبي-السعودي المزدوج لتقديم الجودة والفهم الإقليمي."
      },
      mission: {
        title: "الرسالة",
        desc: "تطوير وتصنيع حلول تنظيف توفر فعالية وسلامة فائقة. نحن نلتزم بالابتكار في التركيبات والتعبئة، وتلبية المعايير الدولية (ISO والمعايير الأمريكية لسلامة الجودة) واحتياجات العملاء. تسعى جولد كلين لبناء شراكات دائم مع الموزعين والعملاء من خلال تقديم الموثوقية والدعم الفني والخدمات ذات القيمة المضافة."
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
        { icon: ShieldCheck, title: "الجودة والامتثال", desc: "نظام ISO 9001 الموثوق والمعايير الأمريكية لسلامة الجودة تجذب المشترين المؤسسيين (الفنادق والمستشفيات) الذين يطلبون موردين معتمدين." },
        { icon: Coins, title: "فعالية التكلفة", desc: "التصنيع المرن والمصانع الإقليمية تساعد في الحفاظ على أسعار تنافسية (بدون تكلفة إضافية للاستيراد الأوروبي)." },
        { icon: MapPin, title: "التواجد المحلي", desc: "التواجد في السعودية وليبيا عبر مراكز لوجستية/موزعين يقصر فترات التسليم في الأسواق الرئيسية." },
        { icon: Globe, title: "تغطية السوق", desc: "يمتد التوزيع الحالي ليشمل سلسلة القيمة بأكملها (الجملة، التجزئة، الضيافة)؛ وهناك خطط لتغطية جميع محافظات مصر من خلال الشراكات مع الوكلاء المحليين." },
        { icon: Lightbulb, title: "ابتكار المنتجات", desc: "البحث والتطوير المستمر (بالتعاون مع خبراء مستحضرات التجميل والكيمياء) ينتج متغيرات جديدة (مثل الخطوط الصديقة للبيئة والمضادة للبكتيريا) - مما يضع جولد كلين كشركة تتطلع للمستقبل." }
      ],
      conclusion: "باختصار، تجمع جولد كلين بين معايير الجودة العالمية وكفاءة التشغيل المحلية لتوفير أفضل قيمة."
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
      conclusion: "يحرص فريق التصميم والجودة لدينا على توافق الملصقات مع المعايير القانونية المحلية دون التأثير على جاذبية التصميم."
    },
    tables: {
      title: "جداول توضيحية",
      factories: {
        title: "المصانع والشهادات",
        headers: ["الموقع / الشهادة", "تفاصيل"],
        rows: [
          ["مصر - المنطقة الصناعية الثانية، الفيوم", "خط إنتاج صناعي (سوائل/مساحيق)، مختبر داخلي لمراقبة الجودة. (العنوان الدقيق سري)."],
          ["ليبيا - المنطقة الصناعية ببنغازي", "خطوط تعبئة وتغليف لسوق شمال إفريقيا. (التفاصيل سرية)."],
          ["ISO 9001", "نظام إدارة الجودة (إطار عمل للاتساق)."],
          ["المعايير الأمريكية", "المعايير الأمريكية لسلامة الجودة - بروتوكولات إنتاج ونظافة صارمة (تتوافق مع المعايير الكيميائية/الصيدلانية)."]
        ]
      },
      exportMarkets: {
        title: "الأسواق التصديرية والتوزيع",
        headers: ["المنطقة / البلد", "الحالة"],
        rows: [
          ["السعودية", "حضور راسخ: حسابات تجار التجزئة الكبرى وسلاسل الفنادق. توسع مستمر عبر الموزعين المحليين."],
          ["ليبيا", "الإنتاج المحلي يغطي الطلب المحلي. التصدير إلى أسواق شمال إفريقيا المجاورة (تونس، إلخ)."],
          ["أوروبا", "صادرات انتقائية لدول الاتحاد الأوروبي (التجزئة و B2B). الامتثال للوائح المنظفات الأوروبية يضمن دخول السوق."],
          ["مصر", "السوق المحلي (إطلاق عام 2026). التخطيط لتغطية وطنية شاملة (باستخدام تجار الجملة في جميع المحافظات)."]
        ]
      },
      priceList: {
        title: "قائمة الأسعار",
        headers: ["المنتج", "السعر (ريال)"],
        rows: [
          ["سيترس (أمريكي)", "840"],
          ["سيترس (مصري)", "750"],
          ["معطر GC (خليجي)", "750"],
          ["معطر AQ (خليجي)", "480"],
          ["معطر أرضيات فلورا (500 مل)", "420"],
          ["منعم ملابس GC (3 لتر)", "620"],
          ["منعم ملابس GC (1 لتر)", "690"]
        ]
      }
    },
    timeline: {
      title: "مخطط زمني للتوسع (حتى 2030)",
      description: "يوضح هذا المخطط الزمني المعالم (الفعلية والمخطط لها) لنمو جولد كلين. يسلط الضوء على التأسيس، والشهادات، ودخول الأسواق، والرؤية المستقبلية.",
      events: [
        { year: "التأسيس", title: "تأسيس الشركة", desc: "تأسيس خطوط الإنتاج في الفيوم (مصر) وبنغازي (ليبيا)." },
        { year: "الشهادات", title: "الجودة والمعايير", desc: "الحصول على شهادات ISO 9001 والمعايير الأمريكية لسلامة الجودة، لضمان الامتثال الدولي." },
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
