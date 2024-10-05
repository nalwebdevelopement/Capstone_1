import React, {useState} from 'react'
//import ProductSearch from './ProductSearch';


const  Dropdown =() =>{

  const [selectedCategory, setSelectedCategory] = useState('');
    const [isshowproduct, setIsShowProduct] = useState(false);

    const toggleMenu = () => {
      setIsShowProduct(!isshowproduct);
    };

    // const handleItemClick = (item) => {
     
    //     if (item === "Fruit & Vegetables") {
    //       setIsShowProduct(true); 
    //     } else {
    //       setIsShowProduct(false); 
    //     }
    //   };

    const handleItemClick = (category) => {
      setSelectedCategory(category);
      setIsShowProduct(true); // Show the ProductSearch component when an item is clicked
    };
  return (
    <div>
      <div className="dropdown">
          <ul className="dropdown-list" style={{ position: 'absolute' }}>
          
            {/* <li onClick={toggleMenu}>Fruit & Vegetables</li> 
            {isshowproduct && <ProductSearch />}  */}
            <li onClick={() => handleItemClick("Vegetables")}>Vegetables</li>
            <li onClick={() => handleItemClick("Fruits")}>Fruits</li>
            <li onClick={() => handleItemClick("Meat")}>Meat</li>
            <li onClick={() => handleItemClick("Fish")}>Fish</li>
            <li onClick={() => handleItemClick("Bread")}>Bread</li>
            <li onClick={() => handleItemClick("Cake")}>Cake</li>
            <li onClick={() => handleItemClick("Dairy")}>Dairy</li>
            <li onClick={() => handleItemClick("Eggs")}>Eggs</li>
            <li onClick={() => handleItemClick("Meat")}>Deli</li>
           
          </ul>
          {isshowproduct && <ProductSearch category={selectedCategory} />} {/* Pass selected category as prop */}
        </div>
       
    </div>
  );
};

export default Dropdown
