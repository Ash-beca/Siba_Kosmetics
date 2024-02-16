import React from 'react';
import './Homepage.css';
import Button from '../components/Button/Button';

const HomePage = () => {
  return (
    <section>
      <div className='home'>
        <p className='home-text'>
          Say goodbye to the hassle of hopping from one store to another in search of the perfect beauty products. At SibaK, discover an extensive collection of glamorous
          cosmetics, available in various shades and styles, all at your fingertips with just a few clicks.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default HomePage;
