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
        <div className="card">
          <div className="card-body" ref={(el) => { this.source = el; }}>
            {children}
          </div>
          <div className="card-footer">
            <pre>
              <code>
                {sourceHtml}
              </code>
            </pre>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => clipboard(sourceHtml)}
            >
              Copy HTML
            </button>
          </div>
        </div>
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
