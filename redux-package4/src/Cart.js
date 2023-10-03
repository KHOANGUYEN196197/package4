import { useSelector, useDispatch } from 'react-redux'


function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const addToCart = (product) => {
        const data = {
            type: 'ADD_TO_CART',
            payload: product
        }
        dispatch(data)
    }
    const removeProduct = (product) => {
        const data = {
            type: 'REMOVE_CART',
            payload: product
        }
        dispatch(data)
    }
    const calcItem = () => {
        return cartItems.length;
    }

    const calcPrice = () => {
        return cartItems.reduce((total, product) => total + product.price, 0)
    }
    return (
        <div>
            <h1> Shopping Cart</h1>
            <div>
                <h2>Cart Item</h2>
                <ul>
                    {cartItems.map((item) => {
                        return (
                            <li>
                                {item.name} - {item.price}
                                <button onClick={() => removeProduct(item)}>Remove Product</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h2>Count</h2>
                <p>Total Item: {calcItem()}</p>
                <p>Total Price: {calcPrice()}</p>
            </div>
            <br /><br /><br />
            <div>
                <h2>List Product</h2>
                <ul>
                    <li>
                        San Pham 1 - 100
                        <button onClick={() => { addToCart({ id: 1, name: 'san pham 1', price: 100 }) }}>Add To Cart</button>
                    </li>
                    <li>
                        San Pham 2 - 200
                        <button onClick={() => { addToCart({ id: 2, name: 'san pham 2', price: 200 }) }}>Add To Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Cart;