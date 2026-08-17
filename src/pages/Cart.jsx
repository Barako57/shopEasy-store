import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link to="/products">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              className="cart-item"
              key={`${item.id}-${index}`}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>
            Total: ${total.toFixed(2)}
          </h2>

          <Link to="/checkout">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;