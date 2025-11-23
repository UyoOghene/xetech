import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon.jsx';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-elegant mb-4">XE-Tech</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your premier destination for cutting-edge tech gadgets. We bring you the latest 
              innovations in smart devices with exceptional quality and design.
            </p>
            <div className="flex space-x-4">
              <SocialIcon platform="facebook" />
              <SocialIcon platform="twitter" />
              <SocialIcon platform="instagram" />
              <SocialIcon platform="linkedin" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@xetech.com</li>
              <li>Phone: +234 800 000 0000</li>
              <li>Address: Tech Innovation Hub, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 XE-Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;