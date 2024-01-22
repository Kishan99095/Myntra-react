import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
  const locaton = useLocation();
  console.log(locaton);

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      await fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
    } catch {
      (err) => console.error(err);
    }
  };
  useEffect(() => getProduct, []);

  return (
    <>
      <div className=" flex flex-wrap gap-3 pl-3 pr-3">
        {product
          .filter((data) => data.category.name.includes(locaton.state.category))
          .map((data) => {
            return (
              <>
                <div className="">
                  <Link
                    to="/detail"
                    state={{ title: data.title }}
                    key={product.id}
                  >
                    <img className="h-60 w-60 " src={data.images[0]} alt="" />
                    <h1 className=" font-bold text-wrap w-60">{data.title}</h1>
                    <h1>{data.category.name}</h1>
                    <h1>Rs.{data.price}</h1>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Product;
