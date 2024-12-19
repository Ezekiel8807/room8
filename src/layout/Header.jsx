import { Button } from "../components/Button";

const Header = () => {
  return (
    <header className="header-logo">
      <a href="">Room8</a>

      <nav className="header-nav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Properties</a>
        <a href="">Agents</a>
      </nav>

      <div className="header-btn">
        <Button
          btnStyle={{
            with: "93px",
            color: "#F56630",
          }}
          value={"Log in"}
        />
      </div>
    </header>
  );
};

export default Header;
