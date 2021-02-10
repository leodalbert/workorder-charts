import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getWorkordersBySite } from 'actions/workorders';
import {
  selectWorkorders,
  makeAssignedDepartmentData,
  makeWorkorderCompletionTimeData1,
  makeWorkorderCompletionTimeData2,
  makeWorkordersWeeklyData,
  makeWorkordersWeeklyPmData,
} from 'selectors/workorders';

const mapStateToProps = (state) => ({
  workorders: selectWorkorders(state),
  assignedDepartmentData: makeAssignedDepartmentData(state),
  workorderCompletionData1: makeWorkorderCompletionTimeData1(state),
  workorderCompletionData2: makeWorkorderCompletionTimeData2(state),
  weeklyData: makeWorkordersWeeklyData(state),
});

const mapDispatchToProps = { getWorkordersBySite };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
