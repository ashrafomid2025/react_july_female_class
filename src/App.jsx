import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { listProducts } from "./db/products.js";
import ProductCard from "./ProductCard.jsx";
export default function App() {
  // useEffect(()=>{},[]);
  const [fruitList, setFruitList] = useState(listProducts);
  const [value, setValue] = useState("");
  const [data, action] = useReducer(x, 330);
  function x(data, action) {
    if (action.type === "kam") {
      return data + action.payload;
    } else {
      return data + action.payload;
    }
  }

  // useEffect(() => {
  //   setFruitList(
  //     fruitList.filter((y) => {
  //       y.name.toLowerCase().includes(value.toLowerCase());
  //     }),
  //   );
  // }, [value]);
  useEffect(() => {
    const products = listProducts.filter((y) =>
      y.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFruitList(products);
  }, [value]);
  return (
    <div>
      <h1>hi good afternoon</h1>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-4 gap-5">
        {fruitList.map((x) => {
          return <ProductCard key={x.id} product={x} />;
        })}
      </div>
      <div className="w-full max-w-6xl mx-auto my-8">
        <input
          value={value}
          onChange={(hadisa) => setValue(hadisa.target.value)}
          placeholder="Search..."
          type="text"
          className="border py-1.5 w-full"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto my-8 flex gap-2 justify-between">
        <button
          onClick={() => action({ type: "zaiad", payload: 4 })}
          className="py-2 px-8 bg-blue-500 text-white rounded-md"
        >
          +4
        </button>
        <h1 className="text-5xl font-bold">{data}</h1>
        <button
          onClick={() => action({ type: "kam", payload: 1 })}
          className="py-2 px-8 bg-red-500 text-white rounded-md"
        >
          -1
        </button>
      </div>
    </div>
  );
}
