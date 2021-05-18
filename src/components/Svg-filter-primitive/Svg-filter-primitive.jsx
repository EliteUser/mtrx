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
        result="convolveMatrix"
      />
    </React.Fragment>
  );
};

SvgFilterPrimitive.propTypes = {
  kernelX: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelY: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  kernelMatrix: PropTypes.string,
  divisor: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  bias: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
};

export default SvgFilterPrimitive;
