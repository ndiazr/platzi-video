import React from 'react';
import Media from './Media';

import './Playlist.css';

const Playlist = (props) => {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return (
            <Media
              openModal={props.handleOpenModal}
              key={item.id}
              {...item}
            />
          )
        })
      }
    </div>
  )
}

export default Playlist;