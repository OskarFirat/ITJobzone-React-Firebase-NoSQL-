import React, { Component } from 'react';
import Karusel from './components/karusel/Karusel.js';
import Forsteelement from './components/forsteelement/Forstelement.js';
import Tjenester from './components/tjenester/Tjenester.js';
import Priser from './components/priser/Priser.js';
import OmITJOBZONE from './components/omITJOBZONE/omITJOBzone.js';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Karusel/>
          <Forsteelement/>
          <Tjenester/>
          <Priser/>
          <OmITJOBZONE/>
      </div>
    )
  }
}

