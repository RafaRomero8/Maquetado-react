import "./App.css";
// import "./query.css"
import firstMobile from "./assets/firstMobile.png";
import secondMobile from "./assets/second.png";
import therdMobile from "./assets/therd.png";
import Saly4 from "./assets/Sally-4.png";
import Saly6 from "./assets/Saly-6.png";
import logo from "./assets/Logo.png";
import fourthMobile from "./assets/phonePink.png";

function App() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header-nav">
            <img src={logo} alt="logo"></img>
            <nav className="menu">
              <ul>
                <li>
                  <a className="is-active" href="#main">
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
            <a href="https://www.google.com/" className="button">
              download app
            </a>
          </div>
          <section className="header-main">
            <div className="header-image">
              <img src={Saly4} alt="Sally-4"></img>
            </div>
            <div className="header-content">
              <h1>
                <span>Shopping App for Gadgets and Gifs</span>
              </h1>
              <p>
                Get 10% off your first order when you spend over £40 on any
                product!
              </p>
              <a href="https://www.google.com/" className="button">
                download app
              </a>
            </div>
          </section>
        </div>
      </header>

      <main className="main">
        <section className="section_first">
          <h3>How the app works</h3>
          <div className="section_first-description">
         
            <div className='section_first-desktop'>
        
            <h4>Create an account</h4>
            <h2>Discover original products</h2>
            <p>
              There are more than 950 categories updated daily based on trending
              websites reviews an users rating.
            </p>
            </div>
            <div className='circle_desktop'>
             </div>
            
            <img
              className="section_first-image"
              src={firstMobile}
              alt="first phone"
            ></img>
              
          </div>
        </section>
        <section className="section_second">
          <div className="section_second-description">
          <div className='circle_desktop-one'>
             </div>
             <div className='circle_desktop-two'>
             </div>
            <h2>Experience products in AR</h2>
            <p>
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item
            </p>
            <div className='circle_desktop-three'>
             </div>
            <div className="circle">
              <img
                className="section_second-image"
                src={secondMobile}
                alt="second phone"
              ></img>
            </div>
          </div>
          <div className="section_therd-description">
            <h4>Original platform</h4>

            <h2>Hottest deals around the web</h2>
            <p>
              Find the perfect gift or everyday goods right at your fingertips
            </p>
            <img
              className="section_therd-image"
              src={therdMobile}
              alt="first phone"
            ></img>
          </div>
          <div className="section_fourth-description"></div>
        </section>
        <section className="section_third">
          <h2>Save time & money with exclusive offers from top stores</h2>
          <img
            className="section_fourth-image"
            src={fourthMobile}
            alt="first phone"
          ></img>
        </section>

      </main>

      <footer className="footer">
        <div className="wrapper">
          <section className="footer-content">
            <div className="footer-description">
              <h1>
                Hey! Follow us on social media so you don’t miss any offer.
              </h1>
            </div>
            <div className="footer-image">
              <img src={Saly6} alt="saly-6"></img>
            </div>
          </section>
          <div className="copyright">
            <span>Copywright 2021</span> website.com
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
