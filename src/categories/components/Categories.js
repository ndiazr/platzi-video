import React from 'react';
import Category from './Category';
import Search from '../../widgets/containers/Search';

import './Categories.css';

const Categories = (props) => {
  return (
    <div className="Categories">
      <Search />
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;