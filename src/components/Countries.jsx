import { useEffect, useState } from "react";
import Country from "./country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = counrty =>{
        console.log('Add this to your Visited Country');
        console.log(counrty);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
               <h4>Visited Countries: </h4>
               <ul>
                
               </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country =>
                    <Country key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;