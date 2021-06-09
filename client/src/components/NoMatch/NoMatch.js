import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const NoMatch = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.heading} variant="h2" align="center">NOT FOUND</Typography>
        </div>
    );
};

export default NoMatch;