import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[1000px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Dear E-Mart Community,</span>{" "}<br></br>
         <h3></h3> 
<br></br>We're thrilled to have you back for another edition of E-Mart Journal, your go-to source for the latest updates, stories, and trends in the world of shopping and beyond. At E-Mart, we believe in more than just transactions; we're building a community of savvy shoppers, tech enthusiasts, and fashion aficionados. Let's dive into what's been happening lately!<br></br>
<br></br><b>Product Spotlight:</b> The Ultimate Smart Home Upgrade
Turn your living space into a smart haven with our latest collection of cutting-edge smart home devices. From energy-efficient lighting to security systems that give you peace of mind, discover how technology can seamlessly integrate into your daily life.<br></br>
<br></br><b>Customer Stories:</b> Your E-Mart Experience
We love hearing from our community! This week, we're sharing stories from customers like you who found their perfect match at E-Mart. Explore how E-Mart is not just a shopping destination but a part of your lifestyle. Have a story to share? Reach out to us, and you could be featured in the next edition!<br></br>
<br></br><b>Trend Watch:</b> Fall Fashion Finds
As the leaves change, so does fashion. Check out our trend report on the must-have styles for this fall. Whether you're into cozy sweaters, stylish boots, or accessories that make a statement, E-Mart is your fashion destination.<br></br>
<br></br><b>Tech Talk:</b> Navigating the World of 5G
The future is here, and it's fast! Learn about the exciting developments in 5G technology and how it's shaping the way we connect, stream, and stay in touch. Plus, explore our range of 5G-compatible devices for a faster, more efficient online experience.<br></br>
<br></br><b>Eco-Friendly Choices:</b> Making a Difference Together
Join us in our commitment to sustainability. Discover our eco-friendly product lineup and learn how each purchase at E-Mart contributes to a greener future. Small choices, big impact!<br></br>
Stay tuned for more updates, product launches, and community spotlights in the next edition of E-Mart Journal. As always, thank you for being a part of the E-Mart family.
<br></br><br></br><b><h2>Happy shopping!</h2></b><br></br>

        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
