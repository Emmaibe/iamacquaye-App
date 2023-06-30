import "./App.css";
import Bag from "./States/Bag";
import Header from "./Components/Header";
import About from "./Components/About";
import CaseStudies from "./Components/CaseStudies";

function App() {
  return (
    <body>
      <Bag children={<Header />} />
      <Bag children={<About />} />
      <Bag children={<CaseStudies />} />
    </body>
  );
}

export default App;
