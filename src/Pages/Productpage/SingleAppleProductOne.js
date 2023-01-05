import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../../Components/AddToCart/AddToCart";

function SingleAppleProductOne({ match }) {
  useEffect(() => {
    fetchItem();

    console.log(match);
    console.log(match.params.pid);
  }, []);

  const [products, setItem] = useState([]);

  const fetchItem = async () => {
    //   const fetchItem =   fetch(`"http://localhost:430/product/"`);
    //   const item = await fetchItem.json();

    //   console.log(item);

    fetch(`http://localhost:431/product/${match.params.pid}`)
      .then((res) => res.json())
      .then((products) => {
        setItem(() => products);
        console.log(products);
      });
  };

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            
            let id = product.product_id;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto `}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <AddToCart />
                </div>

                <div className={`col-sm-12 col-md-6`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default SingleAppleProductOne;
