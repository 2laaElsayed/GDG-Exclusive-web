import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Handle wishlist toggle
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsInWishlist(prev => !prev);
    console.log(`Product ${product.title} is now ${!isInWishlist ? 'added to' : 'removed from'} wishlist.`);
    
    
    if (!isInWishlist) {
      toast("Product added to wishlist successfully 🥳");
    } else {
      toast("Product removed from wishlist");
    }
  };
  // Handle add to cart action
  const HandleAddToCart = () => {
    toast("Product added to cart successfully 🥳");
  }
 
  // Handle quick view action for product details
  const handleQuickView = () => {
    toast("Quick view is opened for " + product.title);
  }

  return (
    <div className="w-64 shrink-0 text-white rounded-xl overflow-hidden transition-transform duration-300">
      <div className="relative group bg-gray-100 p-3 cursor-pointer">
      
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
      
          <button
            onClick={handleWishlistToggle}
            className={`p-1.5 rounded-full ${
              isInWishlist
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-black hover:text-red-500 hover:bg-gray-50"
            } transition-colors duration-200 shadow-md`}
            type="button"
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
          </button>
          
          {/* Eye button for product details  */}
          <button
            onClick={handleQuickView}
            className="p-1.5 rounded-full bg-white text-black hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200 shadow-md"
            type="button"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <img
          src={product.images && product.images[0] ? product.images[0] : '/placeholder.jpg'}
          alt={product.title}
          className="w-full h-40 object-cover"
        />
        {/* add to cart buttom  */}
        <button
          className="absolute bottom-0 left-0 w-full bg-black text-white px-4 py-2 text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          type="button"
          onClick={HandleAddToCart}
        >
          🛒 Add To Cart
        </button>
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-black">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="text-red-400 font-bold">
            ${product?.price}
          </span>

          <span className="line-through text-gray-400">
            ${(product?.price * 1.2).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;