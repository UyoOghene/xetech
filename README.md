# Xetech - Tech Gadgets E-commerce

https://xetechcl.vercel.app/
## 📱 Overview

Xetech is a beautifully designed e-commerce platform specializing in tech gadgets with a feminine aesthetic. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, this application provides a seamless shopping experience for tech enthusiasts who appreciate elegant design.

 Features

 For Shoppers
- **Browse Products**: Explore a curated collection of tech gadgets
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add/remove items and adjust quantities
- **User Authentication**: Register and login to your account
- **Responsive Design**: Perfect shopping experience on all devices

 For Admins
- **Admin Dashboard**: Secure admin panel
- **Product Management**: Add new products to the store
- **Inventory Control**: Manage stock availability

 Design Highlights
- **Feminine Color Palette**: Soft purples and pinks
- **Elegant Typography**: Playfair Display for headings, Nunito for body text
- **Smooth Animations**: Hover effects and transitions
- **Gradient Elements**: Beautiful gradient backgrounds

 Tech Stack

 Frontend
- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Navigation and routing
- **Tailwind CSS** - Styling and responsive design
- **Context API** - State management

Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcryptjs** - Password hashing

 Project Structure

```
xetech/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Context providers
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   └── package.json
│
└── server/                 # Backend Node.js application
    ├── models/             # Database models
    ├── routes/             # API routes
    ├── middleware/         # Custom middleware
    ├── server.js           # Server entry point
    └── package.json
```

 Getting Started

Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/xetech.git
cd xetech
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

4. **Set up environment variables**

Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

5. **Start the development servers**

**Backend:**
```bash
cd server
npm run dev
```

**Frontend (in a new terminal):**
```bash
cd client
npm run dev
```

6. **Open your browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📖 Usage Guide

### User Registration
1. Click "Register" in the navigation bar
2. Enter your name, email, and password
3. You're now ready to shop!

### Browsing Products
- Browse all products on the Products page
- Click "View Details" for more information
- Use "Add to Cart" to add items to your shopping cart

### Shopping Cart
- View your cart by clicking the cart icon
- Adjust quantities or remove items
- See your total price update in real-time

