import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Container,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
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
  selectorCtnr: {
    marginTop: '5vh',
  },
  formControl: {
    margin: theme.spacing(3),
    paddingRight: theme.spacing(5),
  },
  doughnutCtrn: {
    display: 'flex',
    justifyContent: 'spaceAround',
  },
}));

const genData = (outerData, innerData) => {
  return {
    labels: [
      'Less than one week',
      'Less than one month',
      'More than one month',
    ],
    datasets: [
      {
        label: 'Outer',
        data: outerData,
        backgroundColor: [colorSelector(1), colorSelector(9), colorSelector(2)],
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Inner',
        data: innerData,
        backgroundColor: [colorSelector(1), colorSelector(9), colorSelector(2)],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };
};

const renderRequestTypes = (requestTypes) => {
  return requestTypes.map((requestType) => (
    <MenuItem key={requestType} value={requestType}>
      Request Type: {requestType === '' ? 'Not Specified' : requestType}
    </MenuItem>
  ));
};

const CompletionTime = ({
  outerData,
  innerData,
  requestTypes,
  outerFilter,
  innerFilter,
  setDoughnutFilter,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setDoughnutFilter(event.target);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.title}>
        <Typography variant='h4' component='h4'>
          Completion time for work orders by request type
        </Typography>
      </Container>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={8}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '60%' }}>
            <Doughnut
              data={genData(outerData, innerData)}
              options={{
                cutoutPercentage: 60,
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.selectorCtnr}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id='outer-data-select-label'>Outer Data</InputLabel>
            <Select
              labelId='outer-data-select-label'
              id='outer-data-select'
              name={'outer'}
              value={outerFilter}
              onChange={handleChange}>
              <MenuItem value={'all'}>All Workorders</MenuItem>
              {renderRequestTypes(requestTypes)}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id='inner-data-select-label'>Inner Data</InputLabel>
            <Select
              labelId='inner-data-select-label'
              id='inner-data-select'
              value={innerFilter}
              name={'inner'}
              onChange={handleChange}>
              <MenuItem value={'urgent'}>Urgent Priority Workorders</MenuItem>
              {renderRequestTypes(requestTypes)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

CompletionTime.propTypes = {
  outerData: PropTypes.array.isRequired,
  innerData: PropTypes.array.isRequired,
  requestTypes: PropTypes.array.isRequired,
  outerFilter: PropTypes.string.isRequired,
  innerFilter: PropTypes.string.isRequired,
  setDoughnutFilter: PropTypes.func.isRequired,
};

export default CompletionTime;
