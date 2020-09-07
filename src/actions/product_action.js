let data = require('../data/Webdev_data2.json')[0];

export const RECEIVE_SIDEBAR_INFO = 'RECEIVE_SIDEBAR_INFO';
export const RECEIVE_OVERVIEW_INFO = 'RECEIVE_OVERVIEW_INFO';
export const RECEIVE_SALES_INFO = 'RECEIVE_SALES_INFO';

export const receiveSidebarInfo = ({ image, title, subtitle, tags }) => ({
    type: RECEIVE_SIDEBAR_INFO,
    sidebar: { image, title, subtitle, tags }
});

export const receiveOverviewInfo = ({ brand, details, id, retailer, reviews }) => ({
    type: RECEIVE_OVERVIEW_INFO,
    overview: { brand, details, id, retailer, reviews }
});

export const receiveSalesInfo = ({ sales }) => ({
    type: RECEIVE_SALES_INFO,
    sales: { sales }
});

export const fetchSidebarInfo = () => receiveSidebarInfo(data);

export const fetchOverviewInfo = () => receiveOverviewInfo(data);

export const fetchSalesInfo = () => receiveSalesInfo(data);