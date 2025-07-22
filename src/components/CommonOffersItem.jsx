import React from "react";

const CommonOffersItem = ({ offer, icons }) => (
  <div className="arajin2">
    <img className="nr" src={offer.image} alt={offer.location} />
    <img src={icons.location} className="location" alt="location" />
    <span className="Bjni">{offer.location}</span>
    <img src={icons.users} className="users" alt="users" />
    <span className="qanak">{offer.people}</span>
    {offer.hasGazar && (
      <img src={icons.gazaraguyn} className="gazar" alt="gazaraguyn" />
    )}
    <img src={icons.pitak} className="pitak" alt="pitak" />
    <span className="gin">{offer.price}</span>
  </div>
);

export default CommonOffersItem;
