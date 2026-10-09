export interface Product {
  id: string
  name: string
  slug: string
  brand: 'Apple' | 'Samsung' | 'Google' | 'Accessory'
  price: number
  originalPrice?: number
  condition: 'NEW' | 'REFURBISHED' | 'FACTORY SEALED'
  image: string
  badge?: string
  stock: number
  description: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-18-promax',
    name: 'iPhone 18 Pro Max Titanium',
    slug: 'iphone-18-pro-max',
    brand: 'Apple',
    price: 1850000,
    originalPrice: 1950000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-18-pro-max.webp',
    badge: 'FLAGSHIP 🔥',
    stock: 32,
    description: 'Direct import from Guangzhou hub. Factory sealed, Apple warranty eligible, 100% genuine IMEI.'
  },
  {
    id: 'iphone-17-promax',
    name: 'iPhone 17 Pro Max 512GB',
    slug: 'iphone-17-pro-max',
    brand: 'Apple',
    price: 1650000,
    originalPrice: 1720000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-17-promax.webp',
    stock: 18,
    description: 'Black Titanium finish, unactivated unit direct from China logistics facility.'
  },
  {
    id: 'iphone-16-promax',
    name: 'iPhone 16 Pro Max 256GB',
    slug: 'iphone-16-pro-max',
    brand: 'Apple',
    price: 1350000,
    originalPrice: 1450000,
    condition: 'FACTORY SEALED',
    image: '/products/iphone-16-promax.webp',
    badge: 'BEST SELLER',
    stock: 25,
    description: 'Original Apple device, full physical dual SIM option available.'
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G',
    slug: 'samsung-s25-ultra',
    brand: 'Samsung',
    price: 1750000,
    condition: 'NEW',
    image: '/products/samsung-galaxy-s25-ultra-titanium-black-premium-smartphone-1.webp',
    badge: 'ANDROID KING',
    stock: 10,
    description: 'Quad camera setup, built-in S-Pen, international Snapdragon global variant.'
  },
  {
    id: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro Bay Blue',
    slug: 'google-pixel-9-pro',
    brand: 'Google',
    price: 1150000,
    condition: 'NEW',
    image: '/products/google-pixel-9a-android-smartphone-8975.webp',
    stock: 8,
    description: 'Pure Android experience with Google Tensor AI camera capabilities.'
  },
  {
    id: 'airpods-max',
    name: 'Apple AirPods Max Silver',
    slug: 'airpods-max',
    brand: 'Accessory',
    price: 680000,
    originalPrice: 720000,
    condition: 'FACTORY SEALED',
    image: '/products/airpods-max.webp',
    stock: 14,
    description: 'Active Noise Cancellation, Spatial Audio, factory original accessories.'
  }
]