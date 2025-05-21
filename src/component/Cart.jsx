import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/action/cartAction";

const Cart = () => {
  const carts = useSelector((state) => state.listCart);
  const dispatch = useDispatch();

  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <div className="max-w-2xl mt-6 border border-red-200 bg-red-50 rounded p-4">
      <h2 className="text-red-800 font-semibold mb-4 text-lg bg-red-00">
        Your Cart
      </h2>

      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="border px-2 py-1 text-center">STT</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1 text-center">Price</th>
            <th className="border px-2 py-1 text-center">Quantity</th>
            <th className="border px-2 py-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {carts &&
            carts.map((item, index) => {
              return (
                <tr>
                  <td className="border px-2 py-1 text-center">{index + 1}</td>
                  <td className="border px-2 py-1">{item.product.name}</td>
                  <td className="border px-2 py-1 text-center">
                    {item.product.price} USD
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-16 border rounded text-center"
                      readOnly
                    />
                  </td>
                  <td className="border px-2 py-1 text-center space-x-2">
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-400 text-white px-2 py-1 rounded text-xs"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center text-sm">
        <span className="text-gray-700">
          There are <strong>2</strong> items in your shopping cart.
        </span>
        <span className="text-red-600 font-bold text-lg">
          {carts.reduce(
            (total, curr) => total + curr.product.price * curr.quantity,
            0
          )}{" "}
          USD
        </span>
      </div>
    </div>
  );
};

export default Cart;
