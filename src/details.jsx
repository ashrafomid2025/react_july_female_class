import { useParams } from "react-router-dom";
import { listProducts } from "./db/products";

export default function DetailsPage() {
  const { id } = useParams();
  const foundProduct = listProducts.find((x) => x.id == id);
  if (!foundProduct) {
    return <div>Sorry</div>;
  }
  return (
    <div>
      <h1>Hello this is the details page</h1>
      <h1>{foundProduct.name}</h1>
      <h1>{foundProduct.emoji}</h1>
      <p>{foundProduct.price}</p>
      <p>{foundProduct.details}</p>
    </div>
  );
}
