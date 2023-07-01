import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Bag from "./States/Bag";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import InfoPage from "./Components/InfoPage";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  return (
    <body>
      <Bag
        children={
          <Header
            homeTag={<Link to="/">EMEKA ACQUAYE</Link>}
            aboutTag={<Link to="/IamAcquaye/INFO">INFO</Link>}
          />
        }
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/IamAcquaye/INFO" element={<InfoPage />} />
      </Routes>

      <Bag children={<Connect />} />

      <Bag children={<Footer />} />
    </body>
  );
}

export default App;
