export interface Product {
  id: string
  name: string
  slug: string
  brand: 'Apple' | 'Samsung' | 'Google' | 'Accessory'
  category: 'iPhone' | 'Samsung Galaxy' | 'Google Pixel' | 'Audio' | 'Wearable'
  price: number
  originalPrice?: number
  condition: 'FACTORY SEALED' | 'NEW' | 'REFURBISHED'
  image: string
  badge?: string
  stock: number
  description: string
  features: string[]
  specs: Record<string, string>
}

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-18-pro-max',
    name: 'iPhone 18 Pro Max Titanium',
    slug: 'iphone-18-pro-max',
    brand: 'Apple',
    category: 'iPhone',
    price: 1850000,
    originalPrice: 1950000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-18-pro-max.webp',
    badge: 'FLAGSHIP 🔥',
    stock: 32,
    description: 'The latest iPhone 18 Pro Max direct from Guangzhou hub. 100% factory sealed, Apple warranty eligible.',
    features: ['A19 Pro Chip', '6.9" ProMotion Display', 'Titanium Frame', '48MP Camera System', '5G Ultra Fast'],
    specs: { Storage: '512GB', Color: 'Natural Titanium', Battery: '4800mAh', Display: '6.9 inch', OS: 'iOS 19' }
  },
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max 512GB',
    slug: 'iphone-17-pro-max',
    brand: 'Apple',
    category: 'iPhone',
    price: 1650000,
    originalPrice: 1720000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-17-promax.webp',
    badge: 'HOT 🔥',
    stock: 18,
    description: 'Black Titanium finish, unactivated unit, direct from China logistics facility.',
    features: ['A18 Pro Chip', '6.7" OLED Display', 'Titanium Frame', '48MP Pro Camera', 'USB-C'],
    specs: { Storage: '512GB', Color: 'Black Titanium', Battery: '4685mAh', Display: '6.7 inch', OS: 'iOS 18' }
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max 256GB',
    slug: 'iphone-16-pro-max',
    brand: 'Apple',
    category: 'iPhone',
    price: 1350000,
    originalPrice: 1450000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-16-promax.webp',
    badge: 'BEST SELLER',
    stock: 25,
    description: 'Original Apple device, full physical dual SIM option available.',
    features: ['A17 Pro Chip', '6.7" OLED', 'Titanium Design', '48MP Camera', 'Action Button'],
    specs: { Storage: '256GB', Color: 'Natural Titanium', Battery: '4422mAh', Display: '6.7 inch', OS: 'iOS 18' }
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16 Standard',
    slug: 'iphone-16',
    brand: 'Apple',
    category: 'iPhone',
    price: 980000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone16-png38.webp',
    stock: 20,
    description: 'The standard iPhone 16 with Apple Intelligence, Camera Control button.',
    features: ['A17 Chip', '6.1" Display', 'Dual Camera', 'Apple Intelligence'],
    specs: { Storage: '128GB', Color: 'Blue', Battery: '3561mAh', Display: '6.1 inch', OS: 'iOS 18' }
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max Premium',
    slug: 'iphone-15-pro-max',
    brand: 'Apple',
    category: 'iPhone',
    price: 1150000,
    originalPrice: 1250000,
    condition: 'FACTORY SEALED',
    image: '/products/i-phone-15-pro-max-black-premium-smartphone-png-transparent-luxurious-design.webp',
    stock: 15,
    description: 'Premium iPhone 15 Pro Max in luxurious black finish.',
    features: ['A17 Pro Chip', '6.7" ProMotion', 'Titanium', 'USB-C', '48MP Camera'],
    specs: { Storage: '256GB', Color: 'Black Titanium', Battery: '4422mAh', Display: '6.7 inch', OS: 'iOS 17' }
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    brand: 'Apple',
    category: 'iPhone',
    price: 950000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-15-pro.webp',
    stock: 12,
    description: 'The breakthrough iPhone 15 Pro with titanium design.',
    features: ['A17 Pro Chip', '6.1" ProMotion', 'Titanium', 'USB-C'],
    specs: { Storage: '128GB', Color: 'Natural Titanium', Battery: '3274mAh', Display: '6.1 inch', OS: 'iOS 17' }
  },
  {
    id: 'iphone-air',
    name: 'iPhone Air (Ultra-light Edition)',
    slug: 'iphone-air',
    brand: 'Apple',
    category: 'iPhone',
    price: 1250000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-air-apple-lightweight-smartphone-912.webp',
    badge: 'NEW CONCEPT',
    stock: 7,
    description: 'The lightest and thinnest iPhone ever made. Premium ultra-light edition.',
    features: ['A18 Chip', 'Ultra-thin Design', 'Lightweight Titanium', 'ProMotion'],
    specs: { Storage: '256GB', Color: 'Silver', Battery: '3800mAh', Display: '6.5 inch', OS: 'iOS 18' }
  },
  {
    id: 'iphone-fold',
    name: 'iPhone Fold Flip',
    slug: 'iphone-fold',
    brand: 'Apple',
    category: 'iPhone',
    price: 2250000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-fold-flip-smartphone-76523.webp',
    badge: 'EXCLUSIVE 👑',
    stock: 4,
    description: 'The futuristic foldable iPhone concept with innovative hinge technology.',
    features: ['Foldable OLED', 'A19 Pro', 'Dual Screen', 'Triple Camera'],
    specs: { Storage: '512GB', Color: 'Space Gray', Battery: '5000mAh', Display: '7.6 inch unfolded', OS: 'iOS 19' }
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G',
    slug: 'samsung-s25-ultra',
    brand: 'Samsung',
    category: 'Samsung Galaxy',
    price: 1750000,
    originalPrice: 1850000,
    condition: 'NEW',
    image: '/products/samsung-galaxy-s25-ultra-titanium-black-premium-smartphone-1.webp',
    badge: 'ANDROID KING',
    stock: 10,
    description: 'Latest Samsung flagship with built-in S-Pen and quad-camera system.',
    features: ['Snapdragon 8 Gen 4', '6.9" AMOLED', 'S-Pen', '200MP Camera', '5G'],
    specs: { Storage: '512GB', Color: 'Titanium Black', Battery: '5000mAh', Display: '6.9 inch', OS: 'Android 15' }
  },
  {
    id: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-s24-ultra',
    brand: 'Samsung',
    category: 'Samsung Galaxy',
    price: 1550000,
    condition: 'NEW',
    image: '/products/samsung-galaxy-s24-ultra-flagship-smartphone-transparent-png-image.webp',
    stock: 15,
    description: 'Premium Samsung flagship with Galaxy AI features.',
    features: ['Snapdragon 8 Gen 3', '6.8" AMOLED', 'S-Pen', '200MP Camera'],
    specs: { Storage: '256GB', Color: 'Titanium Gray', Battery: '5000mAh', Display: '6.8 inch', OS: 'Android 14' }
  },
  {
    id: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro',
    slug: 'google-pixel-9-pro',
    brand: 'Google',
    category: 'Google Pixel',
    price: 1150000,
    condition: 'NEW',
    image: '/products/google-pixel-9a-android-smartphone-8975.webp',
    stock: 8,
    description: 'Pure Android with Google Tensor AI camera capabilities.',
    features: ['Google Tensor G4', '6.3" OLED', 'AI Camera', '7 Years Updates'],
    specs: { Storage: '256GB', Color: 'Obsidian', Battery: '4700mAh', Display: '6.3 inch', OS: 'Android 15' }
  },
  {
    id: 'google-pixel-7a',
    name: 'Google Pixel 7a',
    slug: 'google-pixel-7a',
    brand: 'Google',
    category: 'Google Pixel',
    price: 580000,
    condition: 'NEW',
    image: '/products/google-pixel-7a-smartphone-mobile-device-transparent-png-image.webp',
    stock: 20,
    description: 'Mid-range Pixel with flagship-level AI photography.',
    features: ['Google Tensor G2', '6.1" OLED', '64MP Camera'],
    specs: { Storage: '128GB', Color: 'Charcoal', Battery: '4385mAh', Display: '6.1 inch', OS: 'Android 14' }
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max Silver',
    slug: 'airpods-max',
    brand: 'Accessory',
    category: 'Audio',
    price: 680000,
    originalPrice: 720000,
    condition: 'FACTORY SEALED',
    image: '/products/airpods-max.webp',
    stock: 14,
    description: 'Over-ear headphones with Active Noise Cancellation and Spatial Audio.',
    features: ['ANC', 'Spatial Audio', '20hr Battery', 'Premium Build'],
    specs: { Color: 'Silver', Battery: '20 hours', Connectivity: 'Bluetooth 5.0', Weight: '384g' }
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2 (Wireless)',
    slug: 'airpods-pro-2',
    brand: 'Accessory',
    category: 'Audio',
    price: 280000,
    condition: 'FACTORY SEALED',
    image: '/products/airpods-pro-2-wireless-earbuds-87623-(1).webp',
    badge: 'BEST VALUE',
    stock: 50,
    description: 'Second-generation AirPods Pro with Adaptive Audio.',
    features: ['Adaptive Audio', 'ANC', 'MagSafe Case', 'USB-C'],
    specs: { Color: 'White', Battery: '6 hours', Connectivity: 'Bluetooth 5.3', Case: 'USB-C MagSafe' }
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra 2',
    slug: 'apple-watch-ultra',
    brand: 'Accessory',
    category: 'Wearable',
    price: 850000,
    condition: 'FACTORY SEALED',
    image: '/products/apple-watch-ultra.webp',
    stock: 11,
    description: 'Rugged titanium smartwatch for extreme sports and adventure.',
    features: ['Titanium Case', '49mm Display', 'GPS + Cellular', '36hr Battery'],
    specs: { Case: 'Titanium 49mm', Battery: '36 hours', Display: 'Always-On Retina', GPS: 'Precision Dual-Frequency' }
  }
]

export const getProductBySlug = (slug: string) => PRODUCTS.find(p => p.slug === slug)
export const getFeaturedProducts = () => PRODUCTS.filter(p => p.badge).slice(0, 6)
export const getProductsByBrand = (brand: string) => PRODUCTS.filter(p => p.brand === brand)