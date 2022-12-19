import { useContext, useEffect } from "react";
import { api } from "../../api/request";
import Header from "../../components/Header";
import { Card } from "../../components/ProductCard";
import { HambContext } from "../../contexts/HambContext";
import { UserContext } from "../../contexts/UserContexts";
import { StDash } from "./styles";

export function Dashboard() {
  const { user } = useContext(UserContext);
  const { products } = useContext(HambContext);

  console.log(products.length);

  return (
    <StDash>
      <Header />
      <main>
        <ul>
          {products.length > 1 ? (
            products.map((value) => (
              <Card
                key={value.id}
                name={value.name}
                type={value.category}
                img={value.img}
                price={value.price}
              />
            ))
          ) : (
            <h4>carregando</h4>
          )}
        </ul>
      </main>
    </StDash>
  );
}
