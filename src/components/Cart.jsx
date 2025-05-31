import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart";
import { Button } from "react-bootstrap";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BsCash } from "react-icons/bs";

const CartItem = ({ product, quantity, addToCart }) => {
  console.log("product", product);
  console.log("quantity", quantity);

  return (
    <li>
      <img src={product.image} alt={product.name} />
      <div className="">
        <strong>{product.name}</strong> -{" "}
        <span>${product.price * quantity}</span>
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        <Button variant="light" onClick={() => addToCart(product)}>
          +
        </Button>
      </footer>
    </li>
  );
};

const Cart = () => {
  const { cart, clearCart, addToCart } = useCart();
  return (
    <div>
      

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
        <Button variant="success" className="mx-3" onClick={clearCart}>
          <BsCash />
          Pagar
        </Button>
        <Button variant="danger" onClick={clearCart}>
          <MdOutlineRemoveShoppingCart />
          Vaciar
        </Button>
      </aside>

      <label className="cart-button" htmlFor="cart-item">
        <FaCartShopping />
      </label>
    </div>
  );
};

export default Cart;
