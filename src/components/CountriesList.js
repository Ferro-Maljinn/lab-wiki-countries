import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  const imgUrl = 'https://flagpedia.net/data/flags/icon/72x54/de.png';

  return (
    <div>
      {allCountries.map((elem) => {
        return (
          <div key={elem.alpha3Code}>
            <img
              src={imgUrl + elem.alpha2Code.toLowerCase() + '.png'}
              alt={elem.name.common}
            />
            <br></br>

            <Link to={elem.alpha3Code}>{elem.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
