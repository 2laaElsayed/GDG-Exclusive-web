import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/cart/CartProduct/CartProduct";
import BlackButton from "../../components/BlackButton/BlackButton";
import TotalDetails from "../../components/cart/TotalDetails/TotalDetails";
import RedButton from "../../components/RedButton/RedButton";
import "./cart-responsive.css";
import item from "../../assets/images/item-img.png";

export default function Cart() {
  const cartItems = [
    { imageUrl: item, productName: "product1", unitPrice: 160, quantity: 2 },
  ];
  const cartInfo = [{ total: 160, subtotal: 200 }];
  const navigate = useNavigate();

  const processOrder = () => {
    navigate("/payment");
  };

  return (
    <div className="px-7.5 cart-page  ">
      <div className="flex flex-row justify-center items-start gap-8 font-(--poppines-regular) capitalize  cart-container">

        <div className="w-75 rounded-lg overflow-hidden text-(--text-size) px-2.5 md:w-full cart-wrapper">
          <table
            className="w-full text-left font-(--poppines-regular) cart-table"
            style={{ borderCollapse: "separate", borderSpacing: "0 50px" }}
          >
            <thead>
              <tr className="text-(--black-color) shadow-[0_0px_30px_rgba(0,0,0,0.05)]">
                <th className="px-6.25 py-3.75 text-left font-normal">
                  Product
                </th>
                <th className="px-6.25 py-3.75 text-center font-normal">
                  Price
                </th>
                <th className="px-6.25 py-3.75 text-center font-normal">
                  Quantity
                </th>
                <th className="px-6.25 py-3.75 text-center font-normal">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return <CartProduct key={index} item={item} index={index} />;
              })}
            </tbody>
          </table>
          <div className="w-full flex justify-between items-center mt-8">
            <BlackButton
              text={"Return to shop"}
              btn_Function={() => {
                navigate("/product");
              }}
            />
          </div>
        </div>

        <div className="w-125   cart-total-section">
          <div className="mt-12.5 border border-[rgba(0,0,0,0.5)] px-5.5 py-2.5 capitalize flex justify-center items-start flex-col gap-1.25">
            <p className="w-57.5 font-bold">Cart total</p>
            <TotalDetails total={cartInfo.total} subTotal={cartInfo.subtotal} />
            <RedButton text="Processed to check" btn_Function={processOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}
