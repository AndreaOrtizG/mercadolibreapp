import React from 'react'
import Producto from './Producto'

class ProductContainer extends React.Component{
    constructor(props) {
        super(props)

        console.log('constructor')

        this.state={
            productos: [],
            

        }
    }

    componentDidMount() {
        fetch(' https://api.mercadolibre.com/sites/MCO/search?q=Motorola%20G6')        
            .then(response => response.json())
            .then(productosJson => this.setState({productos: productosJson.results}))
           
        }

      

    render (){

        console.log('productos: ', this.state.productos[0].address)
        //console.log(this.state.productos)
        //const nombre= this.state.productos[0].title
        return <Producto nombre={'jjjj'}/>

            

    }


    



}

export default ProductContainer;