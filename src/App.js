import React from "react";
import Header from "./components/header";
import './App.css';
import ParentDiv from "./components/parentDiv";
import MapCal from "./components/mapCal"
import HouseTypes from "./components/HouseTypes"
import BestOffer from "./components/BestOffer"
import CommonOffers from "./components/CommonOffers"
import Pagination from "./components/Pagination";
import Footer from "./components/footer"
import LastPart from "./components/lastPart"

import { pages } from "./data/pages";

function App() {
  return (
    <div className="body">
      <Header />
      <ParentDiv />
       <MapCal /> 
      <HouseTypes />
      <BestOffer />
      <CommonOffers />
      {/* <Pagination pages={pages} /> */}
      {/* <Footer/> */}
      {/* <LastPart/>  */}

    </div>
  );
}

export default App;
