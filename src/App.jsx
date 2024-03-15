
import { useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChoose from "./components/WhyChoose/WhyChose";
import Popup from "./components/Popup/Popup";

export default function App() {

  const [showPopup, setShowPopup] = useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  }

  return (
    <div className="overflow-x-hidden ">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose /> 
      <About />
      <Banner />
      <Footer />
      <Popup showPopup = {showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}