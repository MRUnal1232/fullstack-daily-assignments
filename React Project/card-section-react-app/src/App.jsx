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
      <section className="movies">
        <div className="movie-card">
          <img src="https://i.pinimg.com/736x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg" alt="Interstellar" />
          <h3>Harry potter</h3>
          <p>A young wizard discovers his destiny while battling dark forces at a magical school called Hogwarts.</p>
          <button>View Details</button>
        </div>
    
        <div className="movie-card">
          <img src="https://i.pinimg.com/1200x/ae/be/de/aebedea565116005359ffa4b29344622.jpg" alt="Inception" />
          <h3>Jumanji</h3>
          <p>Four friends are pulled into a dangerous jungle game where survival depends on teamwork and courage.</p>
          <button>View Details</button>
        </div>

        <div className="movie-card">
          <img src="https://i.pinimg.com/736x/74/f6/87/74f687c316ea2304bc42611f818495f2.jpg" alt="The Dark Knight" />
          <h3>Tangled</h3>
          <p>A fearless princess with magical hair embarks on a thrilling adventure to discover the world beyond her tower.</p>
          <button>View Details</button>
        </div>

        <div className="movie-card">
          <img src="https://i.pinimg.com/1200x/c8/54/cc/c854ccce48c3dbbeb16a834046bce01c.jpg" alt="Avatar" />
          <h3>Spiderman</h3>
          <p>A teenager gains extraordinary powers and must protect the city while learning what it truly means to be a hero.</p>
          <button>View Details</button>
        </div>
      </section>
    </>
  );
}

export default App;
