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
            primitives.map((primitive) => {
              const {
                id,
                kernelX,
                kernelY,
                kernelMatrix,
                divisor,
                bias
              } = primitive;

              return <SvgFilterPrimitive
                key={id}
                kernelX={kernelX}
                kernelY={kernelY}
                kernelMatrix={kernelMatrix.join(' ')}
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
