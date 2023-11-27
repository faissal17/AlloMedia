import Item from './Item'
import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import  {useGetItemQuery} from '../../redux/service/items/itemApi'
const Items = () => {
  const { data, error, isLoading } = useGetItemQuery();
  return (
    <div className=' mt-3 flex  flex-wrap w-[100%] md:w-[95%] px-[0px]  md:px-[0px] lg:px-[50px]  xl:px-[150px] lg:w-[95%] mx-auto'>
        {isLoading && (
              <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
        )}
        {
          data && 
            data.content.map((item,index)=>(
              <Item 
                key={index}
                data={item}
                className= 'w-[95%] mx-auto sm:w-[49%] md:w-[32.33%] lg:w-[24%] my-[8px] sm:mx-[0.5%] h-[350px]' 
              />
              
            ))
        }
    </div>
  )
}

export default Items