//import logo image
import logo from "../assets/logo/Frame1.svg";

// button component
import { Button } from "../components/Button";

const Header = () => {
  return (
    <header className="container p-3 d-flex  justify-content-around">
      <a
        className="text-decoration-none text-white d-flex align-items-center"
        href="/"
      >
        <img src={logo} alt="logo" />
        <span className="ms-1">Room8</span>
      </a>

      <nav className="header-nav">
        <a className="mx-3 small text-white text-decoration-none" href="/">
          Home
        </a>
        <a className="mx-3 small text-white text-decoration-none" href="/about">
          About
        </a>
        <a
          className="mx-3 small text-white text-decoration-none"
          href="/properties"
        >
          Properties
        </a>
        <a
          className="mx-3 small text-white text-decoration-none"
          href="/agents"
        >
          Agents
        </a>
      </nav>

      <div className="header-btn">
        <Button
          btnStyle={{
            with: "93px",
            color: "#F56630",
            margin: "0 5px",
            padding: "3px 5px",
            fontSize: "12px",
            borderRadius: "5px",
            backgroundColor: "#1018280D",
            border: "solid 1px #F56630",
          }}
          value={"Log in"}
        />
        <Button
          btnStyle={{
            with: "93px",
            margin: "0 5px",
            padding: "3px 5px",
            color: "#ffffff",
            fontSize: "12px",
            borderRadius: "5px",
            backgroundColor: "#F56630",
            border: "solid 1px #F56630",
          }}
          value={"sign up"}
        />
      </div>
    </header>
  );
};

export default Header;
