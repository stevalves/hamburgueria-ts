import { StyledLogAndRegBase } from "./styles";
import { Outlet } from "react-router-dom";

export function LogAndRegBase() {
  return (
    <StyledLogAndRegBase>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>

      <Outlet />
    </StyledLogAndRegBase>
  );
}
