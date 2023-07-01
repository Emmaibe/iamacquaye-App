import "../Info.css";
import Bag from "../States/Bag";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Components/Header";

function InfoPage() {
  return (
    <div>
      <Bag
        children={
          <Header
            homeTag={<Link to="/">EMEKA ACQUAYE</Link>}
            aboutTag={<Link to="/">WORK</Link>}
          />
        }
      />
      <div className="container">
        <section className="infoSection">
          <h1>
            Presently curious on how to craft identities systems that help
            brands thrive.
          </h1>
        </section>

        <hr />

        <article class="twoColumns process info-article">
          <h2>Process</h2>
          <p>
            An Identity serves one major purpose; to Identify. Our approach is
            to take a brand story and craft a narrative through forms and shapes
            to give birth to an artisanal beauty of and identification. Having a
            strategy-first approach to our branding work, we always seek to
            understand, define and solve before we make or create. This approach
            means our identities are designed to position companies in a unique
            place in a consumer's, making them memorable, lovable and relatable.
          </p>
        </article>

        <hr />

        <article class="twoColumns info-article">
          <h2>Services</h2>
          <div>
            <h3>Strategy</h3>
            <p>
              Brand/Message Discovery Design
              <br />
              Research and Insight <br />
              Stakeholder Workshops
            </p>
            <br />
            <h3>Design</h3>
            <p>
              Branding & Identity
              <br />
              Motion Design <br />
              Digital Design (UI/UX) <br />
              Packaging Design <br />
              Graphic Design <br />
              Merchandise/Collateral Design
            </p>
          </div>
        </article>

        <hr />

        <figure>
          <img
            src="https://res.cloudinary.com/dxrfj6vel/image/upload/v1684670804/EA_aukc4d.png"
            alt=""
          />
          <div class="picture-tag">
            <h3>Emeka Acquaye</h3>
            <p>Lead Designer</p>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default InfoPage;
