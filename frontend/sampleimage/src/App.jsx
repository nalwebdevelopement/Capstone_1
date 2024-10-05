import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import Nav from './Components/Nav'

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(''); // To track selected menu
  const [filteredProducts, setFilteredProducts] = useState([]); // To store filtered products

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3000/notes');
    setProducts(response.data.productdetails);
    setFilteredProducts(response.data.productdetails); // Initialize with all products
  };

  const handleCreateOrUpdate = async (product) => {
    if (selectedProduct) {
      await axios.put(`http://localhost:3000/notes/${selectedProduct._id}`, product);
    } else {
      await axios.post('http://localhost:3000/notes', product);
    }
    fetchProducts();
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/notes/${id}`);
    fetchProducts();
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // Filter products based on selected menu
    if (menu === 'fruits') {
      setFilteredProducts(products.filter(p => p.prcate === 'Fruits'));
    } else if (menu === 'vegetables') {
      setFilteredProducts(products.filter(p => p.prcate === 'Vegetables'));
    } else {
      setFilteredProducts(products); // Show all if no specific menu is selected
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="main">
        <Nav/>
    <div className="App">

      <h1>Product Management</h1>
    

      {/* Menu for Fruits and Vegetables */}
      <div className="menu">
        <button onClick={() => handleMenuClick('fruits')}>Fruits</button>
        <button onClick={() => handleMenuClick('vegetables')}>Vegetables</button>
        <button onClick={() => handleMenuClick('all')}>All</button>
      </div>
      
      <ProductForm onSubmit={handleCreateOrUpdate} selectedProduct={selectedProduct} />
      <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductForm from './Components/ProductForm';
// import ProductList from './Components/ProductList';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:3000/notes');
//     setProducts(response.data.productdetails);
//   };

//   const handleCreateOrUpdate = async (product) => {
//     if (selectedProduct) {
//       await axios.put(`http://localhost:3000/notes/${selectedProduct._id}`, product);
//     } else {
//       await axios.post('http://localhost:3000/notes', product);
//     }
//     fetchProducts();
//     setSelectedProduct(null);
//   };

//   const handleEdit = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:3000/notes/${id}`);
//     fetchProducts();
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Product Management</h1>
//       <ProductForm onSubmit={handleCreateOrUpdate} selectedProduct={selectedProduct} />
//       <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";

// import axios from "axios";
// import "./App.css";

// function App() {
//   const [product, setProduct] = useState([]);

//   const fetchNotes = async () => {
//     // 1.Make Request to DB
//     const response = await axios.get("http://localhost:3000/notes");
//     console.log(response);
//     const info = await response.data;
//     console.log(info);
//     await setProduct(info.productdetails);
//     console.log("Noted Fetched from DB");
//     console.log("State Available: NOTES[{}]");
//     console.log("***********************")
    
//   };
//   // useEffect(() => {
//   //   fetchNotes();
//   // }, []);

//   useEffect(() => {
//     fetchNotes();
//     console.log("Updated product state:", product); // Log state changes here
//   }, []); 

//   return (
//     <>
//       {product.map((prod,index) => {

//         return (
//           <>
//           <div key={index} style={{ marginBottom: "20px" }}>
//             <div> {prod.prname}</div>
//             <div> {prod.prcate}</div>
           
//            {/* Display image using img tag */}
           
//                   {/* <img src={"/images/asset4.jpg"} alt={prod.prname} style={{ width: "200px", height: "auto" }} /> */}
//                   <img src={prod.img}alt={prod.prname} style={{ width: "200px", height: "auto" }} />
//                   </div>
//           </>
          
//         );
//       })}
//     </>
//   );
// }

// export default App;
