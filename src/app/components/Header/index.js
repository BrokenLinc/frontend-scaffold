import React, { Component } from 'react';

import HeaderDisplay from './HeaderDisplay';
import { publicMenuProps } from './menuProps';

class Header extends Component {
  render() {
    return <HeaderDisplay {...publicMenuProps} />;
  }
}

export default Header;
