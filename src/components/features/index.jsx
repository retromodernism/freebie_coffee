import "./index.scss";
import { ReactComponent as Feature1 } from "./src/feature1.svg";
import { ReactComponent as Feature2 } from "./src/feature2.svg";
import { ReactComponent as Feature3 } from "./src/feature3.svg";
import { ReactComponent as Feature4 } from "./src/feature4.svg";

const Features = (props) => {
  return (
    <section className="features container">
      <h3 className="feature__h3 SubTitle">Your Personalized Coffee</h3>
      <h2 className="features__h2 DisplayMedium">Coffee Build Your Base</h2>
      <div className="features__items">
        <div className="features__item" key={1}>
          <Feature1 className="features__item-img" />
          <h4 className="features__item-title Title">Nguồn gốc</h4>
          <p className="features__item-p Body">
            Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn
            quốc tế.
          </p>
        </div>
        <div className="features__item" key={2}>
          <Feature2 className="features__item-img" />
          <h4 className="features__item-title Title">Chất lượng</h4>
          <p className="features__item-p Body">
            Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ
            nhân cà phê.
          </p>
        </div>
        <div className="features__item" key={3}>
          <Feature3 className="features__item-img" />
          <h4 className="features__item-title Title">Các loại hạt</h4>
          <p className="features__item-p Body">
            70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green
            bean.
          </p>
        </div>
        <div className="features__item" key={4}>
          <Feature4 className="features__item-img" />
          <h4 className="features__item-title Title">Pha chế</h4>
          <p className="features__item-p Body">
            Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và
            nghiêm ngặt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
