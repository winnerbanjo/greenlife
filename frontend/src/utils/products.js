// Product categorization utility
// Groups product images by product name
// All images are served from the public folder - use raw paths starting with /

export const getProductGroups = () => {
  // Extract unique product names from filenames
  const productMap = {};
  
  // Product images from /public folder
  const productImages = [
    // Lonart products
    { name: 'Lonart', images: ['lonart (1).jpg', 'lonart (2).jpg', 'lonart (3).jpg', 'lonart (4).jpg', 'Lonart 1 x 12 (1).jpg', 'Lonart 1 x 12 (2).jpg', 'Lonart 1 x 12 (3).jpg', 'Lonart 1 x 12 (4).jpg', 'Lonart ds (1).jpg', 'Lonart ds (2).jpg', 'Lonart ds (3).jpg', 'Lonart ds (4).jpg'], category: 'Anti-Malarials', logo: '/Group-2087326717.svg' },
    
    // Manix products
    { name: 'Manix', images: ['Manix capsule (1).jpg', 'Manix capsule (2).jpg'], category: 'Pain Management', logo: '/Manix-1-1.svg' },
    
    // Amoxicliq products
    { name: 'Amoxicliq', images: ['AMOXICLIQ.svg'], category: 'Antibiotics', logo: '/AMOXICLIQ.svg' },
    
    // P-alaxin products
    { name: 'P-alaxin', images: ['P-alaxin 1 x 9 (1).jpg', 'P-alaxin 1 x 9 (2).jpg', 'P-alaxin 1 x 9 (3).jpg', 'P-alaxin 1 x 9 (4).jpg', 'P-alaxin 1 x12 (1).jpg', 'P-alaxin 1 x12 (2).jpg', 'P-alaxin 1 x12 (3).jpg', 'P-alaxin 1 x12 (4).jpg', 'P-alaxin 1 x12 (5).jpg', 'P-alaxin 1 x12 (6).jpg', 'P-alaxin 1 x12 (7).jpg', 'P-alaxin 1 x12 (8).jpg'], category: 'Anti-Malarials', logo: '/Group-2087326718.svg' },
    
    // G-clav products
    { name: 'G-clav', images: ['G-clav (1).jpg', 'G-clav (2).jpg', 'G-clav (3).jpg', 'G-clav (4).jpg', 'G-clav 625 (1).jpg', 'G-clav 625 (2).jpg', 'G-clav 625 (3).jpg'], category: 'Antibiotics', logo: '/Group-1000010927.svg' },
    
    // Lofnac products
    { name: 'Lofnac', images: ['Lofnac 100 (1).jpg', 'Lofnac 100 (2).jpg', 'Lofnac 100 (3).jpg', 'Lofnac 100 (4).jpg', 'Lofnac 100 (5).jpg', 'Lofnac gel (1).jpg', 'Lofnac gel (2).jpg', 'Lofnac gel (3).jpg', 'Lofnac gel (4).jpg', 'Lofnac gel (5).jpg', 'Lofnac gel (14).jpg', 'Lofnac roll on (1).jpg', 'Lofnac roll on (2).jpg', 'Lofnac roll on (3).jpg', 'Lofnac roll on (4).jpg', 'Lofnac roll on (5).jpg', 'Lofnac roll on (6).jpg'], category: 'Pain Management', logo: '/Group-2087326719.svg' },
    
    // Gsunate products
    { name: 'Gsunate', images: ['Gsunate (1).jpg', 'Gsunate (2).jpg', 'Gsunate (3).jpg', 'Gsunate (4).jpg', 'Gsunate 30 (1).jpg', 'Gsunate 30 (2).jpg', 'Gsunate 30 (3).jpg', 'Gsunate 30 (4).jpg', 'Gsunate120 (1).jpg', 'Gsunate120 (2).jpg', 'Gsunate120 (3).jpg', 'Gsunate120 (4).jpg', 'Gsunate120 (5).jpg', 'Gsunate120 (6).jpg', 'Gsunate120 (7).jpg', 'Gsunate120 (8).jpg'], category: 'Anti-Malarials', logo: '/Group-2087326720.svg' },
    
    // Zedex products
    { name: 'Zedex', images: ['Zedex (1).jpg', 'Zedex (2).jpg', 'Zedex (3).jpg', 'Zedex (4).jpg', 'Zedex cold (1).jpg', 'Zedex cold (2).jpg', 'Zedex cold (3).jpg', 'Zedex cold (4).jpg'], category: 'Pain Management', logo: null },
    
    // Omefast products
    { name: 'Omefast', images: ['Omefast 20 (1).jpg', 'Omefast 20 (2).jpg', 'Omefast 20 (3).jpg', 'Omefast plus (1).jpg', 'Omefast plus (2).jpg', 'Omefast plus (3).jpg', 'Omefast plus (4).jpg', 'Omefast plus (5).jpg', 'Omefast plus (6).jpg'], category: 'Cardiovascular', logo: null },
    
    // Powerheat products
    { name: 'Powerheat', images: ['Powerheat (1).jpg', 'Powerheat (2).jpg', 'Powerheat (3).jpg', 'Powerheat (4).jpg', 'Powerheat (5).jpg', 'Powerheat (6).jpg', 'Powerheat (7).jpg', 'Powerheat (8).jpg', 'Powerheat (9).jpg', 'Powerheat (10).jpg', 'Powerheat (11).jpg', 'Powerheat (12).jpg', 'Powerheat (13).jpg', 'Powerheat (14).jpg', 'Powerheat (15).jpg', 'Powerheat (16).jpg', 'Powerheat (17).jpg'], category: 'Pain Management', logo: null },
    
    // Day by day products
    { name: 'Day by Day', images: ['Day by day vitamin c (1).jpg', 'Day by day vitamin c (2).jpg', 'Day by day vitamin c (3).jpg', 'Day by day wellness (1).jpg', 'Day by day wellness (2).jpg', 'Day by day wellness (3).jpg', 'Day by day capsule (6).png'], category: 'Multivitamins', logo: null },
    
    // Essential 10 products
    { name: 'Essential 10', images: ['Essential 10  (1).jpg', 'Essential 10  (2).jpg', 'Essential 10  (3).jpg', 'Essential 10  (4).jpg', 'Essential 10  (5).jpg', 'Essential 10  (6).jpg', 'Essential 10  (6).png'], category: 'Multivitamins', logo: null },
    
    // Ceferex products
    { name: 'Ceferex', images: ['Ceferex (1).jpg', 'Ceferex (2).jpg', 'Ceferex (3).jpg', 'Ceferex (4).jpg', 'Ceferex (5).jpg'], category: 'Antibiotics', logo: null },
    
    // Ceftriaxone products
    { name: 'Ceftriaxone', images: ['Ceftriaxone (1).jpg', 'Ceftriaxone (2).jpg', 'Ceftriaxone (3).jpg', 'Ceftriaxone (4).jpg', 'Ceftriaxone (5).jpg', 'Ceftriaxone (6).jpg', 'Ceftriaxone (7).jpg', 'Ceftriaxone (8).jpg'], category: 'Antibiotics', logo: null },
    
    // Clamoxin products
    { name: 'Clamoxin', images: ['Clamoxin (1).jpg', 'Clamoxin (2).jpg', 'Clamoxin (3).jpg', 'Clamoxin 1200 (1).jpg', 'Clamoxin 1200 (2).jpg', 'Clamoxin 1200 (3).jpg'], category: 'Antibiotics', logo: null },
    
    // G-roxim products
    { name: 'G-roxim', images: ['G-roxim (1).jpg', 'G-roxim (2).jpg', 'G-roxim (3).jpg', 'G-roxim (4).jpg', 'G-roxim 500 tablet (8).png'], category: 'Antibiotics', logo: null },
    
    // Gflox products
    { name: 'Gflox', images: ['Gflox 400 (1).jpg', 'Gflox 400 (2).jpg', 'Gflox 400 (3).jpg'], category: 'Antibiotics', logo: null },
    
    // Greentol products
    { name: 'Greentol', images: ['Greentol cough syrup (1).jpg', 'Greentol cough syrup (2).jpg', 'Greentol cough syrup (3).jpg', 'Greentol cough syrup (4).jpg', 'Greentol cough syrup (5).jpg', 'Greentol cough syrup (6).jpg', 'Greentol cough syrup (7).jpg', 'Greentol cough syrup (8).jpg', 'Greentol cough syrup (9).jpg', 'Greentol cough syrup (10).jpg'], category: 'Pain Management', logo: null },
    
    // Defacto products
    { name: 'Defacto', images: ['Defacto (1).jpg', 'Defacto (2).jpg', 'Defacto (3).jpg', 'Defacto (4).jpg', 'Defacto (5).jpg', 'Defacto (6).jpg', 'Defacto (7).jpg'], category: 'Fertility', logo: null },
    
    // Dexorange products
    { name: 'Dexorange', images: ['Dexorange (1).jpg', 'Dexorange (2).jpg', 'Dexorange (3).jpg', 'Dexorange (3).png'], category: 'Multivitamins', logo: null },
    
    // G-Amino products
    { name: 'G-Amino', images: ['G-Amino syrup (1).jpg', 'G-Amino syrup (2).jpg', 'G-Amino syrup (3).jpg', 'G-Amino syrup (3).png'], category: 'Supplements', logo: null },
    
    // G-derm products
    { name: 'G-derm', images: ['G-derm (1).jpg', 'G-derm (2).jpg', 'G-derm (3).jpg', 'G-derm (4).jpg'], category: 'Supplements', logo: null },
    
    // G oral products
    { name: 'G oral', images: ['G oral (1).jpg', 'G oral (2).jpg', 'G oral (3).jpg', 'G oral (4).jpg', 'G oral (5).jpg', 'G oral (6).jpg', 'G oral (7).jpg'], category: 'Supplements', logo: null },
    
    // G fed tablet
    { name: 'G fed tablet', images: ['G fed tablet (1).jpg', 'G fed tablet (2).jpg', 'G fed tablet (3).jpg'], category: 'Supplements', logo: null },
    
    // G spar tablet
    { name: 'G spar tablet', images: ['G spar tablet (1).jpg', 'G spar tablet (2).jpg', 'G spar tablet (3).jpg'], category: 'Supplements', logo: null },
    
    // G-tryp tablet
    { name: 'G-tryp tablet', images: ['G-tryp tablet (1).jpg', 'G-tryp tablet (2).jpg'], category: 'Supplements', logo: null },
    
    // Gremax products
    { name: 'Gremax', images: ['Gremax 250 (1).jpg', 'Gremax 250 (2).jpg', 'Gremax 250 (3).jpg'], category: 'Antibiotics', logo: null },
    
    // Greensol products
    { name: 'Greensol', images: ['Greensol (1).jpg', 'Greensol (2).jpg', 'Greensol (3).jpg', 'Greensol (4).jpg', 'Greensol (5).jpg'], category: 'Supplements', logo: null },
    
    // Greenlin products
    { name: 'Greenlin', images: ['Greenlin cough (1).jpg', 'Greenlin cough (2).jpg'], category: 'Pain Management', logo: null },
    
    // Greenlife products
    { name: 'Greenlife Centamycin', images: ['Greenlife centamycin (1).jpg', 'Greenlife centamycin (2).jpg', 'Greenlife centamycin (3).jpg'], category: 'Antibiotics', logo: null },
    
    { name: 'Greenlife Lincomycin', images: ['Greenlife lincomycin capsule (1).jpg', 'Greenlife lincomycin capsule (2).jpg', 'Greenlife lincomycin capsule (3).jpg'], category: 'Antibiotics', logo: null },
    
    // Gvither products
    { name: 'Gvither', images: ['Gvither Injection (1).jpg', 'Gvither Injection (2).jpg'], category: 'Supplements', logo: null },
    
    // Neoxicam products
    { name: 'Neoxicam', images: ['Neoxicam 20 (1).jpg', 'Neoxicam 20 (2).jpg', 'Neoxicam 20 (3).jpg'], category: 'Pain Management', logo: null },
    
    // Norfix products
    { name: 'Norfix', images: ['Norfix (1).jpg', 'Norfix (2).jpg', 'Norfix (3).jpg', 'Norfix (4).jpg', 'Norfix (5).jpg'], category: 'Antibiotics', logo: null },
    
    // Trexip products
    { name: 'Trexip', images: ['Trexip 500 (1).jpg', 'Trexip 500 (2).jpg', 'Trexip 500 (3).jpg', 'Trexip-tz tablet (3)F.png'], category: 'Antibiotics', logo: null },
    
    // Uprone products
    { name: 'Uprone', images: ['Uprone (1).jpg', 'Uprone (2).jpg', 'Uprone (3).jpg', 'uprone.png'], category: 'Supplements', logo: null },
    
    // Zopent products
    { name: 'Zopent', images: ['Zopent (1).jpg', 'Zopent (2).jpg', 'Zopent (3).jpg'], category: 'Supplements', logo: null },
    
    // Abther products
    { name: 'Abther', images: ['Abther 150 (1).jpg', 'Abther 150 (2).jpg', 'Abther 150 (3).jpg', 'Abther 225 (1).jpg', 'Abther 225 (2).jpg'], category: 'Anti-Malarials', logo: null },
    
    // Betaform products
    { name: 'Betaform', images: ['Betaform 500 (1).jpg', 'Betaform 500 (2).jpg', 'Betaform 500 (3).jpg', 'Betaform 500 (4).jpg'], category: 'Anti-Diabetics', logo: null },
    
    // Felvin products
    { name: 'Felvin', images: ['Felvin (1).jpg', 'Felvin (2).jpg', 'Felvin (3).jpg'], category: 'Pain Management', logo: null },
    
    // Fevicid products
    { name: 'Fevicid', images: ['Fevicid (1).jpg', 'Fevicid (2).jpg', 'Fevicid (3).jpg', 'Fevicid (4).jpg', 'Fevicid (5).jpg'], category: 'Pain Management', logo: null },
    
    // Fibrotin products
    { name: 'Fibrotin', images: ['Fibrotin (1).jpg', 'Fibrotin (2).jpg'], category: 'Supplements', logo: null },
    
    // Funbact products
    { name: 'Funbact', images: ['Funbact (1).jpg', 'Funbact (2).jpg', 'Funbact (3).jpg', 'Funbact (4).jpg', 'Funbact (5).jpg'], category: 'Supplements', logo: null },
    
    // Gixim products
    { name: 'Gixim', images: ['Gixim- 200 tablet (3).png'], category: 'Antibiotics', logo: null },
    
    // S-fin products
    { name: 'S-fin', images: ['S-fin (1).jpg', 'S-fin (2).jpg', 'S-fin (3).jpg'], category: 'Supplements', logo: null },
  ];
  
  return productImages.map(product => ({
    ...product,
    images: product.images.map(img => `/${img}`),
    primaryImage: `/${product.images[0]}`,
    logo: product.logo || null,
  }));
};

export const getLifestyleImages = () => {
  return [
    '/african-american-woman-pharmacist-smiling-confident-standing-pharmacy (1).jpg',
    '/portrait-man-working-as-chemist.jpg',
    '/portrait-woman-working-pharmaceutical-industry (3).jpg',
  ];
};
