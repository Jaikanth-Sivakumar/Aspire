// ExploreProduct.js
import { useEffect, useState } from "react";
import ProductCard from "../component/explore/ProductCard";
import fetchFromApi from "../utils/fetchFromApi";
import SelectCategory from "../component/explore/SelectCategory";
import PriceFilter from "../component/explore/PriceFilter";
import "./ExploreProducts.css";
import { useParams } from "react-router-dom";
import Shimmer from "../component/shimmer/Shimmer";

function ExploreProduct({ searchQuery = "" }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFlter, setPriceFilter] = useState("default");
  const [checkBoxState, setCheckBoxState] = useState({
    men: false,
    women: false,
  });
  let { category } = useParams();

  useEffect(() => {
    async function getData() {
      let res = await fetchFromApi("products");
      function getFilteredData() {
        if (!checkBoxState.men && !checkBoxState.women) {
          return res.filter((product) =>
            ["men's clothing", "women's clothing"].includes(product.category)
          );
        }
        return res.filter((product) =>
          (checkBoxState.men && product.category === "men's clothing") ||
          (checkBoxState.women && product.category === "women's clothing")
        );
      }
      setProducts(getFilteredData());
      setPriceFilter("default");
    }
    getData();
  }, [checkBoxState]);

  useEffect(() => {
    function applySearchFilter() {
      const lowercasedQuery = (searchQuery || "").toLowerCase();
      const searchFilteredProducts = products.filter((product) => {
        // Ensure product.name exists and is a string
        const productName = product.name || "";
        return productName.toLowerCase().includes(lowercasedQuery);
      });
      setFilteredProducts(searchFilteredProducts);
    }
    applySearchFilter();
  }, [searchQuery, products]);

  function handleCategoryCheckBox(e) {
    let { name, checked } = e.target;
    setCheckBoxState({ ...checkBoxState, [name]: checked });
  }

  function handlePriceFilter(e) {
    let filter = e.target.value;
    let priceFilteredData = filteredProducts.slice();
    if (filter === "low-to-high") {
      priceFilteredData.sort((a, b) => a.price - b.price);
    } else if (filter === "high-to-low") {
      priceFilteredData.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(priceFilteredData);
    setPriceFilter(filter);
  }

  return (
    <main className="product-main">
      <div className="filters-container">
        <PriceFilter
          priceFlter={priceFlter}
          handlePriceFilter={handlePriceFilter}
          handleCheckBox={handleCategoryCheckBox}
        />
        <SelectCategory
          checkBoxState={checkBoxState}
          handleCheckBox={handleCategoryCheckBox}
        />
      </div>
      <div className="products-container">
        <AllProducts products={filteredProducts} />
      </div>
    </main>
  );
}

function AllProducts({ products }) {
  let productCards = products.length ? (
    products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))
  ) : (
    <Skeleton />
  );

  return productCards;
}

function Skeleton() {
  return Array.from({ length: 4 }, (_, i) => <Shimmer key={i} />);
}

export default ExploreProduct;














/*
import { useEffect, useState } from "react";
import ProductCard from "../component/explore/ProductCard";
import fetchFromApi from "../utils/fetchFromApi";
import SelectCategory from "../component/explore/SelectCategory";
import PriceFilter from "../component/explore/PriceFilter";
//import PriceFilter from "../component/explore/SelectCategory"
import "./ExploreProducts.css";
import { useParams } from "react-router-dom";
import Shimmer from "../component/shimmer/Shimmer";

function ExploreProduct() {
  const [products, setProducts] = useState([]);
  const [priceFlter, setPriceFilter] = useState("default");
  const [checkBoxState, setCheckBoxState] = useState({
    men: false,
    women: false,
  });
  let { category } = useParams();

  useEffect(() => {
    let resetCheckBoxState = {
      men: false,
      women: false,
    };
    if (category === "all") {
      setCheckBoxState(resetCheckBoxState);
      return;
    }
    setCheckBoxState({ ...resetCheckBoxState, [category]: true });
  }, [category]);

  useEffect(() => {
    async function getData() {
      let res = await fetchFromApi("products");
      function getFilteredData() {
        // if both men and women checkbox are not true than load both men's and women's clothing
        // we are filtering this since the default request also provide result for category that we don't want
        if (!checkBoxState.men && !checkBoxState.women) {
          let filteredData = res.filter((product) => {
            return (
              product.category === "men's clothing" ||
              product.category === "women's clothing"
            );
          });
          return filteredData;
        }

        let filteredData = res.filter((product) => {
          if (checkBoxState.men && product.category === "men's clothing") {
            return product;
          } else if (
            checkBoxState.women &&
            product.category === "women's clothing"
          ) {
            return product;
          }
        });
        return filteredData;
      }
      setProducts(getFilteredData());
      setPriceFilter("default");
    }
    getData();
  }, [checkBoxState]);

  function handleCategoryCheckBox(e) {
    let { name, checked } = e.target;
    setCheckBoxState({ ...checkBoxState, [name]: checked });
  }

  function handlePriceFilter(e) {
    let filter = e.target.value;
    if (filter === "low-to-high") {
      let priceFilteredData = products
        .slice()
        .sort((a, b) => a.price - b.price);
      setProducts(priceFilteredData);
    }
    if (filter === "high-to-low") {
      let priceFilteredData = products
        .slice()
        .sort((a, b) => b.price - a.price);
      setProducts(priceFilteredData);
    }
    setPriceFilter(filter);
  }

  return (
    <main className="product-main">
      <div className="filters-container">
        <PriceFilter
          priceFlter={priceFlter}
          handlePriceFilter={handlePriceFilter}
          handleCheckBox={handleCategoryCheckBox}
        />
        <SelectCategory
          checkBoxState={checkBoxState}
          handleCheckBox={handleCategoryCheckBox}
        />
      </div>
      
      <div className="products-container">
        <AllProducts products={products} />
      </div>
    </main>
  );
}

function AllProducts({ products }) {
  let productCards = products.length ? (
    products?.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    })
  ) : (
    <Skeleton />
  );

  return productCards;
}

function Skeleton() {
  let a = [];
  for (let i = 0; i < 4; i++) {
    a.push(<Shimmer key={i} />);
  }
  return a;
}

export default ExploreProduct;
*/