import { Logo as LogoFood } from "../Logo";
import CustomInput from "./Input";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

function Navbar() {
  const shoppingcart = useSelector((state) => state.shoppingcart);

  return (
    <nav className=" p-2 sm:p-3 md:p-2 lg:p-1 px-4 md:px-4 lg:px-14 xl:px-20 flex shadow-lg items-center bg-gray-100">
      <LogoFood className=" w-[30%] flex justify-center sm:w-[20%] lg:w-[5%]" />
      <div className=" w-[70%] md:w-[50%] lg:w-[30]">
        <CustomInput
          icon={<IoIosSearch className=" w-6" />}
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={() => {}}
          className="
                rounded-3xl
               w-[350px] py-[10px] lg:py-[10px] lg:w-[400px] xl:w-[450px] border border-gray-300 
              focus:border-primary focus:border-[1.5px] text-gray-600"
          submit={false}
        />
      </div>
      <ul className=" hidden  lg:flex   items-center gap-4  xl:gap-8 lg:w-[30%]">
        <Link>
          <li className=" text-sm font-semibold transition hover:text-primary">
            Categories
          </li>
        </Link>
        <Link to="/restaurant">
          <li className=" text-sm font-semibold transition hover:text-primary">
            Restaurants
          </li>
        </Link>
        <Link>
          <li className=" text-sm font-semibold transition hover:text-primary">
            Contact us
          </li>
        </Link>
      </ul>
      <div className=" lg:w-[10%] xl:w-[15%] hidden  lg:flex items-center gap-2  ">
        <Link to={"/shopping-cart"}>
          <span className=" flex items-center justify-center p-3 border border-gray-300  relative rounded-full">
            <IoCartOutline className=" text-gray-300 text-xl" />
            <span
              className="
              absolute top-[-2px] right-[-2px] bg-primary text-white 
              flex items-center justify-center text-[10px] rounded-full min-w-[14px] min-h-[14px]"
            >
              {shoppingcart && shoppingcart.total}
            </span>
          </span>
        </Link>
        <span className=" flex items-center justify-center p-3 border border-gray-300  relative rounded-full">
          <CiHeart className=" text-gray-300 text-xl" />
          <span
            className="
              absolute top-[-2px] right-[-2px] bg-primary text-white 
              flex items-center justify-center text-[10px] rounded-full min-w-[14px] min-h-[14px]"
          >
            2
          </span>
        </span>
        <div>dkfdfkjdfkjdf</div>
      </div>
    </nav>
  );
}
export default Navbar;
