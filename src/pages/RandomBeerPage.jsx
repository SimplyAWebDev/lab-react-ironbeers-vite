import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

/* Fetch data */
const fetchRandomBeer = async (setter) => {
  try {
    const { data } = await axios.get(`${API_URL}/beers/random`);
    setter(data);
  } catch (error) {
    console.log('Error fetching random beer:', error);
  }
};

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    fetchRandomBeer(setRandomBeer);
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ height: '200px' }} />
      <h1>{randomBeer.name}</h1>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
