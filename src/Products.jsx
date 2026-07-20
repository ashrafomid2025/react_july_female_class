import { Link } from "react-router-dom";
import { listProducts } from "./db/products";
export default function ProductPage() {
  return (
    <div>
      {listProducts.map((y) => {
        return (
          <Link to={`/product/${y.id}`}>
            <h1>{y.name}</h1>
            <p>{y.price}</p>
            <hr />
          </Link>
        );
      })}
    </div>
  );
}
