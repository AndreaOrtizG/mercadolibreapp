import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
class Busqueda extends React.Component{

    constructor(props){
        super(props)
        this.state= {search: ''}

    }


    //
    

    handleChange = (e)=> {

        this.setState({search: e.target.value})
    }
    render (){

        const {handleSearch}= this.props
        const {search} =this.state
        // const {handleSearch}=this.props

        // if(this.state != null ){
        // const{search}=this.state
        // }

        // else {const{search}=""}
        
        return (
            
            
			<div className="container-busqueda container m-2">
                <div class="row">
                    <div class="col-sm">
                        <input 
                        value={this.state.search}
                        onChange={this.handleChange}
                        //name= 'search'
                        //onChange={this.handleChange}
                        className= "producto-entrada form-control"
                        type="text" placeholder="Search" aria-label="Search"
                        />
                        
                    </div>
                    <div class="col-sm">
                    <button className="boton-busqueda btn btn-outline-dark"  onClick={()=> handleSearch(search)}> Busqueda </button>
                    </div>
                    <div class="col-sm">
                    
                    </div>
                </div>

            </div>
		);
    }

    

    
    



}

Busqueda.propTypes={

    handleSearch: PropTypes.func.isRequired

}

export default Busqueda;