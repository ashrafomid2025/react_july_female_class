import { createContext } from "react";
import Products from "./Products";
import AboutPage from "./aboutPage";
export const productContext = createContext();
function App() {
  const products = [
    {
      id: 1,
      name: "Apple",
      emoji: "🍎",
    },
    {
      id: 2,
      name: "Mango",
      emoji: "🥭",
    },
    {
      id: 1,
      name: "Orange",
      emoji: "🍊",
    },
    {
      id: 1,
      name: "Banana",
      emoji: "🍌",
    },
  ];

export default function App() {
  const [value, myFunction] = useReducer(c, 0);
  // useActionState form data get

  function c(data, myFunc) {
    if (myFunc.type === "+2") {
      return data + myFunc.payload;
    } else if (myFunc.type === "reset") {
      return (data = 0);
    } else {
      return data - myFunc.payload;
    }
  }

  const [data, func] = useReducer(y, { name: "ahmad", lastName: "ahmadi" });

  function y(data, func) {
    if (func.type === "nam") {
      return { ...data, name: func.payload };
    } else {
      return { ...data, lastName: func.payload };
    }
  }

  function handleClick() {}
  return (
    <>
      <div className="w-full mb-8 max-w-5xl mx-auto grid grid-cols-2 gap-4">
        <input
          onChange={(e) => func({ type: "nam", payload: e.target.value })}
          value={data.name}
          type="text"
          placeholder="Enter your name"
          className="w-full border py-1.5"
        />
        <input
          value={data.lastName}
          onChange={(e) => func({ type: "lastName", payload: e.target.value })}
          type="text"
          placeholder="Enter your Last name"
          className="w-full border py-1.5"
        />

        <div>
          <h1 className="text-blue-500 border p-7 text-3xl">
            Hi I am {data.name} {data.lastName}
          </h1>
        </div>
      </div>
      <hr />
      <div className="w-full mt-8 max-w-5xl mx-auto flex justify-between gap-4">
        <button
          onClick={() => myFunction({ type: "+2", payload: 2 })}
          className="border py-2 px-8 rounded-xl"
        >
          +2
        </button>
        <h1>{value}</h1>
        <button
          onClick={() => myFunction({ type: "decrease", payload: 1 })}
          className="border py-2 px-8 rounded-xl"
        >
          -1
        </button>

        <button
          onClick={() => myFunction({ type: "reset" })}
          className="border border-red-500 px-8 py-2 rounded-xl"
        >
          reset
        </button>
      </div>

      <Example1 />
    </>
  );
}
