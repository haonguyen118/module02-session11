import { Descriptions, Input } from "antd";
import React from "react";
export const products = [
  {
    id: 1,
    name: "Pizza",
    image: "../public/img//pizza.jpg",
    price: 30,
    quantity: 0,
    detail: "Delicious cheese pizza, crispy thin crust.",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus nemo nihil maxime pariatur id ad voluptate voluptates.",
  },
  {
    id: 2,
    name: "Hamburger",
    image: "../public/img/Hamburger.jpg",

    price: 15,
    detail: "American beef burger, with vegetables and special sauce.",

    quantity: 4,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus nemo nihil maxime pariatur id ad voluptate voluptates.",
  },
  {
    id: 3,
    name: "Bread",
    image: "../public/img/bread.jpg",
    price: 20,
    detail: "Crispy toast with garlic butter flavor.",
    quantity: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus nemo nihil maxime pariatur id ad voluptate voluptates.",
  },
  {
    id: 4,
    name: "Cake",
    image: "../public/img/Cake.jpg",
    price: 10,
    detail: "Traditional dishes with delicious flavors",
    quantity: 1,
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus nemo nihil maxime pariatur id ad voluptate voluptates.",
  },
];

const ProductList = (product) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
          color: "white",
          fontSize: 30,
          width: "60%",
        }}
      >
        List Products
      </div>
      <div
        style={{
          width: "60%",
        }}
      >
        {products &&
          products.map((product, index) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img width={150} height={100} src={product.image} alt="" />
                <p style={{ marginLeft: 20 }}>{product.descriptions}</p>
                <div style={{ marginLeft: 20 }}>
                  <p
                    style={{
                      border: "1px solid grey",
                      width: 100,
                      height: 30,
                      textAlign: "center",
                    }}
                  >
                    Price: {product.price}
                  </p>
                  <div
                    style={{
                      width: 100,
                      height: 30,
                      backgroundColor: "azure",
                      border: "1px solid grey",
                      textAlign: "right",
                    }}
                  >
                    {product.quantity}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
