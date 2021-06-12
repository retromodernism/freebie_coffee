import "swiper/swiper.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/pagination/pagination.scss";

import "./index.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination } from "swiper/core";
import img from "./src/giftset.png";
import { ReactComponent as Coffee } from "./src/coffee.svg";
import { ReactComponent as Mountain } from "./src/mountain.svg";

SwiperCore.use([EffectFlip, Pagination]);

const swiperOptions = {
  effect: "flip",
  flipEffect: {
    slideShadows: false,
  },
  slidesPerView: 1,
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' DisplayMedium">' + (index + 1) + "</span>";
    },
  },
};

const Giftset = (props) => {
  return (
    <section className="giftset container">
      <h3 className="giftset__h3 SubTitle">Best Gift For Best Friend</h3>
      <h2 className="giftset__h2 DisplayMedium">Giftset</h2>
      <div className="giftset__bg"></div>
      <Swiper className="giftset__swiper" {...swiperOptions}>
        <SwiperSlide className="giftset__swiper-slide" key={1}>
          <picture className="giftset__swiper-slide-picture">
            <source srcSet={img} media="(min-width: 0)" />
            <img src="#" className="giftset__swiper-slide-img" alt="" />
          </picture>
          <div className="giftset__swiper-slide-info">
            <div className="giftset__swiper-slide-info-price PriceProduct">
              285.000
            </div>
            <div className="giftset__swiper-slide-info-title Title">
              Giftset "Cà phê phin Việt Nam"
            </div>
            <div className="giftset__swiper-slide-info-p Body">
              Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
              cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ
              những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người
              làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho
              bạn.
            </div>
            <div className="giftset__swiper-slide-info-features">
              <div className="giftset__swiper-slide-info-features-item">
                <Coffee className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Loại hạt
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  Fine Robusta Blend
                </p>
              </div>
              <div className="giftset__swiper-slide-info-features-item">
                <Mountain className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Độ cao
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  700 - 800m
                </p>
              </div>
            </div>
            <div className="giftset__swiper-slide-info-footer">
              <div className="giftset__swiper-slide-info-button Button">
                MUA NGAY
              </div>
              <a href="#" className="product-card__link-details Button">
                CHI TIẾT
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="giftset__swiper-slide" key={1}>
          <picture className="giftset__swiper-slide-picture">
            <source srcSet={img} media="(min-width: 0)" />
            <img src="#" className="giftset__swiper-slide-img" alt="" />
          </picture>
          <div className="giftset__swiper-slide-info">
            <div className="giftset__swiper-slide-info-price PriceProduct">
              285.000
            </div>
            <div className="giftset__swiper-slide-info-title Title">
              Giftset "Cà phê phin Việt Nam"
            </div>
            <div className="giftset__swiper-slide-info-p Body">
              Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
              cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ
              những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người
              làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho
              bạn.
            </div>
            <div className="giftset__swiper-slide-info-features">
              <div className="giftset__swiper-slide-info-features-item">
                <Coffee className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Loại hạt
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  Fine Robusta Blend
                </p>
              </div>
              <div className="giftset__swiper-slide-info-features-item">
                <Mountain className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Độ cao
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  700 - 800m
                </p>
              </div>
            </div>
            <div className="giftset__swiper-slide-info-footer">
              <div className="giftset__swiper-slide-info-button Button">
                MUA NGAY
              </div>
              <a href="#" className="product-card__link-details Button">
                CHI TIẾT
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="giftset__swiper-slide" key={1}>
          <picture className="giftset__swiper-slide-picture">
            <source srcSet={img} media="(min-width: 0)" />
            <img src="#" className="giftset__swiper-slide-img" alt="" />
          </picture>
          <div className="giftset__swiper-slide-info">
            <div className="giftset__swiper-slide-info-price PriceProduct">
              285.000
            </div>
            <div className="giftset__swiper-slide-info-title Title">
              Giftset "Cà phê phin Việt Nam"
            </div>
            <div className="giftset__swiper-slide-info-p Body">
              Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo
              cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ
              những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người
              làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho
              bạn.
            </div>
            <div className="giftset__swiper-slide-info-features">
              <div className="giftset__swiper-slide-info-features-item">
                <Coffee className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Loại hạt
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  Fine Robusta Blend
                </p>
              </div>
              <div className="giftset__swiper-slide-info-features-item">
                <Mountain className="giftset__swiper-slide-info-features-item-ico" />
                <p className="giftset__swiper-slide-info-features-item-p Body">
                  Độ cao
                </p>
                <p className="giftset__swiper-slide-info-features-item-p giftset__swiper-slide-info-features-item-p_b Body">
                  700 - 800m
                </p>
              </div>
            </div>
            <div className="giftset__swiper-slide-info-footer">
              <div className="giftset__swiper-slide-info-button Button">
                MUA NGAY
              </div>
              <a href="#" className="product-card__link-details Button">
                CHI TIẾT
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Giftset;
