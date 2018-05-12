import PropTypes from 'prop-types';
import React from 'react';

const ColorSwatch = ({ color, text }) => (
  <div className={`mb-1 p-3 rounded text-${text} bg-${color}`}>@{color}</div>
);

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ColorSwatch.defaultProps = {
  text: 'black',
};

const ExampleColors = () => (
  <div className="container p-content">
    <h1>Colors</h1>

    <ColorSwatch color="red" />
    <ColorSwatch color="yellow" />
    <ColorSwatch color="green" />
    <ColorSwatch color="blue" />

    <hr />

    <ColorSwatch text="gray" color="black" />
    <ColorSwatch text="gray" color="black" />
    <ColorSwatch text="gray" color="almost-black" />
    <ColorSwatch text="gray" color="darkest-gray" />
    <ColorSwatch text="gray" color="darker-gray" />
    <ColorSwatch text="light-gray" color="dark-gray" />
    <ColorSwatch text="almost-white" color="gray" />
    <ColorSwatch text="darkest-gray" color="light-gray" />
    <ColorSwatch text="darker-gray" color="lighter-gray" />
    <ColorSwatch text="dark-gray" color="lightest-gray" />
    <ColorSwatch text="dark-gray" color="almost-white" />
    <ColorSwatch text="dark-gray" color="white" />
  </div>
);

export default ExampleColors;
