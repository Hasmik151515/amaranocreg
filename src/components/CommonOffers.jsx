import React from "react";
import { commonOffers } from "../data/offer";
import { icons } from "../data/icons";
import BestOfferItem from "./BestOfferItem";

const CommonOffers = () => (
  <>
    <p className="comm">Common offers</p>
    <div className="nk2div">
      {commonOffers.map((offer) => (
        <BestOfferItem key={offer.id} offer={offer} icons={icons} />
      ))}
    </div>
  </>
);

export default CommonOffers;
