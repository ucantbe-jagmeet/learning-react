import CartItem from "./CartItem";
import { ICartItem, useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart } = useGlobalContext();

  const cartEnt = cart.entries();
  // console.log(cart.entries());

  const cartArray: Array<[string, ICartItem]> = Array.from(cartEnt);

  if (!cartEnt) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem[0]} {...cartItem[1]} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>$10</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => console.log("clear cart")}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
