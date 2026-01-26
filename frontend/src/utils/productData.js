// Comprehensive Product Data with Clinical Information
// Based on pharmaceutical standards and regulatory information
// All images are served from the public folder - use raw paths starting with /

const productDataRaw = {
  'Lonart': {
    name: 'Lonart',
    category: 'Anti-Malarials',
    description: 'Artemether + Lumefantrine combination therapy for the treatment of uncomplicated malaria',
    variants: [
      {
        name: 'Lonart (1 x 12)',
        strength: '20mg Artemether + 120mg Lumefantrine',
        packSize: '12 Tablets',
        image: '/Lonart 1 x 12 (1).jpg',
      },
      {
        name: 'Lonart DS (80/480mg)',
        strength: '80mg Artemether + 480mg Lumefantrine',
        packSize: '6 Tablets',
        image: '/Lonart ds (1).jpg',
      },
      {
        name: 'Lonart (20/120mg)',
        strength: '20mg Artemether + 120mg Lumefantrine',
        packSize: '12 Tablets',
        image: '/lonart (1).jpg',
      },
      {
        name: 'Lonart Dispersible',
        strength: '20mg Artemether + 120mg Lumefantrine',
        packSize: '12 Tablets',
        image: '/Lonart dispersible (1).jpg',
      },
      {
        name: 'Lonart Oral Suspension',
        strength: '15mg Artemether + 90mg Lumefantrine per 5ml',
        packSize: '60ml',
        image: '/lonart suspension (2).jpg',
      },
    ],
    indications: [
      'Treatment of uncomplicated malaria caused by Plasmodium falciparum',
      'First-line therapy for acute malaria in adults and children',
      'WHO prequalified for use in malaria-endemic regions',
    ],
    dosage: {
      adult: '4 tablets twice daily for 3 days (total 24 tablets)',
      pediatric: 'Dosage based on body weight: 5-15kg: 1 tablet, 15-25kg: 2 tablets, 25-35kg: 3 tablets, >35kg: 4 tablets',
      administration: 'Take with food or milk to enhance absorption. Complete full course even if symptoms improve.',
    },
    storage: 'Store below 30°C in a dry place. Protect from light. Keep out of reach of children.',
    pharmacology: 'Artemether and Lumefantrine act synergistically to rapidly clear parasitemia. Artemether provides rapid initial reduction, while Lumefantrine ensures complete parasite clearance.',
    logo: '/Group-2087326717.svg',
  },
  'Amoxicliq': {
    name: 'Amoxicliq',
    category: 'Antibiotics',
    description: 'Amoxicillin + Clavulanic Acid combination for broad-spectrum antibacterial therapy',
    variants: [
      {
        name: 'Amoxicliq Suspension',
        strength: '125mg Amoxicillin + 31.25mg Clavulanic Acid per 5ml',
        packSize: '60ml',
        image: '/AMOXICLIQ.svg',
      },
      {
        name: 'Amoxicliq Forte',
        strength: '250mg Amoxicillin + 62.5mg Clavulanic Acid per 5ml',
        packSize: '60ml',
        image: '/AMOXICLIQ.svg',
      },
    ],
    indications: [
      'Upper and lower respiratory tract infections',
      'Urinary tract infections',
      'Skin and soft tissue infections',
      'Otitis media',
      'Sinusitis',
    ],
    dosage: {
      adult: '250-500mg every 8 hours or 500-875mg every 12 hours',
      pediatric: '20-40mg/kg/day divided into 3 doses',
      administration: 'Take with or without food. Complete full course as prescribed.',
    },
    storage: 'Store suspension in refrigerator (2-8°C) after reconstitution. Use within 7 days. Store tablets below 25°C.',
    pharmacology: 'Amoxicillin is a broad-spectrum penicillin antibiotic. Clavulanic acid inhibits beta-lactamase enzymes, extending the spectrum of activity against resistant bacteria.',
    logo: '/AMOXICLIQ.svg',
  },
  'Manix': {
    name: 'Manix',
    category: 'Pain Management',
    description: 'Diclofenac sodium for relief of pain and inflammation',
    variants: [
      {
        name: 'Manix Capsule',
        strength: '50mg Diclofenac Sodium',
        packSize: '10 Capsules',
        image: '/Manix capsule (1).jpg',
      },
    ],
    indications: [
      'Rheumatoid arthritis',
      'Osteoarthritis',
      'Acute musculoskeletal disorders',
      'Post-operative pain',
      'Dysmenorrhea',
    ],
    dosage: {
      adult: '50mg two to three times daily, or 75mg twice daily',
      pediatric: 'Not recommended for children under 12 years',
      administration: 'Take with food to reduce gastrointestinal irritation.',
    },
    storage: 'Store below 30°C in a dry place. Protect from light.',
    pharmacology: 'Diclofenac sodium is a non-steroidal anti-inflammatory drug (NSAID) that inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and providing analgesic and anti-inflammatory effects.',
    logo: '/Manix-1-1.svg',
  },
  'P-alaxin': {
    name: 'P-alaxin',
    category: 'Anti-Malarials',
    description: 'Dihydroartemisinin + Piperaquine for treatment of uncomplicated malaria',
    variants: [
      {
        name: 'P-alaxin (1 x 12)',
        strength: '40mg Dihydroartemisinin + 320mg Piperaquine',
        packSize: '12 Tablets',
        image: '/P-alaxin 1 x12 (1).jpg',
      },
      {
        name: 'P-alaxin (1 x 9)',
        strength: '40mg Dihydroartemisinin + 320mg Piperaquine',
        packSize: '9 Tablets',
        image: '/P-alaxin 1 x 9 (1).jpg',
      },
      {
        name: 'P-alaxin Suspension',
        strength: '20mg Dihydroartemisinin + 160mg Piperaquine per 5ml',
        packSize: '60ml',
        image: '/P-alaxin suspension (1).jpg',
      },
    ],
    indications: [
      'Treatment of uncomplicated malaria caused by Plasmodium falciparum',
      'Alternative first-line therapy for malaria',
      'Suitable for patients with artemether-lumefantrine resistance',
    ],
    dosage: {
      adult: '3 tablets once daily for 3 days (total 9 tablets)',
      pediatric: 'Dosage based on body weight. Administer once daily for 3 days.',
      administration: 'Take with food. Complete full 3-day course.',
    },
    storage: 'Store below 30°C in a dry place. Protect from light.',
    pharmacology: 'Dihydroartemisinin provides rapid parasite clearance. Piperaquine has a long half-life, ensuring complete parasite elimination and reducing risk of recrudescence.',
    logo: '/Group-2087326718.svg',
  },
  'G-clav': {
    name: 'G-clav',
    category: 'Antibiotics',
    description: 'Amoxicillin + Clavulanic Acid combination antibiotic',
    variants: [
      {
        name: 'G-clav 625',
        strength: '500mg Amoxicillin + 125mg Clavulanic Acid',
        packSize: '10 Tablets',
        image: '/G-clav 625 (1).jpg',
      },
      {
        name: 'G-clav',
        strength: '250mg Amoxicillin + 125mg Clavulanic Acid',
        packSize: '10 Tablets',
        image: '/G-clav (1).jpg',
      },
    ],
    indications: [
      'Respiratory tract infections',
      'Urinary tract infections',
      'Skin and soft tissue infections',
      'Bone and joint infections',
    ],
    dosage: {
      adult: '625mg every 8 hours or 1g every 12 hours',
      pediatric: '20-40mg/kg/day divided into 3 doses',
      administration: 'Take at the start of a meal to enhance absorption and reduce side effects.',
    },
    storage: 'Store below 25°C in a dry place. Keep out of reach of children.',
    pharmacology: 'Broad-spectrum beta-lactam antibiotic combination effective against both gram-positive and gram-negative bacteria, including beta-lactamase producing strains.',
    logo: '/Group-1000010927.svg',
  },
};

// Use productDataRaw directly - all paths are already correct local paths
export const productData = productDataRaw;

export const getProductByName = (name) => {
  return productData[name] || null;
};

export const getAllProducts = () => {
  return Object.values(productData);
};

export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return Object.values(productData).filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};
