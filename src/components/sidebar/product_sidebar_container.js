import { connect } from 'react-redux';
import { fetchSidebarInfo } from '../../actions/product_action';
import ProductSidebar from './product_sidebar';

const mapStateToProps = (state) => {
    return {
        image: state.image,
        title: state.title,
        subtitle: state.subtitle,
        tags: state.tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSidebarInfo: () => dispatch(fetchSidebarInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSidebar);