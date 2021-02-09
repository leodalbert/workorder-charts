import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import GroupedBar from 'components/charts/GroupedBar';

const Dashboard = ({
  getWorkordersBySite,
  workorders,
  assignedDepartmentData,
}) => {
  useEffect(() => {
    getWorkordersBySite();
  }, [getWorkordersBySite]);

  return workorders.length > 0 ? (
    <div>
      <GroupedBar assignedDepartmentData={assignedDepartmentData} />
    </div>
  ) : (
    <div>loading...</div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

// workorders[0].created_on
