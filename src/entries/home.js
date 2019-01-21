import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
//import Playlist from '../playlist/components/Playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');
//const holaMundo = <h1>Hola Mundo!</h1>;

render(<Home data={data}/>,homeContainer);
