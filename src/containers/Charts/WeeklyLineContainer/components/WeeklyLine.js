import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import StackedArea from './StackedArea';
import { colorSelector } from 'utils/HelperFunctions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const WeeklyLine = ({ weeklyData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.title}>
        <Typography variant='h4' component='h4'>
          Data by week for: work orders vs PM work orders / work orders opened
          vs closed
        </Typography>
      </Container>
      <Container>
        <StackedArea
          workordersData={weeklyData.allWeeklyWorkorders}
          workordersPmData={weeklyData.weeklyPmWorkorders}
          title1={'Work orders per week'}
          title2={'Preventive maintenance work orders per week'}
          borderBlack={true}
        />
        <StackedArea
          workordersData={weeklyData.weeklyOpenWorkorders}
          workordersPmData={weeklyData.weeklyCompletedWorkorders}
          title1={'Weekly work orders opened'}
          title2={'Weekly work orders closed'}
          stacked
          fill={false}
          color1={colorSelector(2)}
          color2={colorSelector(0)}
        />
      </Container>
    </div>
  );
};

WeeklyLine.propTypes = {
  weeklyData: PropTypes.object.isRequired,
};

export default WeeklyLine;
