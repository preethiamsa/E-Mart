import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Offer = () => {
  const [prevLocation] = useState("");

  return (
<div className="max-w-container mx-auto">
  <Breadcrumbs title="Offer" prevLocation={prevLocation} />
  <div className="pb-10 bg-pink-100"> {/* Update the background color to a light pink shade */}
    <SpecialOffers />
  </div>
</div>

  );
};

export default Offer;
