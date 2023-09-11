import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, area, population, cca3} = country;
    
    const[visited, setVisited] = useState(false);

    const handleVisited =() =>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}} >Name: {name?.common}</h3>
            <img className='flag' src={flags?.png} alt=""/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;