import { connect } from 'react-redux';
import WeeklyLine from './components/WeeklyLine';
import { makeWorkordersWeeklyData } from 'selectors/workorders';

const mapStateToProps = (state) => ({
  weeklyData: makeWorkordersWeeklyData(state),
});

const mapDispatchToProps = {};

const WeeklyLineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeeklyLine);

export default WeeklyLineContainer;
