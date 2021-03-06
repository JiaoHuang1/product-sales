import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import Overview from './components/overview/overview_container';
import Sales from './components/sales/sales_container';


const App = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Route exact path="/" component={Sales} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/sales" component={Sales} />
        </HashRouter>
    </Provider>
);

export default App;


