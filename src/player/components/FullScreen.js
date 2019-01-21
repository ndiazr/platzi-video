import React from 'react';
import FullScreenIcon from '../../icons/components/FullScreen';

import './FullScreen.css';

const FullScreen = (props) => {
  return (
    <div
      className="FullScreen"
      onClick={props.handleFullScreenClick}
    >
      <FullScreenIcon
        color="white"
        size={25}
      />
    </div>
  )
}

export default FullScreen;