import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ getWorkordersBySite }) => {
  useEffect(() => {
    getWorkordersBySite();
  }, [getWorkordersBySite]);
  return (
    <div>
      <div>test</div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
