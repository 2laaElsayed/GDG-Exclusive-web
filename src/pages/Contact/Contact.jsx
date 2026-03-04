import './Contact.css';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Contact(){



  return <>
    <div className="Contact">
      
         <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-10">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        Home / <span className="text-black font-medium">Contact</span>
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Left Card */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6 md:col-span-1">
          
          {/* Call To Us */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[var(--color-red)] text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
            </div>

            <p className="text-[var(--color-black)] text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[var(--color-black)] text-sm mt-2">
              Phone: +8801611112222
            </p>
          </div>

          <hr className='text-gray-400' />

          {/* Write To Us */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[var(--color-red)] text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
            </div>

            <p className="text-[var(--color-black)] text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className="text-[var(--color-black)] text-sm mt-2">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[var(--color-black)] text-sm">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-md rounded-lg p-8 md:col-span-2">
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-[var(--color-grey-hover)] p-3 rounded-md focus:outline-none focus:ring-[var(--color-red)]"
            />

            <input
              type="email"
              placeholder="Your Email *"
              className="bg-[var(--color-grey-hover)] p-3 rounded-md focus:outline-none focus:ring-[var(--color-red-hover)]"
            />

            <input
              type="text"
              placeholder="Your Phone *"
              className="bg-[var(--color-grey-hover)] p-3 rounded-md focus:outline-none focus:ring-[var(--color-red-hover)]"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full bg-[var(--color-grey-hover)] p-3 rounded-md mb-6 focus:outline-none focus:ring-[var(--color-red-hover)]"
          ></textarea>

          <div className="flex justify-end">
            <button className="bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white px-8 py-3 rounded-md transition">
              Send Message
            </button>
          </div>

        </div>
      </div>
         </div>

      
    </div>   
  </>
}

