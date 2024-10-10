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
      <img
              src="https://media4.giphy.com/media/fYNSIDot0a7AZuDWhl/giphy.gif?cid=6c09b952g58wltijf7vccg44h6eqaxgv7pcz483j28l4nfk4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="img-main"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
      { console.log(`username:,${user.username}`)}
      <h1 className="heading">Welcome, {user.username}! Feel free to browse the products.</h1>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      </div>
      <div className="menu-buttons">
        <button className ="menu-buttons1" onClick={() => handleMenuClick('fruits')}>Fruits</button>
        <button className ="menu-buttons1" onClick={() => handleMenuClick('vegetables')}>Vegetables</button>
        <button className ="menu-buttons1" onClick={() => handleMenuClick('all')}>All</button>
      </div>
      <ProductList products={filteredProducts} />
    
    </div>
  );
};

export default Shop;