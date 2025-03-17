import { Link } from "react-router-dom";

import GradientText from "../gradientText/GradientText";

const Logo = () => {
  return (
    <div className="container">
      <Link to="/">
        <GradientText>Filmify</GradientText>
      </Link>
    </div>
  );
};

export default Logo;
