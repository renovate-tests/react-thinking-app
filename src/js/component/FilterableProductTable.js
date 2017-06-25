import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        return(
            <tr>
                <td colSpan="2">{this.props.category}</td>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const name = this.props.product.stocked ? this.props.product.name : 
        <span style={{color:'red'}}>
            {this.props.product.name}
        </span>
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.isStockOnly)) {
                return;
            }
            if(product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name}/>)
            lastCategory = product.category;
        });
        return(
            <table>
                <thead><tr><th>Name</th><th>Price</th></tr></thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input 
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockInputChange}
                    />
                    {''}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isStockOnly: false
        };

        this.handleFilterTextInput =this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput(isStockOnly) {
        this.setState({
            isStockOnly: isStockOnly
        })
    }

    render() {
        return(
            <div>
                <SearchBar
                filterText={this.state.filterText}
                isStockOnly={this.state.isStockOnly}
                onFilterTextInput={this.handleFilterTextInput}
                onInStockInput={this.handleInStockInput}
                />
                <ProductTable 
                products={this.props.products}
                filterText={this.state.filterText}
                isStockOnly={this.state.isStockOnly}
                />
            </div>
        )
    }
};