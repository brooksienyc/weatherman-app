import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header';
import WeatherSearch from './Components/WeatherSearch';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <Header />
          <WeatherSearch />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
