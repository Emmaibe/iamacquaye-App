import CSStates from "../States/CaseStudiesStates";

function CaseStudies() {
  const name = {
    laze: "laze card",
    karotii: "karotii card",
    renee: "renee card",
    blox: "blox card",
    geng: "geng card",
    eni: "eni card",
    being: "being card",
    amani: "amani card",
  };

  const Name = {
    laze: "Laze",
    karotti: "Karotii",
    renee: <span>Renee&#769; PR</span>,
    blox: "Blox",
    geng: "The Geng",
    eni: "Eni",
    being: "Being",
    amani: "Amani",
  };

  const behanceL = {
    laze: "https://www.behance.net/gallery/153895001/Laze-Brand-Identity",
    karotii:
      "https://www.behance.net/gallery/161616971/Karotii-Studio-Brand-Identity",
    renee: "https://www.behance.net/gallery/164128301/Rene-Brand-Identity",
    blox: "",
    geng: "",
    eni: "",
    being: "",
    amani: "https://www.behance.net/gallery/142965347/Amani-Brand-Identity",
  };

  const imgs = {
    laze: "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684451418/Laze_card_quicmo.jpg",
    karotii:
      "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684451418/karotii_laimbw.jpg",
    renee:
      "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684451419/renee_tttxel.jpg",
    blox: "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684519730/Blox_zltf0k.jpg",
    geng: "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684568522/Geng_lt4qom.jpg",
    eni: "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684450857/eni_w0dzhk.jpg",
    being:
      "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684450857/being_ub5gaw.jpg",
    amani:
      "https://res.cloudinary.com/dxrfj6vel/image/upload/v1684450858/Amani_device_n8ofzi.jpg",
  };

  return (
    <article>
      <section class="two-columns">
        <CSStates
          name={name.laze}
          bLink={behanceL.laze}
          cardImg={imgs.laze}
          name2={Name.laze}
        />

        <CSStates
          name={name.karotii}
          bLink={behanceL.karotii}
          cardImg={imgs.karotii}
          name2={Name.karotti}
        />
      </section>

      <section class="two-columns">
        <CSStates
          name={name.renee}
          bLink={behanceL.renee}
          cardImg={imgs.renee}
          name2={Name.renee}
        />

        <CSStates
          name={name.blox}
          bLink={behanceL.blox}
          cardImg={imgs.blox}
          name2={Name.blox}
        />
      </section>

      <section class="two-columns">
        <CSStates
          name={name.geng}
          bLink={behanceL.geng}
          cardImg={imgs.geng}
          name2={Name.geng}
        />

        <CSStates
          name={name.eni}
          bLink={behanceL.eni}
          cardImg={imgs.eni}
          name2={Name.eni}
        />
      </section>

      <section class="two-columns">
        <CSStates
          name={name.being}
          bLink={behanceL.being}
          cardImg={imgs.being}
          name2={Name.being}
        />

        <CSStates
          name={name.amani}
          bLink={behanceL.amani}
          cardImg={imgs.amani}
          name2={Name.amani}
        />
      </section>
    </article>
  );
}

export default CaseStudies;
