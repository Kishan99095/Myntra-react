import React from "react";
import { useEffect ,useState} from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

function Navbar() {

const [manu, setmanu]=useState(true)
  

  return (
    <>
      <div className="hidden w-full h-14 shadow-md items-center relative sm:flex "> 
        <div className="flex gap-3 font-bold text-[15px]  items-center  ">
       
            <Link to="/"><img className="h-5 w-8 mx-5 " src="img/myntra.svg" alt=""/></Link>
          
         

          <Link to="/product" state={{category:"Clothes"}}><h1 className=" ">Clothes</h1></Link>
          <Link to="/product" state={{category:"Electronics"}}><h1>Electronics</h1></Link>
          <Link to="/product" state={{category:"Shoes"}}><h1>Shoes</h1></Link>
          <Link to="/product" state={{category:"Furniture"}}><h1>Furniture</h1></Link>
          <Link to="/product" state={{category:"Miscellaneous"}}><h1>Miscellaneous</h1></Link>
          
          
          
        </div>

        {/* <div className="flex gap-2 items-center bg-gray-100 rounded-sm ml-8 h-6  border-solid border-current hover:bg-gray-50  focus:bg-white">
          <img className="w-3 h-3  ml-1" src="img/search.svg" alt="" />
          <input
            type="text "
            className="  placeholde:text-xs font-light    bg-gray-100 focus:outline-none  hover:bg-gray-50 focus:bg-white"
            placeholder="Search for products, brands and more"
          />
        </div> */}
        <div className="flex items-center ml-5 gap-x-10 absolute right-8 ">
         
         
          <Link to="/signup">
          <div className="flex-col justify-center ">
            <img className="w-5 h-5 ml-2  " src="img/wishlist.svg" alt="" />
            <span>Log In</span>
          </div></Link>
          
          <Link to="/bag">
          <div className="flex-col justify-center">
            <img className="w-5 h-5  " src="img/bag.svg" alt="" />
            <span>Bag</span>
          </div>
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="  flex justify-between shadow-md p-4 ">
          <div className="" onClick={()=>{setmanu(!manu)}}><img className="w-9" src="img/hm.svg" alt="" /></div>
          
        <Link to="/"><img className="w-12  " src="img/myntra.svg" alt=""/></Link>
        <Link to="/bag"><img className="w-8 " src="img/bag.svg" alt="" /></Link> 

           
        </div  >
        <div className={manu ? "hidden" :""}>
        <div className="bg bg-rose-50 text-xl w-[50%]  rounded-lg ">
        <Link to="/product" state={{category:"Clothes"}}><h1 className="text text-center py-3">Clothes</h1></Link>
          <Link to="/product" state={{category:"Electronics"}}><h1  className="text text-center py-3">Electronics</h1></Link>
          <Link to="/product" state={{category:"Shoes"}}><h1 className="text text-center py-3">Shoes</h1></Link>
          <Link to="/product" state={{category:"Furniture"}}><h1 className="text text-center py-3">Furniture</h1></Link>
          <Link to="/product" state={{category:"Miscellaneous"}}><h1 className="text text-center py-3">Miscellaneous</h1></Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
