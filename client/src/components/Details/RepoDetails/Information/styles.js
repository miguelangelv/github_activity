import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    ownerAvatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '30px',
    },
    ownerAvatar: {
        width: '150px',
        height: '150px',
    },
    boldTitle: {
        color: theme.palette.primary.dark
    },
    tracked: {
        textAlign: 'center',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '5px',
        color: '#FFF'
    }
}));
