import React, { useState } from 'react';
import './Home.css';
import UseFetch from '../../Service/USeFetch.js';
import ProductSection from "../../Home componants/ProductsSection.jsx";
import Cat from "../../Home componants/Cat.jsx";
import BestSelling from "../../Home componants/BestSelling.jsx";
import Black from "../../Home componants/advert.jsx";
import LAstsection from "../../Home componants/LAstSection.jsx"
import LoadingSpinner from '../../components/LoadingSpinner.jsx';

export default function Home(){
  // return 10 products 
  const { data: products, loading: P_loading, error: Perror } = UseFetch('products?offset=0&limit=15');
  // return 8 categories
  const { data: categories, loading: Cat_loading, error: Cat_error} = UseFetch('categories?offset=0&limit=8');
  console.log(categories);
  
  // return 4 best selling products
  const { data: best_selling_products, loading: best_selling_loading, error: best_selling_error } = UseFetch('products?offset=0&limit=5');
  
  // for fltering cat 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productEndpoint = selectedCategory
    ? `products?categoryId=${selectedCategory}&offset=0&limit=30`
    : 'products?offset=0&limit=30';
 
    // fetch products based on selected category, and also fetch fallback products in case the selected category has no products
  const { data: products_filtered, loading: P_loading_filtered, error: Perror_filtered } = UseFetch(productEndpoint);
  const { data: fallback_products, loading: fallback_loading } = UseFetch('products?offset=30&limit=30');
  const isCategoryEmpty = selectedCategory && products_filtered && products_filtered.length === 0;
  const finalProducts = isCategoryEmpty ? fallback_products : products_filtered;

  // handling errr and loading states
  if (P_loading || Cat_loading || best_selling_loading || P_loading_filtered || fallback_loading) return <LoadingSpinner />;
  if (Perror || Cat_error || best_selling_error || Perror_filtered) return <div>Error: {Perror || Cat_error || best_selling_error || Perror_filtered}</div>;
  if (!products_filtered) return <div>No products found.</div>;

  return <div className="Home">

    <div className="relative w-full min-h-[400px] bg-gradient-to-r from-gray-900 to-black text-white rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-between px-8 py-12 md:px-16 md:py-16 h-full">
        <div className="flex-1 z-10 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🍎</span>
            <span className="text-sm font-medium tracking-wider">iPhone 14 Series</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Up to 10%<br/>
            off Voucher
          </h1>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 hover:gap-4 transition-all duration-300"
          >
            <span className="text-lg">Shop Now</span>
            <span className="text-xl">→</span>
          </a>
        </div>

        <div className="hidden md:block flex-1 max-w-md">
          <div className="relative">
            <div className="w-64 h-96 mx-auto">
              <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-[3rem] shadow-2xl">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                <div className="absolute inset-4 bg-black/20 rounded-[2.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === 0 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>

    <ProductSection 
      products={products}
      title="Flash Sales"
      subtitle="Today's"
      rows={1} 
    />
    <br />
    <Cat 
      categories={categories} 
      onSelectCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
    />
    <br />
    <BestSelling products={best_selling_products} />
    <br />
    <Black />
    <br />
    
    {/* this is the section that filtered by cat  */}
    <ProductSection 
      products={finalProducts}
      title="Explore Our Products"
      subtitle="Our Products"
      rows={2}
    />
    <br />
    <LAstsection /> 
  </div>
}