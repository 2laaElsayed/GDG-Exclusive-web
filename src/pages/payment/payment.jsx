import { useRef, useState } from "react";
import RedButton from "../../components/RedButton/RedButton";
import "./payment-responsive.css";
import TotalDetails from "../../components/cart/TotalDetails/TotalDetails";
import banks from "../../assets/images/banks.png";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("Delivery");
  const discountRef = useRef();
  const [discount, setDiscount] = useState(0);
  const [errors, setErrors] = useState({});
  const cartInfo = [{ total: 160, subtotal: 200 }];
  const coupounRef = useRef(null);
  const [activeProcess, setActiveProcess] = useState(false);
  async function processpayment_Delivery() {
    if (!validateForm()) return;
    setActiveProcess(true);
    set_Is_From_PaymentPage(true);
    navigate("/order");
  }
  async function processpayment_OnBank() {
    // Validate and save address before payment

    if (!validateForm()) return;
  }

  const [form, setForm] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    postalCode: "",
    saveInfo: false,
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const applyDiscount = () => {};

  return (
    <div className="bg-white font-[Inter] px-[var(--pages-padding)] pt-0 payment-page">
      <div className="flex max-w-[1100px] mx-auto pt-[20px] gap-[48px] payment-container">
        {/* Billing Details */}
        <div className="flex-[1.2] billing-details">
          <h2 className="text-[2rem] mb-[32px] font-medium tracking-[1px]">
            Billing Details
          </h2>
          <div className="form">
            <label className="block mb-[18px] text-[1rem] font-normal">
              First Name<span className="text-[#e74c3c] ml-[2px]">*</span>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
                required
              />
              {errors.firstName && (
                <span className="error text-[#e74c3c] text-[0.875rem]">
                  {errors.firstName}
                </span>
              )}
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Company Name
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
              />
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Street Address<span className="text-[#e74c3c] ml-[2px]">*</span>
              <input
                type="text"
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
                required
              />
              {errors.streetAddress && (
                <span className="error text-[#e74c3c] text-[0.875rem]">
                  {errors.streetAddress}
                </span>
              )}
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Apartment, floor, etc. (optional)
              <input
                type="text"
                name="apartment"
                value={form.apartment}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
              />
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Town/City<span className="text-[#e74c3c] ml-[2px]">*</span>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
                required
              />
              {errors.city && (
                <span className="error text-[#e74c3c] text-[0.875rem]">
                  {errors.city}
                </span>
              )}
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Phone Number<span className="text-[#e74c3c] ml-[2px]">*</span>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
                required
              />
              {errors.phone && (
                <span className="error text-[#e74c3c] text-[0.875rem]">
                  {errors.phone}
                </span>
              )}
            </label>
            <label className="block mb-[18px] text-[1rem] font-normal">
              Postal Code<span className="text-[#e74c3c] ml-[2px]">*</span>
              <input
                type="text"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className="w-full px-[10px] py-[12px] mt-[6px] border border-[#eee] rounded-[4px] bg-[#fafafa] text-[1rem] outline-none mb-[8px]"
                required
              />
              {errors.postalCode && (
                <span className="error text-[#e74c3c] text-[0.875rem]">
                  {errors.postalCode}
                </span>
              )}
            </label>
            <div className="flex items-center mt-[18px] save-info">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={form.saveInfo}
                className="w-[18px] h-[18px] mr-[8px] accent-[#d23f3f]"
              />
              <label htmlFor="saveInfo" className="text-[0.98rem] m-0">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1 bg-white rounded-[8px] px-[28px] py-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.04)] max-w-[400px] h-fit order-summary">
          <TotalDetails total={cartInfo.total} subTotal={cartInfo.subtotal} />
          <div className="payment-methods mt-[18px] mb-[16px]">
            <label className="flex items-center text-[var(--input-txt-size)] mb-[10px] cursor-pointer payment-method-label">
              <input
                type="radio"
                onClick={() => {
                  setPaymentMethod("OnBank");
                }}
                name="payment"
                className="mr-[10px] accent-[var(--red-color)]"
              />
              Bank
              <span className="bank-icons ml-[10px]">
                <img src={banks} alt="Bank Cards" className="h-[20px]" />
              </span>
            </label>
            <label className="flex items-center text-[var(--input-txt-size)] mb-[10px] cursor-pointer payment-method-label">
              <input
                type="radio"
                onClick={() => {
                  setPaymentMethod("Delivery");
                }}
                name="payment"
                defaultChecked
                className="mr-[10px] accent-[var(--red-color)]"
              />
              Cash on delivery
            </label>
          </div>
          <div className="flex flex-col">
            <div className="coupon-row flex gap-[10px] mb-0 justify-start items-center">
              <input
                type="text"
                ref={coupounRef}
                placeholder="Coupoun"
                className="flex-1 px-[10px] py-[8px] border border-[#eee] rounded-[4px] text-[var(--input-txt-size)] outline-none bg-[#fafafa]"
              />
              <RedButton text="Apply Coupoun" btn_Function={applyDiscount} />
            </div>
            <div className="TotalDetails block mt-[10px]">
              <p ref={discountRef} className="hidden">
                New Total : <span> {discount}</span>
              </p>
            </div>
          </div>
          <p className="text-[var(--red-color)] text-[10px] mt-[12px] mb-[16px]">
            Note: To complete your purchase, please follow all the steps{" "}
          </p>
          <RedButton
            text="Place order"
            className={`${activeProcess ? "active" : ""}`}
            btn_Function={
              paymentMethod == "OnBank"
                ? processpayment_OnBank
                : processpayment_Delivery
            }
          />
        </div>
      </div>
    </div>
  );
}
