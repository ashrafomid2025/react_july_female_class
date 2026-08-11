import { useCallback, useMemo, useState } from "react";

export default function Example3() {
  const [light, setLight] = useState(true);
  const [count, setCount] = useState(0);

  const timeConsumingFunction = useCallback(() => {
    console.log("من در حال اجرا هستم");
    for (let i = 0; i < 3000000000; i++) {}

    return count;
  }, [count]);

  return (
    <div
      className={`w-full h-screen py-28 ${light ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
        <button
          onClick={() => setLight(!light)}
          className="py-2 px-8 bg-blue-600 text-white rounded-2xl"
        >
          Toggle theme
        </button>
        <button
          onClick={() => setCount(count + 2)}
          className="py-2 px-8 bg-purple-600 text-white rounded-2xl"
        >
          +2
        </button>

        <h1 className="text-center text-4xl font-bold text-purple-700">
          {timeConsumingFunction()}
        </h1>
      </div>
    </div>
  );
}
