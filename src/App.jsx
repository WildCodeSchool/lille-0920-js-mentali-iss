import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <main className="page-container">
      <div className="content-wrap" />
      <div className="item">
        <h1>Hello world !</h1>
      </div>
      <div className="item">
        <p>Welcome to your fresh, lightweight, React App ! &#127752;</p>
      </div>
      <div className="item">
        <p>
          Start in the <code>App.jsx</code> component !
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default App;
