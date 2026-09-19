import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

/* Fetch data */
const fetchBeer = async (setter, id) => {
    try {
        const { data } = await axios.get(`${API_URL}/beers/${id}`)
        setter(data)
    } catch (error) {
        console.log('Error fetching beer:', error)
    }
}

const BeerDetailsPage = () => {
    const { beerId } = useParams()
    const [oneBeer, setOneBeer] = useState(null)

    useEffect(() => {
        fetchBeer(setOneBeer, beerId)
    }, [beerId]);

    if(!oneBeer) {
        return <div>Loading...</div>
    }

    return (
        <div>
          <img src={oneBeer.image_url} alt={oneBeer.name} style={{ height: '200px' }} />
          <h1>{oneBeer.name}</h1>
          <p>{oneBeer.tagline}</p>
          <p>First Brewed: {oneBeer.first_brewed}</p>
          <p>Attenuation Level: {oneBeer.attenuation_level}</p>
          <p>Description: {oneBeer.description}</p>
          <p>Contributed by: {oneBeer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
