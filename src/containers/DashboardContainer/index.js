import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';

const mapStateToProps = (state) => ({
  loading: state.workorders.loading,
});

const mapDispatchToProps = {};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
