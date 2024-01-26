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
    <div><h1 className="text text-4xl font-bold text-rose-500 m-3">Product</h1></div>
      <div className="  grid justify-items-center sm: grid-cols-2 w-[100%] md:grid-cols-3">
        {product
          .filter((data) => data.category.name.includes(locaton.state.category))
          .map((data) => {
            return (
              <>
              <div className="bg bg-rose-50 p-5 rounded-lg my-5 mx-4 ">
                <Link
                  to="/detail"
                  state={{ title: data.title }}
                  key={product.id}
                >
                  <img
                    className=" "
                    src={data.images[0]}
                    alt=""
                  />
                  <h1 className=" font-bold text-wrap  ">
                    {data.title}
                  </h1>
                  <h1>{data.category.name}</h1>
                  <h1 className="text font-semibold text-2xl text-rose-500">Rs.{data.price*10}</h1>
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
