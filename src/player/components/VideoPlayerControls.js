import React from 'react';

import './VideoPlayerControls.css';

const VideoPlayerControls = (props) => {
  return (
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default VideoPlayerControls;