import React from "react";
import { useSelector } from "react-redux";

function Bag() {
  const products = useSelector((state) => state.cart);
  console.log(products);

  const cart = products.cart.map((product) => {
    return (
      <div className="flex mt-10">
        <div className="">
          <img className="w-[130px]" src={product.images[0]} alt="" />
        </div>
        <div className="ml-8">
          <h1 className="text-lg font-medium">{product.title}</h1>

          <h1 className="text-3xl pt-8 font-bold">INR: {product.price}</h1>
          <p className="text text-green-500">in stoke</p>
        </div>
      </div>
    );
  });
  const price = useSelector((state) => state.cart.data);
  console.log(price);
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i];
  }
  console.log(sum);
  let gst = (sum * 12) / 100;
  return (
    <>
      <div className="p-3 m-10 border-2 border-inherit border-solid rounded-lg grid  sm:grid-cols-1 md:grid-cols-2">
        <div>
          <div>
            <h1 className="text font-bold pb-5 text-4xl text-wrap">
              Shopping Bag
            </h1>
            <hr />
          </div>
          <div>{cart}</div>
        </div>
        <div className="w-full bg-rose-50 rounded-xl m-30  ">
          <div className="m-10">
            <h1 className="text-center font-semibold text-2xl">
              Order summary
            </h1>
            <hr className="" />
            <div className="pt-5 grid grid-cols-2 ">
              <h1>Subtotal</h1>
              <h1>{sum}</h1>
            </div>
            <div className="grid grid-cols-2">
              <h1>Gst</h1>
              <h1>{gst}</h1>
              <hr />
            </div>
            <div className="pt-5 grid grid-cols-2 font-medium">
              <h1>Order total</h1>
              <h1>{sum + gst}</h1>
            </div>

            <button className="w-full h-10 bg-rose-500 rounded-xl text-xl mt-16  hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
