import "./App.css";
import man from "./assets/Saly-19.png";
import logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header-content">
            <img src={logo} alt="logo"></img>
            <nav className="menu">
              <ul>
                <li>
                  <a class="is-active" href="#main">
                    home
                  </a>
                </li>
                <li>
                  <a href="#main">team</a>
                </li>
                <li>
                  <a href="#main">faq</a>
                </li>
                <li>
                  <a href="#main">contact</a>
                </li>
              </ul>
            </nav>
            <button class="button">download app</button>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section_first">
          <h3>How the app works</h3>
          <section className="section_first-container">
            <div className="section_first-back">
              <div className="section_first-gadget">
                <h3>Find your Gadget</h3>
                <img className="section_first-image" src={man}></img>
                <div className="section_first-blurred">
                  <button className="section_first-button">Get started</button>
                </div>
              </div>
            </div>
            <div className="section_first-description">
              <h4>Create an account</h4>
              <h2>Discover original products</h2>
              <p>
                There are more than 950 categories updated daily based on
                trending websites reviews an users rating.
              </p>
            </div>
          </section>
        </section>

        <section className="section_second">
          <h2>Experience products in AR</h2>
        </section>

        <section></section>

        <section></section>

        <section></section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
