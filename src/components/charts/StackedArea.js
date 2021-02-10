import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { colorSelector } from 'utils/HelperFunctions';

const genData = (data1, data2, title1, title2, fill, color1, color2) => {
  return {
    labels: [...Array(53).keys()].slice(1),
    datasets: [
      {
        label: title2,
        data: data2,
        fill,
        backgroundColor: color2,
        borderColor: color2,
      },
      {
        label: title1,
        data: data1,
        fill,
        backgroundColor: color1,
        borderColor: color1,
      },
    ],
  };
};

const LineChart = ({
  workordersData,
  workordersPmData,
  title1,
  title2,
  stacked = false,
  fill = true,
  color1 = colorSelector(4),
  color2 = colorSelector(3),
}) => {
  const options = {
    scales: {
      yAxes: [
        {
          stacked,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <Fragment>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line
        data={genData(
          workordersData,
          workordersPmData,
          title1,
          title2,
          fill,
          color1,
          color2
        )}
        options={options}
      />
    </Fragment>
  );
};

export default LineChart;
