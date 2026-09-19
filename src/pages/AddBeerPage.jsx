import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com';

const AddBeerPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [tagLine, setTagLine] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/beers/new`, {
        name,
        tagline: tagLine,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      });

      if (response.status === 200) {
        console.log('New beer created successfully!');
        navigate('/'); // Redirect to the home page after successful creation
      } else {
        console.log('Failed to create new beer:', response.status);
      }
    } catch (error) {
      console.log('Error creating new beer:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </label>
        <label>
          Brewer&apos;s Tips:
          <input
            type="text"
            name="brewers_tips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;
