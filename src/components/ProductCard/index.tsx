import { StCard } from "./styles";

interface iCardProps {
  name: string;
  type: string;
  price: number;
  img: string;
}

export function Card({ name, type, price, img }: iCardProps) {
  return (
    <StCard>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{type}</h4>
        <h3>R$ {price.toFixed(2)}</h3>
        <button type="button">Adicionar</button>
      </div>
    </StCard>
  );
}
