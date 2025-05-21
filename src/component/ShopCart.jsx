import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function ShopCart() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1 style={{ textAlign: "left", fontSize: 30 }}>Shopping Cart</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "between", gap: 20 }}>
          <ProductList></ProductList>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}
