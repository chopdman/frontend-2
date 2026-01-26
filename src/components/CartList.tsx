import { useCartContext } from '../context/Cart';
function CartList() {
    const { cart } = useCartContext();
    const { DeleteItem } = useCartContext();
    const totalAmount = cart.reduce((acc, curr) => acc + parseInt(curr.totalPrice), 0);
    if (cart.length === 0) {
        return (
            <div className='mt-5 text-center'>
                <h3 className='mb-5'> No items in cart </h3>
            </div>
        );
    }
    return <>
        <div className="w-screen h-screen flex items-center justify-center gap-2 flex-col">
            <h2 className='text-2xl'>My Cart</h2>
            <table className='border w-full max-w-[60vw] '>
                <tr className='border-2  text-left w-full '>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th className=''></th>
                </tr>
                {cart.map((item: any) => (
                    <tr className='border'>
                        <td><p>{item.title}</p></td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.totalPrice}</td>
                        <td><span className='text-red-600 cursor-pointer'  onClick={() => DeleteItem(item.id)}>delete</span></td>
                    </tr>
                ))}
                <tr className='text-left'>
                    <th>Sub Total</th>
                    <th></th>
                    <th></th>
                    <th>{totalAmount} rs.</th>
                    <th></th>
                </tr>
            </table>
        </div>
    </>
};
export default CartList;