import React, { useState } from 'react';
import { Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';

import { trackRepository } from './RepoDetails.action';
import useStyles from './styles';
import Information from './Information/Information';
import Stats from './Stats/Stats';

const RepoDetails = ({ gitRepository }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { activities, repositories } = useSelector(state => ({ activities: state.activities, repositories: state.repositories }));
    const [tracked, setTracked] = useState(() => (repositories.findIndex((repository) => repository.fullName === gitRepository.fullName) !== -1));
    const handleClick = async (event) => {
        event.preventDefault();
        dispatch(trackRepository(gitRepository, 'track-repo', activities));
        setTracked(true);
    }

    return (
        <Paper className={classes.information} elevation={2}>
            <Information gitRepository={gitRepository} tracked={tracked} />
            <Stats gitRepository={gitRepository} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<TrackChangesIcon />}
                onClick={(event) => handleClick(event)}>
                Track repo
            </Button>
        </Paper>
    );
};

export default RepoDetails;