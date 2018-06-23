import React from 'react';
import ReactDOM from 'react-dom';

import 'app/less/style.less';
import AppRouter from 'app/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('react-app')
);
