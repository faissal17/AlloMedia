import videoBack from "../../assets/background.mp4";
import { Backgrounds } from "../Backgrounds";
import { Shadow } from "../shadow";
import { FaMapMarkerAlt } from "react-icons/fa";
import CustomInput from "../common/Input";
import React, { useState, useEffect, useRef, } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import images from '../../assets/cafe.jpg'
import "./homeCss.scss"
const Overview = () => {
  const categorySliderRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerWidth = () => {
    const containerRect = categorySliderRef.current.getBoundingClientRect();
    return containerRect.width / 4;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollLeft(categorySliderRef.current.scrollLeft);
    };

    categorySliderRef.current.addEventListener('scroll', handleScroll);

    return () => {
      categorySliderRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [scrollLeft]);

  const handleNextClick = () => {
    console.log(scrollLeft)
    setScrollLeft((prevScrollLeft) => {
      const newScrollLeft = prevScrollLeft + containerWidth();
      if (newScrollLeft >= 600) {
        return 0;
      }
      return newScrollLeft;
    });
  };

  const handlePrevClick = () => {
    setScrollLeft((prevScrollLeft) => prevScrollLeft - containerWidth());
  };
  return (
    <div className=" w-full h-[55vh] lg:h-[75vh] relative bg-red-600">
      <Backgrounds src={videoBack} className={"w-full h-full"} />
      <Shadow className={` bg-gray-500 opacity-40`} />
      <div
        className=" absolute flex flex-col gap-7 top-[30%]
          z-40 left-32"
      >
        <p className=" flex text-primary items-center gap-2 text-lg font-bold">
          <span>
            <FaMapMarkerAlt />
          </span>
          <span>Morroco</span>
        </p>
        <h3 className=" text-2xl lg:text-6xl font-semibold w-full lg:w-[60%] text-gray-800">
          Discover restaurants that deliver near you.
        </h3>
        <div className=" mt-5 relative">
          <CustomInput
            icon={<FaMapMarkerAlt className=" scale-125 text-primary" />}
            type="text"
            name="search"
            id="search"
            localisation={true}
            placeholder="Enter your delivery address"
            onChange={() => {}}
            className="
                     rounded-md lg:rounded-2xl
                   py-[20px] lg:py-[10px] lg:py-[25px]  
                  focus:border-bg-gray-300 text-md lg:text-lg focus:border m-0"
            submit={false}
          />
        </div>
      </div>
      <div className="category__slider-product-home h-[100px] sm:h-[100px] 
         md:h-[150px] lg:h-[160]  mx-1 md:mx-10 lg:mx-11 my-1 bg-color-red-button 
         relative shadow-md">
        <div 
              className="content__categories" 
              ref={categorySliderRef} 
              style={{ scrollLeft:scrollLeft }}
            >
            <div className="category-home" 
            ref={categorySliderRef} 
            style={{  overflowX:'scroll',scrollLeft:scrollLeft }}>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
              <Link to="">
                  <div style={{overflow:'hidden'}}
                  className="box-category mx-2 md:mx-3 sm:min-w-[80px] 
                  sm:h-[80px] md:min-w-[120px] md:h-[120px] 
                  lg:min-w-[140px] lg:h-[140px]">
                      <img  className=" w-full h-full" src={images} alt='' />
                  </div>
              </Link>
            </div>
        </div>
        
      </div>

    </div>
  );
};

export default Overview;
