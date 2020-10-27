import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-iss">
        <a className="logo-mentali" href="#1">
          <img src="https://via.placeholder.com/200x50" alt="logo" />
        </a>
      </div>
      <ul className="navbar">
        <a className="navLink" href="#2">
          <li>ISS</li>
        </a>
        <a className="navLink" href="#2">
          <li>Galerie</li>
        </a>
        <a className="navLink" href="#2">
          <li>Rover in Mars</li>
        </a>
        <a className="navLink" href="#2">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
