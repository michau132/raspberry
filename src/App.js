import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ModalSwitch from './containers/ModalSwitch';

const App = () => (
  <HashRouter>
    <Route component={ModalSwitch} />
  </HashRouter>
);

export default App;
