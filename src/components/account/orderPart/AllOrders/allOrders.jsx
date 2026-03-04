import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CiFilter } from "react-icons/ci";
import LoadingModal from "../../../../Common/modal/modal";
import NoOrdersModal from "../../../noOrdersModal/noOrdersModal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
    <div className="AllOrders">
      {loading && orders.length === 0 ? (
        <LoadingModal loading={loading} text={"Loading orders..."} />
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <h2>All Orders</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <p>
              <small style={{ fontSize: "13px", color: "var(--red-color)" }}>
                Select an order to see more information.
              </small>
            </p>
            <div className="filter-select">
              <CiFilter />
              <select
                className="custom-filter-select"
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

          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created At</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr className="no-orders-tr ">
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
                  >
                    <td data-label="ID:">{getOrderIndex(id)}</td>
                    <td data-label="Start Date:">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td data-label="Total:">{order.total.toFixed(1)} EGP</td>
                    <div className="row">
                      <td>
                        <span
                          className={`status-badge ${getStatusClass(order.status)}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <Button
                          className="btn cancel-icon"
                          disabled={order.status !== "Pending"}
                          onClick={() => {
                            handleShow(order.id, id, "cancel");
                          }}
                        >
                          Cancel
                        </Button>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <Button
                          className="btn cancel-icon"
                          variant="danger"
                          disabled={order.status !== "Canceled"}
                          onClick={() => {
                            handleShow(order.id, id, "delete");
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </div>
                    <td>
                      <span
                        className={`status-badge ${getStatusClass(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <Button
                        className="btn cancel-icon"
                        disabled={order.status !== "Pending"}
                        onClick={() => {
                          handleShow(order.id, id, "cancel");
                        }}
                      >
                        Cancel
                      </Button>
                    </td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <Button
                        className="btn cancel-icon"
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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Pagination count={totalPages} onChange={handleChange} page={page} />
      </Stack>
    </div>
  );
}
