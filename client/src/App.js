import React from 'react';
import { AppBar, Container, Typography, Link } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { navigateTo } from './actions/utils';
import routes from './routes';
import useStyles from './styles';
import logo from './images/logo.svg';

const App = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleClick = (event, path) => {
		event.preventDefault();
		dispatch(navigateTo('navigate-to', path));
	};

	return (
		<ConnectedRouter history={history}>
			<AppBar className={classes.appBar} position="static" color="primary">
				<Link className={classes.logoHeader} onClick={(event) => handleClick(event, '/')}>
					<img className={classes.image} src={logo} alt="icon" height="70" width="70" />
					<Typography className={classes.heading} variant="h5" align="center">Tracking App</Typography>
				</Link>
				<Link className={classes.linkAbout} onClick={(event) => handleClick(event, '/about')}>
					<Typography className={classes.heading} variant="h6" align="center">About</Typography>
				</Link>
			</AppBar>
			<Container maxWidth="md" className={classes.container}>
				{routes}
			</Container>
			<AppBar className={classes.footerBar} position="static" color="primary" />
		</ConnectedRouter>
	);
};

export default App;
