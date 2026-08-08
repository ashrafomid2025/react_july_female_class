import { useState, useTransition } from "react";

export default function Example2() {
  const [value, setValue] = useState("");
  //   useTransition => responsivness appllication => data
  const [list, setList] = useState([]);
  const [loading, StartTransition] = useTransition();
  function hanldeChange(e) {
    setValue(e.target.value);
    const l = [];
    StartTransition(() => {
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-9 border">
      <input
        type="text"
        className="border py-2 w-full"
        value={value}
        onChange={(e) => hanldeChange(e)}
      />

      <div className="w-full flex flex-col gap-0.5">
        {loading ? (
          <div>
            <h1>please wait....</h1>
          </div>
        ) : (
          list.map((x, index) => <div key={index}>{x}</div>)
        )}
      </div>
    </div>
  );
}
