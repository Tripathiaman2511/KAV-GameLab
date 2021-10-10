import React, {Component} from "react";
import Pagination from "react-js-pagination";
import './pagination.css';

class pagination extends Component{
    constructor(props){
        super(props);
        this.state ={
            activepage:15
        };
    }
    handlePageChange(pagenumbr){
        console.log(`Active page is ${pagenumbr}`);
        this.setState({activepage: pagenumbr});
    }
    render(){
        return(
            <div id="numberbars">
                <Pagination 
                activepage={this.state.activepage}
                itemsCountPerPage={10}
                totalItemsCount={160}
                pageRangeDisplayed={6}
                onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}
export default pagination;