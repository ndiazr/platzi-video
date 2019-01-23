import React from 'react';
import MediaContainer from '../containers/Media';

import './Playlist.css';

const Playlist = (props) => {
  return (
    <div className="Playlist">
      {
        props.playlist.map((mediaId) => {
          return (
            <MediaContainer
              openModal={props.handleOpenModal}
              key={mediaId}
              id={mediaId}
            />
          )
        })
      }
    </div>
  )
}

export default Playlist;