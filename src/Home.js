import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          classname="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1111"
            title="cow doll"
            price={20.2}
            image="https://m.media-amazon.com/images/I/41fQIoAfLTL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="2222"
            title="Piggy doll"
            price={7.09}
            image="https://m.media-amazon.com/images/I/61l5eHbiEWL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="3333"
            title="Mac book pro"
            price={1300.99}
            image="https://m.media-amazon.com/images/I/71luKYldpwL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4444"
            title="HP Gaming 15"
            price={1000.99}
            image="https://m.media-amazon.com/images/I/81O-aNqkwyL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="5555"
            title="HP Envy13"
            price={800.99}
            image="https://m.media-amazon.com/images/I/61DosYeGFgL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="6666"
            title="AJ Zoom 92"
            price={150.99}
            image="https://m.media-amazon.com/images/I/61Ryzkq26lL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
