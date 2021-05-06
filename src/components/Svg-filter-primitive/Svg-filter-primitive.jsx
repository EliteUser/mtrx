import React from 'react';
import PropTypes from 'prop-types';

const SvgFilterPrimitive = (props) => {
  const {
    kernelX,
    kernelY,
    kernelMatrix,
    divisor,
    bias
  } = props;
  const kernelSize = `${kernelX} ${kernelY}`;

  return (
    <React.Fragment>
      <feConvolveMatrix
        order={kernelSize}
        kernelMatrix={kernelMatrix}
        divisor={divisor}
        bias={bias}

        x="0%"
        y="0%"
        targetX="0"
        targetY="0"

        edgeMode="duplicate"
        preserveAlpha="true"
        in="SourceGraphic"
        result="convolveMatrix"/>
    </React.Fragment>
  );
};

SvgFilterPrimitive.propTypes = {
  kernelX: PropTypes.number,
  kernelY: PropTypes.number,
  kernelMatrix: PropTypes.string,
  divisor: PropTypes.number,
  bias: PropTypes.number
};

export default SvgFilterPrimitive;
