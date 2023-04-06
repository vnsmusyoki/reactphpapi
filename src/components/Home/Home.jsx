import Footer from "../../features/Footer/Footer";
import Navbar from "../../features/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="flex">
        <div className="welcome-para">
          <div>
            <p className="primary-color">Terrazas de Guacuco</p>
            <p className="primary-color2">Best in Management. Ask Around!</p>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
