import React from "react";
import "../styles/NavbarII.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon, faAngleDown, faMagnifyingGlass } from "../assets/fontawsome";

function NavbarII() {
  return (
    <div className="NavbarII">
      <div className="logo-container"> 
        <img className="logo" alt='twosouq-logo' src={logo} />
      </div>
      <div className="content-container">
        
      <div className="first-row">
        <p style={{ color: "#D9904E" }}>الرئيسية</p>
        <p>
          مركبات و سيارات <FontAwesomeIcon icon={faAngleDown} />
        </p>
        <p>
          {" "}
          عقارات <FontAwesomeIcon icon={faAngleDown} />{" "}
        </p>
        <p>
          {" "}
          موبايلات و تابلت <FontAwesomeIcon icon={faAngleDown} />
        </p>
        <p>
          {" "}
          إلكترونيات <FontAwesomeIcon icon={faAngleDown} />
        </p>
        <p>المزيد من الفئات</p>
      </div>
      <div className="second-row">
        <input
          className="search-field"
          type="text"
          placeholder="البحث عن السيارات، المنازل، الهواتف و أكثر..."
        />
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className="add-button">إضافة إعلان</button>
      </div>
    </div>
    </div>
  );
}

export default NavbarII;
