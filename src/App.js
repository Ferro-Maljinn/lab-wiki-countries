import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import allCountries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={allCountries} />
      <Routes>
        <Route
          path="/:alpha3Code"
          element={<CountryDetails allCountries={allCountries} />}
        ></Route>
      </Routes>
    </div>
  );
}


export default App;
