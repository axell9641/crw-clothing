import "./cart-dropdown.styles.scss";

import CustomButtom from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="card-items"></div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

export default CartDropdown;
