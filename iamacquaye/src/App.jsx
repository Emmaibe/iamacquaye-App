import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Bag from "./States/Bag";
import HomePage from "./Components/HomePage";
import InfoPage from "./Components/InfoPage";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  return (
    <body>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>

      <Bag children={<Connect />} />

      <Bag children={<Footer />} />
    </body>
  );
}

export default App;
