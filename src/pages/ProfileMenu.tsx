import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 500,
            backgroundColor: "#303030",
            height: '70vh'
        },
        secondMenuList: {
            height: "100%",
            backgroundColor: "#303030",
        },
        grow: {
            flexGrow: 1
        }
    }),
);

export default function ProfileMenu() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <React.Fragment>
                    <Box className={classes.root}>
                        <MenuList>
                            <MenuItem >
                                <Typography color="primary">
                                    Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography  color="primary" noWrap>
                                    My account
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography color="primary">
                                    Logout
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Box className={classes.secondMenuList}>
                                </Box>
                            </MenuItem>
                        </MenuList>
                    </Box>
                </React.Fragment>
            </Grid>
            <Grid item xs={8}>
                sidebar content here
            </Grid>
        </React.Fragment >
    );
}

// export default withStyles(styles)(ProfileMenu);