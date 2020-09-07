import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar/product_sidebar_container';

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOverviewInfo();
    }

    render() {
        if (!this.props.brand) {
            return null;
        }
        const reviewlist = this.props.reviews.map((review, idx) => 
        <div key={idx}>
            <p>Customer: {review.customer}</p>
            <p>Comment: {review.review}</p>
        </div>
        )
   
        return (
            <div className='main-container'>  
                <Navbar />
                <div className='navbar-exclusive'>
                    <Sidebar />
                    <div className='overview-or-sales'>
                        <div className='overview'>
                            <ul>
                                <li>Brand: {this.props.brand}</li>
                                <li>Description: {this.props.details}</li>
                                <li>ID: {this.props.id}</li>
                                <li>Retailer: {this.props.retailer}</li>
                            </ul>
                            <p>Reviews</p>
                            {reviewlist}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;