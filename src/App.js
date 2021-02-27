import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <header className="head-title">
          <header className="header">
            <h1 className="Vegetables">Vegetables</h1>
            <a href="#" className="button">
              <img src="../images/btn_facebook.jpg" />
            </a>
            <a href="#" className="button">
              <img src="../images/btn_instagram.jpg" />
            </a>
            <div className="line"></div>
            <a href="#" className="bt">
              LOGIN
            </a>
            <a href="#" className="bt">
              JOIN
            </a>
          </header>
        </header>

        <div className="nav_bar">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#" className="nav-list-item-link" id="Home">
                  Home
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-item-link" id="About-us">
                  About Us
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-item-link" id="Vegetables">
                  Vegatables
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-item-link" id="Online">
                  Online
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-list-item-link" id="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content-main">
          <article className="main-area">
            <img
              src="../images/img_main_pumpkin.jpg"
              className="img_main_pumpkin"
            />
          </article>

          <div className="content-aside">
            <aside className="aside_vegetables">
              <h1 className="aside-box">Vegatables</h1>
              <div className="photos">
                <img src="../images/img_vegetables_pepper.jpg" />
                <img src="../images/img_vegetables_carrot.jpg" />
                <img src="../images/img_vegetables_corn.jpg" />
              </div>
            </aside>

            <aside className="aside_contact">
              <h1 className="aside-box">Contact</h1>
              <div className="contact_box">
                <p className="contact_text" id="p1">
                  For any questions or suggestions about Vegetables, Vegetables
                  Club or your online order you can contact Vegetables Customer
                  Service by phone, email or post and we’ll be happy to help.
                </p>
                <div className="contact_line"></div>
                <p className="contact_text" id="p2">
                  E-mail : Vegetables@aaabbccc.com
                  <br></br>PHONE : +886-123-456-789
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </div>
  );
}

export default App;
