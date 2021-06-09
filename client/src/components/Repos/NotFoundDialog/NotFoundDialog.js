import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Fade } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { resetNotFound } from '../../../actions/utils';

import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade timeout={1500} ref={ref} {...props} />;
});

const NotFoundDialog = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const open = useSelector((state) => state.gitRepositoryNotFound);

    const handleClose = () => {
        dispatch(resetNotFound());
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="not-found-dialog-title"
            aria-describedby="not-found-dialog-description"
        >
            <DialogTitle id="not-found-dialog-title" className={classes.dialogTitle}><b>Repositories not found</b></DialogTitle>
            <DialogContent>
                <DialogContentText id="not-found-dialog-description">
                    The organization was wrong or we cannot get their repositories. Try again!
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={handleClose} variant="contained" color="primary" size="large">
                    Continue
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NotFoundDialog;