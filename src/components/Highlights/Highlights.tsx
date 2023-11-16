import React from "react";

import { MainContainer } from "./style";

export function Highlights() {
  return (
    <MainContainer>
      <div>
        <i className="fa-solid fa-gauge"></i>
        <h1>Velocidade</h1>
        <p>
          Nossa plataforma se orgulha de oferecer uma entrega ágil e eficiente,
          garantindo que seus produtos cheguem rapidamente às suas mãos.
        </p>
      </div>
      <div>
        <i className="fa-solid fa-lock"></i>
        <h1>Segurança</h1>
        <p>
          Garantimos a máxima segurança das informações dos nossos clientes,
          utilizando as mais avançadas tecnologias de criptografia e protocolos
          de segurança.
        </p>
      </div>
      <div>
        <i className="fa-solid fa-ship"></i>
        <h1>Navegação Descomplicada</h1>
        <p>
          Nossa plataforma foi projetada visando a máxima facilidade de
          navegação. Com um layout intuitivo e menus simples, você encontrará o
          que precisa de forma rápida e descomplicada, proporcionando uma
          experiência fluida e eficiente.
        </p>
      </div>
    </MainContainer>
  );
}
