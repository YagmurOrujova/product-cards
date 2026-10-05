import "./App.css";

const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 350,
    category: "Electronics",
    image: "Keyboard.jpg",
  },
  {
    id: 2,
    name: "YSL Heels",
    price: 4000,
    category: "Clothing",
    image: "YSL heels.jpg",
  },
  {
    id: 3,
    name: "Coach Bag",
    price: 995,
    category: "Accessories",
    image: "Coach bag.jpg",
  },
  {
    id: 4,
    name: "PC case",
    price: 2200,
    category: "Electronics",
    image: "PC case.jpg",
  },
  {
    id: 5,
    name: "FlowerKnows lipstick",
    price: 120,
    category: "Makeup",
    image: "Flower Knows lipstick.jpg",
  },
  {
    id: 6,
    name: "Koenigsegg Jesko",
    price: 3000000,
    category: "Cars",
    image: "Koenigsegg Jesko.jpg",
  },
];

function ProductCard({ image, name, price, category, onAdd }) {
  return (
    <article className="card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <span className="card-category">{category}</span>
        <h3 className="card-name"> {name} </h3>
        <p className="card-price">${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
        <button className="card-btn" onClick={() => onAdd(name)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default function App() {
  const handleAdd = (name) => alert(`"${name}" was added to your cart`);

  return (
    <main className="page">
      <h1 className="page-title">Products</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </main>
  );
}
