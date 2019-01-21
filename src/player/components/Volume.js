import React from 'react';
import VolumeIcon from '../../icons/components/Volume';

import './Volume.css';

const Volume = (props) => {
  return (
    <button className="Volume">
      <VolumeIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;