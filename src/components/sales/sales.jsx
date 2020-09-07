import React from 'react';
import Chart from 'react-apexcharts';
import Navbar from '../navbar';
import Sidebar from '../sidebar/product_sidebar_container';



class Sales extends React.Component {
    constructor(props) {
        super(props);

        this.renderTableData = this.renderTableData.bind(this);
        this.renderTableHeader = this.renderTableHeader.bind(this);
        
        this.state = {
            options: {
                legend: {
                    show: false
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        format: 'MMM'
                    }
                },
                yaxis: {
                    show: false,
                    min: -2000000,
                    max: 3500000,
                    title: {
                        text: 'retail sales'
                    }   
                },
                colors: ["#77B6EA", "#545454"],
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                grid: {
                    show: false
                },
                title: {
                    text: 'Retail Sales',
                    align: 'left',
                    margin: 20,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '20px',
                      fontWeight: 'normal',
                      fontFamily:  'Arial, Helvetica, sans-serif',
                      color:  '#263238'
                    },
                }
            },
            series: []
        };
    }

    componentDidMount() {
        this.props.fetchSalesInfo()
        if (this.props.sales) {
            const retailSalesData = this.props.sales.map((datapoint) => {
                return {x: new Date(datapoint.weekEnding).getTime(), y: datapoint.retailSales}
            })
    
            const wholesaleData = this.props.sales.map((datapoint) => {
                return {x: new Date(datapoint.weekEnding).getTime(), y: datapoint.wholesaleSales}
            })

            this.setState({
                series: [{data: retailSalesData}, {data: wholesaleData}]
            });

        }

    }

    componentDidUpdate(prevState) {
        const retailSalesData = this.props.sales.map((datapoint) => {
            return {x: new Date(datapoint.weekEnding).getTime(), y: datapoint.retailSales}
        })

        const wholesaleData = this.props.sales.map((datapoint) => {
            return {x: new Date(datapoint.weekEnding).getTime(), y: datapoint.wholesaleSales}
        })

        if (this.props.sales !== prevState.sales) {
            this.setState({
                series: [{data: retailSalesData}, {data: wholesaleData}]
            });
        }
    }

    renderTableData() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        });
        return this.props.sales.map((datapoint, idx) => {
            const { weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin } = datapoint
            return (
                <tr key={idx}>
                    <td>{weekEnding}</td>
                    {/* <td>{retailSales}</td> */}
                    <td>{formatter.format(retailSales)}</td>
                    <td>{formatter.format(wholesaleSales)}</td>
                    <td>{unitsSold}</td>
                    <td>{formatter.format(retailerMargin)}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.props.sales[0])
        let headerHash = {
            'weekEnding': 'WEEK ENDING',
            'retailSales': 'RETAIL SALES',
            'wholesaleSales': 'WHOLESALE SALES',
            'unitsSold': 'UNITS SOLD',
            'retailerMargin': 'RETAILER MARGIN'
        }
        return header.map((key, idx) => {
            return <th key={idx}>{headerHash[key]}</th>
        })
    }

    render() {
        if (!this.props.sales) {
            return null;
        }
   
        return (
            <div className='main-container'> 
                <Navbar />
                <div className='navbar-exclusive'>
                    <Sidebar />
                    <div className='overview-or-sales'>
                        <Chart id='chart'
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width='100%'
                            height='30%'
                        />

                        <table id='sales-table'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sales;