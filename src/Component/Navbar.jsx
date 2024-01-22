import React from "react";
import { useEffect } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

function Navbar() {

  

  return (
    <>
      <div className="flex w-full h-14 shadow-md items-center ">
        <div className="flex gap-5 font-bold text-xs  items-center  ">
          <div>
          <img className="h-5 w-8 ml-5 " src="img/myntra.svg" alt=""/>
          </div>

          <Link to="/product" state={{category:"Clothes"}}><h1>Clothes</h1></Link>
          <Link to="/product" state={{category:"Electronics"}}><h1>Electronics</h1></Link>
          <Link to="/product" state={{category:"Shoes"}}><h1>Shoes</h1></Link>
          <Link to="/product" state={{category:"Furniture"}}><h1>Furniture</h1></Link>
          <Link to="/product" state={{category:"Miscellaneous"}}><h1>Miscellaneous</h1></Link>
          
          
          
        </div>

        <div className="flex gap-2 items-center bg-gray-100 rounded-sm ml-12 h-6 w-72 border-solid border-current hover:bg-gray-50  focus:bg-white">
          <img className="w-3 h-3  ml-1" src="img/search.svg" alt="" />
          <input
            type="text "
            className="  placeholde:text-xs font-light   w-72   bg-gray-100 focus:outline-none  hover:bg-gray-50 focus:bg-white"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="flex items-center ml-5 gap-x-5 ">
          <div className="flex-col  ">
            <img className="w-5 h-5 ml-1 " src="img/profile.svg" alt="" />
            <p>Profile</p>
          </div>
          <div className="flex-col justify-center ">
            <img className="w-5 h-5 ml-2  " src="img/wishlist.svg" alt="" />
            <span>Wishlist</span>
          </div>
          <Link to="/bag">
          <div className="flex-col justify-center">
            <img className="w-5 h-5  " src="img/bag.svg" alt="" />
            <span>Bag</span>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
