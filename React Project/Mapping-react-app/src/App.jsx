import { useState } from "react";
import "./App.css";

function App() {
  const [movies] = useState([
    {
      banner:
        "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      title: "Avengers: Endgame",
      description:
        "After the devastating events of Infinity War, the Avengers assemble once more.",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    },
    {
      banner: "https://i.pinimg.com/736x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg",
      title: "Harry Potter",
      description:
        "An orphaned boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.",
      trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo"
    },

    {
      banner:
        "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg",
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to save humanity.",
      trailer: "https://www.youtube.com/watch/?v=zSWdZVtXT7E",
    },
    {
      banner:
        "https://i.pinimg.com/736x/c8/54/cc/c854ccce48c3dbbeb16a834046bce01c.jpg",
      title: "Spiderman",
      description:
        "With Spider-Man’s identity now revealed, Peter Parker asks Doctor Strange for help. When the spell goes wrong, dangerous foes from other worlds start to appear.",
      trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
    },
    {
      
      banner: "https://i.pinimg.com/1200x/ae/be/de/aebedea565116005359ffa4b29344622.jpg",
      title: "Jumanji: Welcome to the Jungle",
      description:
        "Four teenagers are sucked into a magical video game and must complete the adventure to escape.",
      trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I"
    },
  ]);

  return (
    <div className="container">
      <h1 className="main-title">🎬 Movie Trailers</h1>

      <div className="card-container">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie.banner} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>

            <a href={movie.trailer} target="_blank" rel="noreferrer">
              <button>Watch Trailer</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
