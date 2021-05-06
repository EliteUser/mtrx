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
            primitives.map((primitive, index) => {
              // TODO remove index and add primitive id (generate in mw)
              const {
                kernelX,
                kernelY,
                kernelMatrix,
                divisor,
                bias
              } = primitive;

              return <SvgFilterPrimitive
                key={index}
                kernelX={kernelX}
                kernelY={kernelY}
                kernelMatrix={kernelMatrix}
                divisor={divisor}
                bias={bias}
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
  // TODO PT shape
};

export default SvgFilter;
