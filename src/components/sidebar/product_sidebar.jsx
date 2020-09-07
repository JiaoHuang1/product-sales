import React from 'react';
import { Link } from 'react-router-dom';

import overview from '../../overview_logo.png';
import sales from '../../sales_logo.png';

class ProductSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSidebarInfo();
    }

    render() {
        if (!this.props.image) {
            return null;
        }
        const taglist = this.props.tags.map((tag, idx) => <button className='tag' key={idx}>{tag}</button>)
   
        return (
            <div className='sidebar'>
                <div className='separator'>
                    <img className='product-img' src={this.props.image} />
                    <h1>{this.props.title}</h1>
                    <p id='subtitle'>{this.props.subtitle}</p>
                </div>
                <div className='tags separator'>{taglist}</div>
                <div className='links'>
                    <Link to='/overview' className='link-container'>
                        <img src={overview} />
                        <span id='overview-link'>OVERVIEW</span>
                    </Link>
                    <Link to='/sales' className='link-container'>
                        <img src={sales} />
                        <span id='sales-link'>SALES</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ProductSidebar;