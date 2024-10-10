import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-show">
      <ul className="product-show1">
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <h3>{product.prname}</h3>
              <p>Category: {product.prcate}</p>
              <p>Price: ${product.price}</p>
              <div className="img-box">
              <img src={product.img} alt={product.prname} style={{ width: '200px', height: '200' }} />
              </div>  
              <br />
              <button onClick={() => onEdit(product)}>Edit</button>
              <br />
              <br />
              <button onClick={() => onDelete(product._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;