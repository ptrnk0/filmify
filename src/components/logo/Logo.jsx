import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={`text-primary text-5xl uppercase ${className}`}>
      Filmify
    </Link>
  );
};

export default Logo;
