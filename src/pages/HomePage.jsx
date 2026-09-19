import { Link } from 'react-router-dom';
import beerImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'

function HomePage() {
  return (
    <>
      <div className='homeContainer'>
        <img src={beerImg} alt={'beers image'} style={{ height: 'auto'}} />
       <div className='homeText'>
        <Link to='/beers' className='link'>All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div> 
      </div>
      <div className='homeContainer'>
        <img src={randomBeerImg} alt='random-beer image' />
        <Link to='/random-beer' className='link'>Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='homeContainer'>
        <img src={newBeerImg} alt='new beer image' />
        <Link to='/new-beer' className='link'>New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
  );
}

export default HomePage;



