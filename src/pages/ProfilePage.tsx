import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core'; // eslint-disable-line no-unused-vars
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import ProfileMenu from './ProfileMenu';


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
    root: {
        flexGrow: 1
    }
}));

export default function ProfilePage() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <br />
            <Grid container spacing={3} >
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" />
                {/* Need to change this middle element to allow adjustable/flexible spacing between components*/}
                <React.Fragment>
                    <Box display="flex" width="50%" height="100vh" justifyContent="center" >
                        <div className={classes.root}>
                            <Grid container >
                                <Grid item xs={12} justify="center" alignContent="center" alignItems="center" direction="column">
                                    <Box marginLeft={50}>
                                    <Avatar src="/broken-image.jpg" className={classes.largeImg}  />
                                    </Box>
                                </Grid>
                                <ProfileMenu />
                            </Grid>
                        </div>
                    </Box>
                </React.Fragment>
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" />
            </Grid>
        </React.Fragment>

    );
}