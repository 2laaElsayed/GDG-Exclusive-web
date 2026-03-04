export default function TotalDetails({total, subTotal,shipPostalCode,shippingAddress,discountAmount,createdAt})
{
 
    return <div className="w-full"> 
<p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)]">Subtotal <span className="w-[100px] text-right">{subTotal}</span></p>

<p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)] border-b border-t border-[var(--sec-grey-color)]">Shipping <span className="w-[100px] text-right">Free</span></p>

<p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)]">Total<span className="w-[100px] text-right">{total}</span></p>

{shipPostalCode ? <p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)]">Postal Code<span className="w-[100px] text-right">{shipPostalCode}</span></p>:""}
{shippingAddress ? <p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)]">Shipping Address<span className="w-[100px] text-right">{shippingAddress}</span></p>:""}
{createdAt ? <p className="text-[var(--input-txt-size)] flex justify-between items-center py-[8px] m-0 text-[var(--black-color)]">Order Date<span className="w-[100px] text-right">{new Date(createdAt).toLocaleDateString()}</span></p>:""}



    </div>
    
}