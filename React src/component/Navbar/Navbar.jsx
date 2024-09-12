/*
import { useState } from "react";
import { useCart } from "../../store/Store";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SlidingCart from "./SlidingCart";
import "./Navbar.css";

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart(!showCart);
  }
  return (
    <header className={`header ${showCart ? "visible" : ""}`}>
      <Navigations toggleShowCart={toggleShowCart} />
      <SlidingCart toggleShowCart={toggleShowCart} />
      <CartSliderOverlay />
    </header>
  );
}

function CartButton({ toggleShowCart }) {
  const cart = useCart();

  const totalCartQty = cart.reduce((totalQty, current) => {
    return totalQty + current.qty;
  }, 0);

  return (
    <span onClick={toggleShowCart} className="cart-icon">
      <ShoppingCart size={22} />
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  );
}

function Navigations({ toggleShowCart }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleOpenNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search functionality logic here
  }

  return (
    <nav className={`nav container ${isNavOpen ? "nav-open" : ""}`}>
      <span className="brand-name">
        <Link to="/">KP Fashion</Link>
      </span>
      
      <ul className="nav-link_container">
        <li className="nav-link">
          <NavLink to="/explore/men">Men</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/women">Women</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/explore/all">Explore All</NavLink>
        </li>
      </ul

      
      <form className="nav-search_form" onSubmit={handleSearch}>
        <input
          type="text"
          className="nav-search_input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="nav-search_button">
          Search
        </button>
      </form>


      <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-secondary">
        <CartButton toggleShowCart={toggleShowCart} />
      </div>
      <div className="nav-overlay"></div>
    </nav>
  );
}

function CartSliderOverlay() {
  return <div className="cart-slide_overlay"></div>;
}

export default Navbar;
*/

// Navbar.js
import { useState } from "react";
import { useCart } from "../../store/Store";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SlidingCart from "./SlidingCart";
import LoginPage from "../checkout/LoginPage";
import "./Navbar.css";

import { useAuth } from "./AuthContext";

function Navbar({ onSearch }) {
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false); // Control login modal
  const { isLoggedIn, user, logout } = useAuth(); // Get auth status and user info from AuthContext

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }

  function toggleShowCart() {
    setShowCart(!showCart);
  }

  function handleLogout() {
    logout(); // Calls the logout function from AuthContext to log out the user
  }

  return (
    <header className={`header ${showCart ? "visible" : ""}`}>
      <Navigations
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleShowCart={toggleShowCart} 
      />
      <SlidingCart toggleShowCart={toggleShowCart} />
      <CartSliderOverlay />

      <div className="auth-section">
        {isLoggedIn ? (
          <div className="user-info">
            <span>{user.name}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button onClick={() => setShowLoginModal(true)} className="login-link">
              Login
            </button>
            {showLoginModal && <LoginPage onClose={() => setShowLoginModal(false)} />} {/* Show login page */}
          </>
        )}
      </div>
    </header>
  );
}



function Navigations({ handleSearch, searchQuery, setSearchQuery, toggleShowCart }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  function handleOpenNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search functionality logic here
  }

  return (
    <nav className={`nav container ${isNavOpen ? "nav-open" : ""}`}>
      <span className="brand-name">
        <Link to="/">KP Fashion</Link>
      </span>
      <form className="nav-search_form" onSubmit={handleSearch}>
        <input
          type="text"
          className="nav-search_input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="nav-search_button">
          Search
        </button>
      </form>
      <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-secondary">
        <CartButton toggleShowCart={toggleShowCart} />
      </div>
      <div className="nav-overlay"></div>
    </nav>
  );
}

function CartButton({ toggleShowCart }) {
  const cart = useCart();
  const totalCartQty = cart.reduce((totalQty, current) => totalQty + current.qty, 0);

  return (
    <span onClick={toggleShowCart} className="cart-icon">
      <ShoppingCart size={22} />
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  );
}

function CartSliderOverlay() {
  return <div className="cart-slide_overlay"></div>;
}

export default Navbar;
