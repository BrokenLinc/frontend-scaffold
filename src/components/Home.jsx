import React from 'react';
import { hot } from 'react-hot-loader'

import Button from 'components/Button';
import SourceViewer from 'components/SourceViewer';

const Home = () => (
  <div>
    <SourceViewer>
      <Button/>
    </SourceViewer>
  </div>
);

export default hot(module)(Home);
