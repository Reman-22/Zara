import type { Category, HeroCategory, Product, SubCategory } from '../types';

export const categories: Category[] = [
  { id: 'women', label: 'WOMEN' },
  { id: 'men', label: 'MEN' },
  { id: 'ceramics', label: 'CERAMICS' },
  { id: 'textiles', label: 'TEXTILES' },
  { id: 'jewelry', label: 'JEWELRY' }
];

export const heroCategories: HeroCategory[] = [
  {
    id: 'services',
    title: 'ARTISAN',
    isService: true,
    images: [
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1920&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1920&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80'
    ]
  },
  {
    id: 'women',
    title: 'WOMEN',
    routeCategory: 'women',
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1920&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80'
    ]
  },
  {
    id: 'men',
    title: 'MEN',
    routeCategory: 'men',
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1920&q=80',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1920&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80'
    ]
  },
  {
    id: 'ceramics',
    title: 'CERAMICS',
    routeCategory: 'ceramics',
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1920&q=80',
      'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=1920&q=80',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&q=80'
    ]
  },
  {
    id: 'textiles',
    title: 'TEXTILES',
    routeCategory: 'textiles',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80'
    ]
  },
  {
    id: 'jewelry',
    title: 'JEWELRY',
    routeCategory: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80'
    ]
  }
];

