import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[1000px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Welcome to E-Mart,</span>{" "}
           where shopping meets innovation, and convenience meets style. Our journey began with a simple idea – to create an online shopping experience that not only meets the needs of our customers but exceeds their expectations.
Our Story
Founded in 20015, E-Mart has evolved from a small startup to a thriving e-commerce platform. Our founders, passionate about technology and design, envisioned a place where customers could discover the latest trends, access cutting-edge products, and embrace a seamless shopping experience from the comfort of their homes.
What Sets Us Apart
At E-Mart, we're not just an online store; we're a community. We understand that shopping is not just about products; it's about the experience. That's why we curate our collections with care, ensuring that each item reflects our commitment to quality, innovation, and style.<br></br>
<br></br><b>Our Mission</b>
<br></br>Our mission is simple: to empower our customers to embrace a lifestyle of convenience and sophistication. Whether you're a tech enthusiast, a fashion-forward trendsetter, or someone looking for everyday essentials, E-Mart is your one-stop destination for curated products that enhance your life.<br></br>
<br></br><b>The E-Mart Promise</b>
<br></br>•	<b>Quality Assurance:</b> We believe in offering products that meet the highest standards of quality and craftsmanship.
<br></br>•	<b>Innovation:</b> Stay ahead of the curve with our constantly evolving selection of cutting-edge products and the latest trends.
<br></br>•	<b>Customer Satisfaction:</b> Your satisfaction is our priority. Our dedicated customer support team is here to assist you at every step.
<br></br>•	<b>Community Engagement:</b> E-Mart is more than a store; it's a community. Join us on social media, share your stories, and be part of the E-Mart family.<br></br>
<br></br>Join Us on the Journey<br></br>


        </h1>
        <Link to="/shop">
        <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300" style={{ marginTop: '10px' }}>
          Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
