import SmartwatchImg from '/images/smartwatch-8300238_1280.jpg';
import AirpodsImg from '/images/airpods-7976095_1280.jpg';
import SmartphoneImg from '/images/smartphone-7063771_1280.jpg';
import Smartwatch2Img from '/images/smartwatch-6500150_1280.jpg';
import EarphonesImg from '/images/airpods-7226558_1280.jpg'; 
import TabletImg from '/images/tablet-462950_1280.png';
import PhoneImg from '/images/apple-1867762_1280.jpg';
import KidsSmartwatchImg from '/images/smartphone-7063771_1280.jpg';
import EarbudsImg from '/images/headphones-5282687_1280.jpg';
import WebcamImg from '/images/camera-541213_1280.jpg';
import LuxeWatchImg from '/images/smartwatch-8300238_1280.jpg';
import FlagshipPhoneImg from '/images/samsung-4721542_1280.jpg';
import MiniTabletImg from '/images/laptop-1846277_1280.jpg';
import BluetoothSpeakerImg from '/images/audio-7276511_1280.jpg';
import WiredEarphonesImg from '/images/headphones-5282687_1280.jpg';

const products = [
  {
    id: 1,
    name: "Xe Smartwatch X1",
    description: "Track fitness, heart rate, and stay connected on the go.",
    price: 79999.99,
    category: "Smartwatch",
    image: SmartwatchImg,
    inStock: true
  },
  {
    id: 2,
    name: "Xe Buds Pro",
    description: "Wireless earphones with noise cancellation and deep bass.",
    price: 31999.99,
    category: "Earphones",
    image: AirpodsImg,
    inStock: true
  },
  {
    id: 3,
    name: "Xe Phone Z5",
    description: "Powerful Android smartphone with 64MP camera.",
    price: 159999.99,
    category: "Phone",
    image: SmartphoneImg,
    inStock: true
  },
  {
    id: 4,
    name: "Xe FitBand 2",
    description: "Slim fitness tracker with sleep and step tracking.",
    price: 19999.99,
    category: "Smartwatch",
    image: Smartwatch2Img,
    inStock: true
  },
  {
    id: 5,
    name: "Xe EarMax",
    description: "Over-ear headphones with premium sound and comfort.",
    price: 51999.99,
    category: "Earphones",
    image: EarphonesImg,
    inStock: false
  },
  {
    id: 6,
    name: "Xe UltraTab",
    description: "10.5-inch tablet perfect for work and play.",
    price: 119999.99,
    category: "Tablet",
    image: TabletImg,
    inStock: true
  },
  {
    id: 7,
    name: "Xe Phone M10",
    description: "Mid-range phone with 5000mAh battery and dual SIM.",
    price: 99999.99,
    category: "Phone",
    image: PhoneImg,
    inStock: true
  },
  {
    id: 8,
    name: "Xe Smartwatch Kids",
    description: "Safe and fun smartwatch for kids with GPS tracking.",
    price: 23999.99,
    category: "Smartwatch",
    image: KidsSmartwatchImg,
    inStock: true
  },
  {
    id: 9,
    name: "Xe Pods Lite",
    description: "Budget-friendly wireless earbuds with clear sound.",
    price: 15999.99,
    category: "Earphones",
    image: EarbudsImg,
    inStock: true
  },
  {
    id: 10,
    name: "Xe ZoomCam",
    description: "HD webcam perfect for video calls and streaming.",
    price: 23999.99,
    category: "Accessory",
    image: WebcamImg,
    inStock: true
  },
  {
    id: 11,
    name: "Xe Watch Luxe",
    description: "Premium smartwatch with leather strap and AMOLED display.",
    price: 91999.99,
    category: "Smartwatch",
    image: LuxeWatchImg,
    inStock: true
  },
  {
    id: 12,
    name: "Xe Phone ZL Max",
    description: "Flagship phone with 8GB RAM and fast charging.",
    price: 199999.99,
    category: "Phone",
    image: FlagshipPhoneImg,
    inStock: false
  },
  {
    id: 13,
    name: "Xe Tab Mini",
    description: "Compact 8-inch tablet for reading and streaming.",
    price: 71999.99,
    category: "Tablet",
    image: MiniTabletImg,
    inStock: true
  },
  {
    id: 14,
    name: "Xe BassBoom",
    description: "Portable Bluetooth speaker with deep bass and long battery.",
    price: 27999.99,
    category: "Accessory",
    image: BluetoothSpeakerImg,
    inStock: true
  },
  {
    id: 15,
    name: "Xe EarShield",
    description: "Noise-isolating wired earphones for budget-conscious users.",
    price: 7999.99,
    category: "Earphones",
    image: WiredEarphonesImg,
    inStock: true
  }
];

export default products;