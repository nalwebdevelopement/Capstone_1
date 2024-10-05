const productdetail = require('../models/img')



//find all the products
const fetchpro = async (req, res) => {
    const productdetails = await productdetail.find();
    res.json({ productdetails: productdetails });
  };

//find product by id
  const fetchProId = async (req, res) => {
    const proId = req.params.id;
    const productdetails = await productdetail.findById(proId);
    res.json({ productdetails: productdetails });
  };
  // Create a product
  const createProduct = async (req, res) => {
    const { prname,prcate,price,img } = req.body;
    const productdetails  = await productdetail.create({
      prname: prname,
      prcate: prcate,
      price:price,
      img:img
    });
    res.json({ productdetails: productdetails });
  };
  // UPdate the product
  const updateProduct = async (req, res) => {
    const proId = req.params.id;
    const { prname,prcate,price,img } = req.body;
    const productdetails = await productdetail.findByIdAndUpdate(proId, {
      prname: prname,
      prcate: prcate,
      price:price,
      img:img
    });
  
    const updatedProduct = productdetail.findById(proId);
  
    res.json({productdetails:updateProduct});
  };
  // Delete the product
  const deleteProduct = async (req, res) => {
    const proId = req.params.id 
    await productdetail.deleteOne({
      _id: proId,
    })
    res.json({success: "Record is OuuuutttaaHeehhhhh!"})
  };

const createpro = () => {}  
const updatepro = () => {}
const deletepro = () => {}


  module.exports ={
  fetchpro,fetchProId,createProduct,updateProduct,deleteProduct };