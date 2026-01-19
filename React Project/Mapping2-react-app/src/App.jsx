import { useState } from "react";
import "./App.css";

function App() {
  const [makeupProducts] = useState([
    {
      image:
        "https://i.pinimg.com/736x/61/7a/42/617a4268b07bf1343373c9a9ecc2e311.jpg",
      name: "Maybelline Fit Me Foundation",
      description:
        "Lightweight foundation that matches skin tone and gives a natural finish.",
      shade: "Warm Nude",
      price: 499,
      rating: "4.6",
      type: "Foundation",
    },
    {
      image:
        "https://i.pinimg.com/736x/dc/95/99/dc95992247494cea136acab128c0e13b.jpg",
      name: "Lakme 9 to 5 Lipstick",
      description:
        "Long-lasting creamy lipstick with vibrant color.",
      shade: "Red Wine",
      price: 375,
      rating: "4.5",
      type: "Lipstick",
    },
    {
      image:
        "https://i.pinimg.com/1200x/88/d5/04/88d50427ee89572f9e3146bc8a410a20.jpg",
      name: "L'Oréal Volumizing Mascara",
      description:
        "Gives longer, thicker lashes with intense black finish.",
      shade: "Black",
      price: 449,
      rating: "4.7",
      type: "Mascara",
    },
    {
      image:
        "https://i.pinimg.com/736x/9a/c5/bc/9ac5bcf03ceb26e00a6082bb2ec07917.jpg",
      name: "Swiss Beauty Eyeshadow Palette",
      description:
        "Multi-shade palette perfect for daily and party makeup looks.",
      shade: "Nude",
      price: 299,
      rating: "4.4",
      type: "Eyeshadow",
    },
    {
      image:
        "https://i.pinimg.com/1200x/c8/5b/c8/c85bc8020279c9e9625bcc650fe01efc.jpg",
      name: "Nykaa Compact Powder",
      description:
        "Oil-control compact powder with matte finish.",
      shade: "Ivory",
      price: 249,
      rating: "4.3",
      type: "Compact",
    },
  ]);

  return (
    <div className="makeup-container">
      <h1 className="title">💄 Makeup Products</h1>

      <div className="card-container">
        {makeupProducts.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <div className="info">
              <span>💋 {item.type}</span>
              <span>🎨 {item.shade}</span>
              <span>⭐ {item.rating}</span>
            </div>

            <h3 className="price">₹{item.price}</h3>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
