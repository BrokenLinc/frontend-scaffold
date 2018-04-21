import 'less/style.less';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'components/Home';

const renderApplication = () => {
  ReactDOM.render(
    <Home /> ,
    document.getElementById('react-app')
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept('components/Home', () => {
    renderApplication();
  });
}
