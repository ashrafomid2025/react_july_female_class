import { useMemo, useState } from "react";

export default function Example3() {
  const [dark, setDark] = useState(false);
  const [count, setCount] = useState(0);
  function expensiveFunction() {
    console.log("function started its work");
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }

  const result = useMemo(expensiveFunction, [count]);

  return (
    <div
      className={`w-full p-12 h-screen ${dark ? "bg-black  text-white" : "bg-white text-black"}`}
    >
      <div className="w-full max-w-4xl mx-auto ">
        <button
          onClick={() => setDark(!dark)}
          className="py-2 px-8 bg-red-500 text-white"
        >
          Toggle theme
        </button>
        <div>
          <button
            className="bg-blue-500 text-white py-2 px-8 my-7"
            onClick={() => setCount(count + 2)}
          >
            increament
          </button>
        </div>
        <div>
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  );
}
