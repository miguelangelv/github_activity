import React from 'react';
import { Grid, Button, CircularProgress, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { navigateBack } from './Details.action';
import RepoDetails from './RepoDetails/RepoDetails';
import CommitSection from './CommitSection/CommitSection';
import useStyles from './styles';

const Details = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const gitRepository = useSelector((state) => state.gitRepository);

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(navigateBack('navigate-back', 'previous-route'));
    };

    return (
        !Object.keys(gitRepository).length ? <CircularProgress size={100} thickness={5} className={classes.progress} /> : (
            <div>
                <Grid container alignItems="center" justify="space-between">
                    <Grid item xs={2}>
                        <Button className={classes.backButton} color="primary" size="large" fullWidth startIcon={<NavigateBeforeIcon />} onClick={(event) => handleClick(event)}>
                            Back
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="flex-start">
                    <Grid item xs={12} sm={12} md={6}>
                        <RepoDetails gitRepository={gitRepository} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <Typography className={classes.commitTitle} variant="h5" color="primary" gutterBottom>Commit Activity</Typography>
                        <CommitSection gitRepository={gitRepository} />
                    </Grid>
                </Grid>
            </div>
        )
    );
};

export default Details;
