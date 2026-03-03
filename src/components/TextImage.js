import React from 'react';
import PropTypes from 'prop-types';

const TextImage = ({ text, image, alignment, imageSize, style }) => {
    const imageClass = `image-${imageSize} ${style}`;
    const textClass = `text-${alignment}`;

    return (
        <div className={`text-image-container ${textClass}`}> 
            {image && <img src={image} alt={text} className={imageClass} />}
            <p>{text}</p>
        </div>
    );
};

TextImage.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    imageSize: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['default', 'rounded', 'shadow'])
};

TextImage.defaultProps = {
    alignment: 'left',
    imageSize: 'medium',
    style: 'default',
};

export default TextImage;
