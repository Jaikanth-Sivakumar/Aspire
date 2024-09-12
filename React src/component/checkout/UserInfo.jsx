/*
import React from "react";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  const { emptyCart } = useCartActions();
  const cart = useCart();

  let navigate = useNavigate();

  

  function checkoutHandler() {
    if (cart.length < 1) {
      toast.error("Your shopping list is Emtpy");
      return;
    }

    let totalPrice = cart.reduce((acc, cur) => {
      return acc + cur.qty * cur.price;
    }, 0);

    if (totalPrice < 1) {
      toast.error("Cannot process order value of zero(0).");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    emptyCart();
    toast.success("Checked out");
    navigate("/");
  }

  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="First name" id="firstname" />
        <input type="name" placeholder="Last name" id="lastname" />
        <input type="name" placeholder="Address" id="address" />
        <input type="name" placeholder="City" id="city" />


        <div className="payment-method_container">
          <h4>Select Payment Method:</h4>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">--Select Payment Method--</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>

        <div className="total-price_container">
          <h4>Total Amount: ${cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toFixed(2)}</h4>
        </div>


        <button className="checkout-btn" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
*/



import React, { useState } from "react";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const [email, setEmail] = useState(""); // Email state managed in parent

  // Email validation function
  const validateEmail = () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return false;
    }
    return true;
  };

  return (
    <div className="user-info_container">
      <ContactInformation email={email} setEmail={setEmail} />
      <ShippingAddress validateEmail={validateEmail} />
    </div>
  );
}

function ContactInformation({ email, setEmail }) {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="contact-info_container">
      <h3>Contact Information</h3>
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
      />
    </div>
  );
}

function ShippingAddress({ validateEmail }) {
  const { emptyCart } = useCartActions();
  const cart = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  let navigate = useNavigate();

  function checkoutHandler() {
    if (cart.length < 1) {
      toast.error("Your shopping list is empty");
      return;
    }

    let totalPrice = cart.reduce((acc, cur) => {
      return acc + cur.qty * cur.price;
    }, 0);

    if (totalPrice < 1) {
      toast.error("Cannot process order value of zero(0).");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    emptyCart();
    toast.success("Checked out");
    navigate("/");
  }

  const handleCheckout = () => {
    if (validateEmail()) {
      checkoutHandler(); // Only run if email is valid
    }
  };

  return (
    <div className="shipping-address_container">
      <h3>Shipping Address</h3>
      <div className="shipping-address_wrapper">
        <input type="text" placeholder="First name" id="firstname" />
        <input type="text" placeholder="Last name" id="lastname" />
        <input type="text" placeholder="Address" id="address" />
        <input type="text" placeholder="City" id="city" />

        {/* Payment Method Selection */}
        <div className="payment-method_container">
          <h3>Select Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">--Select Payment Method--</option>
            <option value="credit-card">KP Fashion credit</option>
            <option value="paypal">Google pay</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Show Total Price */}
        <div className="total-price_container">
          <h3>Total Amount: ₹{cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toFixed(2)}</h3>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
