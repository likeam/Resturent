import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimeryButton = () => {
  return (
    <>
        <div className='flex items-center group'>
            <button className='bg-primary text-white h-[40px]'>Choose Your Meal Plan
                <FaArrowRight className='inline-block hover:translate-x-2 duration-200 text-base h-[40] bg-primaryDark text-white group' />
            </button>
        </div>
    </>
  )
}

export default PrimeryButton