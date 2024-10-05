import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, selectedProduct }) => {
  const [prname, setPrname] = useState('');
  const [prcate, setPrcate] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setPrname(selectedProduct.prname);
      setPrcate(selectedProduct.prcate);
      setPrice(selectedProduct.price);
      setImg(selectedProduct.img);
    } else {
      setPrname('');
      setPrcate('');
      setPrice('');
      setImg('');
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ prname, prcate, price, img });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={prname}
        onChange={(e) => setPrname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Product Category"
        value={prcate}
        onChange={(e) => setPrcate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <button type="submit">{selectedProduct ? 'Update' : 'Create'} Product</button>
    </form>
  );
};

export default ProductForm;