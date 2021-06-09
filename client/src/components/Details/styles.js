import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.main,
        padding: '30px 0',
    },
    backButton: {
        margin: '20px 0',
    },
    progress: {
        position: 'absolute',
        top: '45%',
        left: '46%',
    },
    commitTitle: {
        paddingTop: '10px',
        textAlign: 'center',
    }
}));
