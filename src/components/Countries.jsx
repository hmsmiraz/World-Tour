import { useEffect, useState } from "react";
import Country from "./country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = counrty =>{
        console.log('Add this to your Visited Country');
        const newVisitedCountries = [...visitedCountries, counrty];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/*  display visited country names */}
            <div>
               <h4>Visited Countries: {visitedCountries.length}</h4>
               <ul>
                {
                    visitedCountries.map(counrty => <li key={counrty.cca3}>
                        {counrty.name.common}
                    </li>)
                }
               </ul>
            </div>

           <div className="flag-container">
            {
                visitedFlags.map((flag,idx) => 
                <img key={idx} src={flag}></img>)
            }
          </div> 
            <div className="country-container">
            {
                countries.map(country =>
                    <Country key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;