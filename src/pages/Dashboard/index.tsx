import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Card } from "../../components/ProductCard";
import { HambContext } from "../../contexts/HambContext";
import { Modal } from "../../styles/StModal";
import { StDash } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { CartCard } from "../../components/CartProductCard";
import { UserContext } from "../../contexts/UserContexts";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [modal, setModal] = useState(false);
  const { products, cart, setCart } = useContext(HambContext);
  const { AutoLogin } = useContext(UserContext);
  const [render, setRender] = useState(products);
  const TotalValueCart = cart.reduce((a, b) => {
    return a + b.price;
  }, 0);

  const navigate = useNavigate();

  useEffect(() => {
    async function y() {
      const is = await AutoLogin();
      if (!is) {
        navigate("/");
      }
    }
    y();
  }, []);

  useEffect(() => {
    setRender(products);
  }, [products]);

  return (
    <StDash>
      <Modal open={modal}>
        <div className="modalContent">
          <div className="modalHeader">
            <h2>Carrinho de compras</h2>
            <button onClick={() => setModal(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="modalBody">
            <ul>
              {cart.length > 0 ? (
                cart.map((value) => (
                  <CartCard
                    category={value.category}
                    id={value.id}
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    key={value.id}
                  />
                ))
              ) : (
                <span>Lista vazia</span>
              )}
            </ul>
            <hr />
            <div className="totalAmount">
              <h4>Total</h4>
              <h5>R$ {TotalValueCart.toFixed(2)}</h5>
            </div>
            <button type="button" onClick={() => setCart([])}>
              Remover todos
            </button>
          </div>
        </div>
      </Modal>
      <Header openModal={setModal} setRender={setRender} products={products} />
      <main>
        <ul>
          {render.length > 0 ? (
            render.map((value) => (
              <Card
                key={value.id}
                id={value.id}
                name={value.name}
                type={value.category}
                img={value.img}
                price={value.price}
              />
            ))
          ) : (
            <h4>Não encontramos nada :(</h4>
          )}
        </ul>
      </main>
    </StDash>
  );
}
