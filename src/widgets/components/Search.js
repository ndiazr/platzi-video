import React from 'react';
import './Search.css';
import { Prompt } from 'react-router';

const Search = (props) => {
  return (
    <form
      className="Search"
      onSubmit={props.handleSubmit}
    >
      <Prompt
        when={props.prompt}
        message="¿Estas seguro de querer salir de la pagina?"
      />
      <input
        ref={props.setRef}
        type="text"
        placeholder="Busca tu video favorito"
        className="Search-input"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  )
}

export default Search;