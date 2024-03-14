import React from "react";
import { FaBus } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <>
      <div className=" py-14 md:py-28 bg-gray-50">
        <div className="container ">
          <h1 className="py-8 text-2xl font-semibold tracking-wider text-center text-dark">
            {" "}
            Why Choose Us
          </h1>
          <div className="flex flex-row p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark">
                <p className="font-bold text-dark/70 min-w-40">
                  Lorem ipsum dolor sit amet ipsum dolor sit amet
                </p>
                <p className="text-5xl rotate-90 translate-x-5 text-primary">
                  ....
                </p>
                <FaBus className="text-5xl text-secondary" />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark">
                  <FaBus className="text-5xl text-primary" />
                  <p className="text-5xl rotate-90 translate-x-5 text-primary">
                    ....
                  </p>
                  <p className="font-bold text-dark/70 min-w-40">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark">
                <p className="font-bold text-dark/70 min-w-40"  >
                  Lorem ipsum dolor sit amet ipsum dolor sit amet
                </p>
                <p className="text-5xl rotate-90 translate-x-5 text-primary">
                  ....
                </p>
                <FaBus className="text-5xl text-secondary" />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
                <div className="flex flex-col items-center justify-center gap-2 px-2 text-center text-dark">
                  <FaBus className="text-5xl text-primary" />
                  <p className="text-5xl rotate-90 translate-x-5 text-primary">
                    ....
                  </p>
                  <p className="font-bold text-dark/70 min-w-40">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
