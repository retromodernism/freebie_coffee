import "./index.scss";
import Li from "./li";
import logo from "./src/logo.png";
const Header = (props) => {
  return (
    <header className="header container">
      <div className="header__content">
        <a href="#" className="header__logo">
          <picture className="header__logo-picture">
            <source srcSet={logo} media="(min-width: 0)" />
            <img src="#" alt="" className="header__logo-img" />
          </picture>
        </a>
        <h1 className="header__title DisplayLarge">
          YOUR <span className="header__title-marked">PERSONALIZED</span> COFFEE
        </h1>
        <div className="header__img"></div>
      </div>
      <nav className="header__nav">
        <div className="header__nav-cart">
          <div className="header__nav-cart-icon"></div>
          <div className="header__nav-cart-count">2</div>
        </div>
        <ul className="header__nav-ul">
          <Li title="TRANG CHỦ" />
          <Li title="COFFEE" />
          <Li title="PHIN MẠ MÀU" />
          <Li title="COMBO PHIN PHÊ" />
          <Li title="GIFTSET" />
          <Li title="LIÊN HỆ" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
