import React from 'react';
import { hot } from 'react-hot-loader'

import Button from 'components/Button';
import SourceViewer from 'components/SourceViewer';

const Home = () => (
  <div className="perimeter">
    <header className="header">
      <button>Menu</button>
    </header>
    <nav className="nav">Menu</nav>
    <SourceViewer>
      <Button/>
    </SourceViewer>
    <footer className="footer">Footer</footer>
  </div>
);

export default hot(module)(Home);
