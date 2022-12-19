import { Logo } from "../../styles/Logo";
import { StHeader } from "./styles";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { HambContext } from "../../contexts/HambContext";
import { UserContext } from "../../contexts/UserContexts";

interface iProductsValues {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iHeaderProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setRender: React.Dispatch<React.SetStateAction<iProductsValues[]>>;
  products: iProductsValues[];
}

export default function Header({
  openModal,
  setRender,
  products,
}: iHeaderProps) {
  const { cart } = useContext(HambContext);
  const { logout } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filter = products.filter(
    (value) =>
      value.name.toLowerCase().includes(search.toLowerCase()) ||
      value.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setRender(filter);
  }, [search]);

  return (
    <StHeader>
      <div>
        <Logo>
          Burguer <span>kenzie</span>
        </Logo>
        <div className="flexAdj">
          <div className="hdButtons">
            <div className="searchDiv">
              <input
                type="text"
                placeholder="..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <BiSearch className="search" />
              </button>
            </div>
          </div>
          <button className="cartButton" onClick={() => openModal(true)}>
            <BsCart className="cart" />
            <span>{cart.length}</span>
          </button>
          <button onClick={logout}>
            <MdOutlineLogout className="logout" />
          </button>
        </div>
      </div>
    </StHeader>
  );
}
