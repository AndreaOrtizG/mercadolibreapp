import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';


const Producto=({
    imagen,
    nombre,
    precio,
})=> (

           
                    <div className="col-md-3">
                        <div className="card bg-dark">
                            <div className='card text-center'>
                                <center>
                                <img
                                    className="image-thumbnail"
                                    src={imagen}
                                    style={{ width: '50%', height: '50%' }}
                                    alt={nombre}
                                />
                                </center>
                                

                                <div className="card-body">
                                    <h5 className="card-title">{nombre}</h5>
                                    <h6 className="card-title">{precio}</h6>
                                </div>
                             </div>
                         </div>
                    </div>
             
    
    );


Producto.propTypes={
    nombre:PropTypes.string.isRequired,
   
}

export default Producto;