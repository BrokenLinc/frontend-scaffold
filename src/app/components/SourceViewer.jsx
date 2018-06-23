import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { indent, clipboard } from 'app/utilities';

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
    const { children, title } = this.props;
    const { sourceHtml } = this.state;

    return (
      <div>
        {title && <h4>{title}</h4>}
        <div className="card mb-12">
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
              className="sm outline btn"
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
  title: PropTypes.string,
};

export default SourceViewer;
