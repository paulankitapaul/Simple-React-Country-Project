import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries-Container.css'



const Countries = () => {
    const [countries, countriesCount] = useState([])
    const [ClickedCountries, setClikedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])


    const handleCountries = (country) => {
        const newVisitedCountries = [...ClickedCountries, country]
        setClikedCountries(newVisitedCountries)

    }
    const handleFlag = (flag) => {
        const newFlag = [...visitedFlags, flag]
        setVisitedFlags(newFlag)
    }


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => countriesCount(data))

    }, [])

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* to show the list of country */}
            <div>
                <h5>Visited countries:{ClickedCountries.length}</h5>
                <ul>
                    {
                        ClickedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* to show the list of flag */}
            <div className="flags-container">
                {
            visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
        }

            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca3} handleCountries={handleCountries} handleFlag={handleFlag} country={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;