import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import Product from './product';
import Overview from './overview/overview_container';
import Sales from './sales/sales_container';


const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Route exact path="/" component={Sales} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/sales" component={Sales} />
        </HashRouter>
    </Provider>
);

export default Root;