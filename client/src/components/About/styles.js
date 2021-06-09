import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.main,
        padding: '15px 30px 30px',
    },
    backButton: {
        margin: '20px 0 0',
    },
    about: {
        padding: '30px',
    },
    aboutTitle: {
        color: theme.palette.primary.main,
        padding: '0 0 20px',
    },
    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    listItemTop: {
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingTop: '0px',
    },
    listPaddingTop: {
        paddingTop: '0px',
    }
}));
