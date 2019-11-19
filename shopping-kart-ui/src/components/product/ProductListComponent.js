import React,{Component} from 'react'
import {connect} from 'react-redux'

import {productList} from '../../redux'

import 'bootstrap/dist/css/bootstrap.css'


class ProductListComponent extends Component {

    componentDidMount() {
        console.log(this.props);
        
        this.props.productList()
    }

    renderContent = () => {
        const {product} = this.props
        if(product && product.length > 0){
            return(
                product.map(p => {
                    return(
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.title}</td>
                                    <td>{p.body}</td>
                                </tr>
                    )

                })
                
            )
        }

        return (<tr><td>Loading....</td></tr>)
    }

    render() {
        return (
            <div>
                <table className="table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th> 
                            <th>title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderContent()}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        product: state.productReducer.product,
        loading: state.productReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productList: () => dispatch (productList()),
        deleteProduct: () => dispatch({type: 'DELETE_PRODUCT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ProductListComponent);

