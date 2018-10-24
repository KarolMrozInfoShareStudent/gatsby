import React from "react";
import Slider from "react-slick";

const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};

const Testimonials = () => (
  <section id="testimonials">
    <div className="text-container">
      <div className="row">
        <div className="two columns header-col" />
        <div className="ten columns">
          <h1>Cytaty z życia</h1>
          <ul>
            <Slider {...settings}>
              <li>
                <blockquote>
                  <p>
                  Programiście nie płaci sie za pisanie kodu tylko za rozwiązanie problemu.
                  </p>
                  <cite>Bartosz Cytrynowski</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  Wszystkie metody, które definiujemy w definicji klasy, będącej definicją komponentu, które nie są metodami cyklu życia komponentu,
                  definiujemy za pomocą arrow function, żeby mieć gwarancję, że `this` w ich obrębie zawsze wskazuje na instancję tej klasy (komponent).
                  </p>
                  <cite>Bartosz Cytrynowski</cite>
                </blockquote>
              </li>
              <li>
                <blockquote>
                  <p>
                  Ja: Nie ogarniam JS'a <b>:(</b> <br/>
                  P: Nie rozumiesz JS'a Karol ? <br/>
                  Ja: Nie <b>:( </b> <br/>
                  P: To musisz się go nauczyć :)
                  </p>
                  <cite>Paweł Mikołajczuk</cite>
                </blockquote>
              </li>
            </Slider>
          </ul>
        </div>
       
      </div>
    </div>
  </section>
);

export default Testimonials;
