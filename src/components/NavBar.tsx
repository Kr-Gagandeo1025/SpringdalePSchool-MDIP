import { GiTwirlyFlower } from "react-icons/gi";
import NavMenu from "./NavMenu";
const NavBar = () => {
  return (
    <div className="flex px-6 py-3 justify-between items-center border-b border-black">
        <NavMenu/>
      <a href="/">
        <span className="flex items-center gap-4 text-4xl font-bold"><GiTwirlyFlower/> Springdale</span>
      </a>
    </div>
  )
}

export default NavBar
