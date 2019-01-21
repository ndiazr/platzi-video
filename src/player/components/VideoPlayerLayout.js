import React from 'react';

import './VideoPlayerLayout.css';

const VideoPlayerLayout = (props) => {
  return (
    <div
      className="VideoPlayer"
      ref={props.setRef}
    >
      {props.children}
    </div>
  )
}

export default VideoPlayerLayout;