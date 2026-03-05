import './ProductDetails.css';
import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

export default function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["XS", "S", "M", "L", "XL"];
 

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };


  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

 const [relatedProducts, setRelatedProducts] = useState([]);
 const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=10")
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setMainImage(data.images[0]);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }


  return (
    
    <div className="max-w-5xl container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-full object-cover rounded-xl mb-4"
          />

          <div className="flex gap-3">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.title}
          </h1>

          <div className='flex justify-start items-center gap-1.5 mb-2
          '>
            <div className='flex gap-0.5 text-[var(--color-yellow)]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalf />
            </div>
            <p className='text-gray-500'>(150 Reviews) |</p>
            <p className='text-[var(--color-green)] ps-2'>In Stock</p>
          </div>

          <p className="text-2xl mb-4">
            ${product.price}
          </p>

          <p className="text-[var(--color-black)] w-auto mb-4">
            {product.description}      
          </p>

          <hr className='text-gray-400' />

          <div className="max-w-xl mx-auto pt-6 space-y-6">

            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Colours:</span>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor("blue")}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === "blue"
                      ? "border-black"
                      : "border-gray-300"
                  } bg-blue-500`}
                />
                <button
                  onClick={() => setSelectedColor("red")}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === "red"
                      ? "border-black"
                      : "border-gray-300"
                  } bg-[var(--color-red)]`}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-gray-700">Size:</span>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition
                    ${
                      selectedSize === size
                        ? "bg-[var(--color-red)] text-white border-[var(--color-red)]"
                        : "border-gray-300 text-gray-700 hover:border-[var(--color-red-hover)]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">

              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={handleDecrease}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>

                <span className="px-6 py-2">{quantity}</span>

                <button
                  onClick={handleIncrease}
                  className="px-4 py-2 bg-[var(--color-red)] text-white hover:bg-[var(--color-red-hover)]"
                >
                  +
                </button>
              </div>

              <button onClick={() => navigate("/cart")} className="px-8 py-3 bg-[var(--color-red)] text-white rounded-md font-medium hover:bg-[var(--color-red-hover)] transition">
                Buy Now
              </button>

              <button className="p-3 border border-gray-300 rounded-md hover:bg-[var(--color-red)] transition hover:text-[var(--color-white)]">
                <FaRegHeart  size={20} />
              </button>
            </div>

            <div className="border w-[350px] rounded-b-sm divide-y">

              <div className="flex gap-4 p-4 items-start">
                <FaTruckFast className="mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-gray-600 underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 items-start">
                <IoReturnDownBack className="mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Return Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
    </div>

      </div>

     <div className="max-w-6xl mx-auto py-10 px-4">
      <div className='flex items-center gap-4 my-8'>
        <div className='w-5 h-10 rounded bg-[var(--color-red)]'></div>
        <h2 className="text-xl font-bold text-[var(--color-red)]">Related Items</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.slice(0,4).map((product) => {
          const finaldis = product.price + (product.price * 20/100 ) ;
         return(
           <div
            key={product.id}
            className="relative group hover:shadow-lg transition">
            
            <div className="relative h-48 bg-cover bg-center w-full rounded overflow-hidden" 
            style={{
            backgroundImage: `url(${product.images?.[0]})`,
            backgroundSize: "cover",
            }}>
            <div
            className="absolute bottom-0 left-0 w-full
            bg-black text-white text-center py-2
            translate-y-full group-hover:translate-y-0
            transition duration-300 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
      Add To Cart
    </div>
            <span className="bg-red-500 text-white text-xs px-2 mx-2 py-1 rounded">
              -20%
            </span>
            <div className='absolute top-1 right-0 flex flex-col items-center justify-end me-1 gap-1'>
              <button className="p-1 border border-[var(--color-white)] bg-[var(--color-white)] rounded-full transition">
                <FaRegHeart  size={14} />
              </button>

              <button className="p-1 border border-[var(--color-white)] bg-[var(--color-white)] rounded-full transition">
                <FaRegEye  size={14} />
              </button>
            </div>
            </div>
            
            <h3 className="mt-3 font-medium line-clamp-1">
              {product.title}
            </h3>
     
            <p className="text-red-500 font-semibold my-2">
              ${product.price}
              <span className='text-gray-500 mx-2'>
                <del>{finaldis}</del>
              </span>
            </p>

            <div className="flex items-center gap-1 my-2">
              <div className='flex gap-0.5 text-[var(--color-yellow)]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalf />
            </div>
              <span className="text-gray-500 text-sm ml-1">(80)</span>
            </div>
          </div>
         )
})}
      </div>
     </div>
    </div>
  );
}

