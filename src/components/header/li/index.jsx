import "./index.scss";
import { useState } from "react";

const Li = ({ title, href = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const setHover = () => setIsHovered(true);
  const unsetHover = () => setIsHovered(false);

  return (
    <li className="header__nav-ul-li">
      <a
        href={href}
        className={
          isHovered ? "header__nav-link Button" : "header__nav-link Body"
        }
        onMouseEnter={setHover}
        onMouseLeave={unsetHover}
        style={{
          transition: "all .3s",
        }}
      >
        {title}
      </a>
    </li>
  );
};

export default Li;
