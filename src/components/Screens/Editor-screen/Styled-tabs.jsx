import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import {withStyles} from '@material-ui/core/styles';

const StyledTabs = withStyles({
  root: {
    backgroundColor: 'var(--bg-layer-mid)',
    height: 'var(--tab-height)'
  },
  indicator: {
    height: '4px',
    backgroundColor: 'var(--accent)',
  },
})((props) => <Tabs {...props} />);


export default StyledTabs;
