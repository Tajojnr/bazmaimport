export interface BotResponse {
  text: string
  quickReplies?: string[]
}

export function getBotResponse(userMsg: string): BotResponse {
  const msg = userMsg.toLowerCase()

  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
    return {
      text: "Hi there! 👋 I'm **Baz**, your assistant at Bazma Technologies! 🤖\n\nI know everything about our iPhones, orders, pricing, and services. How can I help you today?",
      quickReplies: ['Browse iPhones 📱', 'Track my order 📦', 'Bulk wholesale 💰', 'About Bazma 🏢']
    }
  }

  if (msg.includes('about') || msg.includes('founded') || msg.includes('maiduguri') || msg.includes('who')) {
    return {
      text: "🚀 **Bazma Technologies Nig Ltd** was founded in **2024** in **Maiduguri, Borno State, Nigeria** 🇳🇬\n\nWe specialize in:\n📱 Direct iPhone imports from Guangzhou, China 🇨🇳\n💻 Custom IT & Software Development\n🤖 AI, ML & Blockchain Solutions\n\nOur motto: *'More Than Just Phones... We Deliver Trust'*",
      quickReplies: ['See iPhones', 'WhatsApp Support', 'CAC Registration']
    }
  }

  if (msg.includes('iphone') || msg.includes('phone') || msg.includes('price') || msg.includes('cost')) {
    return {
      text: "📱 **Popular Bazma iPhone Pricing:**\n\n• **iPhone 18 Pro Max:** ₦1,850,000\n• **iPhone 17 Pro Max:** ₦1,650,000\n• **iPhone 16 Pro Max:** ₦1,350,000\n• **Samsung S25 Ultra:** ₦1,750,000\n\n🎁 **Wholesale buyers get extra discounts on 5+ units!**",
      quickReplies: ['Add to Cart', 'Wholesale quote', 'Payment options']
    }
  }

  if (msg.includes('track') || msg.includes('where') || msg.includes('delivery') || msg.includes('order')) {
    return {
      text: "📦 **Order Tracking:**\n\nStandard shipping from China to Nigeria takes **7 to 14 days** with real-time tracking!\n\nYou can use our **Order Tracking** bar on the homepage or enter your Order ID (e.g. `BZM-2024-00102`).",
      quickReplies: ['Track BZM-2024-00102', 'Call Logistics', 'Shipping options']
    }
  }

  if (msg.includes('original') || msg.includes('fake') || msg.includes('warranty')) {
    return {
      text: "💯 **100% Original Guarantee!**\n\nEvery device from Bazma is factory sealed, IMEI verified on Apple's system, and eligible for Apple's 1-Year Warranty.\n\nWe have delivered **3,000+ phones** with zero counterfeit issues!",
      quickReplies: ['Show products', 'WhatsApp Admin']
    }
  }

  return {
    text: "I'm here to help! 😊 You can ask me about our **iPhones, prices, tracking orders, or wholesale bulk discounts**!\n\nOr click below to chat with a human agent on WhatsApp.",
    quickReplies: ['Browse Products', 'WhatsApp Admin', 'Track Order', 'About Bazma']
  }
}