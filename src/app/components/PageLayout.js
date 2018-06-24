import React, { Component } from 'react';

import { Header, Footer } from './';

class PageLayout extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-grow-1 pt-header">
        <Header />
        <div className="p-content-lg flex-grow-1">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default PageLayout;
