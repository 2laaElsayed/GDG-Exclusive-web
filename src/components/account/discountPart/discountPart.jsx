import { useContext, useEffect, useState } from "react";
import "../orderPart/currentOrder/currentOrder.css";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../../loadingModal/LoadingModal";

export default function DiscountPart() {
  const [discount, setDiscount] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // Fake data instead of API call
      const fakeDiscountData = [
        {
          id: 1,
          code: "SAVE20",
          value: 20,
          type: "%",
          startDate: new Date("2025-01-01"),
          endDate: new Date("2026-12-31"),
          isActive: true,
          categories: ["Electronics", "Fashion"],
        },
        {
          id: 2,
          code: "FLAT500",
          value: 500,
          type: "EGP",
          startDate: new Date("2025-02-01"),
          endDate: new Date("2026-05-31"),
          isActive: true,
          categories: ["Home"],
        },
        {
          id: 3,
          code: "SUMMER30",
          value: 30,
          type: "%",
          startDate: new Date("2025-06-01"),
          endDate: new Date("2025-08-31"),
          isActive: false,
          categories: ["Sports"],
        },
        {
          id: 4,
          code: "WELCOME15",
          value: 15,
          type: "%",
          startDate: new Date("2025-01-15"),
          endDate: new Date("2026-12-31"),
          isActive: true,
          categories: ["All"],
        },
      ];

      setDiscount([...fakeDiscountData]);
    })();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="currentOrder-container" style={{ width: "100%" }}>
      {discount.length == 0 ? (
        <LoadingModal loading={loading} text={"order"} />
      ) : (
        <>
          <h2>Discount Codes</h2>

          <section>
            <table className="order-table" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Categories</th>
                  <th>startDate</th>
                  <th>Value</th>
                  <th>Code</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {discount.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="no-orders">
                      No discounts found.
                    </td>
                  </tr>
                ) : (
                  discount?.map((item, idx) => (
                    <tr id={idx}>
                      <td data-label="ID:">{idx + 1}</td>
                      <td data-label="Category: ">catg1</td>

                      <td data-label="Start Date:">
                        {new Date(item.endDate).toLocaleDateString()}{" "}
                      </td>
                      <td data-label="Value:">
                        {item.value} {item.type}{" "}
                      </td>
                      <td data-label="Code:">{item.code}</td>
                      <td data-label="Active:">
                        {item.isActive ? "yes" : "No"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        </>
      )}
    </div>
  );
}
