import './App.css';
import iss from '../public/photos/iss.jpg';
import galerie from '../public/photos/galerie.jpg';

function App() {
  return (
    <div className="App">
      <div className="pageOption">
        <a href="#b" className="option" data-inf="photo">
          <img src={iss} className="image" id="iss" alt="ISS" />
          <h4>ISS</h4>
        </a>
        <a href="#b" className="option" data-inf="cinema">
          <img src={galerie} className="image" id="galerie" alt="galerie" />
          <h3>Galerie</h3>
        </a>
      </div>
    </div>
  );
}

export default App;
