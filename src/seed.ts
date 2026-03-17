import "dotenv/config";
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ??
  "mongodb+srv://diegomossonava248_db_user:prueba123@cluster0.zlqvrbm.mongodb.net/beacon_catalog?appName=Cluster0";

// ─── Product Shape ──────────────────────────────────────────────────────────
// This is the schema candidates should replicate in their Mongoose model.
// DO NOT import this from your application code — build your own model!

const ProductSeedSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "medicamentos",
        "suplementos",
        "cuidado-personal",
        "dispositivos-medicos",
      ],
    },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    requiresPrescription: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product ?? mongoose.model("Product", ProductSeedSchema);

// ─── Seed Data ──────────────────────────────────────────────────────────────

const products = [
  // ── Medicamentos (8) ──────────────────────────────────────────────────────
  {
    name: "Ibuprofen 400mg Tablets",
    slug: "ibuprofen-400mg-tablets",
    description:
      "Non-steroidal anti-inflammatory tablets for pain relief and fever reduction. Pack of 30 tablets.",
    price: 8.99,
    category: "medicamentos",
    brand: "MediCore",
    stock: 150,
    image: "https://placehold.co/400x400/EBF5FB/2980B9?text=Ibuprofen",
    requiresPrescription: false,
  },
  {
    name: "Amoxicillin 500mg Capsules",
    slug: "amoxicillin-500mg-capsules",
    description:
      "Broad-spectrum antibiotic for bacterial infections. Pack of 21 capsules. Requires medical prescription.",
    price: 15.5,
    category: "medicamentos",
    brand: "PharmaTrust",
    stock: 80,
    image: "https://placehold.co/400x400/FDEDEC/E74C3C?text=Amoxicillin",
    requiresPrescription: true,
  },
  {
    name: "Omeprazole 20mg Capsules",
    slug: "omeprazole-20mg-capsules",
    description:
      "Proton pump inhibitor for acid reflux and gastric ulcer treatment. Pack of 14 capsules.",
    price: 12.75,
    category: "medicamentos",
    brand: "GastroRelief",
    stock: 200,
    image: "https://placehold.co/400x400/F5EEF8/8E44AD?text=Omeprazole",
    requiresPrescription: false,
  },
  {
    name: "Metformin 850mg Tablets",
    slug: "metformin-850mg-tablets",
    description:
      "Oral diabetes medication to control blood sugar levels. Pack of 60 tablets. Requires prescription.",
    price: 22.0,
    category: "medicamentos",
    brand: "GlucoBalance",
    stock: 45,
    image: "https://placehold.co/400x400/E8F8F5/1ABC9C?text=Metformin",
    requiresPrescription: true,
  },
  {
    name: "Loratadine 10mg Tablets",
    slug: "loratadine-10mg-tablets",
    description:
      "Non-drowsy antihistamine for seasonal allergy relief. Pack of 30 tablets.",
    price: 9.25,
    category: "medicamentos",
    brand: "AllerFree",
    stock: 300,
    image: "https://placehold.co/400x400/FEF9E7/F1C40F?text=Loratadine",
    requiresPrescription: false,
  },
  {
    name: "Acetaminophen 500mg Tablets",
    slug: "acetaminophen-500mg-tablets",
    description:
      "Analgesic and antipyretic for headache, muscle pain, and fever. Pack of 50 tablets.",
    price: 6.5,
    category: "medicamentos",
    brand: "MediCore",
    stock: 500,
    image: "https://placehold.co/400x400/EBF5FB/3498DB?text=Acetaminophen",
    requiresPrescription: false,
  },
  {
    name: "Ciprofloxacin 500mg Tablets",
    slug: "ciprofloxacin-500mg-tablets",
    description:
      "Fluoroquinolone antibiotic for urinary tract and respiratory infections. Pack of 14 tablets.",
    price: 18.99,
    category: "medicamentos",
    brand: "PharmaTrust",
    stock: 60,
    image: "https://placehold.co/400x400/FDEDEC/C0392B?text=Ciprofloxacin",
    requiresPrescription: true,
  },
  {
    name: "Diclofenac 50mg Gel",
    slug: "diclofenac-50mg-gel",
    description:
      "Topical anti-inflammatory gel for muscle and joint pain. 100g tube.",
    price: 14.25,
    category: "medicamentos",
    brand: "FlexiCare",
    stock: 120,
    image: "https://placehold.co/400x400/E8F8F5/16A085?text=Diclofenac+Gel",
    requiresPrescription: false,
  },

  // ── Suplementos (8) ──────────────────────────────────────────────────────
  {
    name: "Vitamin D3 5000 IU Softgels",
    slug: "vitamin-d3-5000-iu-softgels",
    description:
      "High-potency vitamin D3 for bone health and immune support. 120 softgels.",
    price: 16.99,
    category: "suplementos",
    brand: "VitaPlus",
    stock: 250,
    image: "https://placehold.co/400x400/FEF9E7/F39C12?text=Vitamin+D3",
    requiresPrescription: false,
  },
  {
    name: "Omega-3 Fish Oil 1000mg",
    slug: "omega-3-fish-oil-1000mg",
    description:
      "Purified fish oil capsules rich in EPA and DHA for cardiovascular health. 90 softgels.",
    price: 24.5,
    category: "suplementos",
    brand: "OceanHealth",
    stock: 180,
    image: "https://placehold.co/400x400/EBF5FB/2E86C1?text=Omega-3",
    requiresPrescription: false,
  },
  {
    name: "Magnesium Glycinate 400mg",
    slug: "magnesium-glycinate-400mg",
    description:
      "Highly absorbable magnesium for muscle relaxation and better sleep. 120 capsules.",
    price: 19.75,
    category: "suplementos",
    brand: "MineralFit",
    stock: 140,
    image: "https://placehold.co/400x400/F5EEF8/7D3C98?text=Magnesium",
    requiresPrescription: false,
  },
  {
    name: "Probiotics 50 Billion CFU",
    slug: "probiotics-50-billion-cfu",
    description:
      "Multi-strain probiotic for digestive health and immune function. 30 delayed-release capsules.",
    price: 29.99,
    category: "suplementos",
    brand: "GutBalance",
    stock: 95,
    image: "https://placehold.co/400x400/E8F8F5/17A589?text=Probiotics",
    requiresPrescription: false,
  },
  {
    name: "Vitamin C 1000mg with Rose Hips",
    slug: "vitamin-c-1000mg-rose-hips",
    description:
      "Immune-boosting vitamin C with natural rose hips for enhanced absorption. 100 tablets.",
    price: 11.99,
    category: "suplementos",
    brand: "VitaPlus",
    stock: 350,
    image: "https://placehold.co/400x400/FEF9E7/E67E22?text=Vitamin+C",
    requiresPrescription: false,
  },
  {
    name: "Zinc Picolinate 50mg",
    slug: "zinc-picolinate-50mg",
    description:
      "Essential mineral for immune support and skin health. 120 capsules.",
    price: 13.5,
    category: "suplementos",
    brand: "MineralFit",
    stock: 220,
    image: "https://placehold.co/400x400/EBF5FB/2471A3?text=Zinc",
    requiresPrescription: false,
  },
  {
    name: "Collagen Peptides Powder",
    slug: "collagen-peptides-powder",
    description:
      "Hydrolyzed collagen for skin elasticity, joint health, and hair growth. 300g unflavored powder.",
    price: 34.99,
    category: "suplementos",
    brand: "BeautyVital",
    stock: 75,
    image: "https://placehold.co/400x400/FDEDEC/E74C3C?text=Collagen",
    requiresPrescription: false,
  },
  {
    name: "B-Complex Vitamin",
    slug: "b-complex-vitamin",
    description:
      "Complete B vitamin complex for energy metabolism and nervous system support. 60 tablets.",
    price: 14.25,
    category: "suplementos",
    brand: "VitaPlus",
    stock: 190,
    image: "https://placehold.co/400x400/E8F8F5/1ABC9C?text=B-Complex",
    requiresPrescription: false,
  },

  // ── Cuidado Personal (8) ─────────────────────────────────────────────────
  {
    name: "SPF 50+ Sunscreen Lotion",
    slug: "spf-50-sunscreen-lotion",
    description:
      "Broad-spectrum UVA/UVB protection sunscreen. Water-resistant for 80 minutes. 200ml.",
    price: 18.99,
    category: "cuidado-personal",
    brand: "SkinShield",
    stock: 160,
    image: "https://placehold.co/400x400/FEF9E7/D4AC0D?text=Sunscreen+SPF50",
    requiresPrescription: false,
  },
  {
    name: "Antibacterial Hand Gel 500ml",
    slug: "antibacterial-hand-gel-500ml",
    description:
      "70% alcohol hand sanitizer with aloe vera. Kills 99.9% of germs. 500ml pump bottle.",
    price: 7.5,
    category: "cuidado-personal",
    brand: "CleanGuard",
    stock: 400,
    image: "https://placehold.co/400x400/EBF5FB/5DADE2?text=Hand+Gel",
    requiresPrescription: false,
  },
  {
    name: "Moisturizing Body Lotion",
    slug: "moisturizing-body-lotion",
    description:
      "Dermatologist-tested body lotion with shea butter and vitamin E. Fragrance-free. 400ml.",
    price: 12.99,
    category: "cuidado-personal",
    brand: "DermaSoft",
    stock: 210,
    image: "https://placehold.co/400x400/F5EEF8/AF7AC5?text=Body+Lotion",
    requiresPrescription: false,
  },
  {
    name: "Fluoride Toothpaste Whitening",
    slug: "fluoride-toothpaste-whitening",
    description:
      "Whitening toothpaste with fluoride for cavity protection and enamel strengthening. 150g.",
    price: 5.99,
    category: "cuidado-personal",
    brand: "BrightSmile",
    stock: 500,
    image: "https://placehold.co/400x400/E8F8F5/1ABC9C?text=Toothpaste",
    requiresPrescription: false,
  },
  {
    name: "Anti-Dandruff Shampoo",
    slug: "anti-dandruff-shampoo",
    description:
      "Medicated shampoo with ketoconazole for dandruff and seborrheic dermatitis. 250ml.",
    price: 14.5,
    category: "cuidado-personal",
    brand: "ScalpCare",
    stock: 130,
    image: "https://placehold.co/400x400/FDEDEC/E74C3C?text=Shampoo",
    requiresPrescription: false,
  },
  {
    name: "Lip Balm SPF 15 Pack",
    slug: "lip-balm-spf-15-pack",
    description:
      "Hydrating lip balm with sun protection. Pack of 3 (vanilla, mint, unscented).",
    price: 8.25,
    category: "cuidado-personal",
    brand: "SkinShield",
    stock: 280,
    image: "https://placehold.co/400x400/FEF9E7/F1C40F?text=Lip+Balm",
    requiresPrescription: false,
  },
  {
    name: "Retinol Night Cream 50ml",
    slug: "retinol-night-cream-50ml",
    description:
      "Anti-aging night cream with 0.5% retinol and hyaluronic acid. For all skin types.",
    price: 27.99,
    category: "cuidado-personal",
    brand: "DermaSoft",
    stock: 3,
    image: "https://placehold.co/400x400/F5EEF8/8E44AD?text=Retinol+Cream",
    requiresPrescription: false,
  },
  {
    name: "Bamboo Charcoal Face Wash",
    slug: "bamboo-charcoal-face-wash",
    description:
      "Deep-cleansing face wash with activated charcoal for oily and acne-prone skin. 150ml.",
    price: 11.5,
    category: "cuidado-personal",
    brand: "CleanGuard",
    stock: 170,
    image: "https://placehold.co/400x400/EBF5FB/2C3E50?text=Face+Wash",
    requiresPrescription: false,
  },

  // ── Dispositivos Medicos (6) ─────────────────────────────────────────────
  {
    name: "Digital Blood Pressure Monitor",
    slug: "digital-blood-pressure-monitor",
    description:
      "Automatic upper arm blood pressure monitor with LCD display. Memory for 120 readings. Includes carrying case.",
    price: 49.99,
    category: "dispositivos-medicos",
    brand: "VitalCheck",
    stock: 35,
    image:
      "https://placehold.co/400x400/EBF5FB/2980B9?text=BP+Monitor",
    requiresPrescription: false,
  },
  {
    name: "Infrared Forehead Thermometer",
    slug: "infrared-forehead-thermometer",
    description:
      "Non-contact digital thermometer with instant reading. Fever alarm and memory recall.",
    price: 32.5,
    category: "dispositivos-medicos",
    brand: "TempSafe",
    stock: 90,
    image:
      "https://placehold.co/400x400/FDEDEC/E74C3C?text=Thermometer",
    requiresPrescription: false,
  },
  {
    name: "Pulse Oximeter Fingertip",
    slug: "pulse-oximeter-fingertip",
    description:
      "Portable pulse oximeter measuring SpO2 and pulse rate. OLED display with lanyard.",
    price: 28.75,
    category: "dispositivos-medicos",
    brand: "VitalCheck",
    stock: 65,
    image: "https://placehold.co/400x400/E8F8F5/1ABC9C?text=Oximeter",
    requiresPrescription: false,
  },
  {
    name: "Blood Glucose Monitor Kit",
    slug: "blood-glucose-monitor-kit",
    description:
      "Complete glucose monitoring kit with meter, 50 test strips, lancing device, and 50 lancets.",
    price: 39.99,
    category: "dispositivos-medicos",
    brand: "GlucoBalance",
    stock: 4,
    image:
      "https://placehold.co/400x400/FEF9E7/D4AC0D?text=Glucose+Monitor",
    requiresPrescription: false,
  },
  {
    name: "Nebulizer Machine Portable",
    slug: "nebulizer-machine-portable",
    description:
      "Compact mesh nebulizer for asthma and respiratory treatments. USB rechargeable. Includes adult and child masks.",
    price: 59.99,
    category: "dispositivos-medicos",
    brand: "BreathEasy",
    stock: 25,
    image: "https://placehold.co/400x400/F5EEF8/7D3C98?text=Nebulizer",
    requiresPrescription: false,
  },
  {
    name: "First Aid Kit 120-Piece",
    slug: "first-aid-kit-120-piece",
    description:
      "Comprehensive first aid kit with bandages, antiseptic wipes, gauze, scissors, tweezers, and emergency blanket.",
    price: 24.99,
    category: "dispositivos-medicos",
    brand: "SafetyFirst",
    stock: 110,
    image: "https://placehold.co/400x400/FDEDEC/C0392B?text=First+Aid+Kit",
    requiresPrescription: false,
  },
];

// ─── Run Seed ───────────────────────────────────────────────────────────────

async function seed() {
  console.log("🌱 Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);

  console.log("🗑️  Clearing existing products...");
  await Product.deleteMany({});

  console.log("📦 Inserting 30 products...");
  await Product.insertMany(products);

  console.log("✅ Seed complete! Inserted 30 products.");
  console.log("\nCategories breakdown:");

  const categories = [
    "medicamentos",
    "suplementos",
    "cuidado-personal",
    "dispositivos-medicos",
  ];
  for (const cat of categories) {
    const count = await Product.countDocuments({ category: cat });
    console.log(`   ${cat}: ${count} products`);
  }

  await mongoose.disconnect();
  console.log("\n🔌 Disconnected from MongoDB.");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
