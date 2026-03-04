
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from "../components/Card.jsx";

const FlashSales = ({ products }) => {


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <p className="text-lg text-[rgba(219,68,68,1)] flex items-center">
        <span className="bg-[rgba(219,68,68,1)] w-4 h-10 inline-block mr-2 rounded mb-3"></span>
        This Month
      </p>
      </div>

     
      <div className="flex items-center justify-between mb-6 sm:mb-8 flex-col sm:flex-row gap-5">
        <h2 className="text-2xl sm:text-3xl font-bold">Best Selling Products</h2>
        

        <div className=" flex items-center justify-center sm:justify-end gap-2 ">
           <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>

      {/* Products scrollable container */}
      <div 
        id="best-selling-products"
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
      >
        {products.map((product) => (
          <div key={product.id} className="shrink-0">
            <Card product={product} />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default FlashSales;