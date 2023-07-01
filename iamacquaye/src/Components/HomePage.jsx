import "../HomePage.css";
import { Routes, Route, Link } from "react-router-dom";
import Bag from "../States/Bag";
import Header from "../Components/Header";
import About from "../Components/About";
import CaseStudies from "../Components/CaseStudies";
import Carousel from "../Components/Carousel";

function HomePage() {
  return (
    <>
      <Bag
        children={
          <Header
            homeTag={<Link to="/">EMEKA ACQUAYE</Link>}
            aboutTag={<Link to="/info">INFO</Link>}
          />
        }
      />
      <div className="container">
        <Bag children={<About />} />

        <Bag children={<CaseStudies />} />
      </div>
      <Carousel />
    </>
  );
}

export default HomePage;
