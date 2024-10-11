import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from "../Common/Navbar";
import Slider from "./Slider";
import BestSellers from "../Common/BestSellers";
import BSellers from '../JSON/BestSellers.json'; // Example JSON data structure
import NArrivals from '../JSON/NewArrivals.json'; // Example JSON data structure
import HomeImage from "./HomeImage";
import Footer from "../Common/Footer";

// Import all images from the media folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const bestSellersWithImages = BSellers.map(item => ({
      ...item,
      pic: images[item.pic],
    }));

    const newArrivalsWithImages = BSellers.map(item => ({
      ...item,
      pic: images[item.pic],
    }));

    setBestSellers(bestSellersWithImages);
    setNewArrivals(newArrivalsWithImages);
  }, []);

  const bestSellerCartStyle = {
    width: '20vw',
    height: '60vh'
  };

  const newArrivalsCartStyle = {
    width: '26vw',
    height: '70vh'
  };


  return (
    <div className="Home">
      <Navbar />
      <Slider />
      <BestSellers imgs={newArrivals} perPage={3} head="NEW ARRIVALS" className="new-arrivals-cart" style={newArrivalsCartStyle} />
      <HomeImage />
      <BestSellers imgs={bestSellers} perPage={4} head="EXPLORE BEST SELLERS" className="best-sellers-cart" style={bestSellerCartStyle} />
      <Footer />
    </div>
  );
};

export default Home;
