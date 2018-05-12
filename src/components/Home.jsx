import React from 'react';

import Button from 'components/Button';
import SourceViewer from 'components/SourceViewer';

const Home = () => (
  <div className="container p-content">
    <SourceViewer>
      <Button />
    </SourceViewer>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" className="form-text text-muted">
        We&rsquo;ll never share your email with anyone else.
      </small>
    </div>
    <div className="alert is-gray">Custom alert</div>
    <button className="btn is-green is-outline">Success Button</button>
    <button className="btn is-green">Success Button</button>
  </div>
);

export default Home;
