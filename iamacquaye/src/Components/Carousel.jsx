import CarouselState from "../States/CarouselState";

function Carousel() {
  const display = "SHOWREEL";
  return (
    <article>
      <section class="carousel-section">
        <div class="carousel">
          <a href="">
            <div class="slider">
              <CarouselState display={display} />
              <CarouselState display={display} />
              <CarouselState display={display} />
              <CarouselState display={display} />
              <CarouselState display={display} />
            </div>
          </a>
        </div>
      </section>
    </article>
  );
}

export default Carousel;
