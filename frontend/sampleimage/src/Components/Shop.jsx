import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import ProductList from './ProductList';

const Shop = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('all'); // Default to 'all'

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include JWT if needed
        },
      });
      setProducts(response.data.productdetails);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle menu button clicks to filter products
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  // Filter products based on selected menu
  const filteredProducts =
    selectedMenu === 'all'
      ? products
      : products.filter((p) => p.prcate.toLowerCase() === selectedMenu);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Nav />
      <h2>Welcome, Customer! Feel free to browse the products.</h2>
      <div className="menu-buttons">
        <button onClick={() => handleMenuClick('fruits')}>Fruits</button>
        <button onClick={() => handleMenuClick('vegetables')}>Vegetables</button>
        <button onClick={() => handleMenuClick('all')}>All</button>
      </div>
      <ProductList products={filteredProducts} />
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Shop;