import React from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon, faAngleDown } from "../assets/fontawsome";

import logos from "../assets/svg.js";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="countryNlang">
        <button className="country">
          <FontAwesomeIcon icon={faAngleDown} />
          كندا
          <img src={logos.CA} alt="canadian-logo" className="flag" />
        </button>

        <button className="language">
          <FontAwesomeIcon icon={faAngleDown} />
          <p className="lang"> عربى</p>
        </button>
      </div>
      <div className="loginstuff">
        <button className="sign-up">التسجيل</button>
        <button className="sign-in">تسجيل الدخول</button>
      </div>
    </div>
  );
}

export default Navbar;
