import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider, User } from "@auth0/auth0-react";

//
//TqAB779rMpVee05BAMAdLH8BbK18DZ5f

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-r1icna8bmlkywna3.us.auth0.com"
    clientId="TqAB779rMpVee05BAMAdLH8BbK18DZ5f"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
