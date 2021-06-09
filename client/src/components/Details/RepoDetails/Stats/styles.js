import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    alignIcons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
    },
    icon: {
        color: theme.palette.primary.light,
    },
    gridMargin: {
        margin: '30px 0',
    },
}));
