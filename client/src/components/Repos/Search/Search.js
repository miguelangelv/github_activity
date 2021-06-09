import React, { useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import { SearchRepositories } from './Search.action';

import useStyles from './styles';

const Search = () => {
    const [searchData, setSearchData] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(SearchRepositories(searchData, 'search-organization'));
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container className={classes.mainContainer} alignItems="center" justify="center">
                <Grid item xs={9} sm={8}>
                    <TextField name="organization" variant="outlined" color="primary" label="Search" fullWidth value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <Button className={classes.searchButton} variant="contained" color="primary" size="large" fullWidth type="submit">
                        <SearchIcon fontSize="large" />
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Search;
