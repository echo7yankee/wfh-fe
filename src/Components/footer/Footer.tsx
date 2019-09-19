import React from "react";

//style
import style from "./footer.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={`${style.footerContainer} set-center`}>
      <p>Copyright &copy; {year} Softvision</p>
      <p>All rights Reserved</p>
    </div>
  );
}

export default Footer;
