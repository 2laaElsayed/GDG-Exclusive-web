import { Truck, Headphones, RefreshCcw } from "lucide-react";
import f1 from "../assets/images/playstation.png";
import f3 from "../assets/images/perfum.png";
import f2 from "../assets/images/women.png";
import f4 from "../assets/images/sub.png";

const Features = () => {
  const featuresData = [
    {
      img: f1,
      alt: "PlayStation 5",
      title: "PlayStation 5",
      description:
        "Black and White version of the PS5 coming out on sale.",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      img: f2,
      alt: "Women's Collections",
      title: "Women’s Collections",
      description:
        "Featured woman collections that give you another vibe.",
      className: "md:col-span-2",
    },
    {
      img: f3,
      alt: "Speakers",
      title: "Speakers",
      description: "Amazon wireless speakers",
      className: "",
    },
    {
      img: f4,
      alt: "Perfume",
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      className: "",
    },
  ];

  const items = [
    {
      icon: <Truck size={28} />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
    },
  ];

  return (
    <div className="mx-auto max-w-[90%] lg:max-w-[1400px] py-12">
      

      <div className="mb-8">
        <p className="text-red-500 font-medium flex items-center gap-3">
          <span className="w-5 h-10 bg-red-500 rounded"></span>
          Featured
        </p>
        <h2 className="text-3xl font-semibold mt-3">New Arrival</h2>
      </div>

      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden group ${feature.className}`}
            >
              <img
                src={feature.img}
                alt={feature.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
                <h3 className="text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm mb-3 opacity-90">
                  {feature.description}
                </p>
                <button className="underline hover:text-red-500 transition-colors duration-200">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Service Icons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="bg-gray-200 rounded-full w-[70px] h-[70px] flex items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
                {item.icon}
              </div>
            </div>

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;