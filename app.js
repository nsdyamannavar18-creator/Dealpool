/* ==========================================================================
   DEALPOOL — SIMPLE, MINIMAL & USER-FRIENDLY APP LOGIC
   Includes all 9 Product features, Service Deal Card spec & Seller Dashboard
========================================================================== */

const STORAGE_KEY = 'dealpool_minimal_v6';

const INITIAL_DEALS = [
  // 1. EXACT PROMPT MATCH: Glow & Go Salon — Haircut + Hair Spa
  {
    id: 'srv-glow-go',
    type: 'service',
    businessName: 'Glow & Go Salon',
    title: 'Haircut + Hair Spa',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    description: 'Complete L’Oréal Deep Nourishing Hair Spa + Senior Stylist Haircut, Wash & Blow-Dry styling session.',
    specs: [
      { label: 'Service Type', value: 'L’Oréal Deep Spa + Haircut' },
      { label: 'Session Duration', value: '60 Minutes' },
      { label: 'Stylist Level', value: 'Senior Creative Stylist' },
      { label: 'Products Used', value: 'Sulfate-Free Pro Keratin' }
    ],
    highlights: [
      'Includes hair wash, deep conditioning steam spa, scalp massage & precision haircut',
      'Valid across all listed appointment slots with zero waiting time',
      '100% refundable token if cancelled before the refundable deadline'
    ],
    regularPrice: 1200,
    groupPrice: 799,
    minBuyers: 10,
    maxCapacity: 20,
    joinedCount: 12,
    tokenAmount: 99,
    endsInText: 'Ends in 1 day 8 hours',
    deadlineHours: 32,
    safeExitOpen: true,
    status: 'OPEN', // OPEN | FULL | REOPENED | CANCELLED
    hubId: 'koramangala',
    locationText: 'Koramangala • 1.2 km away',
    durationMinutes: 60,
    maxBookingsPerSlot: 4,
    isRecommended: true,
    recReason: '📍 Near you (1.2 km) & Popular in Salon Pools',
    sellerMetrics: {
      deliverySpeed: 97,
      quality: 96,
      cancelRate: 1.2,
      returnRate: 0.8,
      rating: 4.8,
      reviewsCount: 142
    },
    availableSlots: [
      { id: 's1', date: 'Sat, Nov 1', time: '11:00 AM – 12:00 PM', booked: 3, max: 4 },
      { id: 's2', date: 'Sat, Nov 1', time: '03:00 PM – 04:00 PM', booked: 2, max: 4 },
      { id: 's3', date: 'Sun, Nov 2', time: '11:30 AM – 12:30 PM', booked: 3, max: 4 },
      { id: 's4', date: 'Sun, Nov 2', time: '04:30 PM – 05:30 PM', booked: 1, max: 4 }
    ],
    bookingsLog: [
      { customer: 'Ananya V. (You)', slot: 'Sun, Nov 2 • 11:30 AM', payment: 'Token Paid (₹99)', status: 'Active' },
      { customer: 'Priya Nair', slot: 'Sat, Nov 1 • 11:00 AM', payment: 'Token Paid (₹99)', status: 'Active' },
      { customer: 'Meera Joshi', slot: 'Sun, Nov 2 • 04:30 PM', payment: 'Refunded ₹99', status: 'Cancelled (Before Refundable Deadline)' }
    ],
    reviews: [
      { author: 'Sneha K.', rating: 5, text: 'Saved ₹401 with neighbors! Full 60-minute session and great service.' },
      { author: 'Rohan M.', rating: 4.8, text: 'Super easy slot selection and punctual staff.' }
    ],
    waitlist: []
  },

  // 2. EXACT PROMPT MATCH: Dynamic Discount Tiers Product Pool (1-9: ₹1900, 10-19: ₹1750, 20+: ₹1600)
  {
    id: 'prd-keypad',
    type: 'product',
    businessName: 'Luminary Tech Direct',
    title: 'Wireless Mechanical KeyPad & Monitor Light Bundle',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    description: 'CNC aluminum wireless mechanical macro keypad paired with an asymmetric eye-care LED monitor light bar.',
    specs: [
      { label: 'Switches', value: 'Hot-Swappable Tactile Mechanical' },
      { label: 'Connectivity', value: 'Bluetooth 5.1 + 2.4GHz + USB-C' },
      { label: 'Light Bar CRI', value: 'Ra97 Asymmetric Anti-Glare LED' },
      { label: 'Warranty', value: '1 Year Manufacturer Replacement' }
    ],
    highlights: [
      'Zero screen glare asymmetric optical design for coding & late-night study',
      'Programmable rotary knob + hot-swappable PBT keycaps',
      'Bulk campus dispatch directly from official distributor warehouse'
    ],
    regularPrice: 2200,
    pricingMode: 'dynamic', // dynamic | fixed
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 1900 },
      { min: 10, max: 19, label: '10–19', price: 1750 },
      { min: 20, max: 999, label: '20+', price: 1600 }
    ],
    fixedPrice: 1650,
    minBuyers: 10,
    maxCapacity: 20,
    joinedCount: 14, // Exact prompt match: "14 of 20 buyers joined"
    tokenAmount: 150,
    endsInText: 'Ends in 18 hours',
    deadlineHours: 18,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'iit-campus',
    locationText: 'IIT Campus Hub & City Delivery',
    isRecommended: true,
    recReason: '👁️ Matches your Browsing History & Tech Interests',
    sellerMetrics: {
      deliverySpeed: 95,
      quality: 94,
      cancelRate: 1.5,
      returnRate: 1.1,
      rating: 4.7,
      reviewsCount: 218
    },
    waitlist: []
  },

  // 3. SERVICE DEAL: Apartment Home Cleaning Pool
  {
    id: 'srv-cleaning',
    type: 'service',
    businessName: 'UrbanSparkle Home Care',
    title: 'Full 2BHK Eco Deep Cleaning + AC Service',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    description: 'Complete 2BHK apartment steam sanitization, kitchen degreasing, washroom descaling + 2 Split AC foam-jet servicing.',
    specs: [
      { label: 'Crew Size', value: '3 Trained Professionals' },
      { label: 'Service Duration', value: '120 Minutes' },
      { label: 'AC Servicing', value: '2 Split/Window ACs Included' },
      { label: 'Chemicals', value: '100% Child & Pet Safe Eco-Grade' }
    ],
    highlights: [
      'Zero crew travel surcharge because 10+ flats in the complex are serviced together',
      'Includes high-pressure foam jet cleaning for 2 AC indoor & outdoor units',
      'Full kitchen chimney exterior & bathroom hard-water stain removal'
    ],
    regularPrice: 3200,
    groupPrice: 1999,
    minBuyers: 8,
    maxCapacity: 16,
    joinedCount: 14,
    tokenAmount: 149,
    endsInText: 'Ends in 1 day 2 hours',
    deadlineHours: 26,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'prestige-apt',
    locationText: 'Prestige Apartments • 0.3 km away',
    durationMinutes: 120,
    maxBookingsPerSlot: 4,
    isRecommended: true,
    recReason: '🏢 Popular in Prestige Apartments Pool',
    sellerMetrics: {
      deliverySpeed: 98,
      quality: 96,
      cancelRate: 0.8,
      returnRate: 0.5,
      rating: 4.9,
      reviewsCount: 310
    },
    availableSlots: [
      { id: 'c1', date: 'Sat, Nov 1', time: '09:00 AM – 11:00 AM', booked: 3, max: 4 },
      { id: 'c2', date: 'Sun, Nov 2', time: '10:00 AM – 12:00 PM', booked: 2, max: 4 }
    ],
    bookingsLog: [
      { customer: 'Vikram S. (Flat B-804)', slot: 'Sat, Nov 1 • 09:00 AM', payment: 'Token Paid (₹149)', status: 'Active' }
    ],
    reviews: [
      { author: 'Arvind R.', rating: 5, text: '14 flats in our apartment pooled together and saved ₹1,201 each!' }
    ],
    waitlist: []
  },

  // 4. PRODUCT DEAL AT FULL CAPACITY (Waitlist Feature #7)
  {
    id: 'prd-airfryer',
    type: 'product',
    businessName: 'KitchenCraft Official',
    title: 'Philips 6.2L Digital Air Fryer XL',
    image: 'airfryer.jpg',
    gallery: [
      'airfryer.jpg'
    ],
    description: 'Rapid Air technology 6.2-Litre XL digital touch Air Fryer with 7 presets and up to 90% less oil cooking.',
    specs: [
      { label: 'Basket Capacity', value: '6.2 Litres XL (1.2 kg)' },
      { label: 'Power Output', value: '2000W Rapid Air Tech' },
      { label: 'Controls', value: 'Digital Touch LED (7 Presets)' },
      { label: 'Warranty', value: '2 Years Philips India Warranty' }
    ],
    highlights: [
      'Family-sized 6.2L pan with dishwasher-safe non-stick QuickClean basket',
      'Bake, grill, roast, and reheat with up to 90% less oil',
      'Sealed factory units delivered in one consolidated apartment batch'
    ],
    regularPrice: 8999,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 7499 },
      { min: 10, max: 19, label: '10–19', price: 6899 },
      { min: 20, max: 999, label: '20+', price: 6299 }
    ],
    fixedPrice: 6299,
    minBuyers: 12,
    maxCapacity: 20,
    joinedCount: 20, // Full capacity -> Waitlist active
    tokenAmount: 200,
    endsInText: 'Ends in 9 hours',
    deadlineHours: 9,
    safeExitOpen: true,
    status: 'FULL',
    hubId: 'prestige-apt',
    locationText: 'Prestige Apartments & City Hub',
    isRecommended: false,
    recReason: '🔥 Trending Kitchen Pool',
    sellerMetrics: {
      deliverySpeed: 96,
      quality: 98,
      cancelRate: 0.4,
      returnRate: 0.6,
      rating: 4.9,
      reviewsCount: 429
    },
    waitlist: ['Siddharth M.']
  },

  // 5. PRODUCT DEAL: Sony WH-1000XM5 Wireless Noise-Cancelling Headphones
  {
    id: 'prd-sony-xm5',
    type: 'product',
    businessName: 'AudioHub Authorized Partner',
    title: 'Sony WH-1000XM5 Wireless ANC Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    description: 'Flagship wireless noise-cancelling headphones powered by 8 microphones, Dual Processor V1+QN1, and 30-hour battery.',
    specs: [
      { label: 'Noise Cancellation', value: '8-Mic Auto NC Optimizer' },
      { label: 'Battery Life', value: 'Up to 30 Hours (USB-PD Fast Charge)' },
      { label: 'Audio Codec', value: 'LDAC, AAC, SBC + Multipoint' },
      { label: 'Warranty', value: '1 Year Sony India Official Warranty' }
    ],
    highlights: [
      '3-minute quick charge gives 3 hours of playback via USB-PD',
      'Ultra-clear hands-free calling with 4 beamforming microphones',
      'Includes collapsible carrying case, USB-C cable & 3.5mm audio cord'
    ],
    regularPrice: 29990,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 26990 },
      { min: 10, max: 19, label: '10–19', price: 24990 },
      { min: 20, max: 999, label: '20+', price: 22990 }
    ],
    fixedPrice: 23990,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 16,
    tokenAmount: 500,
    endsInText: 'Ends in 1 day 4 hours',
    deadlineHours: 28,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'manyata-tech',
    locationText: 'Manyata Tech Park & Pan-City Drop',
    isRecommended: true,
    recReason: '🎧 Trending in Tech Park & Electronics Pools',
    sellerMetrics: {
      deliverySpeed: 98,
      quality: 99,
      cancelRate: 0.3,
      returnRate: 0.4,
      rating: 4.9,
      reviewsCount: 512
    },
    waitlist: []
  },

  // 6. PRODUCT DEAL: Optimum Gold Standard 100% Whey Protein
  {
    id: 'prd-whey-protein',
    type: 'product',
    businessName: 'NutriCore Verified Distributor',
    title: 'Optimum Gold Standard 100% Whey Protein (2.27 kg)',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=80',
    description: '24g pure whey protein per serving with 5.5g naturally occurring BCAAs. Double Rich Chocolate 5 lbs tub.',
    specs: [
      { label: 'Net Weight', value: '2.27 kg (5 lbs / 74 Servings)' },
      { label: 'Protein / Serving', value: '24g Whey Isolate Blend + 5.5g BCAA' },
      { label: 'Authenticity', value: 'Scratch Code + GST Invoice' },
      { label: 'Shelf Life', value: 'Fresh Import Batch (18+ Months)' }
    ],
    highlights: [
      '100% authentic Glanbia distributor batch with TruSeal verification sticker',
      'Whey Protein Isolate primary source with ultra-low sugar & fat',
      'Direct hostel & gym hub drop with zero shipping cost'
    ],
    regularPrice: 7699,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 6499 },
      { min: 10, max: 19, label: '10–19', price: 5999 },
      { min: 20, max: 999, label: '20+', price: 5499 }
    ],
    fixedPrice: 5799,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 9, // 1 away from next tier!
    tokenAmount: 200,
    endsInText: 'Ends in 14 hours',
    deadlineHours: 14,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'iit-campus',
    locationText: 'IIT Campus Gym Hub & Koramangala',
    isRecommended: true,
    recReason: '🛒 Matches your Past Fitness Purchases (1 away from ₹5,999 tier!)',
    sellerMetrics: {
      deliverySpeed: 94,
      quality: 97,
      cancelRate: 1.1,
      returnRate: 0.7,
      rating: 4.8,
      reviewsCount: 195
    },
    waitlist: []
  },

  // 7. PRODUCT DEAL: Ergonomic Mesh Office Chair
  {
    id: 'prd-ergo-chair',
    type: 'product',
    businessName: 'WorkSpace Comfort India',
    title: 'FeatherLite Lumbar Pro Ergonomic Mesh Office Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80',
    description: 'High-back breathable Korean mesh chair with dynamic lumbar support, 4D adjustable armrests, and Class-4 gas lift.',
    specs: [
      { label: 'Backrest Material', value: 'High-Tensile Breathable Korean Mesh' },
      { label: 'Adjustability', value: '4D Armrests + 135° Multi-Lock Tilt' },
      { label: 'Base & Frame', value: 'Heavy-Duty Die-Cast Aluminum' },
      { label: 'Warranty', value: '3 Years On-Site Warranty' }
    ],
    highlights: [
      'Dynamic self-adjusting lumbar support prevents lower-back fatigue during 8+ hr workdays',
      'Free doorstep assembly included for all group pool buyers',
      'BIFMA-certified Class-4 hydraulic piston supports up to 135 kg'
    ],
    regularPrice: 14500,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 11999 },
      { min: 10, max: 19, label: '10–19', price: 10499 },
      { min: 20, max: 999, label: '20+', price: 9299 }
    ],
    fixedPrice: 9999,
    minBuyers: 8,
    maxCapacity: 20,
    joinedCount: 11,
    tokenAmount: 300,
    endsInText: 'Ends in 2 days',
    deadlineHours: 48,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'manyata-tech',
    locationText: 'Manyata Tech Park & Whitefield Hub',
    isRecommended: false,
    recReason: '💺 Popular Work-From-Home Upgrade',
    sellerMetrics: {
      deliverySpeed: 95,
      quality: 96,
      cancelRate: 0.9,
      returnRate: 0.8,
      rating: 4.7,
      reviewsCount: 164
    },
    waitlist: []
  },

  // 8. PRODUCT DEAL: Samsung 27" 4K UHD IPS Monitor
  {
    id: 'prd-samsung-monitor',
    type: 'product',
    businessName: 'PixelDisplay Direct',
    title: 'Samsung 27" 4K UHD IPS Monitor (USB-C 65W + HDR10)',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    description: '3-sided borderless 27-inch 4K UHD (3840x2160) IPS panel with 99% sRGB, HDR10, and 65W USB-C power delivery.',
    specs: [
      { label: 'Resolution & Panel', value: '27" 4K UHD (3840x2160) IPS' },
      { label: 'Ports & Charging', value: 'USB-C (65W PD), HDMI 2.0, DP 1.2' },
      { label: 'Color Accuracy', value: '99% sRGB • 1.07 Billion Colors' },
      { label: 'Stand', value: 'Height, Tilt, Swivel & Pivot Adjustable' }
    ],
    highlights: [
      'Single USB-C cable transmits 4K video and charges your laptop at 65W simultaneously',
      'Zero-dead-pixel guarantee + 3-year Samsung India onsite warranty',
      'TUV-certified Intelligent Eye Care reduces blue light & screen flicker'
    ],
    regularPrice: 28500,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 23999 },
      { min: 10, max: 19, label: '10–19', price: 21999 },
      { min: 20, max: 999, label: '20+', price: 19999 }
    ],
    fixedPrice: 20999,
    minBuyers: 10,
    maxCapacity: 20,
    joinedCount: 18,
    tokenAmount: 450,
    endsInText: 'Ends in 11 hours',
    deadlineHours: 11,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'iit-campus',
    locationText: 'IIT Campus Hub & Koramangala',
    isRecommended: true,
    recReason: '🖥️ High Demand — Only 2 buyers away from ₹19,999 tier!',
    sellerMetrics: {
      deliverySpeed: 97,
      quality: 98,
      cancelRate: 0.5,
      returnRate: 0.6,
      rating: 4.9,
      reviewsCount: 280
    },
    waitlist: []
  },

  // 9. PRODUCT DEAL: Cold-Pressed Wood-Churned Cooking Oil & Organic Grocery Pack
  {
    id: 'prd-organic-oil-pack',
    type: 'product',
    businessName: 'NativeFarms Collective',
    title: '5L Wood-Pressed Groundnut Oil + 1kg Wild Forest Honey',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80',
    description: '100% unrefined cold wood-pressed (Lakdi Ghani) groundnut oil in tin + raw multiflora wild forest honey.',
    specs: [
      { label: 'Extraction Method', value: 'Traditional Slow Wood-Pressed (Cold)' },
      { label: 'Pack Contents', value: '5L Groundnut Oil + 1kg Glass Jar Honey' },
      { label: 'Lab Testing', value: 'FSSAI Certified • Zero Adulteration' },
      { label: 'Harvest Origin', value: 'Single-Origin Anantapur & Coorg Farms' }
    ],
    highlights: [
      'Cold-extracted below 40°C to preserve natural antioxidants and nutty aroma',
      'NMR-tested 100% pure raw honey with zero added sugar syrup',
      'Delivered directly from farm cooperative to your apartment clubhouse'
    ],
    regularPrice: 2450,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 1999 },
      { min: 10, max: 19, label: '10–19', price: 1799 },
      { min: 20, max: 999, label: '20+', price: 1599 }
    ],
    fixedPrice: 1699,
    minBuyers: 15,
    maxCapacity: 30,
    joinedCount: 22, // 20+ tier unlocked!
    tokenAmount: 100,
    endsInText: 'Ends in 6 hours',
    deadlineHours: 6,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'prestige-apt',
    locationText: 'Prestige Apartments & Koramangala Hub',
    isRecommended: true,
    recReason: '🍯 Lowest 20+ Tier Unlocked in Your Apartment Complex!',
    sellerMetrics: {
      deliverySpeed: 99,
      quality: 97,
      cancelRate: 0.2,
      returnRate: 0.3,
      rating: 4.9,
      reviewsCount: 340
    },
    waitlist: []
  },

  // 10. PRODUCT DEAL: Nespresso Essenza Mini Coffee Machine + 50 Pods
  {
    id: 'prd-coffee-maker',
    type: 'product',
    businessName: 'Roast & Brew Imports',
    title: 'EspressGo 19-Bar Compact Coffee Machine + 50 Artisan Capsules',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80',
    description: 'Ultra-compact 19-bar high-pressure espresso machine with 25-second heat-up and 50 assorted Arabica capsules.',
    specs: [
      { label: 'Pump Pressure', value: '19-Bar Italian Ulka Pump' },
      { label: 'Heat-Up Time', value: '25 Seconds Instant Thermoblock' },
      { label: 'Included Pods', value: '50 Aluminum Arabica Espresso Pods' },
      { label: 'Warranty', value: '1 Year Domestic Warranty' }
    ],
    highlights: [
      'One-touch programmable Espresso (40ml) and Lungo (110ml) buttons',
      'Includes 5 boxes of 100% roasted Arabica coffee pods (Intensity 6 to 11)',
      'Auto eco-sleep mode after 9 minutes of inactivity'
    ],
    regularPrice: 12999,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 10499 },
      { min: 10, max: 19, label: '10–19', price: 9499 },
      { min: 20, max: 999, label: '20+', price: 8499 }
    ],
    fixedPrice: 8999,
    minBuyers: 8,
    maxCapacity: 20,
    joinedCount: 7,
    tokenAmount: 250,
    endsInText: 'Ends in 1 day 12 hours',
    deadlineHours: 36,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'koramangala',
    locationText: 'Koramangala & Manyata Tech Park',
    isRecommended: false,
    recReason: '☕ Trending Morning Essentials Pool',
    sellerMetrics: {
      deliverySpeed: 95,
      quality: 95,
      cancelRate: 1.0,
      returnRate: 0.9,
      rating: 4.7,
      reviewsCount: 128
    },
    waitlist: []
  },

  // 11. PRODUCT DEAL: Apple iPad Air M2 (11-inch, Wi-Fi, 128GB)
  {
    id: 'prd-ipad-air-m2',
    type: 'product',
    businessName: 'iStore Authorized Institutional Partner',
    title: 'Apple iPad Air M2 Chip (11-inch Liquid Retina, 128GB Wi-Fi)',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Supercharged by the Apple M2 chip with 11-inch Liquid Retina display, Landscape 12MP Ultra Wide front camera, and Apple Pencil Pro support.',
    specs: [
      { label: 'Processor', value: 'Apple M2 (8-Core CPU, 9-Core GPU)' },
      { label: 'Display', value: '11" Liquid Retina True Tone (P3 Wide Color)' },
      { label: 'Storage & Connectivity', value: '128GB + Wi-Fi 6E + USB-C' },
      { label: 'Warranty', value: '1 Year Apple India Official Warranty' }
    ],
    highlights: [
      'Authorized education & campus bulk pool with individual GST invoice in buyer name',
      'Supports Apple Pencil Pro & Magic Keyboard for note-taking and design work',
      'Factory sealed retail box with 20W USB-C Power Adapter included'
    ],
    regularPrice: 59900,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 55900 },
      { min: 10, max: 19, label: '10–19', price: 52900 },
      { min: 20, max: 999, label: '20+', price: 49900 }
    ],
    fixedPrice: 51900,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 15,
    tokenAmount: 999,
    endsInText: 'Ends in 1 day 6 hours',
    deadlineHours: 30,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'iit-campus',
    locationText: 'IIT Campus Hub & Koramangala',
    isRecommended: true,
    recReason: '🎓 Top Student & Designer Bulk Pool (Save ₹7,000!)',
    sellerMetrics: {
      deliverySpeed: 99,
      quality: 99,
      cancelRate: 0.2,
      returnRate: 0.2,
      rating: 4.9,
      reviewsCount: 615
    },
    waitlist: []
  },

  // 12. PRODUCT DEAL: Dyson V12 Detect Slim Cordless Vacuum Cleaner
  {
    id: 'prd-dyson-vacuum',
    type: 'product',
    businessName: 'HomeTech Direct India',
    title: 'Dyson V12 Detect Slim Cordless Vacuum with Laser Fluffy Head',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Illuminated cleaner head reveals invisible microscopic dust on hard floors. Powered by Dyson Hyperdymium motor spinning at 125,000 rpm.',
    specs: [
      { label: 'Suction Power', value: '150 Air Watts (125,000 rpm Motor)' },
      { label: 'Run Time', value: 'Up to 60 Minutes Fade-Free' },
      { label: 'Filtration', value: 'Whole-Machine HEPA (99.99% Particles)' },
      { label: 'Warranty', value: '2 Years Dyson Official Support' }
    ],
    highlights: [
      'Piezo acoustic sensor automatically increases suction power when more dust is detected',
      'Includes Hair Screw Tool for pet hair, mattresses, and upholstery',
      'Consolidated apartment complex delivery with wall-dock installation support'
    ],
    regularPrice: 58900,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 51900 },
      { min: 10, max: 19, label: '10–19', price: 47900 },
      { min: 20, max: 999, label: '20+', price: 44900 }
    ],
    fixedPrice: 46900,
    minBuyers: 8,
    maxCapacity: 20,
    joinedCount: 12,
    tokenAmount: 750,
    endsInText: 'Ends in 20 hours',
    deadlineHours: 20,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'prestige-apt',
    locationText: 'Prestige Apartments & City Hub',
    isRecommended: true,
    recReason: '🏠 Most Requested Apartment Upgrade Pool',
    sellerMetrics: {
      deliverySpeed: 97,
      quality: 99,
      cancelRate: 0.4,
      returnRate: 0.5,
      rating: 4.9,
      reviewsCount: 312
    },
    waitlist: []
  },

  // 13. PRODUCT DEAL: Nike Air Zoom Pegasus 40 Running Shoes
  {
    id: 'prd-nike-pegasus',
    type: 'product',
    businessName: 'RunClub Official Gear Partner',
    title: 'Nike Air Zoom Pegasus 40 Road Running Shoes (All Sizes)',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Springy ride for every run with Nike React foam and dual Zoom Air units in the forefoot and heel. Size selectable upon confirmation.',
    specs: [
      { label: 'Cushioning', value: 'Nike React Foam + Dual Zoom Air Units' },
      { label: 'Upper Material', value: 'Engineered Breathable Single-Layer Mesh' },
      { label: 'Sizes Available', value: 'UK 6 to UK 12 (Men & Women Fit)' },
      { label: 'Exchange Policy', value: '7-Day Free Size Swap Guarantee' }
    ],
    highlights: [
      '100% authentic retail box from authorized athletics distributor',
      'Waffle-inspired rubber outsole provides superior road & track traction',
      'Free size exchange if the fit feels tight or loose on delivery'
    ],
    regularPrice: 11895,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 9499 },
      { min: 10, max: 19, label: '10–19', price: 8299 },
      { min: 20, max: 999, label: '20+', price: 7199 }
    ],
    fixedPrice: 7799,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 21, // 20+ tier unlocked!
    tokenAmount: 200,
    endsInText: 'Ends in 8 hours',
    deadlineHours: 8,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'koramangala',
    locationText: 'Koramangala Run Club & IIT Campus',
    isRecommended: true,
    recReason: '👟 20+ Tier Unlocked! Save ₹4,696 per pair',
    sellerMetrics: {
      deliverySpeed: 96,
      quality: 98,
      cancelRate: 0.6,
      returnRate: 0.8,
      rating: 4.8,
      reviewsCount: 410
    },
    waitlist: []
  },

  // 14. PRODUCT DEAL: Logitech MX Master 3S Wireless Performance Mouse
  {
    id: 'prd-mx-master-3s',
    type: 'product',
    businessName: 'LogiTech Pro Partner',
    title: 'Logitech MX Master 3S Wireless Mouse (8K DPI Quiet Click)',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Iconic ergonomic wireless mouse with MagSpeed electromagnetic scrolling (1,000 lines/sec), 8000 DPI track-on-glass sensor, and Quiet Clicks.',
    specs: [
      { label: 'Sensor Precision', value: '8,000 DPI Darkfield (Tracks on Glass)' },
      { label: 'Scroll Wheel', value: 'MagSpeed Electromagnetic Steel Wheel' },
      { label: 'Multi-Device', value: 'Pair up to 3 Devices (Logi Bolt + BT)' },
      { label: 'Battery', value: '70 Days on Full Charge (USB-C)' }
    ],
    highlights: [
      '90% less click noise compared to MX Master 3 with tactile responsiveness',
      'Ergonomic sculpted silhouette supports palm and thumb with side scroll wheel',
      'Works seamlessly across Windows, macOS, Linux, and iPadOS'
    ],
    regularPrice: 10995,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 8999 },
      { min: 10, max: 19, label: '10–19', price: 7999 },
      { min: 20, max: 999, label: '20+', price: 6999 }
    ],
    fixedPrice: 7499,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 17,
    tokenAmount: 200,
    endsInText: 'Ends in 15 hours',
    deadlineHours: 15,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'manyata-tech',
    locationText: 'Manyata Tech Park & IIT Campus',
    isRecommended: true,
    recReason: '🖱️ #1 Developer & Designer Tech Park Pool',
    sellerMetrics: {
      deliverySpeed: 98,
      quality: 99,
      cancelRate: 0.3,
      returnRate: 0.4,
      rating: 4.9,
      reviewsCount: 530
    },
    waitlist: []
  },

  // 15. PRODUCT DEAL: Marshall Emberton II Portable Bluetooth Speaker
  {
    id: 'prd-marshall-speaker',
    type: 'product',
    businessName: 'SoundStage Official Audio',
    title: 'Marshall Emberton II Portable Bluetooth Speaker (30+ Hrs)',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Rich, clear, and loud 360° True Stereophonic sound with IP67 dust & water resistance and 30+ hours of portable playtime.',
    specs: [
      { label: 'Sound Output', value: '2x 10W Class D Amplifiers (360° Audio)' },
      { label: 'Playtime', value: '30+ Hours on Single Charge' },
      { label: 'Durability', value: 'IP67 Waterproof & Dustproof Build' },
      { label: 'Bluetooth', value: 'Bluetooth 5.1 + Stack Mode Support' }
    ],
    highlights: [
      'True Stereophonic multi-directional sound from Marshall',
      'Stack Mode lets you connect multiple Emberton II speakers together',
      'Textured silicone sleeve and solid metal grille with brass control knob'
    ],
    regularPrice: 17999,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 14999 },
      { min: 10, max: 19, label: '10–19', price: 13499 },
      { min: 20, max: 999, label: '20+', price: 11999 }
    ],
    fixedPrice: 12999,
    minBuyers: 8,
    maxCapacity: 20,
    joinedCount: 13,
    tokenAmount: 300,
    endsInText: 'Ends in 1 day 10 hours',
    deadlineHours: 34,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'koramangala',
    locationText: 'Koramangala & Prestige Apartments',
    isRecommended: false,
    recReason: '🔊 Popular Audio & Lifestyle Pool',
    sellerMetrics: {
      deliverySpeed: 96,
      quality: 98,
      cancelRate: 0.5,
      returnRate: 0.6,
      rating: 4.8,
      reviewsCount: 245
    },
    waitlist: []
  },

  // 16. PRODUCT DEAL: Instant Pot Duo 7-in-1 Electric Pressure Cooker (6 Quart)
  {
    id: 'prd-instant-pot',
    type: 'product',
    businessName: 'SmartKitchen Bulk Distributors',
    title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker (5.7 Litres)',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Replaces 7 kitchen appliances: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker & warmer.',
    specs: [
      { label: 'Inner Pot', value: 'Food-Grade 304 Stainless Steel (5.7L)' },
      { label: 'Smart Programs', value: '13 One-Touch Presets (Dal, Rice, Idli)' },
      { label: 'Safety Mechanisms', value: '10+ UL Certified Safety Features' },
      { label: 'Warranty', value: '1 Year Official India Warranty' }
    ],
    highlights: [
      'Cooks up to 70% faster than traditional cooking methods while locking nutrients',
      'Heavy tri-ply bottom inner pot for even sautéing without hotspots',
      'Delay-start timer up to 24 hours + automatic Keep Warm function'
    ],
    regularPrice: 10999,
    pricingMode: 'dynamic',
    tiers: [
      { min: 1, max: 9, label: '1–9', price: 8999 },
      { min: 10, max: 19, label: '10–19', price: 7999 },
      { min: 20, max: 999, label: '20+', price: 6999 }
    ],
    fixedPrice: 7499,
    minBuyers: 10,
    maxCapacity: 25,
    joinedCount: 19, // 1 away from ₹6,999!
    tokenAmount: 200,
    endsInText: 'Ends in 7 hours',
    deadlineHours: 7,
    safeExitOpen: true,
    status: 'OPEN',
    hubId: 'prestige-apt',
    locationText: 'Prestige Apartments & Koramangala Hub',
    isRecommended: true,
    recReason: '🍲 Only 1 buyer away from unlocking ₹6,999 tier!',
    sellerMetrics: {
      deliverySpeed: 97,
      quality: 97,
      cancelRate: 0.5,
      returnRate: 0.6,
      rating: 4.8,
      reviewsCount: 388
    },
    waitlist: []
  }
];

