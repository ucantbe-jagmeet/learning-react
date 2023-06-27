import { FaCartPlus } from "react-icons/fa";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">2</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
