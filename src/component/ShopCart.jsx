import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function ShopCart() {
  return (
    <div>
      <div className="container">
        <div className="page-header">
          <h1 style={{ textAlign: "center", fontSize: 40 }}>Shopping Cart</h1>
        </div>
        <div className="row">
          <ProductList></ProductList>
          <div>
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
}
