import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6"
import "../styles/cart.css";

const Cart = () => {
  return (
    <div>
        <label className="cart-button" htmlFor="cart-item">
            <FaCartShopping />
        </label>

        <input id="cart-item" type="checkbox" hidden />

        <aside className="cart">
            <ul>
                <li>
                    <img 
                    src="/soda1.jpg" 
                    alt="hola" />
                    <div className="">
                        <strong>Producto 1</strong> - $10.00
                    </div>

                    <footer>
                        <small>
                            Cantidad: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button><FaCartArrowDown /></button>
        </aside>
    </div>
  )
}

export default Cart