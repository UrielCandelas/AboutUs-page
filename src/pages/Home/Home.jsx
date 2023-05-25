import React from "react";
import { Link } from "react-router-dom";
import AboutUsPage from "../AboutUs/AboutUsPage";
import ContactUsPage from "../ContactUs/ContactUsPage";

function Home() {
  return (
    <>
      <div>
        <Link to="/about">Acerca de nosotros</Link>
      </div>
      <div>
        <Link to="/contact">Contactanos</Link>
      </div>
    </>
  );
}

export default Home;
