import React from 'react';
import Category from './Category';
import Search from '../../widgets/containers/Search';
import Media from '../../playlist/components/Media';

import './Categories.css';

const Categories = (props) => {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map((item) => {
          return item.map((item) => {
            return (
              <Media
                key={item.id}
                {...item}
              />
            )
          })
        })
      }
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