import { connect } from 'react-redux';
import { fetchOverviewInfo } from '../../actions/product_action';
import Overview from './overview';

const mapStateToProps = (state) => {
    return {
        brand: state.brand,
        details: state.details,
        id: state.id,
        retailer: state.retailer,
        reviews: state.reviews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOverviewInfo: () => dispatch(fetchOverviewInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);