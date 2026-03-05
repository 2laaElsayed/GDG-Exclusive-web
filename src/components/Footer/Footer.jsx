
import './Footer.css';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import qr from "../../assets/images/Qr-Code.svg";
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (formData) => {
     const value = formData.get("email");
    setEmail(value);
    console.log("Subscribed with email:", email);
  }

  return (
    <footer className="bg-black text-white p-12 mt-5">
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Exclusive Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Exclusive</h3>
            <p className="text-gray-400">Subscribe</p>
            <p className="text-sm text-gray-400">Get 10% off your first order</p>
            <form action={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                name='email'
                required
                className="bg-transparent border border-gray-600 text-white px-4 py-2 text-sm flex-1 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-transparent border border-gray-600 px-4 py-2 hover:bg-gray-800 transition" type="submit">
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Support</h3>
            <p className="text-sm text-gray-400">111 Bijoy sarani, Dhaka,</p>
            <p className="text-sm text-gray-400">Bangladesh</p>
            <a href="mailto:exclusive@gmail.com" className="text-sm text-gray-400 hover:text-white transition">
              exclusive@gmail.com
            </a>
            <a href="tel:+88016-88888-9999" className="text-sm text-gray-400 hover:text-white transition">
              +88016-88888-9999
            </a>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Account</h3>
            <Link to="/account" className="text-sm text-gray-400 hover:text-white transition">
              My Account
            </Link>
            <div className="flex gap-2 items-center">
              <Link to="/login" className="text-sm text-gray-400 hover:text-white transition">
                Login
              </Link>
              <span className="text-gray-500">/</span>
              <Link to="/register" className="text-sm text-gray-400 hover:text-white transition">
                Register
              </Link>
            </div>
            <Link to="/cart" className="text-sm text-gray-400 hover:text-white transition">
              Cart
            </Link>
            <Link to="/wishlist" className="text-sm text-gray-400 hover:text-white transition">
              Wishlist
            </Link>
            <Link to="/shop" className="text-sm text-gray-400 hover:text-white transition">
              Shop
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Quick Link</h3>
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-sm text-gray-400 hover:text-white transition">
              Terms Of Use
            </Link>
            <Link to="/faq" className="text-sm text-gray-400 hover:text-white transition">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Download App Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Download App</h3>
            <p className="text-xs text-gray-400">Save \$3 with App New User Only</p>
            
            <div className="flex gap-2">
              <div className="w-20 h-20 rounded flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded flex items-center justify-center text-xs text-gray-500">
                  <img src={qr} alt="QR Code" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 px-3 py-2 rounded text-xs hover:bg-gray-800 transition"
                >
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 px-3 py-2 rounded text-xs hover:bg-gray-800 transition"
                >
                  App Store
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © Copyright  2026. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;