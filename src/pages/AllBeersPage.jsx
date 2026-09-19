import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com";

const AllBeersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      const url = searchQuery
        ? `${API_URL}/beers/search?q=${encodeURIComponent(searchQuery)}`
        : `${API_URL}/beers`;

      try {
        const { data } = await axios.get(url);
        setBeers(data);
      } catch (error) {
        console.log("Failed to fetch beers:", error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  return (
    <>
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search for beers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {beers.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default AllBeersPage;
