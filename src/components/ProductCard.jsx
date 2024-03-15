function ProductCard({ product: { title, description, img } }) {
  return (
    <div className="border-solid border-2 rounded-xl">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
