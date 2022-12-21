import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HambContext } from "../../contexts/HambContext";
import { UserContext } from "../../contexts/UserContexts";
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
  const { AutoLogin } = useContext(UserContext);
  const navigate = useNavigate();

  async function addToCart() {
    if (await AutoLogin()) {
      const newValue = {
        name: name,
        category: type,
        img: img,
        id: cart.length + 1,
        price: price,
      };
      console.log(cart, newValue.id);
      if (!cart.find((value) => value.name === name)) {
        setCart([...cart, newValue]);
      }
    } else {
      toast.error("Sem permissão!");
      navigate("/");
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
