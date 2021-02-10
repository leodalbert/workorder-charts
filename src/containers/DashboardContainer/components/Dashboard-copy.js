import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import GroupedBar from 'components/charts/GroupedBar';
import DoughnutChart from 'components/charts/Doughnut';
import StackedArea from 'components/charts/StackedArea';
import { colorSelector } from 'utils/HelperFunctions';

const Dashboard = ({
  getWorkordersBySite,
  workorders,
  assignedDepartmentData,
  workorderCompletionData1,
  workorderCompletionData2,
  weeklyData,
}) => {
  console.log(weeklyData);
  useEffect(() => {
    getWorkordersBySite();
  }, [getWorkordersBySite]);
  return workorders.length > 0 ? (
    <div>
      <GroupedBar assignedDepartmentData={assignedDepartmentData} />
      <DoughnutChart
        data1={workorderCompletionData1}
        data2={workorderCompletionData2}
      />
      <StackedArea
        workordersData={weeklyData.allWeeklyWorkorders}
        workordersPmData={weeklyData.weeklyPmWorkorders}
        title1={'Workorders per week'}
        title2={'Preventive maintenance workorders per week'}
      />
      <StackedArea
        workordersData={weeklyData.weeklyOpenWorkorders}
        workordersPmData={weeklyData.weeklyCompletedWorkorders}
        title1={'Weekly workorders opened'}
        title2={'weekly workorders closed'}
        stacked
        fill={false}
        color1={colorSelector(2)}
        color2={colorSelector(0)}
      />
    </div>
  ) : (
    <div>loading...</div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

// workorders[0].created_on
