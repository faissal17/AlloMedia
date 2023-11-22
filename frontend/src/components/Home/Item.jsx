import React from 'react'
import itemImg from '../../assets/pizza.jpg'
import { FaStar } from "react-icons/fa6";
import { ButtonDefault } from '../common/Buttons';
import { FaCartShopping } from "react-icons/fa6";
const Item = ({className}) => {
  return (
    <div className={` rounded-md overflow-hidden bg-red-500 relative shadow-md ${className} `}>
        <img alt='' src={itemImg} className=' absolute top-0 left-0 w-full h-[80%]' />
        <span className=' absolute flex items-center justify-between left-0 bottom-0 h-[20%] bg-white w-full p-3'>
            <div className=' flex flex-col gap-1'>
                <h3 className=' font-bold'>Name of Product</h3>
                <ul className=' flex gap-1 items-center'>
                    <li><FaStar className=' text-lg text-yellow-300' /></li>
                    <li><FaStar className=' text-lg text-yellow-300 ' /></li>
                    <li><FaStar className=' text-lg text-yellow-300' /></li>
                    <li><FaStar className=' text-lg text-gray-300' /></li>
                    <li><FaStar className=' text-lg text-gray-300' /></li>
                </ul>
            </div>
            <div className=' flex gap-2'>
                <ButtonDefault className=' flex w-[45px] justify-center px-2  items-center'>
                    <FaCartShopping className='  w-20   text-lg font-bold ' />
                </ButtonDefault>
                <ButtonDefault className=' flex w-[45px] justify-center px-2  items-center'>
                    <FaCartShopping className='  w-20   text-lg font-bold ' />
                </ButtonDefault>
            </div>
        </span>
    </div>
  )
}

export default Item