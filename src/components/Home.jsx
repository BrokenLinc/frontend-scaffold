import React from 'react';
import Button from 'components/Button';
import SourceViewer from 'components/SourceViewer';
import { hot } from 'react-hot-loader'

const Home = () => (
  <div>
    <SourceViewer>
      <Button/>
    </SourceViewer>
  </div>
);

export default hot(module)(Home);
