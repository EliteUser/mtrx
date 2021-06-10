import React from 'react';
import PropTypes from 'prop-types';

import SvgFilterPrimitive from '../Svg-filter-primitive';

const SvgFilter = (props) => {
  const {
    primitives
  } = props;

  return (
    <svg className="visually-hidden" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <filter
          id="filter"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {
            primitives.map((primitive, index, array) => {
              const {
                id,
                kernelX,
                kernelY,
                ...rest
              } = primitive;

              const currentSvgId = `svg_${id}`;
              const svgIn = index === 0 ? 'SourceGraphic' : `svg_${array[index - 1].id}`;

              return <SvgFilterPrimitive
                key={id}
                order={kernelX && kernelY ? `${kernelX} ${kernelY}` : ''}
                in={svgIn}
                result={currentSvgId}
                {...rest}
              />;
            })
          }
        </filter>
      </defs>
    </svg>
  );
};

SvgFilter.propTypes = {
  primitives: PropTypes.array
};

export default SvgFilter;
