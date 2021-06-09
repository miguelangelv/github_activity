import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, TableHead, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import moment from 'moment';

import { trackActivity } from '../../../actions/activities';
import { selectRepository } from './RepoList.action';
import useStyles from './styles';

const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    {
        id: 'pushedAt',
        label: 'Last activity',
        minWidth: 100,
        format: (value) => moment(value).fromNow()
    },
    { id: 'language', label: 'Language', minWidth: 50, align: 'right' },
    { id: 'stargazers', label: 'Stargazers', minWidth: 50, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'forks', label: 'Forks', minWidth: 50, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'issues', label: 'Issues', minWidth: 50, align: 'right', format: (value) => value.toLocaleString('en-US') },
];

const createData = (repository) => {
    const name = repository.full_name;
    const pushedAt = repository.pushed_at;
    const language = repository.language;
    const stargazers = repository.stargazers_count;
    const forks = repository.forks;
    const issues = repository.open_issues_count;
    return { name, pushedAt, language, stargazers, forks, issues };
}


const RepoList = ({ show, repositories }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [gitRepositories, setGitRepositories] = useState(() => repositories.map((repository) => createData(repository)));

    useEffect(() => {
        setGitRepositories(repositories.map((repository) => createData(repository)))
    }, [repositories]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        dispatch(trackActivity('change-page', newPage.toString()));
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        dispatch(trackActivity('change-rows-per-page', event.target.value.toString()));
    };

    const handleClick = async (event, row) => {
        event.preventDefault();
        dispatch(selectRepository(row.name, 'select-repository', '/details'));
    };

    return (
        <Grow in={show}>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gitRepositories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow hover role="checkbox" className={classes.tableRow} tabIndex={-1} key={row.name} onClick={(event) => handleClick(event, row)}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} >
                                                {column.format ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={gitRepositories.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </Grow>
    );
};

export default RepoList;
