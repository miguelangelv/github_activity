import React from 'react';
import { Typography, Box } from '@material-ui/core';

import moment from 'moment';

import useStyles from './styles';

const Information = ({ gitRepository, tracked }) => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={classes.ownerAvatarContainer}>
                <img alt="Owner Avatar" className={classes.ownerAvatar} src={gitRepository.owner.avatarUrl} />
            </Box>
            { tracked &&
                <Typography variant="h6" gutterBottom className={classes.tracked}>
                    <b>TRACKED</b>
                </Typography>
            }
            <Typography variant="body1" gutterBottom>
                <b className={classes.boldTitle}>Organization:</b> {gitRepository.owner.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <b className={classes.boldTitle}>Name:</b> {gitRepository.fullName}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <b className={classes.boldTitle}>Description:</b> {gitRepository.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <b className={classes.boldTitle}>Last activity:</b> {moment(gitRepository.pushedAt).fromNow()}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <b className={classes.boldTitle}>Main languages:</b> {gitRepository.languages.join(', ')}
            </Typography>
        </>
    );
};

export default Information;