const INITIAL_MY_POOLS = [
  {
    dealId: 'srv-glow-go',
    tokenPaid: 99,
    slotLabel: 'Sun, Nov 2 • 11:30 AM – 12:30 PM',
    referralCode: 'NANDISH-GLOW',
    pastCutoff: false,
    status: 'TOKEN_PAID' // TOKEN_PAID | FINAL_PAID | WAITLIST | REFUNDED | FORFEITED
  },
  {
    dealId: 'prd-keypad',
    tokenPaid: 150,
    slotLabel: null,
    referralCode: 'NANDISH-KEY14',
    pastCutoff: false,
    status: 'TOKEN_PAID'
  }
];

let state = {
  deals: [],
  myPools: [],
  wallet: 4250,
  category: 'all',
  hubId: 'all',
  activeServiceSellerId: 'srv-glow-go',
  activeProductSellerId: 'prd-keypad'
};

/* ==========================================================================
   LOAD & SAVE STATE
========================================================================== */
function initApp() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.deals = parsed.deals || INITIAL_DEALS;
      state.myPools = parsed.myPools || INITIAL_MY_POOLS;
      state.wallet = typeof parsed.wallet === 'number' ? parsed.wallet : 4250;
    } else {
      state.deals = JSON.parse(JSON.stringify(INITIAL_DEALS));
      state.myPools = JSON.parse(JSON.stringify(INITIAL_MY_POOLS));
    }
  } catch (e) {
    state.deals = JSON.parse(JSON.stringify(INITIAL_DEALS));
    state.myPools = JSON.parse(JSON.stringify(INITIAL_MY_POOLS));
  }

  updateTopBar();
  renderDeals();
  renderMyPools();
  initSellerForms();
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      deals: state.deals,
      myPools: state.myPools,
      wallet: state.wallet
    })
  );
}

