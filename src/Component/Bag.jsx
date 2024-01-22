import React from "react";
import { useSelector } from "react-redux";

function Bag() {
  const products = useSelector((state) => state.cart);
  console.log(products);
  const cart = products.cart.map((product) => (
    <div className="flex mt-10">
        <div className="">
          <img className="w-[130px]" src={product.images[0]} alt="" />
        </div>
        <div className="ml-8">
          <h1 className="text-lg font-medium" >{product.title}</h1>
         
          <h1 className="text-3xl pt-8 font-bold" >INR: {product.price}</h1>
          <p className="text text-green-500" >in stoke</p>
          
        </div>
      </div>
  ));

  return (
    <>
     <div className="p-10 m-10 border-2 border-inherit border-solid rounded-lg">
      <h1 className="text font-bold pb-5 text-4xl text-wrap">Shopping Bag</h1>
      <div>
        <div>{cart}</div>
      </div>
      
    </div>
      <div></div>
    </>
  );
}

export default Bag;
