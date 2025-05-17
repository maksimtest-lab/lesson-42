import { useReducer } from "react";
import { cartReducer, initialCart } from "./reducers/cartReducer";
import CartItem from "./CartItem";

export default function Cart() {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const handleAddItem = () => {
        const newItem = {
            id: Date.now(),
            name: "Товар" + Math.floor(Math.random() * 1000)
        };
        dispatch({ type: "ADD_ITEM", payload: newItem });
    };

    const onDelete = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
    };


    const handleClearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <div>
            <h1>Корзина</h1>
            <button onClick={handleAddItem}>Добавить товар</button>
            <button onClick={handleClearCart}>Очистить корзину</button>
            <p>Товары в корзине:</p>
            <ul>
                {cart.map((item) => (
                       <CartItem item={item} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
}