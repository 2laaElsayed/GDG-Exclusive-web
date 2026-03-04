import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
const CategorySection = ({ categories , onSelectCategory , selectedCategory }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
   
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
           <p className="text-lg text-[rgba(219,68,68,1)] flex items-center">
        <span className="bg-[rgba(219,68,68,1)] w-4 h-10 inline-block mr-2 rounded mb-3"></span>
        Categories
      </p>
      </div>

    
      <div className="flex items-center justify-between mb-6 sm:mb-8 flex-col md:flex-row gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold">Browse By Category</h2>
        
        
        <div className=" flex items-center justify-center sm:justify-end gap-2">
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

      {/* Categories scrollable container */}
       <div 
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
      >
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`shrink-0 min-w-30 min-h-15 text-center border rounded-lg p-6 cursor-pointer transition-all
  ${selectedCategory === category.id
    ? "bg-red-500 text-white border-red-500"
    : "border-gray-200 hover:bg-red-500 hover:text-white"
  }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <div className="flex  items-center gap-4 justify-center">
              <p className="text-sm sm:text-base font-medium text-center">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;