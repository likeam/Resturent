import { useEffect, useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChoose from "./components/WhyChoose/WhyChose";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
}, []);

  return (
    <div className="overflow-x-hidden ">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}
