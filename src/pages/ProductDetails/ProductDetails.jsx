
import './ProductDetails.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };


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

        {/* Images */}
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

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            {/* {product.title} */}
            Havic HV G-92 Gamepad
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
            {/* ${product.price} */}
            $192.00
          </p>

          <p className="text-[var(--color-black)] w-auto mb-4">
            {/* {product.description} */}
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          <hr className='text-gray-400' />

          <div className="max-w-xl mx-auto pt-6 space-y-6">

            {/* Colors */}
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

            {/* Sizes */}
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

            {/* Quantity + Buy */}
            <div className="flex items-center gap-4 flex-wrap">

              {/* Quantity */}
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

              {/* Buy Now */}
              <button className="px-8 py-3 bg-[var(--color-red)] text-white rounded-md font-medium hover:bg-[var(--color-red-hover)] transition">
                Buy Now
              </button>

              {/* Wishlist */}
              <button className="p-3 border border-gray-300 rounded-md hover:bg-[var(--color-red)] transition hover:text-[var(--color-white)]">
                <FaRegHeart  size={20} />
              </button>
            </div>

            {/* Delivery Box */}
            <div className="border w-[350px] rounded-b-sm divide-y">

              {/* Free Delivery */}
              <div className="flex gap-4 p-4 items-start">
                <FaTruckFast className="mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-gray-600 underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              {/* Return Delivery */}
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

    </div>
  );
}