import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Products to seed
const products = [
  {
    name: "Xe Smartwatch X1",
    description: "Track fitness, heart rate, and stay connected on the go.",
    price: 79999.99,
    category: "Smartwatch",
    image: "/images/smartwatch-8300238_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Buds Pro",
    description: "Wireless earphones with noise cancellation and deep bass.",
    price: 31999.99,
    category: "Earphones",
    image: "/images/airpods-7976095_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Phone Z5",
    description: "Powerful Android smartphone with 64MP camera.",
    price: 159999.99,
    category: "Phone",
    image: "/images/smartphone-7063771_1280.jpg",
    inStock: true
  },
  {
    name: "Xe FitBand 2",
    description: "Slim fitness tracker with sleep and step tracking.",
    price: 19999.99,
    category: "Smartwatch",
    image: "/images/smartwatch-6500150_1280.jpg",
    inStock: true
  },
  {
    name: "Xe EarMax",
    description: "Over-ear headphones with premium sound and comfort.",
    price: 51999.99,
    category: "Earphones",
    image: "/images/airpods-7226558_1280.jpg",
    inStock: false
  },
  {
    name: "Xe UltraTab",
    description: "10.5-inch tablet perfect for work and play.",
    price: 119999.99,
    category: "Tablet",
    image: "/images/tablet-462950_1280.png",
    inStock: true
  },
  {
    name: "Xe Phone M10",
    description: "Mid-range phone with 5000mAh battery and dual SIM.",
    price: 99999.99,
    category: "Phone",
    image: "/images/apple-1867762_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Smartwatch Kids",
    description: "Safe and fun smartwatch for kids with GPS tracking.",
    price: 23999.99,
    category: "Smartwatch",
    image: "/images/smartphone-7063771_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Pods Lite",
    description: "Budget-friendly wireless earbuds with clear sound.",
    price: 15999.99,
    category: "Earphones",
    image: "/images/headphones-5282687_1280.jpg",
    inStock: true
  },
  {
    name: "Xe ZoomCam",
    description: "HD webcam perfect for video calls and streaming.",
    price: 23999.99,
    category: "Accessory",
    image: "/images/camera-541213_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Watch Luxe",
    description: "Premium smartwatch with leather strap and AMOLED display.",
    price: 91999.99,
    category: "Smartwatch",
    image: "/images/smartwatch-8300238_1280.jpg",
    inStock: true
  },
  {
    name: "Xe Phone ZL Max",
    description: "Flagship phone with 8GB RAM and fast charging.",
    price: 199999.99,
    category: "Phone",
    image: "/images/samsung-4721542_1280.jpg",
    inStock: false
  },
  {
    name: "Xe Tab Mini",
    description: "Compact 8-inch tablet for reading and streaming.",
    price: 71999.99,
    category: "Tablet",
    image: "/images/laptop-1846277_1280.jpg",
    inStock: true
  },
  {
    name: "Xe BassBoom",
    description: "Portable Bluetooth speaker with deep bass and long battery.",
    price: 27999.99,
    category: "Accessory",
    image: "/images/audio-7276511_1280.jpg",
    inStock: true
  },
  {
    name: "Xe EarShield",
    description: "Noise-isolating wired earphones for budget-conscious users.",
    price: 7999.99,
    category: "Earphones",
    image: "/images/headphones-5282687_1280.jpg",
    inStock: true
  }
];

// Seed function
const seedDB = async () => {
  try {
    await Product.deleteMany(); // Clear old products
    await Product.insertMany(products);
    console.log('✅ Products seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding products:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
