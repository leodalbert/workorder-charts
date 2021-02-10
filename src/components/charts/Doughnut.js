import React, { Fragment, useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { colorSelector } from 'utils/HelperFunctions';

const genData = (data1, data2) => {
  return {
    labels: [
      'Less than one week',
      'Less than one month',
      'More than one month',
    ],
    datasets: [
      {
        label: 'Outer',
        data: data1,
        backgroundColor: [colorSelector(1), colorSelector(9), colorSelector(2)],
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Inner',
        data: data2,
        backgroundColor: [colorSelector(1), colorSelector(9), colorSelector(2)],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };
};
const DoughnutChart = ({ data1, data2 }) => (
  <Fragment>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
    </div>
    <Doughnut
      data={genData(data1, data2)}
      options={{
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
      }}
      redraw
    />
  </Fragment>
);

export default DoughnutChart;
