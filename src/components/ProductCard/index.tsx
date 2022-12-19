import { useContext } from "react";
import { HambContext } from "../../contexts/HambContext";
import { StCard } from "./styles";

interface iCardProps {
  name: string;
  type: string;
  price: number;
  img: string;
  id: number;
}

export function Card({ name, type, price, img, id }: iCardProps) {
  const { setCart, cart } = useContext(HambContext);

  function addToCart() {
    const newValue = {
      name: name,
      category: type,
      img: img,
      id: cart.length+1,
      price: price,
    };
    if(!cart.find((value) => value.id === id)){
        setCart([...cart, newValue])
    }
  }

  return (
    <StCard>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{type}</h4>
        <h3>R$ {price.toFixed(2)}</h3>
        <button type="button" onClick={addToCart}>
          Adicionar
        </button>
      </div>
    </StCard>
  );
}
