import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core'; // eslint-disable-line no-unused-vars
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) => createStyles({

    container: {
        backgroundColor: "#2d46b9",
    },
    marginAutoContainer: {
        width: 500,
        height: 80,
        display: 'flex',
        backgroundColor: 'gold',
    },
    marginAutoItem: {
        margin: 'auto'
    },
    alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    largeImg: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));

export default function ProfilePage() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <br />
            <Grid container spacing={3} >
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" >
                </Box>
                <Box display="flex" width="50%" height="100vh" justifyContent="center" >
                    <Box >
                        <Avatar src="/broken-image.jpg" className={classes.largeImg} />
                    </Box>
                </Box>
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" >
                </Box>
            </Grid>
        </React.Fragment>

    );
}