import { createContext, useRef, useState } from "react";
import Z from "./Z";

export const xContext = createContext();

export default function App() {
  const [x, setX] = useState("");

  const counter = useRef(0);
  function p() {
    counter.current++;
  }
  function n() {
    counter.current = 0;
  }

  const h1Ref = useRef(null);
  function y() {
    h1Ref.current.style.cssText = "border: 1px solid blue; color: black;";
  }

  //   useRef => dom,
  // data
  return (
    <div>
      <input
        value={x}
        onChange={(e) => setX(e.target.value)}
        type="text"
        className="border py-2.5"
      />
      <h1 ref={h1Ref}>{x}</h1>
      <button onClick={y}>change the style of h1</button>

      <h1 className="text-5xl font-bold">{counter.current}</h1>
      <button onClick={p} className="py-2 px-6 bg-blue-500 text-white my-2">
        +1
      </button>
      <button onClick={n} className="py-2 px-6 bg-red-500 text-white">
        reset
      </button>
      <xContext.Provider value={x}>
        <Z />
      </xContext.Provider>
    </div>
  );
}
