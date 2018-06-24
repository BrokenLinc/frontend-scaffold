import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames';

import { clipboard, indent } from '../utilities';
import { Button } from 'app/components';

class SourceViewer extends Component {
  constructor(props) {
    super(props);

    this.toggleHTML = this.toggleHTML.bind(this);

    this.state = {
      isHTMLVisible: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ sourceHtml: indent(this.source.innerHTML) });
    }, 1);
  }
  toggleHTML() {
    this.setState({ isHTMLVisible: !this.state.isHTMLVisible });
  }
  render() {
    const { children, containerClassName, title, cardClassName } = this.props;
    const { sourceHtml, isHTMLVisible } = this.state;

    return (
      <div>
        {title && <h2>{title}</h2>}
        <div className={cn('card', cardClassName)}>
          <div
            className={cn('card-body', containerClassName || 'bg-almost-white')}
            ref={el => {
              this.source = el;
            }}
          >
            {children}
          </div>
          {isHTMLVisible && <div className="card-footer bg-white">
            <pre>
              <code>{sourceHtml}</code>
            </pre>
          </div>}
          <div className="card-footer bg-white">
            <Button size="sm mr-2" onClick={() => this.toggleHTML()}>
              {isHTMLVisible ? 'Hide' : 'View'} HTML
            </Button>
            <Button size="sm" onClick={() => clipboard(sourceHtml)}>
              Copy HTML
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

SourceViewer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string,
  containerClassName: PropTypes.string,
  cardClassName: PropTypes.string,
};

SourceViewer.defaultProps = {
  cardClassName: 'mb-12',
};

export default SourceViewer;
