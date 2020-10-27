import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-iss">
        <a href="#1">
          <img
            className="logo-mentali"
            src="https://via.placeholder.com/200x50"
            alt="logo"
          />
        </a>
      </div>
      <ul className="navbar">
        <li>ISS</li>
        <li>Galerie</li>
        <li>Rover on Mars</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
