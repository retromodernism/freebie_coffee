import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import coffee1 from "./src/coffee1.png";
import coffee2 from "./src/coffee2.png";
import coffee3 from "./src/coffee3.png";
import coffee4 from "./src/coffee4.png";
import coffee5 from "./src/coffee5.png";
import coffee6 from "./src/coffee6.png";

SwiperCore.use([Navigation]);

const swiperOptions = {
  slidesPerView: 3,
  loop: true,
  navigation: true,
};

const Coffee = (props) => {
  return (
    <section className="coffee container">
      <h3 className="coffee__h3 SubTitle">Choose Your Favorite</h3>
      <h2 className="coffee__h2 DisplayMedium">CHUẨN GU ĐÚNG VỊ</h2>
      <div className="coffee__bg"></div>
      <Swiper className="coffee__swiper" {...swiperOptions}>
        <SwiperSlide className="coffee__swiper-slide" key={1}>
          <div className="coffee__swiper-slide-product product-card" key={1}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee1} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">99.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
          <div className="coffee__swiper-slide-product product-card" key={2}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee2} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">139.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="coffee__swiper-slide" key={2}>
          <div className="coffee__swiper-slide-product product-card" key={3}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee3} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">85.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
          <div className="coffee__swiper-slide-product product-card" key={4}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee4} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">75.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="coffee__swiper-slide" key={3}>
          <div className="coffee__swiper-slide-product product-card" key={5}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee5} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">195.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
          <div className="coffee__swiper-slide-product product-card" key={6}>
            <picture className="product-card__picture">
              <source media="(min-width: 0)" srcSet={coffee6} />
              <img src="#" alt="" className="product-card__img" />
            </picture>
            <div className="product__card-info">
              <div className="product-card__price PriceProduct">169.000</div>
              <h4 className="product-card__title Title">REVO Morning</h4>
              <p className="product-card__p Body">đắng, hậu ngọt, hương hoa </p>
              <div className="product-card__footer">
                <button className="product-card__button Button">
                  MUA NGAY
                </button>
                <a href="#" className="product-card__link-details Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Coffee;