/* ==========================================================================
   HELPERS (DYNAMIC TIERS & SELLER TRUST SCORE)
========================================================================== */
function formatINR(num) {
  return '₹' + Number(num).toLocaleString('en-IN');
}

function getRefundableDeadlineText(deal) {
  if (deal.refundableDeadlineText) return deal.refundableDeadlineText;
  const hrs = deal.refundableDeadlineHours || Math.max(2, Math.floor((deal.deadlineHours || 24) * 0.6));
  if (hrs >= 24) {
    const d = Math.floor(hrs / 24);
    const remH = hrs % 24;
    return remH > 0 ? `${d}d ${remH}h left` : `${d} day${d > 1 ? 's' : ''} left`;
  }
  return `${hrs} hours left`;
}

// #1 Dynamic Discount Tiers price lookup
function getActivePrice(deal) {
  if (deal.type === 'service') return deal.groupPrice;
  if (deal.pricingMode === 'fixed') return deal.fixedPrice;
  for (const t of deal.tiers) {
    if (deal.joinedCount >= t.min && deal.joinedCount <= t.max) return t.price;
  }
  return deal.tiers[deal.tiers.length - 1].price;
}

// #5 Seller Trust Score calculation
function getTrustScore(m) {
  const score = Math.round(
    m.deliverySpeed * 0.25 +
    m.quality * 0.25 +
    (100 - m.cancelRate * 10) * 0.15 +
    (100 - m.returnRate * 10) * 0.15 +
    (m.rating / 5) * 100 * 0.20
  );
  return Math.min(99, score);
}

