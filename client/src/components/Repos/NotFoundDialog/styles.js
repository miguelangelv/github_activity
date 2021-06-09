import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    dialogTitle: {
        padding: '20px 24px 5px',

        '& b': {
            color: theme.palette.primary.dark,
        }
    },
    dialogActions: {
        padding: '0px 20px 20px',
    },
}));
