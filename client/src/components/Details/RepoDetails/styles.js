import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    information: {
        padding: '30px',
    },
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
        margin: '20px 0',
    },
    ownerAvatarContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    ownerAvatar: {
        width: '150px',
        height: '150px',
    },
    boldTitle: {
        color: theme.palette.primary.dark
    }
}));
