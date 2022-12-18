import React from "react";
import { Link } from "react-router-dom";
import { StForm } from "./styles";

interface iFormValues {
  title: string;
  children: React.ReactNode;
  goBack?: boolean;
  goLogin?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export function Form({ title, children, goBack, goLogin }: iFormValues) {

  return (
    <StForm onSubmit={goLogin}>
      <div>
        <h3>{title}</h3>
        {goBack && <Link to={"/"}>Retornar para o login</Link>}
      </div>
      {children}
    </StForm>
  );
}
