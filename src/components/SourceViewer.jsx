import PropTypes from 'prop-types';
import React, { Component } from 'react';
import indent from 'utilities/indent';
import clipboard from 'utilities/clipboard';

class SourceViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ sourceHtml: indent(this.source.innerHTML) });
    }, 1);
  }
  render() {
    const { children } = this.props;
    const { sourceHtml } = this.state;

    return (
      <div>
        <h2>Component</h2>
        <div ref={(el) => { this.source = el; }}>
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

SourceViewer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SourceViewer;
