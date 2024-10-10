import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Admin = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch all products from the backend
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

  // Handle creating or updating a product
  const handleCreateOrUpdate = async (product) => {
    try {
      if (selectedProduct) {
        // Update existing product
        await axios.put(`http://localhost:3000/notes/${selectedProduct._id}`, product, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include JWT if needed
          },
        });
      } else {
        // Create new product
        await axios.post('http://localhost:3000/notes', product, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include JWT if needed
          },
        });
      }
      fetchProducts(); // Refresh product list
      setSelectedProduct(null); // Reset selected product
    } catch (error) {
      console.error('Error creating/updating product:', error);
      alert('Failed to create/update product.');
    }
  };

  // Handle editing a product by setting it as the selected product
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  // Handle deleting a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include JWT if needed
        },
      });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-container">
      <h1>Product Management</h1>
      
      <ProductForm onSubmit={handleCreateOrUpdate} selectedProduct={selectedProduct} />
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Admin;