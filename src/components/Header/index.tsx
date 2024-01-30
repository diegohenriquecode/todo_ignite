import "./styles.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header_background">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export { Header };
