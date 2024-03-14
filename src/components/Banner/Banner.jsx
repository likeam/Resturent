import React from 'react'
import Apple from "../../assets/png/apple.png"
import kiwi from "../../assets/png/kiwi.png"
import lemon from "../../assets/png/lemon.png"
import leaf from "../../assets/png/leaf.png"
import tomato from "../../assets/png/tomato.png"
import PrimeryButton from '../Shared/PrimeryButton'


const Banner = () => {
  return (
    <>
        <div className='container relative'> 
            <div className='py-8 text-2xl tracking-wider text-center font-smibold text-dark '>
                <h1 c className='py-8 text-2xl font-semibold tracking-wider text-center text-dark'>
                    Taste the Healthy Difference
                </h1>
                <div className='space-y-10'>
                    <div className='grid grid-cols-1 gap-4 py-10 text-base sm:grid-cols-2'>
                        <div>
                            <p>
                                {" "}
                                We Know that <span className='text-primary'>time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Gujranwala is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
                            </p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 py-10 text-base sm:grid-cols-2'>
                        <div>
                        </div>
                        <div>
                            <p>
                                {" "}
                                We Know that <span className='text-primary'>time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Gujranwala is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.
                            </p>
                        </div>                        
                    </div>
                </div>
                <div className='flex justify-center mt-10 sm:mt-14'>
                    <PrimeryButton />
                </div>
            </div>
            <div className='absolute opacity-50 sm:opacity-100 top-5 left-16 sm:bottom-0 sm:left-0'>
                <img src={leaf} alt="leaf" className='max-w-[160px]' />
            </div>
            <div className='absolute opacity-50 bottom-16 left-16 sm:bottom-0 sm:left-0 sm:opacity-100'>
                <img src={tomato} alt='tomato' className='max-w-[280px]' />
            </div>
            <div className='absolute opacity-50 top-10 right-16 sm:right-20 sm:opacity-100'>
                <img src={lemon} alt='lemon' className='max-w-[200px]' />
            </div>
            <div className='absolute bottom-0 right-0 hidden sm:block'>
                <img src={Apple} alt='apple' className='max-w-[200px]' />
            </div>
            <div className='absolute -translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2 left-1/3 sm:opacity-100'>
                <img src={kiwi} alt='kiwi' className='max-w-[180px]' />
            </div>
        </div>
    </>
  )
}

export default Banner