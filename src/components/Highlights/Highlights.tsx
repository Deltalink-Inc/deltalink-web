import React from "react";

import { MainContainer, Box, Icon, Title, Details } from "./styles";

export function Highlights() {
  return (
    <MainContainer>
      <Box>
        <Icon className="fa-solid fa-gauge"></Icon>
        <Title>Velocidade</Title>
        <Details>
          Nossa plataforma se orgulha de oferecer uma entrega ágil e eficiente,
          garantindo que seus produtos cheguem rapidamente às suas mãos.
        </Details>
      </Box>
      <Box>
        <Icon className="fa-solid fa-lock"></Icon>
        <Title>Segurança</Title>
        <Details>
          Comprometemo-nos a garantir a máxima segurança das informações de
          nossos clientes, utilizando tecnologias de criptografia avançadas.
        </Details>
      </Box>
      <Box>
        <Icon className="fa-solid fa-ship"></Icon>
        <Title>Navegação Descomplicada</Title>
        <Details>
          Layout intuitivo e menus simplificados que permitem encontrar o
          necessário de forma rápida, proporcionando experiência eficiente.
        </Details>
      </Box>
    </MainContainer>
  );
}
