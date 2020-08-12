import React from 'react';

function App() {

  const getProducts = () => {
    try {
      fetch('http://localhost:4000/api/products/getByFilters', {
        method: 'get',
        // body: JSON.stringify(opts)
      }).then(function (response) {
        console.log(response.json()); 
      })
    } catch (error) {
      console.log(error);
    }
  }

  getProducts();

  return (
    <div className="App">
      Hello worldddd
    </div>
  );
}

export default App;
