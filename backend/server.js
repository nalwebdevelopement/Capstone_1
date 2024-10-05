require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const imgctrl = require('./controllers/imgctrl.js')
const cors = require('cors')

const connectDB = require('./config/db');
connectDB();
 app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
}))

//aa.get("/notes",() =>{})
app.get('/notes',imgctrl.fetchpro)
app.get('/notes/:id',imgctrl.fetchProId)
app.post('/notes',imgctrl.createProduct)
app.put('/notes/:id',imgctrl.updateProduct)
// --> Edit a Existing Note in DB
app.delete('/notes/:id',imgctrl.deleteProduct)
// -->Retrieve all note in DB










app.listen(PORT, () => {
    console.log(`The port is running ,${PORT}`)
});