import React from 'react';
console.log('FilterableProductTable');

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                input
            </div>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return(
            <div>
                ProductCategoryRow
            </div>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        return(
            <div>
                ProductRow
            </div>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        console.log('products');
        console.dir(this.props.products);
        const itemArray = this.props.products;
        const items = itemArray.map((product) => {
            return <li>{product.name}</li>;
        }); 
        return(
            <div>
                ProductTable
                <ProductCategoryRow category={this.props.category}/>
                <ProductRow/>
                <ul>
                {items}
                </ul>
            </div>
        )
    }
}

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const props = this.props;
        console.dir(props);
        return(
            <div>
                <SearchBar/>
                <ProductTable products={this.props.products}/>
            </div>
        )
        
    }
};