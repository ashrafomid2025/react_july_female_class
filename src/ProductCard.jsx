export default function ProductCard(props) {
  const product = props.product;
  return (
    <div className="w-full py-4 px-8 border shadow-2xs rounded-lg flex flex-col">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-gray-500 text-sm">{product.price}</p>
      <p className="text-6xl font-bold">{product.emoji}</p>
    </div>
  );
}
