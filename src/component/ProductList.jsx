import React from "react";
import Item from "./Item";
const products = [
  {
    id: 1,
    name: "Pizza",
    image: "../public/img/pizza.jpg",
    price: 30,
    quantity: 0,
    detail: "Delicious cheese pizza, crispy thin crust.",
    disabled: true,
  },
  {
    id: 2,
    name: "Hamburger",
    image: "../public/img/Hamburger.jpg",
    price: 15,
    detail: "American beef burger, with vegetables and special sauce.",

    quantity: 4,
  },
  {
    id: 3,
    name: "Bread",
    image: "../public/img/bread.jpg",

    price: 20,
    detail: "Crispy toast with garlic butter flavor.",
    quantity: 1,
  },
  {
    id: 4,
    name: "Cake",
    image: "../public/img/Cake.jpg",

    price: 10,
    detail: "Traditional dishes with delicious flavors",
    quantity: 1,
  },
];

const ProductList = () => {
  return (
    <div className="max-w-xl border rounded shadow overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
        List Products
      </div>
      <div className="p-4 space-y-4">
        {products.map((product, index) => {
          return <Item data={product} key={product.id || index}></Item>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
