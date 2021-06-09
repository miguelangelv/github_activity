import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 70px 0 30px',
        [theme.breakpoints.down('xs')]: {
            padding: '0 10px',
        }
    },
    footerBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px 30px',
        paddingLeft: '55px',
        height: '40px',
        marginTop: '30px',
    },
    container: {
        minHeight: 'calc(100vh - 140px)',
    },
    heading: {
        color: '#FFF',
    },
    image: {
        marginLeft: '15px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
        }
    },
    logoHeader: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    linkAbout: {
        cursor: 'pointer',
        paddingRight: '30px',
        [theme.breakpoints.down('xs')]: {
            paddingRight: '10px',
        }
    },
}));
