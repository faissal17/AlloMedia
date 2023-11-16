import videoBackgroundHome from "../../assets/backgroundHome.mp4"
import { Backgrounds } from "../Backgrounds"
const Overview = () => {
  return (
    <div className=" w-full h-[70vh] bg-red-600">
        <Backgrounds 
            src={videoBackgroundHome} 
            className={'w-full h-full'} 
        />
    </div>
  )
}

export default Overview