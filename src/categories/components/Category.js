import React from 'react';
import Playlist from '../../playlist/components/Playlist'

import './Category.css';

const Category = (props) => {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <p className="Category-title">{props.title}</p>
      <Playlist
        playlist={props.playlist}
        handleOpenModal={props.handleOpenModal}
      />
    </div>
  )
}

export default Category;