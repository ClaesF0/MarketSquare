import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-2xl text-red-500"> 404 not found</p>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2  border-blue-500 " : ""
          }
        >
          {" "}
          <br></br>
          <p className="text-xl font-bold text-gray-800 cursor-pointer">
            GO TO HOMEPAGE
          </p>
        </NavLink>
      </div>
      <img
        className="w-1/3"
        src="https://i.chzbgr.com/full/9736082688/hD8D338C2/cat-all-need-sign-like-this-at-times-am-being-crabby-please-come-back-later"
      />
    </>
  );
};

export default PageNotFound;
