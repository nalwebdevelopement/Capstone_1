import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <h3>{product.prname}</h3>
              <p>Category: {product.prcate}</p>
              <p>Price: ${product.price}</p>
              <img src={product.img} alt={product.prname} style={{ width: '100px', height: 'auto' }} />
              <button onClick={() => onEdit(product)}>Edit</button>
              <button onClick={() => onDelete(product._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;