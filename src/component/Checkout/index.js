import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItem, selectCartTotal } from "../../redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";
import Button from "../Form/Button";
import Item from "./Item";
import "./styles.scss"

const mapState = createStructuredSelector({
  cartItem: selectCartItem,
  total: selectCartTotal
});

const Checkout = () => {
  const { cartItem, total } = useSelector(mapState);
  const history = useHistory()
  return (
    <div className="checkout">
      <h1>checkout</h1>
      <div className="cart">
        {cartItem.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table
                    className="checkoutHeader"
                    border="0"
                    cellPadding="20"
                    cellSpacing="0"
                  >
                    <tbody>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItem.map((item, pos) => {
                        return (
                          <tr key={pos}>
                            <td>
                              <Item {...item} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <h3>Total: ${total}</h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Button onClick={() => history.goBack()} >Continue Shopping</Button>
                                </td>
                                <td>
                                  <Button>Checkout</Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>you have no item</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
