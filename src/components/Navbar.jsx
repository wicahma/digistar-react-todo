import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <span>Digistar</span> Todo
      </h1>
      <button className="btn-setting">
        <Cog6ToothIcon/>
      </button>
    </div>
  );
};

export default Navbar;
