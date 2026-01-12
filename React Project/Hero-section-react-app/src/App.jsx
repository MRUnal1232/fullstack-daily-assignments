import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">MyWebsite</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Movies</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
        </nav>

        <button className="login-btn">Login</button>
      </header>
      <section className="hero">
        <div className="hero-image">
          <img
            src="https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
            alt="Interstellar Movie Poster"
          />
        </div>

        <div className="hero-text">
          <h1>Interstellar</h1>
          <p>
            Interstellar is a science fiction epic directed by Christopher Nolan.
            The story follows astronauts traveling through a wormhole in search
            of a new home for humanity while exploring time, space, and love.
          </p>
          <button className="hero-btn">Watch Trailer</button>
        </div>
      </section>
    </>
  );
}

export default App;
