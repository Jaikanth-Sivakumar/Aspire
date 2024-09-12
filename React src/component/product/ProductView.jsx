import { useCartActions } from "../../store/Store";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductView.css";
import toast from "react-hot-toast";


function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(price);
}

function ProductView({ productData }) {
  const { addToCart } = useCartActions();

  function handleAddToCart() {
    addToCart(productData);
    toast.success("Added to Cart");
  }



  const images = productData.images || [];

    const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1900,
      cssEase: "linear",
    };

  return (
    <div className="product-container">
      <div className="product-img_wrapper">
        {images.length > 0 ? (  
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Product ${index}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="product-info">
        <h2 className="product-name">{productData.title}</h2>
        <p className="product-price">{formatPrice(productData.price)}</p>
        <p className="product-description">{productData.description}</p>

        <button className="product-cart_btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductView;
