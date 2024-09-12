import { useCart } from "../../store/Store";

import "./OrderSummary.css";

function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(price);
}

function OrderSummary() {
  let cart = useCart();
  let allSoloProducts = cart.map((product) => {
    //return <SoloBill product={product} key={product.id} />;
  });

  let totalPrice = cart.reduce((acc, cur) => {
    return acc + cur.qty * cur.price;
  }, 0);



  return (
    <div className="order-summary_container">
      <h3>Order Summary</h3>
      <div className="order-summary">{allSoloProducts}</div>
      <div className="order-total solo-bill">
        <p>Total</p>
        <span>{formatPrice(totalPrice)}</span>
       
      </div>
  
    </div>

  );

  
}
/*
function SoloBill({ product }) {
  return (
    <div className="solo-bill">
      <p>
        <b>{product.qty}</b> * <b>{product.title}</b>
      </p>
      <span>${(product.qty * formatPrice(product.price))}</span>
    </div>
  );
}
*/
export default OrderSummary;
