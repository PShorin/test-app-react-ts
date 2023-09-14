import React from 'react';
import './Pentagon.scss';

const buttonsText : string[] = ['360p', '720p', 'HD', 'Full HD', '4k'];

const Pentagon = () => {
  return (
    <div className="pentagon">
      <div className='pentagon-text'>
        <p className='medium24x32'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean facilisis ultrices erat nec feugiat. 
          Nullam fringilla dignissim nisl non lobortis. 
          Fusce ornare leo at odio.
        </p>
      </div>

      <div className={`row justify-space-between`}>
        {buttonsText.map((text, index) => (
          <button key={index}>
            <p className='medium14x16'>{text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pentagon;
