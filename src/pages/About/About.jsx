import './About.css';
import Img1 from "../../assets/images/swiperImages/sideImage.png"
import Img2 from "../../assets/images/swiperImages/frame.png"
import Img3 from "../../assets/images/swiperImages/frame1.png"
import { BsShop } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { RiShieldCheckFill } from "react-icons/ri";

export default function About(){

  return <>
  <div className="w-full bg-[var(--color-white)]">

      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-[var(--color-sec-grey)]">
        Home / <span className="text-[var(--color-black)] font-medium">About</span>
      </div>

     {/* First Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-4xl font-poppins-semi-bold mb-6 tracking-wider">
              Our Story
            </h1>

            <p className="text-[var(--color-black)] leading-relaxed mb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions.
              Exclusive has 10,500 sellers and 300 brands and serves 3
              millions customers across the region.
            </p>

            <p className="text-[var(--color-black)] leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>

          
          <div className="lg:w-1/2 w-full">
            <img
              src={Img1}
              alt="About"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>

     {/* Second Conatiner */}
      <div className='container max-w-5xl  grid md:grid-cols-4 sm:grid-cols-2 gap-6 mx-auto px-6 sm:px-6 lg:px-8 py-16 '>


        {/* firstDiv */}
        <div className=" text-[var(--color-black)] border border-[var(--color-grey-hover)] p-6 text-center shadow-md">
        {/* Circle Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <BsShop className="text-[var(--color-white)] text-2xl" />
          </div>
        </div>

          <h2 className="text-3xl font-poppins-semi-bold">10.5k</h2>
          <p className="text-sm mt-2">Sallers active our site</p>
       </div>

        {/* secondDiv */}
        <div className="bg-[var(--color-red)]  text-white p-6 text-center shadow-md">
        {/* Circle Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/30 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FaDollarSign className="text-[var(--color-black)] text-2xl" />
          </div>
        </div>

          <h2 className="text-3xl font-poppins-semi-bold">33k</h2>
          <p className="text-sm mt-2">Monthly Product Sale</p>
       </div>

       {/* thirdDiv */}
        <div className="text-[var(--color-black)] border border-[var(--color-grey-hover)] p-6 text-center shadow-md">
        {/* Circle Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <IoBagHandle className="text-[var(--color-white)] text-2xl" />
          </div>
        </div>

          <h2 className="text-3xl font-poppins-semi-bold">45.5k</h2>
          <p className="text-sm mt-2">Customer active in our site</p>
       </div>

       {/* fourthDiv */}
        <div className="text-[var(--color-black)] border border-[var(--color-grey-hover)] p-6 text-center shadow-md">
        {/* Circle Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <FaSackDollar className="text-[var(--color-white)] text-2xl" />
          </div>
        </div>

          <h2 className="text-3xl font-poppins-semi-bold">25k</h2>
          <p className="text-sm mt-2">Anual gross sale in our site</p>
       </div>

        
      </div>

     {/* Third Conatiner */}
     <div className='container mx-auto max-w-5xl'>
        <div className='grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-6 sm:px-6 lg:px-8 py-16 '>

          {/* firstDiv */}
          <div className='mx-auto '>
            <div className='mx-auto mb-6 w-72 h-80 object-cover rounded-lg shadow-md'>
              <img src={Img2}/>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-2xl font-semibold tracking-normal mb-4'>Tom Cruise</span>
              <p className='mb-2'>Founder & Chairman</p>
              <div className='flex items-center gap-2'>
                <CiTwitter />
                <FaInstagram />
                <TiSocialLinkedin />
              </div>
            </div>
          </div>

          {/* secondDiv */}
          <div className='mx-auto '>
            <div className='mx-auto mb-6 w-72 h-80 object-cover rounded-lg shadow-md'>
              <img src={Img3}/>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-2xl font-semibold tracking-normal mb-4'>Emma Watson</span>
              <p className='mb-2'>Managing Director</p>
              <div className='flex items-center gap-2'>
                <CiTwitter />
                <FaInstagram />
                <TiSocialLinkedin />
              </div>
            </div>
          </div>

          {/* thirdDiv */}
          <div className='mx-auto '>
            <div className='mx-auto mb-6 w-72 h-80 object-cover rounded-lg shadow-md'>
              <img src={Img3}/>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-2xl font-semibold tracking-normal mb-4'>Will Smith</span>
              <p className='mb-2'>Product Designer</p>
              <div className='flex items-center gap-2'>
                <CiTwitter />
                <FaInstagram />
                <TiSocialLinkedin />
              </div>
            </div>
          </div>
        </div>
     </div>


      {/* Fourth Conatiner */}
     <div className='container mx-auto max-w-4xl'>
        <div className='grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-6 sm:px-6 lg:px-8 py-16 '>

          {/* firstDiv */}
          <div className='mx-auto '>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <FaTruckFast className="text-[var(--color-white)] text-2xl" />
            </div>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-lg font-semibold tracking-normal mb-4 text-center'>FREE AND FAST DELIVERY</span>
              <p className='mb-2 text-sm text-center'>Free delivery for all orders over $140</p>
            </div>
          </div>

          {/* secondDiv */}
          <div className='mx-auto '>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <FaHeadphonesSimple className="text-[var(--color-white)] text-2xl" />
            </div>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-lg font-semibold tracking-normal mb-4 text-center'>24/7 CUSTOMER SERVICE</span>
              <p className='mb-2 text-sm text-center'>Friendly 24/7 customer support</p>
            </div>
          </div>

          {/* thirdDiv */}
          <div className='mx-auto '>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-black)] flex items-center justify-center">
            <RiShieldCheckFill className="text-[var(--color-white)] text-2xl" />
            </div>
            </div>
            <div>
              <span className='text-[var(--color-black)] text-lg font-semibold tracking-normal mb-4 text-center'>MONEY BACK GUARANTEE</span>
              <p className='mb-2 text-sm text-center'>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
     </div>

    </div>

  </>
}

