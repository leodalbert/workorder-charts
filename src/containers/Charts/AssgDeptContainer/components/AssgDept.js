import React from 'react';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

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

const genData = (data) => {
  return {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: data,
  };
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const AssgDept = ({ assignedDepartmentData }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.title}>
        <Typography variant='h4' component='h4'>
          Monthly data: work orders by assigned department
        </Typography>
      </Container>
      <Container>
        <Bar data={genData(assignedDepartmentData)} options={options} />
      </Container>
    </div>
  );
};

export default AssgDept;
