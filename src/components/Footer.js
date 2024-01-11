import React,  { useState, useEffect } from "react";
import "../styles/Footer.css";
import logos from "../assets/svg.js";
import footerlogo from "../assets/logofooter.png";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = (index) => {
    const updatedMenus = [...openMenus];
    updatedMenus[index] = !updatedMenus[index];
    setOpenMenus(updatedMenus);
  };


  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };


  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="footer-column">
  <div className="first-column">
    
       
       <img src={footerlogo} className="footer-logo" alt="Website Logo" />
      <div className="mobile-logos">

          <img src={logos.android} className="android-logo"  alt="Android Download Button" />
          <img src={logos.apple} className="apple-logo" alt="Apple Download Button" />
      </div>
          <button className="back-to-top" onClick={handleBackToTop}>
            <img src={logos.backtotop} alt="Back to Top" />
          </button>
        
      </div>
      </div>

      {[
        { title: "نبذة عنا", items: ["من نحن", "رؤيتنا"] },
        { title: "تو سوق", items: ["شروط الاستخدام", "سياسة الخصوصية", "تحميل التطبيق"] },
        { title: "الدول", items: ["كندا", "اليمن"] },
        { title: "تواصل معنا", items: ["المساعدة", "الإتصال"] },
      ].map((menu, index) => (
        <div key={index} className={`footer-column ${isMobile ? "mobile-menu" : ""}`}>
          <h4 className="heading-f" onClick={isMobile ? () => toggleMenu(index) : undefined}>
            {menu.title}
          </h4>
          <ul className={`list-items ${openMenus[index] ? "open" : ""}`}>
            {menu.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer-column">
        {/* Social Media Logos */}
        <div className="social-icons">
        <img src={logos.fb} alt="Facebook Logo" />
        <img src={logos.insta} alt="Instagram Logo" />
        <img src={logos.tiktok} alt="TikTok Logo" />
        <img src={logos.yt} alt="YouTube Logo" />
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
