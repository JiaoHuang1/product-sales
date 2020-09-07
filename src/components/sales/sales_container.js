import { connect } from 'react-redux';
import { fetchSalesInfo } from '../../actions/product_action';
import Sales from './sales';

const mapStateToProps = (state) => {
    return {
        sales: state.sales
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSalesInfo: () => dispatch(fetchSalesInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);