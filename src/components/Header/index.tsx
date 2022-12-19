import { Logo } from "../../styles/Logo";
import { StHeader } from "./styles";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

export default function Header() {
  return (
    <StHeader>
      <div>
        <Logo>
          Burguer <span>kenzie</span>
        </Logo>
        <div className="flexAdj">
          <div className="hdButtons">
            <div className="searchDiv">
              <input type="text" placeholder="..."/>
              <button>
                <BiSearch className="search" />
              </button>
            </div>
          </div>
          <button className="cartButton">
            <BsCart className="cart" />
            <span>0</span>
          </button>
          <button>
            <MdOutlineLogout className="logout" />
          </button>
        </div>
      </div>
    </StHeader>
  );
}
