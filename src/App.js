import React from 'react';
import ProductContainer from './components/ProductContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header >
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <center><img src="https://i.imgur.com/FL2uyii.png" class="img-fluid" alt="Responsive image" /></center>
          </div>
        </div>
      </header>

      <ProductContainer/>
       
    </div>


  );
}

export default App;