function updateTopBar(bumpWallet = false) {
  document.getElementById('walletAmount').textContent = formatINR(state.wallet);
  document.getElementById('myPoolsCount').textContent = state.myPools.length;

  if (bumpWallet) {
    const chip = document.querySelector('.wallet-chip');
    if (chip) {
      chip.classList.remove('wallet-bump');
      void chip.offsetWidth;
      chip.classList.add('wallet-bump');
    }
  }
}

function playTransactionAnimation({ type, title, sub, amountText }) {
  const overlay = document.getElementById('actionAnimOverlay');
  const card = document.getElementById('actionAnimCard');
  const iconWrap = document.getElementById('actionAnimIconWrap');
  const titleEl = document.getElementById('actionAnimTitle');
  const subEl = document.getElementById('actionAnimSub');
  const amtEl = document.getElementById('actionAnimAmount');
  const confettiBox = document.getElementById('confettiContainer');

  if (!overlay) return;

  card.className = 'anim-card';
  iconWrap.className = 'anim-icon-wrap';
  amtEl.className = 'anim-amount';
  confettiBox.innerHTML = '';

  if (type === 'pay') {
    iconWrap.classList.add('theme-pay');
    amtEl.classList.add('amt-pay');
    iconWrap.innerHTML = `
      <svg class="anim-svg" viewBox="0 0 52 52" stroke="currentColor">
        <path class="anim-svg-path" d="M14 27l8 8 16-16" />
      </svg>
    `;
    // Spawn confetti burst
    const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4'];
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.25}s`;
      confettiBox.appendChild(piece);
    }
  } else if (type === 'refund') {
    iconWrap.classList.add('theme-refund');
    amtEl.classList.add('amt-refund');
    iconWrap.innerHTML = `
      <svg class="anim-svg" viewBox="0 0 52 52" stroke="currentColor">
        <path class="anim-svg-path" d="M15 26h22M23 18l-8 8 8 8" />
      </svg>
    `;
  } else {
    // cancel / forfeit
    card.classList.add('shake-anim');
    iconWrap.classList.add('theme-cancel');
    amtEl.classList.add('amt-cancel');
    iconWrap.innerHTML = `
      <svg class="anim-svg" viewBox="0 0 52 52" stroke="currentColor">
        <path class="anim-svg-path" d="M17 17l18 18M35 17L17 35" />
      </svg>
    `;
  }

  titleEl.textContent = title;
  subEl.textContent = sub;
  amtEl.textContent = amountText;

  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 1650);
}

/* ==========================================================================
   NAVIGATION & FILTERS
========================================================================== */
function switchView(view) {
  document.querySelectorAll('.page-view').forEach((el) => el.classList.add('hidden'));
  document.getElementById(`view-${view}`)?.classList.remove('hidden');

  document.querySelectorAll('.nav-tabs .nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  if (view === 'my-pools') renderMyPools();
  if (view === 'seller') initSellerForms();
}

function setCategory(cat) {
  state.category = cat;
  document.querySelectorAll('.filter-bar .seg-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.type === cat);
  });
  renderDeals();
}

function changeLocationHub(hubId) {
  state.hubId = hubId;
  renderDeals();
  showToast('📍 Updated location filter');
}

/* ==========================================================================
   RENDER CLEAN DEAL CARDS (PRODUCT & SERVICE CARDS)
========================================================================== */
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  const query = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();

  const filtered = state.deals.filter((d) => {
    if (state.category === 'service' && d.type !== 'service') return false;
    if (state.category === 'product' && d.type !== 'product') return false;
    if (state.category === 'recommended' && !d.isRecommended) return false;
    if (state.hubId !== 'all' && d.hubId !== state.hubId) return false;
    if (query) {
      const hay = `${d.businessName} ${d.title} ${d.locationText}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="seller-card" style="grid-column:1/-1;text-align:center;">
        <h3>No deals found for this filter</h3>
        <p class="muted-text" style="margin:0.5rem 0 1rem;">Try choosing "All Locations" or "All Deals".</p>
        <button class="btn btn-outline" onclick="setCategory('all'); document.getElementById('hubSelect').value='all'; changeLocationHub('all');">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((deal) => renderSingleCard(deal)).join('');
}

function renderSingleCard(deal) {
  const price = getActivePrice(deal);
  const saved = deal.regularPrice - price;
  const pct = Math.min(100, Math.round((deal.joinedCount / deal.maxCapacity) * 100));
  const remaining = Math.max(0, deal.maxCapacity - deal.joinedCount);
  const trustScore = getTrustScore(deal.sellerMetrics);
  const isJoined = state.myPools.some((mp) => mp.dealId === deal.id);
  const isFull = deal.joinedCount >= deal.maxCapacity || deal.status === 'FULL';

  // Middle Section: Service Details vs Product Dynamic Tiers
  let detailsSection = '';
  if (deal.type === 'service') {
    const nextSlot = deal.availableSlots?.[0]
      ? `${deal.availableSlots[0].date} (${deal.availableSlots[0].time.split('–')[0].trim()})`
      : 'Flexible Dates';

    detailsSection = `
      <div class="service-meta-grid">
        <div>📍 <strong>Location:</strong> ${deal.locationText}</div>
        <div>⏱️ <strong>Duration:</strong> ${deal.durationMinutes} mins</div>
        <div>📅 <strong>Next Slot:</strong> ${nextSlot}</div>
        <div>🎟️ <strong>Remaining:</strong> ${remaining} bookings left</div>
        <div style="grid-column: 1 / -1;">
          ⭐ <strong>Salon Rating:</strong> ★ ${deal.sellerMetrics.rating} (${deal.sellerMetrics.reviewsCount} reviews)
        </div>
      </div>
    `;
  } else {
    // Product Card: Dynamic Discount Tiers (#1)
    if (deal.pricingMode === 'dynamic') {
      detailsSection = `
        <div class="tiers-row">
          ${deal.tiers
            .map((t) => {
              const active = deal.joinedCount >= t.min && deal.joinedCount <= t.max;
              return `
                <div class="tier-pill ${active ? 'active-tier' : ''}">
                  <span>${t.label} buyers</span>
                  <strong>${formatINR(t.price)}</strong>
                </div>
              `;
            })
            .join('')}
        </div>
      `;
    } else {
      detailsSection = `
        <div class="service-meta-grid">
          <div>🎯 <strong>Fixed Group Goal:</strong> Min ${deal.minBuyers} buyers</div>
          <div>📍 <strong>Hub:</strong> ${deal.locationText}</div>
        </div>
      `;
    }
  }

  // Primary Button State
  let mainBtn = '';
  if (isJoined) {
    mainBtn = `<button class="btn btn-green" onclick="switchView('my-pools')">✓ Joined (View in My Pools)</button>`;
  } else if (isFull) {
    mainBtn = `<button class="btn btn-primary" onclick="openJoinModal('${deal.id}')">Join Waitlist</button>`;
  } else if (deal.status === 'REOPENED') {
    mainBtn = `<button class="btn btn-primary" onclick="openJoinModal('${deal.id}')">⚡ Direct Buy (${formatINR(price)})</button>`;
  } else {
    mainBtn = `<button class="btn btn-primary" onclick="openJoinModal('${deal.id}')">Join Deal</button>`;
  }

  // Secondary Button: [ View Slots ] for Service deals, [ View Details ] for Products
  const secondBtn =
    deal.type === 'service'
      ? `<button class="btn btn-outline" onclick="openSlotsModal('${deal.id}')">View Slots</button>`
      : `<button class="btn btn-outline" onclick="openProductDetailsModal('${deal.id}')">View Details</button>`;

  const imgUrl = deal.image || 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=900&q=80';
  const discountPct = Math.round((saved / deal.regularPrice) * 100);

  return `
    <article class="deal-card">
      <!-- E-Commerce Style Product/Service Image Frame -->
      <div class="card-image-wrap" onclick="openProductDetailsModal('${deal.id}')" title="Click to view full product details">
        <img src="${imgUrl}" alt="${deal.title}" loading="lazy" />
        <span class="discount-ribbon">${discountPct}% OFF</span>
        <span class="category-tag-pill">${deal.type === 'service' ? '💇‍♀️ Local Service' : '📦 Bulk Product'}</span>
        <span class="view-details-pill">🔍 View Details</span>
      </div>

      <div>
        <div class="card-top">
          <div>
            <div class="biz-label">
              ${deal.businessName}
              ${state.category === 'recommended' ? ` • <span style="color:var(--green);">${deal.recReason}</span>` : ''}
            </div>
            <h3 class="deal-title" onclick="openProductDetailsModal('${deal.id}')">${deal.title}</h3>
          </div>
          <button class="trust-badge" onclick="openTrustModal('${deal.id}')" title="View Seller Trust Breakdown">
            🛡️ ${trustScore}% Trust • ★ ${deal.sellerMetrics.rating}
          </button>
        </div>
      </div>

      <!-- Clean Pricing Box (Matches Prompt Spec) -->
      <div class="price-box">
        <div>
          <div class="reg-price">Regular price: <span>${formatINR(deal.regularPrice)}</span></div>
          <div class="grp-price">Group price: <strong>${formatINR(price)}</strong></div>
        </div>
        <div class="save-pill">Save ${formatINR(saved)}</div>
      </div>

      <!-- Live Pool Progress (#2) & Refundable Deadline Time -->
      <div class="progress-section">
        <div class="progress-labels">
          <span>${deal.joinedCount} ${deal.type === 'service' ? `/ ${deal.maxCapacity} people joined` : `of ${deal.maxCapacity} buyers joined`}</span>
          <span class="time-left">${deal.endsInText}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="refundable-deadline-line">
          <span>🪙 Token: <strong>${formatINR(deal.tokenAmount)}</strong></span>
          <span>🛡️ Refundable Deadline: <strong>${getRefundableDeadlineText(deal)}</strong></span>
        </div>
      </div>

      <!-- Service Info OR Dynamic Discount Tiers -->
      ${detailsSection}

      <!-- Action Buttons -->
      <div class="card-actions">
        ${mainBtn}
        ${secondBtn}
        <button class="btn btn-outline" onclick="openShareModal('${deal.id}')" title="Share Pool">📤</button>
      </div>
    </article>
  `;
}

