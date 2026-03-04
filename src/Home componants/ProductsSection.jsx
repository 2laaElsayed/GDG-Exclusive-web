import {  useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from "../components/Card.jsx";
import { Link } from 'react-router-dom';
const FlashSales = ({ products , title, subtitle, rows}) => {
// cause we want to reuse the component for the flash sales and the explore our products section, we will pass the title, subtitle and the number of rows as props

  // for styling 
    const oneRow = "flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4";
    const twoRows = "grid grid-rows-2 grid-flow-col gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4";
 
  const style_cards_container = rows === 2 ? twoRows : oneRow;

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <p className="text-lg text-[rgba(219,68,68,1)] flex items-center">
        <span className="bg-[rgba(219,68,68,1)] w-4 h-10 inline-block mr-2 rounded mb-3"></span>
        {subtitle} 
      </p>
      </div>

     
      <div className="flex items-center justify-between mb-6 sm:mb-8 flex-col sm:flex-row gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        

        <div className=" flex items-center justify-center sm:justify-end gap-2 ">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Products scrollable container */}
      <div 
        ref={scrollRef}
        className={style_cards_container}
      >
        {products.map((product) => (
          <div key={product.id} className="shrink-0">
            <Card product={product} />
          </div>
        ))}
      </div>

      {/* View All Products button */}
      <div className="flex justify-center">
        <Link
          to="/products"
        >
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition text-sm sm:text-base">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;