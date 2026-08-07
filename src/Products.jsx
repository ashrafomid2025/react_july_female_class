import { useContext } from "react";
import { productContext } from "./App";

function Products() {
  const products = useContext(productContext);
  return (
    <div className="w-full max-w-6xl flex items-center justify-between gap-3 flex-wrap h-screen mx-auto">
      {products.map((x) => {
        return (
          <div className="p-4 border rounded-md">
            <h1 className="text-5xl text-center">{x.name}</h1>
            <p>{x.emoji}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
