import React from "react";
import "../styles/Footer.css";
import logos from "../assets/svg.js";
import footerlogo from "../assets/logofooter.png";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer-column">
  <div className="first-column">
    
        <img src={footerlogo} className="footer-logo" alt="Website Logo" />
          <img src={logos.android} className="android-logo"  alt="Android Download Button" />
          <img src={logos.apple} className="apple-logo" alt="Apple Download Button" />
          <button className="back-to-top" onClick={handleBackToTop}>
            <img src={logos.backtotop} alt="Back to Top" />
          </button>
        
      </div>
      </div>

      <div className="footer-column">
        {/* نبذة عنا */}
        <h4 className="heading">نبذة عنا</h4>
        <ul className="list-items">
          <li>من نحن</li>
          <li>رؤيتنا</li>
        </ul>
      </div>

      <div className="footer-column">
        {/* تو سوق */}
        <h4 className="heading">تو سوق</h4>
        <ul className="list-items">
          <li>شروط الاستخدام</li>
          <li>سياسة الخصوصية</li>
          <li>تحميل التطبيق</li>
        </ul>
      </div>

      <div className="footer-column">
        {/* الدول */}
        <h4 className="heading">الدول</h4>
        <ul className="list-items">
          <li>كندا</li>
          <li>اليمن</li>
        </ul>
      </div>

      <div className="footer-column">
        {/* تواصل معنا */}
        <h4 className="heading">تواصل معنا</h4>
        <ul className="list-items">
          <li>المساعدة</li>
          <li>الإتصال</li>
        </ul>
      </div>

      <div className="footer-column">
        {/* Social Media Logos */}
        <div className="social-icons">
        <img src={logos.fb} alt="Facebook Logo" />
        <img src={logos.insta} alt="Instagram Logo" />
        <img src={logos.tiktok} alt="TikTok Logo" />
        <img src={logos.yt} alt="YouTube Logo" />
        </div>
      </div>
      {/* <div></div> */}
    </footer>
  );
};

export default Footer;
