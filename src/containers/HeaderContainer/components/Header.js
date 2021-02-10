import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar } from '@material-ui/core';

import bimGenieLogo from 'assets/BIM_GENIE_GREEN_100p.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbarContainer: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
  },
  navbarLogo: {
    height: 65,
    widht: 65,
  },
  navbarTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  navbarTitle: {
    textAlign: 'left',
    margin: 'auto',
    paddingLeft: theme.spacing(3),
  },
}));

const Header = ({ name, logo }) => {
  const classes = useStyles();

  return (
    <div data-testid='tech-header'>
      <AppBar position='static'>
        <Toolbar classes={{ root: classes.navbarContainer }}>
          <div className={classes.navbarTitleContainer}>
            {logo && (
              <img
                src={logo}
                alt='site-group-logo'
                className={classes.navbarLogo}
              />
            )}
            {name && (
              <Typography
                style={{ textDecoration: 'inherit' }}
                component='h6'
                variant='h6'
                className={classes.navbarTitle}>
                {name}
              </Typography>
            )}
          </div>
          <img
            src={bimGenieLogo}
            alt='bim-genie-logo'
            className={classes.navbarLogo}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
