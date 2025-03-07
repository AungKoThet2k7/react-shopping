import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentpageTitle }) => {
  return (
    <div className="w-full flex gap-3 mb-5">
      <Link to={"/"} className="text-gray-400" >Home</Link>
      <span>/</span>
      <p>{currentpageTitle}</p>
    </div>
  );
};

export default Breadcrumb;
