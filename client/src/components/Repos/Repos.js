import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Search from './Search/Search';
import RepoList from './RepoList/RepoList';
import NotFoundDialog from './NotFoundDialog/NotFoundDialog';
import { trackActivity } from '../../actions/activities';

import useStyles from './styles';

const Repos = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialGitRepositories = useSelector((state) => state.gitRepositories);
    const [filterData, setFilterData] = useState('');
    const [gitRepositories, setGitRepositories] = useState([]);

    useEffect(() => {
        setGitRepositories(initialGitRepositories)
    }, [initialGitRepositories]);

    const filterRepositories = (gitRepositories, value) =>
        gitRepositories.filter((gitRepository) =>
            gitRepository.name.includes(value)
        );

    const handleBlur = () => {
        dispatch(trackActivity(filterData, 'filter-repositories'));
    }

    const handleChange = (value) => {
        setFilterData(value);
        setGitRepositories(filterRepositories(initialGitRepositories, value));
    }

    return (
        <div>
            <Typography className={classes.heading} variant="h3" align="center">Tracking App</Typography>
            <Search />
            { (initialGitRepositories.length > 0) && (
                < >
                    <Grid container className={classes.mainContainer} alignItems="center" justify="center">
                        <Grid item xs={9} sm={6}>
                            <TextField
                                name="filter"
                                variant="outlined"
                                color="primary"
                                label="Filter repositories"
                                fullWidth
                                value={filterData}
                                onChange={(e) => handleChange(e.target.value)}
                                onBlur={() => handleBlur()} />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="stretch" spacing={3}>
                        <Grid item xs={12}>
                            <RepoList show={gitRepositories.length > 0} repositories={gitRepositories} />
                            <NotFoundDialog />
                        </Grid>
                    </Grid>
                </ >
            )}
        </div>
    );
};

export default Repos;
