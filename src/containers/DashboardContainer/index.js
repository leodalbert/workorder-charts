import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getWorkordersBySite } from 'actions/workorders';
import { getSiteGroupInfo } from 'actions/siteGroup';

const mapStateToProps = (state) => ({
  loading: state.workorders.loading,
});

const mapDispatchToProps = { getWorkordersBySite, getSiteGroupInfo };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