/* ==========================================================================
   MODAL 5: FULL PRODUCT / SERVICE DETAILS POPUP (ON IMAGE OR TITLE CLICK)
========================================================================== */
function openProductDetailsModal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  const price = getActivePrice(deal);
  const saved = deal.regularPrice - price;
  const pct = Math.min(100, Math.round((deal.joinedCount / deal.maxCapacity) * 100));
  const trustScore = getTrustScore(deal.sellerMetrics);
  const imgUrl = deal.image || 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=900&q=80';

  document.getElementById('productDetailsTitle').textContent = deal.title;

  const specsHTML = (deal.specs || [
    { label: 'Seller', value: deal.businessName },
    { label: 'Delivery Hub', value: deal.locationText },
    { label: 'Min Buyers Required', value: `${deal.minBuyers} buyers` },
    { label: 'Refundable Token', value: formatINR(deal.tokenAmount) }
  ])
    .map(
      (sp) => `
      <div class="spec-item">
        <small>${sp.label}</small>
        <strong>${sp.value}</strong>
      </div>
    `
    )
    .join('');

  const highlightsHTML = (deal.highlights || [deal.description])
    .map((h) => `<li style="margin-bottom:0.35rem;">${h}</li>`)
    .join('');

  let tiersOrSlotsBlock = '';
  if (deal.type === 'product' && deal.pricingMode === 'dynamic') {
    tiersOrSlotsBlock = `
      <h4 style="font-size:0.9rem;margin:1rem 0 0.45rem;">📉 Dynamic Discount Tiers (Current: ${deal.joinedCount} joined)</h4>
      <div class="tiers-row">
        ${deal.tiers
          .map((t) => {
            const active = deal.joinedCount >= t.min && deal.joinedCount <= t.max;
            return `
              <div class="tier-pill ${active ? 'active-tier' : ''}">
                <span>${t.label} buyers</span>
                <strong>${formatINR(t.price)}</strong>
              </div>
            `;
          })
          .join('')}
      </div>
    `;
  } else if (deal.type === 'service' && deal.availableSlots) {
    tiersOrSlotsBlock = `
      <h4 style="font-size:0.9rem;margin:1rem 0 0.45rem;">📅 Available Appointment Slots (${deal.durationMinutes} mins)</h4>
      <div class="slot-choice-grid">
        ${deal.availableSlots
          .map(
            (s) => `
            <div class="slot-choice">
              <strong>${s.date}</strong>
              <div>${s.time}</div>
              <small style="color:var(--green);">${s.max - s.booked} of ${s.max} spots open</small>
            </div>
          `
          )
          .join('')}
      </div>
    `;
  }

  const galleryList = deal.gallery && deal.gallery.length ? deal.gallery : [imgUrl];
  const thumbsHTML =
    galleryList.length > 1
      ? `<div class="details-thumbs-row">
          ${galleryList
            .map(
              (gUrl, idx) => `
              <img
                src="${gUrl}"
                class="details-thumb ${idx === 0 ? 'active' : ''}"
                onclick="switchDetailsMainImage('${gUrl}', this)"
                alt="Thumbnail ${idx + 1}"
              />
            `
            )
            .join('')}
        </div>`
      : '';

  document.getElementById('productDetailsContent').innerHTML = `
    <div class="details-gallery-wrap">
      <img id="detailsMainHeroImg" src="${galleryList[0]}" alt="${deal.title}" class="details-hero-img" />
      ${thumbsHTML}
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;flex-wrap:wrap;gap:0.5rem;">
      <span class="biz-label">${deal.businessName} • 📍 ${deal.locationText}</span>
      <span class="trust-badge" onclick="closeModal('productDetailsModal'); openTrustModal('${deal.id}');">
        🛡️ ${trustScore}% Seller Trust • ★ ${deal.sellerMetrics.rating} (${deal.sellerMetrics.reviewsCount} reviews)
      </span>
    </div>

    <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:1rem;">
      ${deal.description}
    </p>

    <div class="price-box" style="margin-bottom:1rem;">
      <div>
        <div class="reg-price">Regular Price: <span>${formatINR(deal.regularPrice)}</span></div>
        <div class="grp-price">Unlocked Group Price: <strong>${formatINR(price)}</strong></div>
      </div>
      <div class="save-pill">Save ${formatINR(saved)}</div>
    </div>

    <div class="progress-section" style="margin-bottom:1rem;">
      <div class="progress-labels">
        <span>👥 ${deal.joinedCount} of ${deal.maxCapacity} joined (Min ${deal.minBuyers} needed)</span>
        <span class="time-left">⏰ ${deal.endsInText}</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="refundable-deadline-line" style="margin-top:0.35rem;">
        <span>🪙 Join Token: <strong>${formatINR(deal.tokenAmount)}</strong></span>
        <span>🛡️ Refundable Deadline: <strong>${getRefundableDeadlineText(deal)}</strong> (100% token refund before this time)</span>
      </div>
    </div>

    <h4 style="font-size:0.9rem;margin-bottom:0.35rem;">📋 Key Specifications</h4>
    <div class="specs-grid">${specsHTML}</div>

    <h4 style="font-size:0.9rem;margin:0.85rem 0 0.35rem;">✨ Product Highlights & Pool Perks</h4>
    <ul style="padding-left:1.2rem;font-size:0.86rem;color:var(--text-secondary);">
      ${highlightsHTML}
    </ul>

    ${tiersOrSlotsBlock}

    <div style="margin-top:1.35rem;display:flex;gap:0.65rem;">
      <button class="btn btn-primary" onclick="closeModal('productDetailsModal'); openJoinModal('${deal.id}');">
        Join Deal (Pay ${formatINR(deal.tokenAmount)} Refundable Token)
      </button>
      <button class="btn btn-outline" onclick="closeModal('productDetailsModal'); openShareModal('${deal.id}');">
        🔗 Share Invite Link
      </button>
    </div>
  `;

  document.getElementById('productDetailsModal').classList.remove('hidden');
}

