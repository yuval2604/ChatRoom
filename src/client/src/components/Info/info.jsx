import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    infoBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#577399',
        borderRadius: '4px 4px 10px 10px',
        height: '60px',
        width: '100%',
    },
    leftInnerContainer: {
        flex: '0.5',
        display: 'flex',
        alignitems: 'center',
        marginLeft: '5%',
        color: 'white'
    },
    rightInnerContainer: {
        flex: '0.5',
        display: 'flex',
        marginRight: '5%',
        color: 'white',
        justifyContent: 'flex-end'
    },

}));
const Info = ({ name }) => {
    const classes = useStyles();
    return (
        <div className={classes.infoBar}>
            <div className={classes.leftInnerContainer}>
                <FiberManualRecordIcon />
                <Typography component="h1" variant="h5">
                    hello {name}
                </Typography>
            </div>
            <div className={classes.rightInnerContainer}>
                <Link href='/' variant="body2">
                    <CancelIcon style={{ color: 'white' }} />
                </Link>
            </div>
        </div>
    );
}

export default Info;