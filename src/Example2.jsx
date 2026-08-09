import { useState, useTransition } from "react";

export default function Example2() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [entizar, func] = useTransition();

  function handleClick(e) {
    setValue(e.target.value);
    const l = [];
    func(() => {
      for (let i = 0; i < 10000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div className="w-full max-w-6xl mx-auto">
      <input
        className="border w-full py-2 my-8"
        type="text"
        value={value}
        onChange={(e) => handleClick(e)}
      />

      <div>
        {entizar ? (
          <div>
            <h1 className="text-5xl">
              لطفا منتظر باشید، اطلاعات شما در حال پروسس است
            </h1>
          </div>
        ) : (
          list.map((x, index) => (
            <div key={index}>
              <h1 className="text-amber-500 text-3xl font-bold">{x}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
