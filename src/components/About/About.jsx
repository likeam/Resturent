import React from "react";
import BgPolygon from "../../assets/polygon.png";
import { FaUser } from "react-icons/fa";
import vector from "../../assets/vector-wave.png"
const bgStyle = {
  backgroundImage: `url( ${BgPolygon} )`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({HandlePopup}) => {
  return (
    <>
      <div style={bgStyle} className=" py-14">
        <div className=" cotaine min-h-[500px] relative z-10">
          <div>
            <h1 
              data-aos="fade"
              data-aos-delay="300"
              className="pt-20 text-4xl font-semibold text-center text-white racking-wider ">
              About US
            </h1>
            <div 
              data-aos="fade"
              data-aos-delay="300"
              className="p-10 m-10 bg-white/80">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo,
                eum ab ea inventore voluptatum at dignissimos repellat placeat
                quaerat veniam fugit? Quasi quidem, saepe tenetur quam nihil
                velit nobis eum ad hic odio mollitia itaque consectetur eaque
                unde cumque possimus reprehenderit quas beatae praesentium
                consequatur? Eum magni doloremque obcaecati necessitatibus
                soluta doloribus quos temporibus aperiam, at harum earum,
                commodi, eligendi omnis fugiat error exercitationem ullam labore
                culpa aliquam possimus pariatur? Atque repudiandae beatae animi
                ducimus voluptate minima temporibus neque libero dolore ipsam,
                accusamus omnis ullam id aspernatur, quas fuga esse
              </p>
              <div className="flex justify-center pt-10 ">
                <button 
                  onClick={HandlePopup}
                  className="flex items-center justify-center gap-2 px-5 py-2 text-xl text-white h-[40px] bg-primary  hover:scale-105 duration-300">
                  <FaUser />
                  My Account
                </button>
              </div>
            </div>
          </div>
        </div>
            <div>
                <img src={vector} alt="vestor"  className="absolute top-0 right-0 w-full "/>
            </div>
      </div>
    </>
  );
};

export default About;
