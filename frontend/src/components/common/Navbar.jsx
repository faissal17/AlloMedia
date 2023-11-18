import { Link } from "react-router-dom";
import { Logo  as LogoFood} from "../Logo";
function Navbar() {
  return (
    <nav className=" p-3 px-20 bg-gray-300">
      <LogoFood />
    </nav>
  );
}
export default Navbar;
