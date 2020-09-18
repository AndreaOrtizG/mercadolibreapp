import React from 'react'
import PropTypes from 'prop-types'


const Producto=({
    imagen,
    nombre,
    precio,
    vendedor
})=> (

<div className="producto ">

    
    <h1>{nombre}</h1>
    

</div>
)

Producto.propTypes={
    nombre:PropTypes.string.isRequired,
   
}

export default Producto;