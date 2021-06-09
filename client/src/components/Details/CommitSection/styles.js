import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        maxHeight: 'calc(100vh - 255px)',
        overflowY: 'auto',
        borderRadius: '5px',
    },
    inline: {
        display: 'inline',
    },
    listRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badgeMostActive: {
        color: '#ffbf00',
    },
    badgeMediumActive: {
        color: '#8a9597',
    },
    badgeMinimumActive: {
        color: '#763c28',
    },
    message: {
        flexBasis: '70%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    date: {
        flexBasis: '30%',
        textAlign: 'right',
    },
    author: {
        flexBasis: '50%',
    },
    sha: {
        color: theme.palette.primary.main,
        flexBasis: '15%',
        textAlign: 'right',
    },
    boldTitle: {
        color: theme.palette.primary.dark
    },
    divider: {
        marginLeft: '72px',
        marginRight: '10px'
    }
}));
