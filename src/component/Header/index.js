import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUserStart } from "../../redux/User/user.actions";
import { selectCartItemCount } from "../../redux/Cart/cart.selector";

import "./styles.scss";
import Logo from "../../asset/logo.png";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItem: selectCartItemCount(state)
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItem } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <div className="cta">
          <ul>
            <li>
              <Link>Your Cart({totalNumCartItem})</Link>
            </li>
            {currentUser && [
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>Logout</span>
              </li>,
            ]}

            {!currentUser && [
                <li>
                  <Link to="/registration">Registration</Link>
                </li>,
                <li>
                  <Link to="/login">Login</Link>
                </li>
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};

export default Header;
