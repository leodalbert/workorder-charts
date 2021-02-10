import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { colorSelector } from 'utils/HelperFunctions';

const genData = (
  data1,
  data2,
  title1,
  title2,
  fill,
  color1,
  color2,
  borderBlack
) => {
  return {
    labels: [...Array(53).keys()].slice(1),
    datasets: [
      {
        label: title2,
        data: data2,
        fill,
        backgroundColor: color2,
        borderColor: borderBlack ? 'black' : color2,
        borderWidth: borderBlack ? 1 : 3,
      },
      {
        label: title1,
        data: data1,
        fill,
        backgroundColor: color1,
        borderColor: borderBlack ? 'black' : color1,
        borderWidth: borderBlack ? 1 : 3,
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
  borderBlack = false,
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      <div style={{ height: '35vh' }}>
        <Line
          data={genData(
            workordersData,
            workordersPmData,
            title1,
            title2,
            fill,
            color1,
            color2,
            borderBlack
          )}
          options={options}
        />
      </div>
    </Fragment>
  );
};

export default LineChart;
