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
  setSum: React.Dispatch<React.SetStateAction<number>>;
  sum: number;
}

export function CartCard({
  id,
  name,
  category,
  price,
  img,
  setSum,
  sum,
}: iCartCardProps) {
  const { cart, setCart } = useContext(HambContext);
  const [quant, setQuant] = useState(1);

  function priceAdd() {
    if (quant >= 1) {
      setQuant(quant + 1)
      setSum(sum + price)
    }
  }
  function priceRemove() {
    if (quant > 1) {
      setQuant(quant - 1)
      setSum(sum - price)
    } else {
      remove()
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
            <button onClick={priceRemove}>-</button>
            <h5>{quant}</h5>
            <button onClick={priceAdd}>+</button>
          </div>
        </div>
      </div>
      <button type="button" onClick={remove}>
        <FaTrash />
      </button>
    </StCartCard>
  );
}
