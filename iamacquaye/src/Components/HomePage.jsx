import "../HomePage.css";
import Bag from "../States/Bag";
import About from "../Components/About";
import CaseStudies from "../Components/CaseStudies";
import Carousel from "../Components/Carousel";

function HomePage() {
  return (
    <div>
      <Bag children={<About />} />

      <Bag children={<CaseStudies />} />

      <Carousel />
    </div>
  );
}

export default HomePage;
