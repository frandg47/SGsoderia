import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";
import { Button } from "react-bootstrap";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const CartItem = ({ product, quantity, addToCart }) => {
  console.log("product", product);
  console.log("quantity", quantity);

  return (
    <li>
      <img src={product.image} alt={product.name} />
      <div className="">
        <strong>{product.name}</strong> - ${product.price * quantity}
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
      </footer>
    </li>
  );
};

const Cart = () => {
  const { cart, clearCart, addToCart } = useCart();
  return (
    <div>
      <label className="cart-button" htmlFor="cart-item">
        <FaCartShopping />
      </label>

      <input id="cart-item" type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              quantity={product.quantity}
              addToCart={addToCart}
            />
          ))}
        </ul>
        <Button variant="danger" onClick={clearCart}>
          <MdOutlineRemoveShoppingCart />
          Vaciar
        </Button>
      </aside>
    </div>
  );
};

export default Cart;
