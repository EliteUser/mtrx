import React from 'react';

import Tab from '@material-ui/core/Tab';
import {withStyles} from '@material-ui/core/styles';

const StyledTab = withStyles(() => ({
  root: {
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    color: 'var(--text)',
    backgroundColor: 'var(--bg-layer-mid)',
    opacity: 1,

    '&:focus, &:hover': {
      cursor: 'pointer',
      opacity: 1,
      backgroundColor: 'var(--bg-layer-up)'
    }
  },
  selected: {
    backgroundColor: 'var(--bg-layer-up)',
    color: 'var(--accent)',
  }
}))((props) => <Tab disableRipple {...props} />);

export default StyledTab;
