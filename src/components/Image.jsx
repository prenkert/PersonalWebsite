import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-plugin-image';

const Image = ({ data }) => (
    <GatsbyImage  />
)

export default Image

Image.propTypes = {
    data: PropTypes.object.isRequired,
}