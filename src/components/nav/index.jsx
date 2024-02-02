import "./style.css";
import {
  TiHomeOutline,
  TiShoppingCart,
  TiInfoLargeOutline,
} from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";

export const NavComponent = () => {
  return (
    <nav>
      <a href="#home" className="icon">
        <TiHomeOutline />
        <div className="indicator">
          <span className="circle"></span>
        </div>
      </a>
      <a href="#intro" className="icon">
        <TiInfoLargeOutline />
        <div className="indicator">
          <span className="circle"></span>
        </div>
      </a>
      <a href="#feedback" className="icon">
        <BsPeopleFill />
        <div className="indicator">
          <span className="circle"></span>
        </div>
      </a>
      <a href="#shop" className="icon">
        <TiShoppingCart />
        <div className="indicator">
          <span className="circle"></span>
        </div>
      </a>
    </nav>
  );
};
