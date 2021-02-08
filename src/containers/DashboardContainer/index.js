import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getWorkordersBySite } from 'actions/workorders';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getWorkordersBySite };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
