import { initialState } from 'reducers/workorders';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import { createSelector } from 'reselect';
import { selectDoughnut1Filter, selectDoughnut2Filter } from './filter';
import { colorSelector } from 'utils/HelperFunctions';
dayjs.extend(weekOfYear);

// TODO handle status === archived / the rest

export const selectState = (state) => state.workorders || initialState;

export const selectWorkorders = (state) => selectState(state).workorders;

// number of workorders by assigned_department by month
export const makeAssignedDepartmentData = createSelector(
  selectWorkorders,
  (workorders) => {
    const data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [],
    };
    const tempData = {};
    workorders
      .filter((workorder) =>
        dayjs(workorder.created_on).isAfter(dayjs().subtract(7, 'year'))
      )
      .forEach((workorder) => {
        const month = workorder.created_on.split('-')[1] - 1;
        if (tempData[workorder.assigned_trade]) {
          tempData[workorder.assigned_trade][month]
            ? (tempData[workorder.assigned_trade][month] += 1)
            : (tempData[workorder.assigned_trade][month] = 1);
        } else {
          tempData[workorder.assigned_trade] = [];
          tempData[workorder.assigned_trade][month] = 1;
        }
      });
    let i = 0;
    for (let d in tempData) {
      data.datasets.push({
        label: d ? d : 'not specified',
        data: tempData[d],
        backgroundColor: colorSelector(i),
      });
      i++;
    }
    return data;
  }
);
// number of workorders per week
export const makeWorkordersWeeklyData = createSelector(
  selectWorkorders,
  (workorders) => {
    const data = {
      allWeeklyWorkorders: [...Array(52).fill(0)],
      weeklyPmWorkorders: [...Array(52).fill(0)],
      weeklyOpenWorkorders: [...Array(52).fill(0)],
      weeklyCompletedWorkorders: [...Array(52).fill(0)],
    };
    workorders.forEach((workorder) => {
      data.allWeeklyWorkorders[dayjs(workorder.created_on).week() - 1]++;
      workorder.request_type === 'Preventive Maintenance' &&
        data.weeklyPmWorkorders[dayjs(workorder.created_on).week() - 1]++;
      workorder.completed_date &&
        data.weeklyOpenWorkorders[dayjs(workorder.created_on).week() - 1]++;
      //   TODO is this the correct data?
      workorder.completed_date &&
        data.weeklyCompletedWorkorders[
          dayjs(workorder.completed_date).week() - 1
        ]++;
    });
    return data;
  }
);

// Weekly workorder data
export const makeWorkordersWeeklyPmData = createSelector(
  selectWorkorders,
  (workorders) => {
    const data = [...Array(52).fill(0)];
    workorders.forEach((workorder) => {
      workorder.request_type === 'Preventive Maintenance' &&
        data[dayjs(workorder.created_on).week() - 1]++;
    });
    return data;
  }
);

// // number of workorders per week
// export const makeOpenWorkordersWeeklyData = createSelector(
//   selectWorkorders,
//   (workorders) => {
//     const data = [...Array(52).fill(0)];
//     workorders.forEach((workorder) => {
//       data[dayjs(workorder.created_on).week() - 1]++;
//     });
//     return data;
//   }
// );

// workorders by how long they take to complete for doughnut 1
export const makeWorkorderCompletionTimeData1 = createSelector(
  [selectWorkorders, selectDoughnut1Filter],
  (workorders, filter) => {
    const data = [0, 0, 0];
    workorders
      .filter((workorder) => {
        //   if workorder is completed
        if (workorder.completed_date) {
          // return true if filter is set to all
          if (filter === 'all') {
            return true;
            //   else if filter is set to urgert, only return if priority is set to 1
          } else if (filter === 'urgent') {
            if (workorder.assigned_priority === 1) return true;
            else return false;
            // else filter by request type
          } else {
            if (workorder.request_type === filter) return true;
            else return false;
          }
        }
        // filter if not completed
        return false;
      })
      .forEach((workorder) => {
        if (
          dayjs(workorder.completed_date).diff(
            workorder.assigned_date,
            'day'
          ) <= 6
        ) {
          data[0]++;
        } else if (
          dayjs(workorder.completed_date).diff(
            workorder.assigned_date,
            'day'
          ) <= 30
        ) {
          data[1]++;
        } else {
          data[2]++;
        }
      });
    return data;
  }
);
// workorders by how long they take to complete for doughnut 1
export const makeWorkorderCompletionTimeData2 = createSelector(
  [selectWorkorders, selectDoughnut2Filter],
  (workorders, filter) => {
    const data = [0, 0, 0];
    workorders
      .filter((workorder) => {
        //   if workorder is completed
        if (workorder.completed_date) {
          // return true if filter is set to all
          if (filter === 'all') {
            return true;
            //   else if filter is set to urgert, only return if priority is set to 1
          } else if (filter === 'urgent') {
            if (workorder.assigned_priority === 1) return true;
            else return false;
            // else filter by request type
          } else {
            if (workorder.request_type === filter) return true;
            else return false;
          }
        }
        // filter if not completed
        return false;
      })
      .forEach((workorder) => {
        if (
          dayjs(workorder.completed_date).diff(
            workorder.assigned_date,
            'day'
          ) <= 6
        ) {
          data[0]++;
        } else if (
          dayjs(workorder.completed_date).diff(
            workorder.assigned_date,
            'day'
          ) <= 30
        ) {
          data[1]++;
        } else {
          data[2]++;
        }
      });
    return data;
  }
);

// export const makeSelectWorkorderComponents = createSelector(
//   selectComponents,
//   (components) => {
//     return components.workOrderComponents;
//   }
// );
// datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
