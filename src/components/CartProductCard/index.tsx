import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HambContext } from "../../contexts/HambContext";
import { StCartCard } from "./styles";

interface iCartCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export function CartCard({
  id,
  name,
  category,
  price,
  img,
}: iCartCardProps) {
  const { cart, setCart } = useContext(HambContext);
  const [quant, setQuant] = useState(1);

  function refreshPriceAdd() {
    if (quant >= 1) {
      setQuant(quant + 1)
    }
  }
  function refreshPriceRemove() {
    if (quant > 1) {
      setQuant(quant - 1)
    }
  }

  function remove() {
    const newList = [...cart];
    const index = newList.findIndex((value) => value.id === id);
    newList.splice(index, 1);
    setCart(newList);
  }

  return (
    <StCartCard>
      <div>
        <div className="prodImg">
          <img src={img} alt={name} />
        </div>
        <div className="prodName">
          <h2>{name}</h2>
          <div className="addRem">
            <button onClick={refreshPriceRemove}>-</button>
            <h5>{quant}</h5>
            <button onClick={refreshPriceAdd}>+</button>
          </div>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <FaTrash />
      </button>
    </StCartCard>
  );
}
