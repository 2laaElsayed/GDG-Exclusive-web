import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import NoOrdersModal from "../noOrdersModal/noOrdersModal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import LoadingModal from "../../../loadingModal/LoadingModal";
import "./allOrders.css";

export default function AllOrders() {
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [modelINfo, setModelInfo] = useState({
    selectedOrderId: "",
    actionType: "",
    id: null,
    show: false,
  });
  // Simulated orders and actions (no context / API)
  const navigate = useNavigate();
  const pageSize = 5;
  const [page, setPage] = useState(1);

  // seed fake orders
  const seedOrders = () => {
    const statuses = ["Pending", "Shipped", "Delivered", "Canceled"];
    const arr = Array.from({ length: 23 }).map((_, i) => ({
      id: `ORD-${1000 + i}`,
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
      total: Math.round((Math.random() * 500 + 50) * 10) / 10,
      status: statuses[i % statuses.length],
    }));
    return arr;
  };

  const [allOrders, setAllOrders] = useState(seedOrders());
  const [orders, setOrders] = useState([]); // current page
  const [totalPages, setTotalPages] = useState(1);

  // Simulated action: view orders (filter + pagination)
  const View_Orders = (flt) => {
    const f = flt === "all" ? null : flt;
    const filtered = f
      ? allOrders.filter((o) => o.status.toLowerCase() === f.toLowerCase())
      : allOrders;
    const start = (page - 1) * pageSize;
    setOrders(filtered.slice(start, start + pageSize));
  };

  const Delete_Order = (orderId) => {
    setAllOrders((prev) => prev.filter((o) => o.id !== orderId));
    toast.success("Order deleted");
  };

  const Cancel_Order = (orderId) => {
    setAllOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "Canceled" } : o)),
    );
    toast("Order canceled");
  };

  const toCurrentOrder = (id) => {
    // noop in fake mode
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleClose = (order) => {
    setModelInfo({
      selectedOrderId: order,
      actionType: "",
      id: null,
      show: false,
    });
  };
  const handleShow = (order, id, type) => {
    setModelInfo({
      selectedOrderId: order,
      actionType: type,
      id: id,
      show: true,
    });
  };

  function getOrderIndex(index) {
    let last_Prev_Index = (page - 1) * pageSize + 1;
    return index + last_Prev_Index;
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Shipped,":
        return "status-inprogress";
      case "Delivered":
        return "status-completed";
      case "Canceled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  useEffect(() => {
    // when filter or page changes, recalc view
    View_Orders(filter);
    // simulate loading
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [filter, page, allOrders]);

  return (
   <div className="AllOrders bg-white rounded-lg text-[var(--sec-text-size)] font-[var(--Inter-regular)] overflow-auto px-8 py-[5px]" >
      {loading && orders.length === 0 ? (
        <LoadingModal loading={loading} text={"Loading orders..."} />
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <h2>All Orders</h2>
          <div
            className="flex items-center justify-between gap-2.5"
          >
            <p>
              <small className="text-[13px] text-[var(--red-color)]">
                Select an order to see more information.
              </small>
            </p>
            <div className="filter-select inline-flex items-center bg-white rounded-md px-4 py-2 text-[var(--input-txt-size)] text-[#222] border border-[#e0e0e0] my-2.5 mx-1">
              <CiFilter />
              <select
                className="custom-filter-select bg-transparent border-none text-[var(--input-txt-size)] text-[#222] outline-none p-0 cursor-pointer min-w-[50px] hover:bg-[#e9f0ff]"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="all">All</option>
                <option value="Pending">Pending</option>
                <option value="Canceled">Canceled</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>

          <table className="orders-table w-full border-collapse mt-5 bg-white text-[var(--sec-text-size)]">
            <thead>
              <tr>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]">ID</th>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]">Created At</th>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]">Total</th>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]">Status</th>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]"></th>
                <th className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)] font-semibold text-[#222] bg-[#fafafa]"></th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr className="no-orders-tr">
                  <td colSpan={6}>
                    <NoOrdersModal status={filter} />
                  </td>
                </tr>
              ) : (
                orders.map((order, id) => (
                  <tr
                    onClick={() => {
                      navigate(`/account/order/${order.id}`);
                    }}
                    key={order.id}
                    className="hover:bg-[#f9f9f9] cursor-pointer"
                  >
                    <td className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]" data-label="ID:">{getOrderIndex(id)}</td>
                    <td className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]" data-label="Start Date:">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]" data-label="Total:">{order.total.toFixed(1)} EGP</td>
                    <td className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]">
                      <span
                        className={`status-badge inline-block px-4 py-1.5 rounded-md text-[var(--input-txt-size)] font-medium text-[#222] ${getStatusClass(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td onClick={(e) => e.stopPropagation()} className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]">
                      <Button
                        className="btn cancel-icon px-4 py-1.5 border-none rounded-md bg-[#ff4d4f] text-white font-medium cursor-pointer transition-colors duration-200 disabled:bg-[#eee] disabled:text-[#aaa] disabled:cursor-not-allowed"
                        disabled={order.status !== "Pending"}
                        onClick={() => {
                          handleShow(order.id, id, "cancel");
                        }}
                      >
                        Cancel
                      </Button>
                    </td>
                    <td onClick={(e) => e.stopPropagation()} className="px-3 py-4 text-left border-b border-[#f0f0f0] text-[var(--text-size)]">
                      <Button
                        className="btn cancel-icon px-4 py-1.5 border-none rounded-md bg-[#ff4d4f] text-white font-medium cursor-pointer transition-colors duration-200 disabled:bg-[#eee] disabled:text-[#aaa] disabled:cursor-not-allowed"
                        variant="danger"
                        disabled={order.status !== "Canceled"}
                        onClick={() => {
                          handleShow(order.id, id, "delete");
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}

              <Modal
                show={modelINfo.show}
                onHide={() => {
                  handleClose(null);
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title style={{ fontSize: "22px" }}>
                    {" "}
                    Order {modelINfo.id + 1}{" "}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: "12px" }}>
                  Do u want to {modelINfo.actionType}{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Order {modelINfo.id + 1}{" "}
                  </span>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    style={{ fontSize: "10px" }}
                    variant="danger"
                    onClick={() => {
                      if (modelINfo.actionType == "delete")
                        Delete_Order(
                          modelINfo.selectedOrderId
                            ? modelINfo.selectedOrderId
                            : null,
                        );
                      else
                        Cancel_Order(
                          modelINfo.selectedOrderId
                            ? modelINfo.selectedOrderId
                            : null,
                        );
                      handleClose(
                        modelINfo.selectedOrderId
                          ? modelINfo.selectedOrderId
                          : null,
                      );
                    }}
                  >
                    {modelINfo.actionType} Order
                  </Button>
                </Modal.Footer>
              </Modal>
            </tbody>
          </table>
        </>
      )}
      <Stack
        spacing={2}
        className="flex justify-center items-center mt-5"
      >
        <Pagination count={totalPages} onChange={handleChange} page={page} />
      </Stack>
    </div>
  );
}
