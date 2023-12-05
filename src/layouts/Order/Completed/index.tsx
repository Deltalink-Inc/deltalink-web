import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { Link } from "react-router-dom";
import * as styles from "./styles";

export function Completed() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <styles.Header>
          <styles.BackButton
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
            Ínicio
          </styles.BackButton>
          <styles.Logo src="/deltalink_logo.svg" alt="" />
        </styles.Header>
        <styles.Container>
          <Player
            autoplay
            loop={false}
            src="/lottie/check.json"
            style={{ height: "300px", width: "300px" }}
            keepLastFrame
          ></Player>
          <styles.Title>
            <h1>Obrigado!</h1>
          </styles.Title>
          <styles.Description>
            <p>
              Pedido recebido com sucesso!
              <br />
              <br />
              Enviamos um QR code para o seu email. Mostre-o ao motoboy no ato
              da entrega. Agradecemos pela confiança!
            </p>
          </styles.Description>
          <Link to="/">
            <styles.Button>
              <i className="fa-solid fa-arrow-left"></i>
              Voltar para o ínicio
            </styles.Button>
          </Link>
          <styles.Footer>
            <p>© 2023 Deltalink. Todos os direitos reservados.</p>
          </styles.Footer>
        </styles.Container>
      </div>
    </>
  );
}
