import React from "react";
import HomeEstateItem from "./HomeEstateItem";

export default function HomeEstate() {
  return (
    <div className="max-w-6xl mx-auto px-3 pt-16">
      <HomeEstateItem img="/assets/e1.png" />
      <HomeEstateItem isTrue img="/assets/e2.png" />
      <HomeEstateItem img="/assets/e3.png" />
    </div>
  );
}
