import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CartProduct({ item, index }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr key={index} className="shadow-[0_0px_30px_rgba(0,0,0,0.05)]">
      <td className="px-6.25 py-2 text-left font-normal text-[var(--input-txt-size)] flex justify-start items-center ">
        <div className="flex justify-start items-center   gap-3.75 cart-product-info">
          <img
            src={item.imageUrl}
            alt="product"
            className="w-[60px] h-[50px] object-contain rounded-[4px]"
          />
          <span className="font-medium text-[#333]">{item.productName}</span>
        </div>
      </td>
      
      <td
        data-label="price:"
        className="px-[25px] py-[8px] text-center font-normal text-[var(--input-txt-size)]"
      >
        {item.unitPrice} EGP
      </td>
      <td
        data-label="quantity:"
        className="px-[25px] py-[8px] text-center font-normal text-[var(--input-txt-size)]"
      >
        <div className="inline-flex items-center border border-[#ccc] rounded-[4px] overflow-hidden w-[50px] h-[30px] mx-auto cart-quantity-control">
          <input
            type="text"
            value={item.quantity}
            className="w-[30px] border-none text-black text-center text-[11px] h-full outline-none p-0 cart-quantity-input"
            readOnly
          />
          <div className="flex flex-col h-full w-[15px] border-l border-[#eee]">
            <div className="flex-1 flex justify-center items-center cursor-pointer text-[8px] text-[var(--black-color)] hover:bg-[#f0f0f0] transition-[background-color] duration-200 border-b border-[#eee]">
              ▲
            </div>
            <div className="flex-1 flex justify-center items-center cursor-pointer text-[8px] text-[var(--black-color)] hover:bg-[#f0f0f0] transition-[background-color] duration-200">
              ▼
            </div>
          </div>
        </div>
      </td>
      <td
        data-label="subTotal:"
        className="px-[25px] py-[8px] text-center font-normal text-[var(--input-txt-size)]"
      >
        200 EGP
      </td>
      <td className="px-[25px] py-[8px] text-center">
       <Button variant="primary" className="btn remove-icon cursor-pointer bg-grey p-2 rounded-4xl"  onClick={handleShow}>
                    ✖
                </Button>
          <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontSize: "22px" }}>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontSize: "12px" }}>Do you want to delete <span style={{ fontWeight: "bold" }}>{item.productName}</span></Modal.Body>
                    <Modal.Footer>
                        <Button style={{ fontSize: "12px", background: "var(--red-color)", outline: "none", border: "none", padding: "8px 20px" }} variant="primary" onClick={() => { handleClose(); Delete_From_Cart(index, item.cartItemId); }}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
      </td>
    </tr>
  );
}
