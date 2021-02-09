import { initialState } from 'reducers/workorders';
import dayjs from 'dayjs';
import { createSelector } from 'reselect';
import { colorSelector } from 'utils/HelperFunctions';

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
      .map((workorder) => {
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

// export const makeSelectWorkorderComponents = createSelector(
//   selectComponents,
//   (components) => {
//     return components.workOrderComponents;
//   }
// );
