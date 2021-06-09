import React from 'react';
import { List, Typography, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Badge } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import moment from 'moment';

import useStyles from './styles';

const CommitSection = ({ gitRepository }) => {
    const classes = useStyles();

    const commits = gitRepository.commits.map((commit) => {
        const authorPosition = gitRepository.contributors.findIndex((contributor) => contributor.name === commit?.author);
        return {
            sha: commit.sha,
            message: commit.message,
            createdAt: commit.createdAt,
            author: {
                name: commit.author,
                avatarUrl: authorPosition > 0 ? gitRepository.contributors[authorPosition].avatarUrl : '',
                position: authorPosition
            }
        };
    });

    return (
        <List className={classes.root}>
            { commits.map((commit, index) => {
                const listItem = (
                    <ListItem key={commit.sha.slice(0, 10)} alignItems="flex-start">
                        <ListItemAvatar>
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                badgeContent={(() => {
                                    if (commit.author.position <= 2) {
                                        return <StarIcon size="small" className={classes.badgeMostActive} />
                                    } else if (commit.author.position > 2 && commit.author.position <= 4) {
                                        return <StarIcon size="small" className={classes.badgeMediumActive} />
                                    } else if (commit.author.position > 4 && commit.author.position <= 9) {
                                        return <StarIcon size="small" className={classes.badgeMinimumActive} />
                                    }
                                })()}
                            >

                                <Avatar alt="Author avatar" src={commit.author.avatarUrl} />
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <span className={classes.listRow}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.message}
                                        color="textPrimary"
                                    >
                                        {commit.message}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.sha}
                                    >
                                        {commit.sha.slice(0, 5)}
                                    </Typography>
                                </span>
                            }
                            secondary={
                                <span className={classes.listRow}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.author}
                                        color="textPrimary"
                                    >
                                        <b className={classes.boldTitle}>Author:</b> {commit?.author?.name ? commit.author.name : 'Not defined'}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.date}
                                    >
                                        {moment(commit.createdAt).fromNow()}
                                    </Typography>
                                </span>
                            }
                        />
                    </ListItem>);
                const divider = (index !== commits.length - 1) && (<Divider className={classes.divider} key={commit.sha.slice(0, 5) + 'divider'} variant="inset" component="li" />);
                return <React.Fragment key={'listFragment' + index} >
                    {listItem}
                    {divider}
                </React.Fragment>

            })}
        </List >

    );
};

export default CommitSection;