export const subCategories: SubCategory[] = [
  { id: 'clothing', label: 'CLOTHING', parentCategory: 'women', previewImages: ['https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&q=80', 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80'] },
  { id: 'bags-w', label: 'BAGS', parentCategory: 'women', previewImages: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80'] },
  { id: 'silk', label: 'SILK SCARVES', parentCategory: 'women', previewImages: ['https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=400&q=80', 'https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=400&q=80'] },
  { id: 'leather', label: 'LEATHER GOODS', parentCategory: 'men', previewImages: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80'] },
  { id: 'watches', label: 'WATCHES', parentCategory: 'men', previewImages: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80'] },
  { id: 'wallets', label: 'WALLETS', parentCategory: 'men', previewImages: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80', 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80'] },
  { id: 'vases', label: 'VASES', parentCategory: 'ceramics', previewImages: ['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&q=80', 'https://images.unsplash.com/photo-1612196808214-b8d6b8d6b8d6?w=400&q=80'] },
  { id: 'bowls', label: 'BOWLS', parentCategory: 'ceramics', previewImages: ['https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=400&q=80', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80'] },
  { id: 'throws', label: 'THROWS', parentCategory: 'textiles', previewImages: ['https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80', 'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=400&q=80'] },
  { id: 'tapestries', label: 'TAPESTRIES', parentCategory: 'textiles', previewImages: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=80'] },
  { id: 'rings', label: 'RINGS', parentCategory: 'jewelry', previewImages: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80'] },
  { id: 'necklaces', label: 'NECKLACES', parentCategory: 'jewelry', previewImages: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80'] }
];

const baseProducts: Product[] = [
  { id: 1, name: 'HANDCRAFTED CERAMIC VASE', price: 480, image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80'], colors: [{ name: 'Ivory', hex: '#f5f1e8' }, { name: 'Terracotta', hex: '#b8654b' }], category: 'ceramics', subCategory: 'vases', artisan: 'Maria Santos', story: 'Each piece is hand-thrown on a traditional wheel and fired in a wood-burning kiln.', material: 'Stoneware' },
  { id: 2, name: 'STONEWARE BOWL SET', price: 290, image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=1200&q=80', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80', 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80'], colors: [{ name: 'Sand', hex: '#c9b894' }, { name: 'Slate', hex: '#67717a' }], category: 'ceramics', subCategory: 'bowls', artisan: 'Kenji Tanaka', story: 'Individually glazed with volcanic ash for unique patterning.', material: 'Volcanic Stoneware' },
  { id: 3, name: 'LINEN THROW BLANKET', price: 560, image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80', 'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=1200&q=80', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80'], colors: [{ name: 'Natural', hex: '#d8c8ae' }, { name: 'Sage', hex: '#9aa58f' }], category: 'textiles', subCategory: 'throws', artisan: 'Anna Berg', story: 'Woven on a vintage loom from Belgian flax linen.', material: 'Belgian Linen' },
  { id: 4, name: 'WOVEN WALL TAPESTRY', price: 1250, image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80'], colors: [{ name: 'Natural', hex: '#d4c4b0' }, { name: 'Indigo', hex: '#263b73' }], category: 'textiles', subCategory: 'tapestries', artisan: 'Elena Voss', story: 'Created using ancient Nordic weaving techniques.', material: 'Organic Cotton' },
  { id: 5, name: 'SILVER PENDANT NECKLACE', price: 320, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80', 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80'], colors: [{ name: 'Silver', hex: '#c0c0c0' }, { name: 'Gold', hex: '#d4af37' }], category: 'jewelry', subCategory: 'necklaces', artisan: 'James Chen', story: 'Hand-forged from recycled sterling silver.', material: 'Sterling Silver' },
  { id: 6, name: 'GOLD FILIGREE RING', price: 890, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80'], colors: [{ name: 'Gold', hex: '#d4af37' }, { name: 'Rose Gold', hex: '#b76e79' }], category: 'jewelry', subCategory: 'rings', artisan: 'Sofia Romano', story: 'Made with Portuguese filigree techniques.', material: '18k Gold' },
  { id: 7, name: 'LEATHER MESSENGER BAG', price: 650, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80', 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&q=80'], colors: [{ name: 'Tan', hex: '#b48a5a' }, { name: 'Black', hex: '#111111' }], category: 'men', subCategory: 'leather', artisan: 'Antonio Rossi', story: 'Hand-stitched from full-grain Italian leather.', material: 'Full-Grain Leather' },
  { id: 8, name: 'WOODEN WATCH', price: 380, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=80', 'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&q=80'], colors: [{ name: 'Walnut', hex: '#5d432c' }, { name: 'Black', hex: '#111111' }], category: 'men', subCategory: 'watches', artisan: 'Henrik Larsson', story: 'Crafted from reclaimed walnut wood.', material: 'Reclaimed Walnut' },
  { id: 9, name: 'SILK BLOUSE', price: 480, image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=1200&q=80', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&q=80', 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80'], colors: [{ name: 'Ivory', hex: '#fffff0' }, { name: 'Midnight', hex: '#191970' }], category: 'women', subCategory: 'clothing', artisan: 'Sophie Laurent', story: 'Hand-finished silk blouse with mother-of-pearl buttons.', material: 'Silk' },
  { id: 10, name: 'WOOL COAT', price: 1200, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=80', gallery: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80', 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80', 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=1200&q=80'], colors: [{ name: 'Camel', hex: '#c19a6b' }, { name: 'Black', hex: '#111111' }], category: 'women', subCategory: 'clothing', artisan: 'Emma Lindqvist', story: 'Tailored from premium Italian wool with hand-sewn details.', material: 'Italian Wool' }
];

const imagePools: Record<string, string[]> = {
  women: [
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80',
    'https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?w=900&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80',
    'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=900&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80'
  ],
  men: [
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80',
    'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80',
    'https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=80',
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=900&q=80',
    'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80',
    'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=900&q=80',
    'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80'
  ],
  ceramics: [
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=900&q=80',
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=900&q=80',
    'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80',
    'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=900&q=80',
    'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=900&q=80',
    'https://images.unsplash.com/photo-1584990347449-a2d4c2c9b1b9?w=900&q=80',
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&q=80',
    'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=900&q=80'
  ],
  textiles: [
    'https://images.unsplash.com/photo-1600166898405-da9535204843?w=900&q=80',
    'https://images.unsplash.com/photo-1611117775350-ac3950990985?w=900&q=80',
    'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=900&q=80',
    'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=900&q=80',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80',
    'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=900&q=80',
    'https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&q=80'
  ],
  jewelry: [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80',
    'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&q=80',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=80',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80'
  ]
};

const labelsByCategory: Record<string, string[]> = {
  women: ['LINEN WRAP DRESS', 'QUILTED CROSSBODY', 'SILK TWILL SCARF', 'EMBROIDERED COTTON DRESS', 'HANDMADE CLUTCH', 'COTTON DAY DRESS', 'WOOL BLAZER', 'PLEATED SILK TOP'],
  men: ['CANVAS WEEKENDER', 'AUTOMATIC FIELD WATCH', 'BIFOLD LEATHER WALLET', 'MINIMAL CARD HOLDER', 'TAILORED OVERSHIRT', 'WOOL TRAVEL COAT', 'LEATHER PORTFOLIO', 'BRUSHED CUFFLINKS'],
  ceramics: ['POTTERY SERVING PLATTER', 'SPECKLED COFFEE MUG', 'CERAMIC SCULPTURE', 'GLAZED DINNER PLATE', 'CLAY TEA CUP', 'NESTING BOWL TRIO', 'TWIN HANDLE VASE', 'HAND-FORMED CARAFE'],
  textiles: ['GEOMETRIC AREA RUG', 'ALPACA THROW', 'INDIGO BANDANA SCARF', 'MACRAME WALL HANGING', 'LINEN TABLE RUNNER', 'HANDWOVEN CUSHION', 'CASHMERE STOLE', 'WOOL WALL PANEL'],
  jewelry: ['STACKED GOLD RINGS', 'LAYERED CHAIN NECKLACE', 'GEMSTONE DROP EARRINGS', 'CUFF BANGLE', 'GOLD HOOP EARRINGS', 'PEARL STUD SET', 'SIGNET RING', 'CHAIN BRACELET']
};

const subCategoryCycle: Record<string, string[]> = {
  women: ['clothing', 'bags-w', 'silk', 'clothing', 'bags-w', 'clothing', 'clothing', 'silk'],
  men: ['leather', 'watches', 'wallets', 'wallets', 'leather', 'leather', 'leather', 'watches'],
  ceramics: ['bowls', 'vases', 'sculptures', 'bowls', 'vases', 'bowls', 'vases', 'vases'],
  textiles: ['tapestries', 'throws', 'throws', 'tapestries', 'throws', 'tapestries', 'throws', 'tapestries'],
  jewelry: ['rings', 'necklaces', 'rings', 'necklaces', 'rings', 'necklaces', 'rings', 'necklaces']
};

const additionalProducts: Product[] = (Object.keys(imagePools) as Array<keyof typeof imagePools>).flatMap((category, categoryIndex) =>
  imagePools[category].map((image, index) => ({
    id: 100 + categoryIndex * 20 + index,
    name: labelsByCategory[category][index],
    price: 120 + index * 95 + categoryIndex * 25,
    image,
    gallery: [image, ...imagePools[category].filter((item) => item !== image).slice(0, 2)],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Natural', hex: '#d8c8ae' },
      { name: 'Ivory', hex: '#fffff0' }
    ],
    category,
    subCategory: subCategoryCycle[category][index],
    artisan: ['Maria Santos', 'Elena Voss', 'James Chen', 'Sofia Romano', 'Antonio Rossi'][categoryIndex],
    story: 'A carefully handmade piece created in small batches with refined materials and quiet luxury detailing.',
    material: ['Silk Blend', 'Full-Grain Leather', 'Stoneware', 'Wool', 'Gold Fill'][categoryIndex]
  }))
);

export const products: Product[] = [...baseProducts, ...additionalProducts];