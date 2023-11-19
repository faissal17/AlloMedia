import videoBack from '../../assets/background.mp4'
import { Backgrounds } from "../Backgrounds"
import { Shadow } from "../shadow"
import { FaMapMarkerAlt } from "react-icons/fa";
import CustomInput from "../common/Input";
import React, { useState, useEffect } from 'react';
const Overview = () => {
  const products = ['product1', 'product2', 'product3', 'product4', 'product5','produxt 6']; // Add your product data here
  const [position, setPosition] = useState(0);

  const handlePrevClick = () => {
    setPosition((prevPosition) => (prevPosition - 1 + products.length) % products.length);
  };

  const handleNextClick = () => {
    setPosition((prevPosition) => {
      const newPosition = (prevPosition + 1) % products.length;
      return newPosition === 0 ? 0 : newPosition;
    });
  };
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     // Update the position to the next index (circular)
  //     setPosition((prevPosition) => (prevPosition + 1) % products.length);
  //   }, timeoutDuration);

  //   return () => {
  //     // Clear the timeout when the component unmounts
  //     clearTimeout(timeoutId);
  //   };
  // }, [position]); // Re-run the effect when the position changes
  return (
    <div className=" w-full h-[55vh] lg:h-[85vh] relative bg-red-600">
        <Backgrounds 
            src={videoBack} 
            className={'w-full h-full'} 
        />
        <Shadow className={` bg-gray-500 opacity-40`}/>
        <div className=" absolute flex flex-col gap-7 top-[30%]
          z-40 left-32"
        >
          <p className=" flex text-primary items-center gap-2 text-lg font-bold">
            <span><FaMapMarkerAlt/></span>
            <span>Morroco</span>
          </p>
          <h3 className=" text-2xl lg:text-6xl font-semibold w-full lg:w-[60%] text-gray-800">
            Discover restaurants that deliver near you.
          </h3>
          <div className=' mt-5 relative'>
            <CustomInput
              icon={<FaMapMarkerAlt className=" scale-125 text-primary" />}
              type='text'
              name='search'
              id='search'
              localisation={true}
              placeholder='Enter your delivery address'
              onChange={()=>{}}
              className='
                     rounded-md lg:rounded-2xl
                   py-[20px] lg:py-[10px] lg:py-[25px]  
                  focus:border-bg-gray-300 text-md lg:text-lg focus:border m-0'
              submit={false}
            />
            
          </div>
        </div>
        <div className=' relative lg:absolute bg-white z-50 rounded-lg shadow-lg
         sm:h-40 lg:h-56 xl:h-64     
          lg:bottom-[-112px]  xl:bottom-[-128px] 
              lg:w-[80%] xl:w-[50%]
         right-0
        lg:right-20 p-4'>
          dfdfdfdfdfdf
        </div>
    </div>
  )
}

export default Overview