import { StLogAndRegHeader } from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";
import image from "../../images/LRP.svg"

export function LogAndRegHeader() {
  return (
    <StLogAndRegHeader>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div>
        <div>
          <RiShoppingBag3Line />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <b>melhores </b>
          ingredientes.
        </p>
      </div>
      <img src={image} alt="ye" />
    </StLogAndRegHeader>
  );
}
