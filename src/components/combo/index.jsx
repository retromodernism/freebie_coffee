import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Truncate from "react-truncate";

import combo1 from "./src/combo1.png";
import combo2 from "./src/combo2.png";
import combo3 from "./src/combo3.png";
import combo4 from "./src/combo4.png";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import "./index.scss";

SwiperCore.use([Navigation]);

const swiperOptions = {
  slidesPerView: 4,
  navigation: true,
  spaceBetween: 25,
  loop: true,
};

const Combo = (props) => {
  return (
    <section className="combo container">
      <h3 className="combo__h3 SubTitle">Your Personalized Coffee</h3>
      <h2 className="combo__h2 DisplayMedium">COMBO PHIN PHÊ</h2>
      <div className="combo__bg"></div>
      <Swiper className="combo__swiper" {...swiperOptions}>
        <SwiperSlide className="combo__swiper-slide" key={1}>
          <div className="combo__swiper-slide-card combo-card">
            <picture className="combo-card__picture">
              <source media="(min-width: 0)" srcSet={combo1} />
              <img src="#" className="combo-card__img" alt="" />
            </picture>
            <div className="combo-card__info">
              <div className="combo-card__info-prices">
                <div className="combo-card__info-price PriceProduct">
                  147.000
                </div>
                <div className="combo-card__info-old-price">155.000</div>
              </div>
              <div className="combo-card__info-title Title">
                Combo Revo Đậm Đà
              </div>
              <p className="combo-card__info-p Body">
                <Truncate lines={2}>
                  Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
                  táo làm việc...Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
                  làm bạn tỉnh táo làm việc...
                </Truncate>
              </p>
              <div className="combo-card__info-footer">
                <div className="combo-card__info-footer-button Button">
                  MUA NGAY
                </div>
                <a href="#" className="combo-card__info-footer-a Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="combo__swiper-slide" key={2}>
          <div className="combo__swiper-slide-card combo-card">
            <picture className="combo-card__picture">
              <source media="(min-width: 0)" srcSet={combo2} />
              <img src="#" className="combo-card__img" alt="" />
            </picture>
            <div className="combo-card__info">
              <div className="combo-card__info-prices">
                <div className="combo-card__info-price PriceProduct">
                  147.000
                </div>
                <div className="combo-card__info-old-price">155.000</div>
              </div>
              <div className="combo-card__info-title Title">
                Combo Revo Đậm Đà
              </div>
              <p className="combo-card__info-p Body">
                <Truncate lines={2}>
                  Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
                  táo làm việc...Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
                  làm bạn tỉnh táo làm việc...
                </Truncate>
              </p>
              <div className="combo-card__info-footer">
                <div className="combo-card__info-footer-button Button">
                  MUA NGAY
                </div>
                <a href="#" className="combo-card__info-footer-a Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="combo__swiper-slide" key={3}>
          <div className="combo__swiper-slide-card combo-card">
            <picture className="combo-card__picture">
              <source media="(min-width: 0)" srcSet={combo3} />
              <img src="#" className="combo-card__img" alt="" />
            </picture>
            <div className="combo-card__info">
              <div className="combo-card__info-prices">
                <div className="combo-card__info-price PriceProduct">
                  147.000
                </div>
                <div className="combo-card__info-old-price">155.000</div>
              </div>
              <div className="combo-card__info-title Title">
                Combo Revo Đậm Đà
              </div>
              <p className="combo-card__info-p Body">
                <Truncate lines={2}>
                  Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
                  táo làm việc...Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
                  làm bạn tỉnh táo làm việc...
                </Truncate>
              </p>
              <div className="combo-card__info-footer">
                <div className="combo-card__info-footer-button Button">
                  MUA NGAY
                </div>
                <a href="#" className="combo-card__info-footer-a Button">
                  CHI TIẾT
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="combo__swiper-slide" key={4}>
          <div className="combo__swiper-slide-card combo-card">
            <picture className="combo-card__picture">
              <source media="(min-width: 0)" srcSet={combo4} />
              <img src="#" className="combo-card__img" alt="" />
            </picture>
            <div className="combo-card__info">
              <div className="combo-card__info-prices">
                <div className="combo-card__info-price PriceProduct">
                  147.000
                </div>
                <div className="combo-card__info-old-price">155.000</div>
              </div>
              <div className="combo-card__info-title Title">
                Combo Revo Đậm Đà
              </div>
              <p className="combo-card__info-p Body">
                <Truncate lines={2}>
                  Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh
                  táo làm việc...Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để
                  làm bạn tỉnh táo làm việc...
                </Truncate>
              </p>
              <div className="combo-card__info-footer">
                <div className="combo-card__info-footer-button Button">
                  MUA NGAY
                </div>
                <a href="#" className="combo-card__info-footer-a Button">
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

export default Combo;
