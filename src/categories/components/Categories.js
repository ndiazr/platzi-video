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
          return (
            <Media
              openModal={props.handleOpenModal}
              key={item.get('id')}
              {...item.toJS()}
            />
          )
        })
      }
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;