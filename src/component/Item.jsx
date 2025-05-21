import useSelection from "antd/es/table/hooks/useSelection";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action/cartAction";

const Item = ({ data }) => {
  const [productAdd, setProductAdd] = useState([]);
  const [quantityInput, setQuantityInput] = useState(1);
  const carts = useSelector((state) => state.listCart);
  const dispatch = useDispatch();
  const handleProductAdd = (product) => {
    dispatch(
      addCart({
        product,
        quantity: quantityInput,
      })
    );
  };
  return (
    <div key={data.id} className="flex items-center gap-4 border-b pb-4">
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h2 className="font-semibold">{data.name}</h2>
        <p className="text-sm text-gray-600">{data.detail}</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleProductAdd(data)}
          className={`text-white text-sm px-2 py-1 rounded font-semibold ${
            data.disabled ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
          }`}
        >
          {data.price} USD
        </button>
        <input
          onChange={(e) => setQuantityInput(e.target.value)}
          type="number"
          min="0"
          className="w-12 mt-2 border rounded text-center text-sm"
          disabled={data.disabled}
        />
      </div>
    </div>
  );
};

export default Item;
