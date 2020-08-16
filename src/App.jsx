import React from 'react';
import Navbar from './components/Navbar';

function App() {

  // const getProducts = async () => {
  //   try {

  //     const response = await fetch('http://localhost:4000/api/products/getByFilters?description=tv');
  //     const data = await response.json();

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getProducts();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