function switchDetailsMainImage(url, thumbEl) {
  const mainImg = document.getElementById('detailsMainHeroImg');
  if (mainImg) mainImg.src = url;
  document.querySelectorAll('#productDetailsContent .details-thumb').forEach((t) => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

/* ==========================================================================
   MODALS: JOIN DEAL, VIEW SLOTS, SHARE, TRUST SCORE
========================================================================== */
let pickedSlotId = null;

function openJoinModal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  const price = getActivePrice(deal);
  const isFull = deal.joinedCount >= deal.maxCapacity || deal.status === 'FULL';
  const isReopened = deal.status === 'REOPENED';

  document.getElementById('joinModalTitle').textContent = `${deal.businessName} — ${deal.title}`;

  let slotHTML = '';
  if (deal.type === 'service' && deal.availableSlots?.length) {
    pickedSlotId = deal.availableSlots[0].id;
    slotHTML = `
      <div style="margin: 1rem 0;">
        <label style="font-size:0.82rem;font-weight:600;color:var(--text-secondary);">
          Choose Appointment Date & Time Slot (${deal.durationMinutes} mins):
        </label>
        <div class="slot-choice-grid">
          ${deal.availableSlots
            .map((s) => {
              const left = s.max - s.booked;
              return `
                <div class="slot-choice ${s.id === pickedSlotId ? 'selected' : ''}" onclick="selectSlotChoice('${s.id}', this)">
                  <strong>${s.date}</strong>
                  <div>${s.time}</div>
                  <small style="color:var(--green);">${left} spots left</small>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `;
  }

  let footerAction = '';
  if (isFull) {
    footerAction = `
      <p class="muted-text" style="margin:0.75rem 0;">
        This pool has reached maximum capacity (${deal.joinedCount}/${deal.maxCapacity}). Join the free <strong>Waitlist</strong> — if someone cancels, you automatically get their spot!
      </p>
      <button class="btn btn-primary" style="width:100%;" onclick="confirmJoin('${deal.id}', 'waitlist')">
        Join Waitlist (#${(deal.waitlist?.length || 0) + 1})
      </button>
    `;
  } else if (isReopened) {
    footerAction = `
      <p class="muted-text" style="margin:0.75rem 0;">
        ⚡ <strong>Re-opened for limited hours!</strong> Pay the full group price (${formatINR(price)}) directly to claim one of the remaining vacancies.
      </p>
      <button class="btn btn-primary" style="width:100%;" onclick="confirmJoin('${deal.id}', 'direct')">
        Pay ${formatINR(price)} & Join Directly
      </button>
    `;
  } else {
    footerAction = `
      <div class="slots-section" style="margin: 1rem 0; font-size:0.85rem;">
        <div style="display:flex;justify-content:space-between;margin-bottom:0.35rem;">
          <span>Pay Today (Refundable Token):</span>
          <strong style="color:var(--green);">${formatINR(deal.tokenAmount)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:0.35rem;color:var(--primary);">
          <span>🛡️ Refundable Deadline Time:</span>
          <strong>${getRefundableDeadlineText(deal)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;color:var(--text-muted);">
          <span>Remaining Balance (Pay after deadline):</span>
          <span>${formatINR(price - deal.tokenAmount)}</span>
        </div>
        <p class="muted-text" style="margin-top:0.6rem;font-size:0.78rem;">
          🛡️ Token is 100% refundable before the refundable deadline (${getRefundableDeadlineText(deal)}), or if the seller's minimum target (${deal.minBuyers} buyers) isn't met.
        </p>
      </div>
      <button class="btn btn-primary" style="width:100%;" onclick="confirmJoin('${deal.id}', 'token')">
        Pay ${formatINR(deal.tokenAmount)} Token & Join Pool
      </button>
    `;
  }

  document.getElementById('joinModalContent').innerHTML = `
    <div class="price-box">
      <div>
        <div class="reg-price">Regular: <span>${formatINR(deal.regularPrice)}</span></div>
        <div class="grp-price">Group Price: <strong>${formatINR(price)}</strong></div>
      </div>
      <div class="save-pill">Save ${formatINR(deal.regularPrice - price)}</div>
    </div>
    ${slotHTML}
    ${footerAction}
  `;

  document.getElementById('joinModal').classList.remove('hidden');
}

function selectSlotChoice(slotId, el) {
  pickedSlotId = slotId;
  document.querySelectorAll('#joinModalContent .slot-choice').forEach((c) => c.classList.remove('selected'));
  el.classList.add('selected');
}

function confirmJoin(dealId, mode) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  const slotObj = deal.availableSlots?.find((s) => s.id === pickedSlotId) || deal.availableSlots?.[0];
  const refCode = `POOL-${Math.floor(1000 + Math.random() * 9000)}`;

  closeModal('joinModal');

  if (mode === 'waitlist') {
    deal.waitlist.push('You');
    state.myPools.unshift({
      dealId: deal.id,
      tokenPaid: 0,
      slotLabel: slotObj ? `${slotObj.date} • ${slotObj.time}` : null,
      referralCode: refCode,
      pastCutoff: false,
      status: 'WAITLIST'
    });
    showToast('⏳ Added to Waitlist!');
    saveState();
    updateTopBar();
    renderDeals();
  } else if (mode === 'direct') {
    const price = getActivePrice(deal);
    state.wallet = Math.max(0, state.wallet - price);
    deal.joinedCount += 1;
    state.myPools.unshift({
      dealId: deal.id,
      tokenPaid: price,
      slotLabel: slotObj ? `${slotObj.date} • ${slotObj.time}` : null,
      referralCode: refCode,
      pastCutoff: true,
      status: 'FINAL_PAID'
    });
    saveState();
    updateTopBar(true);
    renderDeals();
    playTransactionAnimation({
      type: 'pay',
      title: 'Payment Successful!',
      sub: `Joined "${deal.title}" directly`,
      amountText: `Paid ${formatINR(price)}`
    });
  } else {
    state.wallet = Math.max(0, state.wallet - deal.tokenAmount);
    deal.joinedCount += 1;
    if (deal.joinedCount >= deal.maxCapacity) deal.status = 'FULL';
    if (slotObj && slotObj.booked < slotObj.max) slotObj.booked += 1;

    state.myPools.unshift({
      dealId: deal.id,
      tokenPaid: deal.tokenAmount,
      slotLabel: slotObj ? `${slotObj.date} • ${slotObj.time}` : null,
      referralCode: refCode,
      pastCutoff: false,
      status: 'TOKEN_PAID'
    });
    saveState();
    updateTopBar(true);
    renderDeals();
    playTransactionAnimation({
      type: 'pay',
      title: 'Token Payment Successful!',
      sub: `Spot locked in "${deal.title}"`,
      amountText: `Paid ${formatINR(deal.tokenAmount)} Token`
    });
  }
}

// Modal 2: [ View Slots ] & Reviews
function openSlotsModal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  document.getElementById('slotsModalTitle').textContent = `${deal.businessName} — Slots & Reviews`;

  const slotsHTML = (deal.availableSlots || [])
    .map(
      (s) => `
      <div class="slot-choice">
        <strong>📅 ${s.date}</strong>
        <div>🕒 ${s.time}</div>
        <small style="color:var(--green);">${s.max - s.booked} of ${s.max} bookings open</small>
      </div>
    `
    )
    .join('');

  const reviewsHTML = (deal.reviews || [])
    .map(
      (r) => `
      <div style="padding:0.65rem;background:var(--bg-page);border-radius:8px;margin-top:0.5rem;font-size:0.84rem;">
        <strong>${r.author}</strong> <span style="color:var(--amber);">★ ${r.rating}</span>
        <p class="muted-text" style="margin-top:0.2rem;">${r.text}</p>
      </div>
    `
    )
    .join('');

  document.getElementById('slotsModalContent').innerHTML = `
    <p class="muted-text" style="margin-bottom:0.75rem;">
      📍 ${deal.locationText} • ⏱️ Duration: ${deal.durationMinutes} minutes
    </p>
    <h4 style="font-size:0.9rem;">Available Dates & Time Slots</h4>
    <div class="slot-choice-grid">${slotsHTML}</div>

    <h4 style="font-size:0.9rem;margin-top:1rem;">Customer Reviews (★ ${deal.sellerMetrics.rating})</h4>
    ${reviewsHTML}

    <div style="margin-top:1.25rem;display:flex;gap:0.5rem;">
      <button class="btn btn-primary" onclick="closeModal('slotsModal'); openJoinModal('${deal.id}');">Join Deal & Book Slot</button>
    </div>
  `;

  document.getElementById('slotsModal').classList.remove('hidden');
}

// Modal 3: Invite Link & Social Share (#3 & #9)
function openShareModal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  const mp = state.myPools.find((m) => m.dealId === dealId);
  const code = mp ? mp.referralCode : `INVITE-${deal.id.toUpperCase()}`;
  const link = `https://dealpool.app/join/${deal.id}?ref=${code}`;
  const text = encodeURIComponent(`Join our "${deal.businessName} - ${deal.title}" pool on DealPool! Link: ${link}`);

  document.getElementById('shareModalTitle').textContent = `Invite Friends — ${deal.title}`;
  document.getElementById('shareModalContent').innerHTML = `
    <p class="muted-text">Share your personal referral link so more people join and unlock lower prices:</p>
    <div style="display:flex;gap:0.5rem;margin:0.85rem 0;">
      <input type="text" value="${link}" readonly style="flex:1;padding:0.5rem;border:1px solid var(--border);border-radius:6px;font-size:0.82rem;" />
      <button class="btn btn-outline btn-sm" onclick="navigator.clipboard?.writeText('${link}'); showToast('📋 Invite link copied!');">Copy</button>
    </div>

    <div class="slot-choice-grid" style="margin-top:1rem;">
      <a class="btn btn-outline btn-sm" href="https://wa.me/?text=${text}" target="_blank">💬 WhatsApp</a>
      <button class="btn btn-outline btn-sm" onclick="showToast('📸 Link copied for Instagram!')">📸 Instagram</button>
      <a class="btn btn-outline btn-sm" href="https://t.me/share/url?url=${encodeURIComponent(link)}&text=${text}" target="_blank">✈️ Telegram</a>
      <a class="btn btn-outline btn-sm" href="mailto:?subject=Join DealPool&body=${text}">✉️ Email</a>
    </div>
  `;

  document.getElementById('shareModal').classList.remove('hidden');
}

// Modal 4: Seller Trust Score (#5)
function openTrustModal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;
  const m = deal.sellerMetrics;
  const score = getTrustScore(m);

  document.getElementById('trustModalTitle').textContent = `${deal.businessName} — Trust Score ${score}/100`;
  document.getElementById('trustModalContent').innerHTML = `
    <p class="muted-text" style="margin-bottom:1rem;">Calculated from verified seller performance metrics:</p>
    <div style="display:flex;flex-direction:column;gap:0.65rem;font-size:0.88rem;">
      <div style="display:flex;justify-content:space-between;"><span>🚚 Delivery / Punctuality:</span><strong>${m.deliverySpeed}%</strong></div>
      <div style="display:flex;justify-content:space-between;"><span>✨ Product / Service Quality:</span><strong>${m.quality}%</strong></div>
      <div style="display:flex;justify-content:space-between;"><span>🚫 Cancellation Rate:</span><strong style="color:var(--green);">${m.cancelRate}%</strong></div>
      <div style="display:flex;justify-content:space-between;"><span>↩️ Return Rate:</span><strong style="color:var(--green);">${m.returnRate}%</strong></div>
      <div style="display:flex;justify-content:space-between;"><span>⭐ Customer Reviews:</span><strong>★ ${m.rating} (${m.reviewsCount} reviews)</strong></div>
    </div>
  `;
  document.getElementById('trustModal').classList.remove('hidden');
}

/* ==========================================================================
   VIEW 2: MY POOLS & AUTO-REFUND ESCROW (#6)
========================================================================== */
function renderMyPools() {
  const box = document.getElementById('myPoolsList');
  if (!box) return;

  if (state.myPools.length === 0) {
    box.innerHTML = `<div class="seller-card" style="text-align:center;">You haven't joined any pools yet.</div>`;
    return;
  }

  box.innerHTML = state.myPools
    .map((mp, idx) => {
      const deal = state.deals.find((d) => d.id === mp.dealId);
      if (!deal) return '';
      const price = getActivePrice(deal);
      const remainingDue = Math.max(0, price - mp.tokenPaid);

      let statusLabel = '';
      let buttons = '';

      if (mp.status === 'WAITLIST') {
        statusLabel = `<span style="color:var(--amber);font-weight:600;">⏳ On Waitlist</span>`;
        buttons = `<button class="btn btn-outline btn-sm" onclick="leavePool(${idx})">Leave Waitlist</button>`;
      } else if (mp.status === 'REFUNDED') {
        statusLabel = `<span style="color:var(--green);font-weight:600;">💸 Refunded (${formatINR(mp.tokenPaid)})</span>`;
      } else if (mp.status === 'FORFEITED') {
        statusLabel = `<span style="color:var(--red);font-weight:600;">⚠️ Left After Refundable Deadline (Token Non-Refundable)</span>`;
      } else if (mp.status === 'FINAL_PAID') {
        statusLabel = `<span style="color:var(--green);font-weight:600;">✅ Confirmed & Fully Paid (${formatINR(price)})</span>`;
      } else {
        // TOKEN_PAID
        statusLabel = `
          <div>🪙 Token Paid: <strong>${formatINR(mp.tokenPaid)}</strong> • Final Due: <strong>${formatINR(remainingDue)}</strong></div>
          <small style="color:${mp.pastCutoff ? 'var(--amber)' : 'var(--green)'};">
            ${mp.pastCutoff ? '⚠️ Refundable Deadline Passed (Token non-refundable if you leave)' : `✓ Refundable Deadline: ${getRefundableDeadlineText(deal)} (100% refundable if you leave now)`}
          </small>
        `;
        buttons = `
          <button class="btn btn-green btn-sm" onclick="payFinalAmount(${idx})">Pay Final ${formatINR(remainingDue)}</button>
          <button class="btn btn-outline btn-sm" onclick="toggleCutoffState(${idx})">
            ${mp.pastCutoff ? 'Reset Refundable Deadline' : 'Simulate Refundable Deadline Passed'}
          </button>
          <button class="btn btn-danger btn-sm" onclick="leavePool(${idx})">Leave Pool</button>
        `;
      }

      return `
        <div class="my-pool-row">
          <div>
            <div class="biz-label">${deal.businessName}</div>
            <h4 style="font-size:1.05rem;">${deal.title}</h4>
            <div class="muted-text">
              Progress: ${deal.joinedCount}/${deal.maxCapacity} joined
              ${mp.slotLabel ? ` • 📅 Slot: ${mp.slotLabel}` : ''}
              • 🔗 Code: <strong>${mp.referralCode}</strong>
            </div>
          </div>
          <div>${statusLabel}</div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">${buttons}</div>
        </div>
      `;
    })
    .join('');
}

function toggleCutoffState(idx) {
  state.myPools[idx].pastCutoff = !state.myPools[idx].pastCutoff;
  saveState();
  renderMyPools();
}

function payFinalAmount(idx) {
  const mp = state.myPools[idx];
  const deal = state.deals.find((d) => d.id === mp.dealId);
  const due = Math.max(0, getActivePrice(deal) - mp.tokenPaid);
  state.wallet = Math.max(0, state.wallet - due);
  mp.status = 'FINAL_PAID';
  saveState();
  updateTopBar(true);
  renderMyPools();
  playTransactionAnimation({
    type: 'pay',
    title: 'Final Payment Complete!',
    sub: `"${deal.title}" is now confirmed`,
    amountText: `Paid ${formatINR(due)}`
  });
}

function leavePool(idx) {
  const mp = state.myPools[idx];
  const deal = state.deals.find((d) => d.id === mp.dealId);

  if (mp.status === 'WAITLIST') {
    state.myPools.splice(idx, 1);
    saveState();
    updateTopBar();
    renderMyPools();
    renderDeals();
    showToast('Removed from waitlist.');
  } else if (!mp.pastCutoff) {
    state.wallet += mp.tokenPaid;
    mp.status = 'REFUNDED';
    if (deal) deal.joinedCount = Math.max(0, deal.joinedCount - 1);
    saveState();
    updateTopBar(true);
    renderMyPools();
    renderDeals();
    playTransactionAnimation({
      type: 'refund',
      title: 'Pool Cancelled & Refunded',
      sub: 'Left before refundable deadline',
      amountText: `+ ${formatINR(mp.tokenPaid)} Refunded to Wallet`
    });
  } else {
    mp.status = 'FORFEITED';
    if (deal) deal.joinedCount = Math.max(0, deal.joinedCount - 1);
    saveState();
    updateTopBar();
    renderMyPools();
    renderDeals();
    playTransactionAnimation({
      type: 'cancel',
      title: 'Left Pool After Deadline',
      sub: 'Refundable deadline had already passed',
      amountText: `${formatINR(mp.tokenPaid)} Token Non-Refundable`
    });
  }
}

/* ==========================================================================
   VIEW 3: MINIMAL SELLER DASHBOARD (CREATE POOL WITH PICTURES & DETAILS)
========================================================================== */
const SAMPLE_STUDIO_PHOTOS = [
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80'
];
let samplePhotoIdx = 0;

function switchSellerMainTab(tab) {
  document.getElementById('tabBtnCreatePool').classList.toggle('active', tab === 'create');
  document.getElementById('tabBtnManagePools').classList.toggle('active', tab === 'manage');
  document.getElementById('sellerCreatePane').classList.toggle('hidden', tab !== 'create');
  document.getElementById('sellerManagePane').classList.toggle('hidden', tab !== 'manage');

  if (tab === 'manage') {
    populateManageDealsDropdown();
  }
}

function setCreatorType(type) {
  document.getElementById('editDealType').value = type;
  document.getElementById('typeBtnProduct').classList.toggle('active', type === 'product');
  document.getElementById('typeBtnService').classList.toggle('active', type === 'service');

  document.getElementById('lblTitle').textContent = type === 'service' ? 'Service Package Name' : 'Product Name';
  document.getElementById('lblBiz').textContent = type === 'service' ? 'Salon / Service Business Name' : 'Brand / Seller Name';

  document.getElementById('creatorProductFields').classList.toggle('hidden', type !== 'product');
  document.getElementById('creatorServiceFields').classList.toggle('hidden', type !== 'service');

  // Ensure default slots exist if switching to service
  const slotsBox = document.getElementById('creatorSlotsList');
  if (type === 'service' && slotsBox && !slotsBox.children.length) {
    addCreatorSlotRow('Sat, Nov 1', '11:00 AM – 12:00 PM', 4);
    addCreatorSlotRow('Sun, Nov 2', '04:00 PM – 05:00 PM', 4);
  }
}

function toggleCreatorPricingMode() {
  const mode = document.getElementById('poolPricingMode').value;
  document.getElementById('creatorDynamicTiers').classList.toggle('hidden', mode !== 'dynamic');
  document.getElementById('creatorFixedTier').classList.toggle('hidden', mode === 'dynamic');
}

function updateCreatorImagePreview(url) {
  const preview = document.getElementById('creatorImagePreview');
  if (preview && url.trim()) {
    preview.src = url.trim();
  }
}

function handleImageFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    document.getElementById('poolImageUrl').value = dataUrl;
    document.getElementById('creatorImagePreview').src = dataUrl;
    showToast('📸 Picture uploaded and preview updated!');
  };
  reader.readAsDataURL(file);
}

function useSamplePicture() {
  samplePhotoIdx = (samplePhotoIdx + 1) % SAMPLE_STUDIO_PHOTOS.length;
  const url = SAMPLE_STUDIO_PHOTOS[samplePhotoIdx];
  document.getElementById('poolImageUrl').value = url;
  document.getElementById('creatorImagePreview').src = url;
  showToast('✨ Applied sample studio product picture!');
}

function addCreatorSlotRow(dateVal = 'Mon, Nov 3', timeVal = '05:00 PM – 06:00 PM', maxVal = 4) {
  const list = document.getElementById('creatorSlotsList');
  if (!list) return;
  const div = document.createElement('div');
  div.className = 'slot-row';
  div.innerHTML = `
    <input type="text" class="c-slot-date" value="${dateVal}" placeholder="Date" required />
    <input type="text" class="c-slot-time" value="${timeVal}" placeholder="Time Slot" required />
    <input type="number" class="c-slot-max" value="${maxVal}" min="1" required />
    <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">✕</button>
  `;
  list.appendChild(div);
}

function resetCreatorForm() {
  document.getElementById('editDealId').value = '';
  document.getElementById('creatorFormHeading').textContent = 'Create a New Deal Pool';
  document.getElementById('submitPoolBtn').textContent = '🚀 Publish Pool to Marketplace';
  document.getElementById('poolTitle').value = '';
  document.getElementById('poolBiz').value = '';
  document.getElementById('poolDesc').value = '';
  document.getElementById('poolHighlights').value = '1 Year Official Warranty, Bulk Group Discount, 100% Auto-Refund Protection';
  document.getElementById('poolRegPrice').value = 2500;
  document.getElementById('poolToken').value = 150;
  document.getElementById('poolHours').value = 24;
  document.getElementById('poolMin').value = 10;
  document.getElementById('poolMax').value = 20;
  if (document.getElementById('poolRefundHours')) {
    document.getElementById('poolRefundHours').value = 12;
  }
  setCreatorType('product');
}

function handleSavePoolForm(e) {
  e.preventDefault();
  const editId = document.getElementById('editDealId').value;
  const type = document.getElementById('editDealType').value;
  const imgUrl =
    document.getElementById('poolImageUrl').value.trim() ||
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80';

  const title = document.getElementById('poolTitle').value.trim();
  const businessName = document.getElementById('poolBiz').value.trim();
  const description = document.getElementById('poolDesc').value.trim();
  const hubId = document.getElementById('poolHub').value;
  const regularPrice = Number(document.getElementById('poolRegPrice').value);
  const tokenAmount = Number(document.getElementById('poolToken').value);
  const deadlineHours = Number(document.getElementById('poolHours').value);
  const minBuyers = Number(document.getElementById('poolMin').value);
  const maxCapacity = Number(document.getElementById('poolMax').value);
  const refundHours = Number(document.getElementById('poolRefundHours')?.value || Math.max(1, Math.floor(deadlineHours * 0.6)));

  const highlightsRaw = document.getElementById('poolHighlights').value.trim();
  const highlights = highlightsRaw
    ? highlightsRaw.split(',').map((s) => s.trim()).filter(Boolean)
    : [description, '100% refundable token before refundable deadline'];

  const hubLabels = {
    koramangala: 'Koramangala City Hub',
    'iit-campus': 'IIT Campus Hub',
    'prestige-apt': 'Prestige Apartments Pool',
    'manyata-tech': 'Manyata Tech Park Hub'
  };

  let existing = editId ? state.deals.find((d) => d.id === editId) : null;

  const dealObj = existing || {
    id: `${type === 'service' ? 'srv' : 'prd'}-${Date.now()}`,
    joinedCount: 1,
    safeExitOpen: true,
    status: 'OPEN',
    isRecommended: true,
    recReason: '🆕 Newly Created Seller Pool',
    sellerMetrics: {
      deliverySpeed: 96,
      quality: 97,
      cancelRate: 0.5,
      returnRate: 0.5,
      rating: 4.9,
      reviewsCount: 48
    },
    bookingsLog: [
      { customer: 'Early Pool Buyer', slot: 'Confirmed Slot', payment: `Token Paid (${formatINR(tokenAmount)})`, status: 'Active' }
    ],
    reviews: [
      { author: 'Verified Buyer', rating: 5, text: 'Great group deal and smooth coordination!' }
    ],
    waitlist: []
  };

  dealObj.type = type;
  dealObj.title = title;
  dealObj.businessName = businessName;
  dealObj.image = imgUrl;
  dealObj.gallery = [imgUrl];
  dealObj.description = description;
  dealObj.highlights = highlights;
  dealObj.hubId = hubId;
  dealObj.regularPrice = regularPrice;
  dealObj.tokenAmount = tokenAmount;
  dealObj.deadlineHours = deadlineHours;
  dealObj.endsInText = `Ends in ${deadlineHours} hours`;
  dealObj.refundableDeadlineHours = refundHours;
  dealObj.refundableDeadlineText = `${refundHours} hours left`;
  dealObj.minBuyers = minBuyers;
  dealObj.maxCapacity = maxCapacity;

  if (type === 'product') {
    dealObj.pricingMode = document.getElementById('poolPricingMode').value;
    dealObj.tiers = [
      { min: 1, max: 9, label: '1–9', price: Number(document.getElementById('poolTier1').value) },
      { min: 10, max: 19, label: '10–19', price: Number(document.getElementById('poolTier2').value) },
      { min: 20, max: 999, label: '20+', price: Number(document.getElementById('poolTier3').value) }
    ];
    dealObj.fixedPrice = Number(document.getElementById('poolFixedPrice').value);
    dealObj.locationText = hubLabels[hubId] || 'City Delivery Hub';
    dealObj.specs = [
      { label: 'Brand / Seller', value: businessName },
      { label: 'Delivery Hub', value: dealObj.locationText },
      { label: 'Min Buyers Goal', value: `${minBuyers} buyers` },
      { label: 'Join Token', value: formatINR(tokenAmount) }
    ];
  } else {
    dealObj.groupPrice = Number(document.getElementById('poolServiceGroupPrice').value);
    dealObj.durationMinutes = Number(document.getElementById('poolServiceDuration').value);
    dealObj.maxBookingsPerSlot = Number(document.getElementById('poolMaxPerSlot').value);
    dealObj.locationText = document.getElementById('poolServiceLocation').value.trim() || hubLabels[hubId];

    const slotRows = Array.from(document.querySelectorAll('#creatorSlotsList .slot-row'));
    dealObj.availableSlots = slotRows.map((r, i) => ({
      id: `slot-${Date.now()}-${i}`,
      date: r.querySelector('.c-slot-date').value,
      time: r.querySelector('.c-slot-time').value,
      booked: 1,
      max: Number(r.querySelector('.c-slot-max').value) || 4
    }));
    dealObj.specs = [
      { label: 'Service Provider', value: businessName },
      { label: 'Duration', value: `${dealObj.durationMinutes} Minutes` },
      { label: 'Location', value: dealObj.locationText },
      { label: 'Max Per Slot', value: `${dealObj.maxBookingsPerSlot} bookings` }
    ];
  }

  if (!existing) {
    state.deals.unshift(dealObj);
  }

  saveState();
  renderDeals();
  resetCreatorForm();
  switchView('explore');
  playTransactionAnimation({
    type: 'pay',
    title: existing ? 'Pool Updated!' : 'New Pool Published!',
    sub: `"${dealObj.title}" is now live in Explore Deals`,
    amountText: formatINR(getActivePrice(dealObj))
  });
}

function initSellerForms() {
  const slotsBox = document.getElementById('creatorSlotsList');
  if (slotsBox && !slotsBox.children.length) {
    addCreatorSlotRow('Sat, Nov 1', '11:00 AM – 12:00 PM', 4);
    addCreatorSlotRow('Sun, Nov 2', '04:00 PM – 05:00 PM', 4);
  }
  populateManageDealsDropdown();
}

function populateManageDealsDropdown() {
  const sel = document.getElementById('manageDealSelect');
  if (!sel) return;
  sel.innerHTML = state.deals
    .map((d) => `<option value="${d.id}">${d.type === 'service' ? '💇‍♀️' : '📦'} ${d.businessName} — ${d.title}</option>`)
    .join('');
  if (state.deals.length > 0) {
    renderManageDealDetails(sel.value || state.deals[0].id);
  }
}

function renderManageDealDetails(dealId) {
  const deal = state.deals.find((d) => d.id === dealId) || state.deals[0];
  const box = document.getElementById('manageDealSummaryBox');
  if (!deal || !box) return;

  const price = getActivePrice(deal);
  const bookingsRows = (deal.bookingsLog || [
    { customer: 'Confirmed Pool Member', slot: 'Standard Pool Join', payment: `Token Paid (${formatINR(deal.tokenAmount)})`, status: 'Active' }
  ])
    .map(
      (b) => `
      <tr>
        <td><strong>${b.customer}</strong></td>
        <td>${b.slot}</td>
        <td>${b.payment}</td>
        <td>${b.status}</td>
      </tr>
    `
    )
    .join('');

  box.innerHTML = `
    <div style="display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap;padding:1rem;background:var(--bg-page);border-radius:12px;border:1px solid var(--border);margin-bottom:1.25rem;">
      <img src="${deal.image}" alt="${deal.title}" style="width:90px;height:70px;object-fit:cover;border-radius:8px;border:1px solid var(--border);" />
      <div style="flex:1;">
        <div class="biz-label">${deal.businessName}</div>
        <h4 style="font-size:1.05rem;">${deal.title}</h4>
        <div class="muted-text">
          Joined: <strong>${deal.joinedCount} / ${deal.maxCapacity}</strong> (Min ${deal.minBuyers} required) •
          Active Group Price: <strong>${formatINR(price)}</strong>
        </div>
      </div>
      <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
        <button class="btn btn-green btn-sm" onclick="sellerAction('${deal.id}', 'approve')">✓ Approve Deal</button>
        <button class="btn btn-outline btn-sm" onclick="sellerAction('${deal.id}', 'reopen')">⚡ Re-Open Vacancies</button>
        <button class="btn btn-danger btn-sm" onclick="sellerAction('${deal.id}', 'cancel')">✕ Cancel & Auto-Refund</button>
      </div>
    </div>

    <div class="card-header-row" style="margin-bottom:0.5rem;">
      <h4>Booking & Cancellation Status</h4>
      <button class="btn btn-outline btn-sm" onclick="simulateNewBookingForDeal('${deal.id}')">+ Simulate Customer Booking</button>
    </div>
    <table class="clean-table" style="margin-bottom:1.25rem;">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Slot / Order</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>${bookingsRows}</tbody>
    </table>

    <h4>Customer Reviews (★ ${deal.sellerMetrics.rating} / 5.0)</h4>
    ${(deal.reviews || [{ author: 'Verified Member', rating: 5, text: 'Fast delivery and great bulk discount!' }])
      .map(
        (r) => `
      <div style="padding:0.65rem;border:1px solid var(--border);border-radius:8px;margin-top:0.45rem;font-size:0.85rem;">
        <strong>${r.author}</strong> • <span style="color:var(--amber);">★ ${r.rating}</span>
        <p class="muted-text">${r.text}</p>
      </div>
    `
      )
      .join('')}
  `;
}

function simulateNewBookingForDeal(dealId) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;
  deal.joinedCount = Math.min(deal.maxCapacity, deal.joinedCount + 1);
  deal.bookingsLog = deal.bookingsLog || [];
  deal.bookingsLog.unshift({
    customer: 'Rahul Sharma',
    slot: deal.availableSlots?.[0]?.date || 'Confirmed Pool Spot',
    payment: `Token Paid (${formatINR(deal.tokenAmount)})`,
    status: 'Active'
  });
  saveState();
  renderManageDealDetails(deal.id);
  renderDeals();
  showToast('📅 Simulated new customer booking!');
}

function loadDealIntoCreatorForEdit() {
  const dealId = document.getElementById('manageDealSelect')?.value;
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  switchSellerMainTab('create');
  setCreatorType(deal.type);

  document.getElementById('editDealId').value = deal.id;
  document.getElementById('creatorFormHeading').textContent = `Editing: ${deal.title}`;
  document.getElementById('submitPoolBtn').textContent = '💾 Save Changes to Pool';

  document.getElementById('poolImageUrl').value = deal.image || '';
  document.getElementById('creatorImagePreview').src = deal.image || '';
  document.getElementById('poolTitle').value = deal.title;
  document.getElementById('poolBiz').value = deal.businessName;
  document.getElementById('poolDesc').value = deal.description || '';
  document.getElementById('poolHighlights').value = (deal.highlights || []).join(', ');
  document.getElementById('poolHub').value = deal.hubId || 'koramangala';
  document.getElementById('poolRegPrice').value = deal.regularPrice;
  document.getElementById('poolToken').value = deal.tokenAmount;
  document.getElementById('poolHours').value = deal.deadlineHours || 24;
  document.getElementById('poolMin').value = deal.minBuyers;
  document.getElementById('poolMax').value = deal.maxCapacity;
  if (document.getElementById('poolRefundHours')) {
    document.getElementById('poolRefundHours').value = deal.refundableDeadlineHours || Math.max(2, Math.floor((deal.deadlineHours || 24) * 0.6));
  }

  if (deal.type === 'product') {
    document.getElementById('poolPricingMode').value = deal.pricingMode || 'dynamic';
    if (deal.tiers?.length >= 3) {
      document.getElementById('poolTier1').value = deal.tiers[0].price;
      document.getElementById('poolTier2').value = deal.tiers[1].price;
      document.getElementById('poolTier3').value = deal.tiers[2].price;
    }
    document.getElementById('poolFixedPrice').value = deal.fixedPrice || 1650;
    toggleCreatorPricingMode();
  } else {
    document.getElementById('poolServiceGroupPrice').value = deal.groupPrice;
    document.getElementById('poolServiceDuration').value = deal.durationMinutes || 60;
    document.getElementById('poolMaxPerSlot').value = deal.maxBookingsPerSlot || 4;
    document.getElementById('poolServiceLocation').value = deal.locationText || '';

    const slotsBox = document.getElementById('creatorSlotsList');
    slotsBox.innerHTML = '';
    (deal.availableSlots || []).forEach((s) => addCreatorSlotRow(s.date, s.time, s.max));
  }
}

function sellerAction(dealId, action) {
  const deal = state.deals.find((d) => d.id === dealId);
  if (!deal) return;

  if (action === 'approve') {
    deal.status = 'APPROVED';
    saveState();
    updateTopBar();
    renderDeals();
    renderMyPools();
    renderManageDealDetails(deal.id);
    playTransactionAnimation({
      type: 'pay',
      title: 'Deal Approved!',
      sub: `Locked group price for ${deal.joinedCount} buyers`,
      amountText: `${formatINR(getActivePrice(deal))} per buyer`
    });
  } else if (action === 'reopen') {
    if (deal.joinedCount >= deal.maxCapacity) deal.joinedCount = deal.maxCapacity - 3;
    deal.status = 'REOPENED';
    deal.endsInText = 'Re-opened: 4 hours left';
    saveState();
    updateTopBar();
    renderDeals();
    renderMyPools();
    renderManageDealDetails(deal.id);
    showToast(`⚡ Re-opened "${deal.title}" for limited hours (direct full-price join)!`);
  } else if (action === 'cancel') {
    deal.status = 'CANCELLED';
    state.myPools.forEach((mp) => {
      if (mp.dealId === deal.id && mp.status === 'TOKEN_PAID') {
        state.wallet += mp.tokenPaid;
        mp.status = 'REFUNDED';
      }
    });
    saveState();
    updateTopBar(true);
    renderDeals();
    renderMyPools();
    renderManageDealDetails(deal.id);
    playTransactionAnimation({
      type: 'refund',
      title: 'Deal Cancelled by Seller',
      sub: 'Minimum target unmet — 100% Auto-Refund sent',
      amountText: 'All Buyers Refunded'
    });
  }
}

/* ==========================================================================
   MODAL HELPERS & TOAST
========================================================================== */
function closeModal(id) {
  document.getElementById(id)?.classList.add('hidden');
}

function closeOnBackdrop(e, id) {
  if (e.target.id === id) closeModal(id);
}

function showToast(msg) {
  const box = document.getElementById('toastBox');
  const item = document.createElement('div');
  item.className = 'toast';
  item.textContent = msg;
  box.appendChild(item);
  setTimeout(() => item.remove(), 3200);
}

document.addEventListener('DOMContentLoaded', initApp);
