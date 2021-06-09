import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GradeIcon from '@material-ui/icons/Grade';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ErrorIcon from '@material-ui/icons/Error';
import CallSplitIcon from '@material-ui/icons/CallSplit';

import useStyles from './styles';

const Stats = ({ gitRepository }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.gridMargin} direction="row" alignItems="center" justify="space-between">
            <Grid item className={classes.alignIcons} xs={2}>
                <GradeIcon size="small" className={classes.icon} />
                <Typography variant="body2">{gitRepository.stargazers.toLocaleString('en-US')}</Typography>
            </Grid>
            <Grid item className={classes.alignIcons} xs={2}>
                <CallSplitIcon size="small" className={classes.icon} />
                <Typography variant="body2">{gitRepository.forks.toLocaleString('en-US')}</Typography>
            </Grid>
            <Grid item className={classes.alignIcons} xs={2}>
                <NewReleasesIcon size="small" className={classes.icon} />
                <Typography variant="body2">{(gitRepository.releases === 100 ? '+' : '') + gitRepository.releases.toString()}</Typography>
            </Grid>
            <Grid item className={classes.alignIcons} xs={2}>
                <AccountTreeIcon size="small" className={classes.icon} />
                <Typography variant="body2">{(gitRepository.branches === 100 ? '+' : '') + gitRepository.branches.toString()}</Typography>
            </Grid>
            <Grid item className={classes.alignIcons} xs={2}>
                <LocalOfferIcon size="small" className={classes.icon} />
                <Typography variant="body2">{(gitRepository.tags === 100 ? '+' : '') + gitRepository.tags.toString()}</Typography>
            </Grid>
            <Grid item className={classes.alignIcons} xs={2}>
                <ErrorIcon size="small" className={classes.icon} />
                <Typography variant="body2">{gitRepository.issues.toLocaleString('en-US')}</Typography>
            </Grid>
        </Grid>
    );
};

export default Stats;