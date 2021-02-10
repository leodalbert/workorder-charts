import { connect } from 'react-redux';
import AssgDept from './components/AssgDept';
import { makeAssignedDepartmentData } from 'selectors/workorders';

const mapStateToProps = (state) => ({
  assignedDepartmentData: makeAssignedDepartmentData(state),
});

const mapDispatchToProps = {};

const AssgDeptContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssgDept);

export default AssgDeptContainer;
