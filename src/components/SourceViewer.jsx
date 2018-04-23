import React, { Component } from 'react';
import indent from 'utilities/indent';
import clipboard from 'utilities/clipboard';

class SourceViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({ sourceHtml: indent(this.source.innerHTML) });
  }
  render() {
    const { children } = this.props;
    const { sourceHtml } = this.state;

    return (
      <div>
        <h2>Component</h2>
        <div ref={el => this.source = el}>
          {children}
        </div>
        <pre>
          <code>
            {sourceHtml}
          </code>
        </pre>
        <button className="ghost-button" type="button" onClick={() => clipboard(sourceHtml)}>Copy HTML</button>
      </div>
    );
  }
}

export default SourceViewer;
