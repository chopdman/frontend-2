import { useNavigate } from "react-router";
import { useCartContext } from "../context/Cart";
function CartList() {
    const navigate =useNavigate();

  const { items, increment, decrement, removeItem, totalItems, totalPrice } =
    useCartContext();
  if (items.length === 0) return <p className="mt-20 text-center font-bold">Cart is empty.</p>;
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center gap-2 flex-col">
        <h2 className="text-2xl">My Cart</h2>
        <table className="border w-full max-w-[60vw] ">
          <tr className="border-2  text-left w-full ">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th className=""></th>
          </tr>
          {items.map((item: any) => (
            <tr className="border">
              <td>
                <p>{item.title}</p>
              </td>
              <td>{item.price}</td>
              <td className="flex items-center gap-3">
                <button
                  className="cursor-pointer"
                  onClick={() => decrement(item.id)}
                >
                  -
                </button>
                {item.quantity}{" "}
                <button
                  className="cursor-pointer"
                  onClick={() => increment(item.id)}
                >
                  +
                </button>
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
          <tr className="text-left">
            <th>Sub Total</th>
            <th></th>
            <th></th>
            <th>{totalPrice.toFixed(2)} ₹</th>
            <th></th>
          </tr>
        </table>
        <button className="bg-blue-400 text-white p-4 rounded cursor-pointer" onClick={()=>navigate('/checkout')}> checkout</button>
      </div>
    </>
  );
}
export default CartList;
