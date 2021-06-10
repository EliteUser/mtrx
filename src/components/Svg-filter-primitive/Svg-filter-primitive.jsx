import React from 'react';
import PropTypes from 'prop-types';

import {primitiveAttributes} from '../../config/primitives';

const SvgFilterPrimitive = (props) => {
  const params = Object.entries(primitiveAttributes[props.primitiveType])
    .reduce((acc, elem) => {
      const [key, value] = elem;

      if (props[key]) {
        acc[key] = props[key];
      } else {
        acc[key] = value;
      }

      if (props.kernelMatrix && props.kernelMatrix.length) {
        acc['values'] = props.kernelMatrix;
      }

      return acc;
    }, {});

  return (
    <React.Fragment>
      <props.primitiveType
        {...params}
        in={props.in}
        result={props.result}
      />
    </React.Fragment>
  );
};

SvgFilterPrimitive.propTypes = {
  primitiveType: PropTypes.string.isRequired,
  kernelMatrix: PropTypes.array,
  in: PropTypes.string,
  result: PropTypes.string,
};

export default SvgFilterPrimitive;
