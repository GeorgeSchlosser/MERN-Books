import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer navbar-fixed-bottom has-background-cyan text-center heading-subtitle">
      {/* <p className="footer-copyright">Copyright &copy; 2019 | Made with <i className="fas fa-heart" aria-hidden="true" style={{ color: "#668B8B" }}></i> by <a href="https://github.com/ChereeNielson" target="_blank" rel="noreferrer noopener" id="#">Cheree Nielson</a></p> */}
      <a href="https://github.com/GeorgeSchlosser/MERN-Books" target="_blank" rel="noopener noreferrer" className="link" alt="MERN-books-github-link"><i className="fa fa-github fa-2x"></i></a>
    </footer>
  );
};

export default Footer;