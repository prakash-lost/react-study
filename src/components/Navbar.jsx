import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
        <div>
          <h1>my website</h1>
          {/* <img src="./prime.jpg"/> */}
        </div>

        <div className="flex gap-4">
          <Link to={"about-us"}>
            <div>about us</div>
          </Link>
          <Link to={"/"}>
            <div>home</div>
          </Link>
          <Link to={"myskill-us"}>
            <div>skills</div>
          </Link>
          <Link to={'register'}><div>register</div></Link>
          <Link to={'deal'}><div>deal</div></Link>
          <Link to={'signin'}><div> Sign in </div></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
