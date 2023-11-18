import videoBack from '../../assets/background.mp4'
import { Backgrounds } from "../Backgrounds"
import { Shadow } from "../shadow"
import { FaMapMarkerAlt } from "react-icons/fa";
import CustomInput from "../common/Input";
const Overview = () => {
  return (
    <div className=" w-full h-[85vh] relative bg-red-600">
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
          <h3 className=" text-6xl font-semibold w-[60%] text-gray-800">
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
                    rounded-2xl
                  py-[10px] lg:py-[25px]  
                  focus:border-bg-gray-300 text-lg focus:border m-0 w-[500px]'
              submit={false}
            />
            
          </div>
        </div>
    </div>
  )
}

export default Overview