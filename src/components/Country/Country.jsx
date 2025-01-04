import { useState } from 'react';
import '../Countries/Countries.css'
const Country = ({ country, handleCountries }) => {
    console.log("Adddedd")
    console.log(country)
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)

    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'
            }`}>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p>Area:{area}</p>
            <p><small>code:{cca3}</small></p>
            <button onClick={() => handleCountries(country)}>Visited-List</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'Done visiting' : 'I want to visit'}
        </div>
    );
};

export default Country;