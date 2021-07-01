import React from 'react';

import ReactEmoji from 'react-emoji';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    messageContainer:{
        display: 'flex',
        marginTop: '3px',
        padding: '0 5%',
    }, 
    messageBox:{
        background: '#F3F3F3',
    borderRadius: '20px',
    padding: '5px 20px',
    color: 'white',
    display: 'inline-block',
    maxWidth: '80%'
    },
    messageText:{
        width: '100%',
    letterSpacing: '0',
    float: 'left',
    fontSize: '1.1em',
    wordWrap: 'break-word'
    },
    sentText:{
        display: 'flex',
        alignI : 'center',
        fontFamily: 'Helvetica',
        color: '#828282',
        letterSpacing: '0.3px'
    }
  }));

export const Message = ({message: { user, text }, name}) => {
    const classes = useStyles();

    let isSentByCurrentUser = false;
    
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        <div className={classes.messageContainer} >
            <Typography component="h3" variant="h5">
                {trimmedName}
            </Typography>
            <div className={classes.messageBox}>
                <Typography component="h3" variant="h5">
                    {isSentByCurrentUser ? ReactEmoji.emojify(text) : text }
                </Typography>
                {isSentByCurrentUser&&
                    <p className={classes.sentText}>{user}</p>
                }
            </div>
        </div>
    )

};