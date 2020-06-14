import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core'; // eslint-disable-line no-unused-vars
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


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
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" />
                {/* Need to change this middle element to allow adjustable/flexible spacing between components*/}
                <React.Fragment>
                    <Box display="flex" width="50%" height="100vh" justifyContent="center" >
                        <Grid container justify="center" alignItems="center" direction="column" >

                            <Grid item xs={4}>
                                <Box>
                                    <Avatar src="/broken-image.jpg" className={classes.largeImg} />
                                </Box>
                            </Grid>


                            <Grid item xs={8}>
                                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                                    <Grid item xs={4}>
                                        <Box >
                                            <MenuList>
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem>My account</MenuItem>
                                                <MenuItem>Logout</MenuItem>
                                            </MenuList>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box height="100%">
                                            sidebar content here

                                        </Box>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Box>
                </React.Fragment>
                <Box display="flex" width="25%" height="100vh" bgcolor="lightblue" />
            </Grid>
        </React.Fragment>

    );
}