import React from "react";

export function CustomerNav() {
  return (
    <header>
      {/* Coluna 1 */}
      <div>
        <img src="" alt="" />
      </div>
      {/* Coluna 2 */}
      <div>
        <div>
          <input type="text" />
          <button></button>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <button>Alimentos</button>
              </li>
              <li>
                <button>Saúde & Beleza</button>
              </li>
              <li>
                <button>Moda</button>
              </li>
              <li>
                <button>Eletrônicos</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Coluna 3 */}
      <div>
        <nav>
          <ul>
            <li>
              <button>Cria Conta</button>
            </li>
            <li>
              <button>Entre</button>
            </li>
            <li>
              <button>Seus Pedidos</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
