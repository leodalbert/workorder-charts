import React, { Fragment } from 'react';
import Dashboard from 'containers/DashboardContainer';
import Header from 'containers/HeaderContainer';

//  Material Ui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './meta/theme';
import './meta/App.css';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard />;
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
