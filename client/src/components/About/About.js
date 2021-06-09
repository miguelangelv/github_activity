import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Typography, List, ListItem, Button, Link } from '@material-ui/core';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { navigateBack } from './About.action';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(navigateBack('navigate-back', 'previous-route'));
    };

    return (
        <div>
            <Grid container alignItems="center" justify="space-between">
                <Grid item xs={2}>
                    <Button
                        className={classes.backButton}
                        color="primary"
                        size="large"
                        fullWidth
                        startIcon={<NavigateBeforeIcon />}
                        onClick={(event) => handleClick(event)}>
                        Back
                        </Button>
                </Grid>
            </Grid>
            <Typography className={classes.heading} variant="h3" align="center">Github Tracking App</Typography>
            <Paper className={classes.about} elevation={1}>
                <Grid container alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.aboutTitle} variant="h6" align="center">My online references</Typography>
                        <Typography variant="body2" align="justify" gutterBottom>
                            When I feel stuck to figure out how to solve some issues or get the best approach, I look for information on some websites that mostly help me to find a solution or a clue to move forward.
                        </Typography>
                        <Typography variant="body2" align="justify">
                            These websites are following:
                        </Typography>
                        <List>
                            <ListItem className={classes.listItem}>
                                <Link href="https://medium.com/" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>https://medium.com/</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    There are a lot of articles about many topics, so you can find an article about some technology or approach, and other articles about motivation and time management.
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link href="https://medium.com/" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>https://css-tricks.com/</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    There are a lot of articles about some approaches that could help you.
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Typography variant="body2" align="left">
                                    <b>
                                        Official library documentation
                                    </b>
                                </Typography>
                                <Typography variant="body2" align="justify">
                                    I think it is really important to understand how libraries works and the official documentation is the best place mostly.
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.aboutTitle} variant="h6" align="center">Last resources that caught my attention</Typography>
                        <List className={classes.listPaddingTop}>
                            <ListItem className={classes.listItemTop}>
                                <Link href="https://medium.com/@mehdiouss/5-skills-all-front-end-developers-need-to-learn-in-2021-e132a63d0b48" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>5 Skills All Front-End Developers Need to Learn in 2021</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    It is really important to know what is popular now to keep growing and being up to date.
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link href="https://medium.com/@shoaib-mehedi/12-conventions-for-writing-clean-code-e16c51e3939a" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>12 Conventions for Writing Clean Code</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    Clean code is important to be a good team player and help your team to understand your code easily and avoid issue.
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link href="https://www.youtube.com/watch?v=o_XVt5rdpFY" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>The secrets of learning a new language</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    This video was really interesting to me as a person who has been learning a foreign language, I know how difficult could be, so those methods that they use made me realize that there are many ways to learn something, you just need to think outside the box.
                                </Typography>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link href="https://www.youtube.com/watch?v=y9Trdafp83U" target="_blank" rel="noreferrer">
                                    <Typography variant="body2" align="left">
                                        <b>There's more to life than being happy</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="justify">
                                    It helped me to realize that the life is a journey and you just have to enjoy every moment and take account there is certain beauty on small things.
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default About;
