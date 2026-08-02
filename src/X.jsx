import { useContext } from "react";
import { xContext } from "./App";

export default function X() {
  const qimat = useContext(xContext);
  return (
    <div>
      <h1>
        this is the x component please give me the information from app
        component
        <span className="text-5xl text-red-500">{qimat}</span>
      </h1>
    </div>
  );
}
