import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} Yashwanth V. All rights reserved.<br/>Built with React ⚛️ • Styled with Love 🎨 • Fueled by Passion 🚀
</p>
    </footer>
  );
};

export default Footer;
