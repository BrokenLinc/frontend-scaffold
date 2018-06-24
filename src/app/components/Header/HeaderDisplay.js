/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ROUTE } from 'app/constants';

const renderMenuItems = items =>
  map(items, ({ path, title, submenu }, index) => (
    <li key={index}>
      <Link to={path()}>{title}</Link>
      {submenu &&
        submenu.items && (
          <ul className={cn(`is-${submenu.align}`, `has-${submenu.items.length}`)}>{renderMenuItems(submenu.items)}</ul>
        )}
    </li>
  ));

const HeaderDisplay = ({
  logoRoute,
  primaryMenuRoutes,
}) => (
  <header className={cn('header', { 'has-search': showSearch })}>
    <Link to={logoRoute.path()} className="header-logo">
      LOGO
    </Link>
    {primaryMenuRoutes && (
      <ul className="header-menu is-primary">
        {renderMenuItems(primaryMenuRoutes)}
      </ul>
    )}
  </header>
);

const routeShape = {
  path: PropTypes.func.isRequired,
  title: PropTypes.string,
};

HeaderDisplay.propTypes = {
  logoRoute: PropTypes.shape(routeShape),
  primaryMenuRoutes: PropTypes.arrayOf(PropTypes.shape(routeShape)),
};

export default HeaderDisplay;
