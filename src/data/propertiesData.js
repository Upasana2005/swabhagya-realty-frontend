export const propertiesData = [
  // ============ RESIDENTIAL - SALE ============
  {
    id: "1",
    title: "Sunrise Heights Luxury Apartments",
    slug: "sunrise-heights",
    category: "Residential",
    listingType: "Sale",
    propertyType: "Apartment",
    price: 4500000,
    originalPrice: 5500000,
    location: "Panchavati, Nashik",
    fullAddress: "Behind Indrakund Temple, Panchavati, Nashik - 422003",
    description: `Sunrise Heights offers premium 2 & 3 BHK apartments in the heart of Panchavati. This residential project features modern architecture, spacious rooms, and world-class amenities.`,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
      "https://images.unsplash.com/photo-1560184897-ae75f4184ee7?w=800"
    ],
    specifications: { bhk: 3, bathrooms: 2, area: 1450, furnishing: "Semi-Furnished", floor: "12th", totalFloors: 20, carParking: 2 },
    amenities: ["Swimming Pool", "Gymnasium", "Club House", "24/7 Security", "Power Backup", "Landscaped Garden"],
    reraVerified: true,
    governmentVerified: true,
    bedrooms: 3,
    area_sqft: 1450
  },
  {
    id: "2",
    title: "Green Valley Independent House",
    slug: "green-valley-house",
    category: "Residential",
    listingType: "Sale",
    propertyType: "Independent House",
    price: 8500000,
    originalPrice: 9500000,
    location: "College Road, Nashik",
    fullAddress: "College Road, Nashik - 422005",
    description: `Beautiful independent house with garden and terrace. Perfect for families looking for privacy and space.`,
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
    ],
    specifications: { bhk: 4, bathrooms: 3, area: 2200, furnishing: "Fully Furnished", floor: "Ground", totalFloors: 2, carParking: 2 },
    amenities: ["Private Garden", "Terrace", "Car Parking", "Security System"],
    reraVerified: true,
    governmentVerified: true,
    bedrooms: 4,
    area_sqft: 2200
  },
  {
    id: "3",
    title: "Luxury Villa at Gangapur Road",
    slug: "luxury-villa-gangapur",
    category: "Residential",
    listingType: "Sale",
    propertyType: "Villa",
    price: 25000000,
    location: "Gangapur Road, Nashik",
    fullAddress: "Gangapur Road, Nashik - 422013",
    description: `Premium luxury villa with private pool, landscaped garden, and modern architecture.`,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
    ],
    specifications: { bhk: 5, bathrooms: 5, area: 4500, furnishing: "Fully Furnished", floor: "Ground", totalFloors: 2, carParking: 3 },
    amenities: ["Private Pool", "Garden", "Home Theater", "Gym", "Staff Room"],
    reraVerified: true,
    governmentVerified: true,
    bedrooms: 5,
    area_sqft: 4500
  },
  {
    id: "4",
    title: "2 BHK Flat for Rent",
    slug: "2bhk-flat-rent",
    category: "Residential",
    listingType: "Rent",
    propertyType: "Apartment",
    price: 25000,
    location: "Panchavati, Nashik",
    fullAddress: "Panchavati, Nashik - 422003",
    description: `Well-maintained 2 BHK flat available for rent. Close to schools and markets.`,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    specifications: { bhk: 2, bathrooms: 2, area: 950, furnishing: "Semi-Furnished", floor: "3rd", totalFloors: 5, carParking: 1 },
    amenities: ["Lift", "Security", "Parking", "Water Supply"],
    reraVerified: false,
    governmentVerified: true,
    bedrooms: 2,
    area_sqft: 950
  },
  {
    id: "5",
    title: "Farmhouse for Sale",
    slug: "farmhouse-sale",
    category: "Residential",
    listingType: "Sale",
    propertyType: "Farmhouse",
    price: 18000000,
    location: "Gangapur Road, Nashik",
    fullAddress: "Gangapur Road, Nashik - 422013",
    description: `Spacious farmhouse with organic farming area and private garden.`,
    images: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800"
    ],
    specifications: { bhk: 3, bathrooms: 3, area: 3500, furnishing: "Semi-Furnished", floor: "Ground", totalFloors: 1, carParking: 4 },
    amenities: ["Farm Area", "Well", "Garden", "Parking"],
    reraVerified: true,
    governmentVerified: true,
    bedrooms: 3,
    area_sqft: 3500
  },
  {
    id: "6",
    title: "Paying Guest Accommodation",
    slug: "pg-accommodation",
    category: "Residential",
    listingType: "Rent",
    propertyType: "Paying Guest",
    price: 12000,
    location: "College Road, Nashik",
    fullAddress: "College Road, Nashik - 422005",
    description: `Fully furnished PG accommodation for students and working professionals.`,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    specifications: { bhk: 0, bathrooms: 1, area: 500, furnishing: "Fully Furnished", floor: "1st", totalFloors: 3, carParking: 0 },
    amenities: ["WiFi", "Laundry", "Meals", "Security"],
    reraVerified: false,
    governmentVerified: false,
    bedrooms: 0,
    area_sqft: 500
  },
  {
    id: "7",
    title: "Business Plaza - Prime Office Space",
    slug: "business-plaza",
    category: "Commercial",
    listingType: "Sale",
    propertyType: "Office Space",
    price: 15000000,
    location: "CBD, Nashik",
    fullAddress: "CBD Area, Nashik - 422001",
    description: `Premium office space in the heart of CBD. High visibility and excellent footfall.`,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    ],
    specifications: { area: 1500, carParking: 4 },
    amenities: ["AC", "Meeting Room", "Pantry", "Security", "Parking"],
    reraVerified: true,
    governmentVerified: true,
    area_sqft: 1500
  },
  {
    id: "8",
    title: "Retail Showroom on MG Road",
    slug: "retail-showroom",
    category: "Commercial",
    listingType: "Sale",
    propertyType: "Shop/Showroom",
    price: 8500000,
    location: "MG Road, Nashik",
    fullAddress: "MG Road, Nashik - 422001",
    description: `Prime retail showroom on MG Road with high footfall.`,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800"
    ],
    specifications: { area: 800, carParking: 2 },
    amenities: ["Glass Facade", "Storage", "Security", "Parking"],
    reraVerified: true,
    governmentVerified: true,
    area_sqft: 800
  },
  {
    id: "9",
    title: "Industrial Warehouse",
    slug: "industrial-warehouse",
    category: "Commercial",
    listingType: "Lease",
    propertyType: "Warehouse",
    price: 500000,
    location: "Ambad, Nashik",
    fullAddress: "Ambad MIDC, Nashik - 422010",
    description: `Large warehouse available for lease. Ideal for storage and logistics.`,
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800"
    ],
    specifications: { area: 10000, carParking: 10 },
    amenities: ["Loading Dock", "24/7 Security", "Power Backup", "Office Space"],
    reraVerified: true,
    governmentVerified: true,
    area_sqft: 10000
  },
  {
    id: "10",
    title: "ATM Space on Rent",
    slug: "atm-space-rent",
    category: "Commercial",
    listingType: "Rent",
    propertyType: "ATM Space",
    price: 15000,
    location: "Panchavati, Nashik",
    fullAddress: "Panchavati, Nashik - 422003",
    description: `Compact space ideal for ATM machine. High traffic location.`,
    images: [
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    ],
    specifications: { area: 100, carParking: 0 },
    amenities: ["24/7 Access", "Security", "Lighting"],
    reraVerified: false,
    governmentVerified: true,
    area_sqft: 100
  },
  {
    id: "11",
    title: "3 BHK Premium Apartment",
    slug: "3bhk-premium-apartment",
    category: "Residential",
    listingType: "Sale",
    propertyType: "Apartment",
    price: 7500000,
    location: "Gangapur Road, Nashik",
    fullAddress: "Gangapur Road, Nashik - 422013",
    description: `Premium 3 BHK apartment with modern amenities and excellent views.`,
    images: [
      "https://images.unsplash.com/photo-1560184897-ae75f4184ee7?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    ],
    specifications: { bhk: 3, bathrooms: 2, area: 1350, furnishing: "Semi-Furnished", floor: "8th", totalFloors: 15, carParking: 1 },
    amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area"],
    reraVerified: true,
    governmentVerified: true,
    bedrooms: 3,
    area_sqft: 1350
  },
  {
    id: "12",
    title: "Studio Apartment for Rent",
    slug: "studio-apartment-rent",
    category: "Residential",
    listingType: "Rent",
    propertyType: "Apartment",
    price: 15000,
    location: "Indira Nagar, Nashik",
    fullAddress: "Indira Nagar, Nashik - 422009",
    description: `Compact studio apartment perfect for bachelors or couples.`,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    specifications: { bhk: 1, bathrooms: 1, area: 550, furnishing: "Fully Furnished", floor: "5th", totalFloors: 8, carParking: 0 },
    amenities: ["Lift", "Security", "Water Supply"],
    reraVerified: false,
    governmentVerified: false,
    bedrooms: 1,
    area_sqft: 550
  }
];

export const getFilterOptions = () => {
  return {
    categories: ['All', 'Residential', 'Commercial'],
    listingTypes: ['All', 'Sale', 'Rent', 'Lease'],
    propertyTypes: {
      Residential: ['All', 'Apartment', 'Independent House', 'Villa', 'Farmhouse', 'Paying Guest'],
      Commercial: ['All', 'Office Space', 'Shop/Showroom', 'Warehouse', 'ATM Space']
    }
  };
};

export const filterProperties = (properties, filters) => {
  return properties.filter(property => {
    if (filters.category && filters.category !== 'All' && property.category !== filters.category) return false;
    if (filters.listingType && filters.listingType !== 'All' && property.listingType !== filters.listingType) return false;
    if (filters.propertyType && filters.propertyType !== 'All' && property.propertyType !== filters.propertyType) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    return true;
  });
};