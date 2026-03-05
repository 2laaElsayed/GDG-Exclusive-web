import { useContext, useEffect, useState } from "react";
import "./Account.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export default function Account() {
  const [SideBar, setSideBar] = useState(false);
  const navigate = useNavigate(null);

  return (
    <div className="account-container grid grid-cols-[250px_1fr] gap-[20px] px-[10px] py-[30px] w-[90%] mx-auto h-[70vh]">
      <aside
        className={`account-sidebar relative w-[250px] transition-transform duration-300 ${SideBar ? "active" : ""}`}
      >
        <div
          onClick={() => {
            setSideBar(!SideBar);
          }}
          className={`arrow ${SideBar ? "active" : ""}`}
        >
          {SideBar ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}
        </div>
        <div>
          <h3 className="text-[var(--text-size)] mt-[15px] mb-[8px] font-[var(--poppines-semi-bold)]">
            Manage My Account
          </h3>
          <ul className="list-none px-5 font-[var(--poppines-regular)]">
            <li className="my-[5px]">
              <NavLink
                to=""
                className="text-black opacity-[var(--text-opacity)] text-[var(--input-txt-size)] transition-colors duration-200 hover:text-[var(--red-hover)]"
              >
                My Profile
              </NavLink>
            </li>
          </ul>

          <h3 className="text-[var(--text-size)] mt-[15px] mb-[8px] font-[var(--poppines-semi-bold)]">
            My Orders
          </h3>
          <ul className="list-none px-5 font-[var(--poppines-regular)]">
            <li className="my-[5px]">
              <NavLink
                to="orders"
                className="text-black opacity-[var(--text-opacity)] text-[var(--input-txt-size)] transition-colors duration-200 hover:text-[var(--red-hover)]"
              >
                Orders
              </NavLink>
            </li>
          </ul>

          <h3 className="text-[var(--text-size)] mt-[15px] mb-[8px] font-[var(--poppines-semi-bold)]">
            My Discounts
          </h3>
          <ul className="list-none px-5 font-[var(--poppines-regular)]">
            <li className="my-[5px]">
              <NavLink
                to="discounts"
                className="text-black opacity-[var(--text-opacity)] text-[var(--input-txt-size)] transition-colors duration-200 hover:text-[var(--red-hover)]"
              >
                Discounts
              </NavLink>
            </li>
          </ul>

          <h3 className="text-[var(--text-size)] mt-[15px] mb-[8px] font-[var(--poppines-semi-bold)]">
            My cart
          </h3>
          <ul className="list-none px-5 font-[var(--poppines-regular)]">
            <li className="my-[5px]">
              <NavLink
                to="/cart"
                className="text-black opacity-[var(--text-opacity)] text-[var(--input-txt-size)] transition-colors duration-200 hover:text-[var(--red-hover)]"
              >
                cart
              </NavLink>
            </li>
          </ul>

          <h3 className="text-[var(--text-size)] mt-[15px] mb-[8px] font-[var(--poppines-semi-bold)]">
            My Wishlist
          </h3>
          <ul className="list-none px-5 font-[var(--poppines-regular)]">
            <li className="my-[5px]">
              <NavLink
                to="/wishlist"
                className="text-black opacity-[var(--text-opacity)] text-[var(--input-txt-size)] transition-colors duration-200 hover:text-[var(--red-hover)]"
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <Outlet />
    </div>
  );
}
