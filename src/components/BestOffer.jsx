import React from "react";
import { bestOffers } from "../data/offer";
import { icons } from "../data/icons";
import BestOfferItem from "./BestOfferItem";

const BestOffer = () => (
  <>
    <p className="offer">Best offers</p>
    <div className="nkdiv">
      {bestOffers.map((offer) => (
        <BestOfferItem key={offer.id} offer={offer} icons={icons} />
      ))}
    </div>
  </>
);

export default BestOffer;
