import React from 'react';

import Button from 'app/components/Button';
import SourceViewer from 'app/components/SourceViewer';

const Home = () => (
  <div className="container p-content">
    <h1>Pile-o-Junk</h1>
    <p>This page is a holding pen for work in progress until it has a dedicated page.</p>

    <SourceViewer title="Buttons">
      <Button />
      <Button outline />
      <Button color="green" />
      <Button color="green" outline />
    </SourceViewer>

    <SourceViewer title="Form Group">
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
    </SourceViewer>

    <SourceViewer title="Alerts">
      <div className="alert">Lorem ipsum dolor sit amet.</div>
      <div className="alert is-green">Lorem ipsum dolor sit amet.</div>
      <div className="alert is-yellow">Lorem ipsum dolor sit amet.</div>
      <div className="alert is-red">Lorem ipsum dolor sit amet.</div>
    </SourceViewer>
  </div>
);

export default Home;
