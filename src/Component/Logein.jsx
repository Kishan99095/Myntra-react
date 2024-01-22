import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

function Logein() {
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-rose-100 w-full flex justify-center  h-full">
      <div className="w-96 bg-white m-10 h-full">
        <img
          src="https://cdn.zoutons.com/images/originals/blog/1692703407920.jpg_1692703408.png "
          alt=""
        />

        <div className="ml-10 mr-10 mt-5 ">
          <h1 className="text-2xl font-medium mt-5">
            Logein <span className="text-sm">or</span> Signup
          </h1>
          <div className="mt-5">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Mobile No"
              buttonStyle={{ backgroundColor: "white" }}
              inputStyle={{ width: "320px" }}
            />
          </div>
          <h3 className=" mt-5 font-light text-xs">
            By cuntinuing. I agree to the{" "}
            <span className="font-normal text-rose-500">Terms of us </span>&
            <span> Privacy Policy</span>
          </h3>
          <div className="flex justify-center items-center">
            <button className="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 pl-32 pr-32">
              CONTINUE
            </button>
          </div>

          <h3 className=" mt-5 font-light text-xs">
            By cuntinuing. I agree to the{" "}
            <span className="font-normal text-rose-500">
              Have trouble logging in?
            </span>
            <span>Get help </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Logein;
