import "./App.css";
import Bag from "./States/Bag";
import Header from "./Components/Header";
import About from "./Components/About";
import CaseStudies from "./Components/CaseStudies";
import Carousel from "./Components/Carousel";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  return (
    <body>
      <Bag children={<Header />} />
      <Bag children={<About />} />
      <Bag children={<CaseStudies />} />
      <Carousel />
      <Bag children={<Connect />} />
      <Bag children={<Footer />} />
    </body>
  );
}

export default App;
