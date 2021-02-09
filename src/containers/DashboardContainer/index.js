import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getWorkordersBySite } from 'actions/workorders';
import {
  selectWorkorders,
  makeAssignedDepartmentData,
} from 'selectors/workorders';

const mapStateToProps = (state) => ({
  workorders: selectWorkorders(state),
  assignedDepartmentData: makeAssignedDepartmentData(state),
});

const mapDispatchToProps = { getWorkordersBySite };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
