<<<<<<< Updated upstream
=======
import { createContext } from "react";
import Products from "./Products";

import Navbar from "./Navbar";
export const productContext = createContext();
>>>>>>> Stashed changes
function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <h1>Hello </h1>
=======
    <div className="w-full h-screen">
      <Navbar />
      <h1 className="text-center text-4xl">Hello good afternoon</h1>
      <productContext.Provider value={products}>
        <Products />
      </productContext.Provider>
>>>>>>> Stashed changes
    </div>
  );
}
export default App;
