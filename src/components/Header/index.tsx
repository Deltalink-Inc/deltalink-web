import * as React from "react";
import { Link } from "react-router-dom";

import {
  Header,
  Column1,
  Logo,
  DeltaLinkTitle,
  Column2,
  SearchInputBox,
  SearchInput,
  SearchButton,
  CategoryList,
  CategoryItem,
  Column3,
  ProfileList,
  ProfileItem,
} from "./styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export function CustomerNav() {
  return (
    <Header>
      {/* Coluna 1 */}
      <Column1>
        <Link
          to={"/"}
          style={{
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          <Logo src="/deltalink_logo.svg" alt="Logo deltalink" />
          <DeltaLinkTitle>DELTALINK.</DeltaLinkTitle>
        </Link>
      </Column1>
      {/* Coluna 2 */}
      <Column2>
        <SearchInputBox>
          <SearchInput type="text" placeholder="Buscar produto, loja" />
          <SearchButton>
            <i className="fa-solid fa-magnifying-glass"></i>
          </SearchButton>
        </SearchInputBox>
        <div>
          <nav>
            <CategoryList>
              <CategoryItem>
                <Link to="/product/catalog/food">
                  <button>Alimentos</button>
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to="/product/catalog/healthandbeauty">
                  <button>Saúde & Beleza</button>
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to="/product/catalog/fashion">
                  <button>Moda</button>
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to="/product/catalog/electronics">
                  <button>Eletrônicos</button>
                </Link>
              </CategoryItem>
            </CategoryList>
          </nav>
        </div>
      </Column2>
      {/* Coluna 3 */}
      <Column3>
        <nav>
          <ProfileList>
            <ProfileItem>
              <button>Cria Conta</button>
            </ProfileItem>
            <ProfileItem>
              <button>Entre</button>
            </ProfileItem>
            <ProfileItem>
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </ProfileItem>
          </ProfileList>
        </nav>
      </Column3>
    </Header>
  );
}
