import { useState } from "react";
import "./App.css";

function Skincare() {
  const [products] = useState([
    {
      image:
        "https://i.pinimg.com/1200x/18/9b/20/189b204fd2630ccca835455d92bdc223.jpg",
      name: "Cetaphil Gentle Skin Cleanser",
      description:
        "A mild, non-irritating cleanser suitable for sensitive skin.",
    },
    {
      image:
        "https://i.pinimg.com/736x/6e/b6/f0/6eb6f01b38f483a9be522ed956028dde.jpg",
      name: "The Ordinary Niacinamide 10%",
      description:
        "Reduces blemishes and improves overall skin texture.",
    },
    {
      image:
        "https://i.pinimg.com/736x/b7/dd/73/b7dd737ff8d54d22ca29d92ede18f24c.jpg",
      name: "Neutrogena Hydro Boost",
      description:
        "Provides intense hydration with hyaluronic acid.",
    },
    {
      image:
        "https://i.pinimg.com/736x/5e/b1/fb/5eb1fb123e5c78893b76bfc5bfad2fde.jpg",
      name: "Minimalist Salicylic Acid Serum",
      description:
        "Helps fight acne and unclog pores.",
    },
    {
      image:
        "https://i.pinimg.com/736x/d2/46/a4/d246a40f18361349814519631fd65e1d.jpg",
      name: "La Roche-Posay Sunscreen SPF 50",
      description:
        "Broad-spectrum sunscreen for everyday UV protection.",
    },
  ]);

  return (
    <div className="skincare-container">
      <h1 className="title">🧴 Skincare Products</h1>

      <div className="card-container">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button>View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skincare;
