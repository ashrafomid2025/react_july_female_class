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

  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-4xl">Hello good afternoon</h1>
      <productContext.Provider value={products}>
        <Products />
      </productContext.Provider>
    </div>
  );
}
export default App;
