import React, { useState, useEffect, useContext } from 'react';
import Nav from './Nav';
import axios from 'axios';
import ProductList from './ProductList';
import { UserContext } from './UserContext';

const Shop = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('all'); 

  
  const { user } = useContext(UserContext);
  console.log(user);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      setProducts(response.data.productdetails);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

 
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  
  const filteredProducts =
    selectedMenu === 'all'
      ? products
      : products.filter((p) => p.prcate.toLowerCase() === selectedMenu);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* <Nav /> */}
      <div className="top-bar" >
      { console.log(`username:,${user.username}`)}
      <h2>Welcome, {user.username}! Feel free to browse the products.</h2>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      </div>
      <div className="menu-buttons">
        <button onClick={() => handleMenuClick('fruits')}>Fruits</button>
        <button onClick={() => handleMenuClick('vegetables')}>Vegetables</button>
        <button onClick={() => handleMenuClick('all')}>All</button>
      </div>
      <ProductList products={filteredProducts} />
    
    </div>
  );
};

export default Shop;