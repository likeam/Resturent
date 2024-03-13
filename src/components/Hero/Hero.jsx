import React from 'react'
import HeroImg from "../../assets/hero.png"
import PrimeryButton from '../Shared/PrimeryButton'
import HeroBg from "../../assets/heroBg.png";

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
};

const Hero = () => {
  return (
    <>
        <div style={BgStyle} className='relative z-[-1]'>
            <div className='container py-16 sm:py-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                    <div className='order-2 text-dark space-y-7 sm:order-1'>
                        <h1 className='text-5xl'>Fresh & Healthy Meal Plan {" "} <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Gujranwala</h1>
                        <p className='lg:pr-64'> Delicious Meals Delivered to Your Door From Rs 15000 per week</p>
                        <div>
                            <PrimeryButton />
                        </div>
                    </div>
                    <div className='order-1 sm:order-2'>
                        <img src={HeroImg} className='w-full sm:scale-125 sm:-translate-y-16' />
                    </div>
                </div>                
            </div>
        </div>
    </>
  )
}

export default Hero