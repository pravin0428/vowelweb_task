const express = require("express");
const { isValidObjectId } = require("mongoose");
 
const ProductModel = require("../Schema/CartSchema");
  const { validatePost } = require("../Validator/postValidator");
const app = express();
app.use(express.json());

// app.get("/" , (req , res)=>{
//     res.send("hi bro")
// })

app.get("/", async (req, res) => {
  // console.log((ProductModel).find())
  const data = await ProductModel.find();
  // console.log(data)
  return res.status(200).send({ data });
});

 
//post request : post data in database

app.post("/", async (req, res) => {
  
  const { body } = req;
    console.log(body)
 
  console.log({ ...body });
  const newPost = new ProductModel({ ...body })
  console.log(newPost,"-----------") 
  if (newPost.title === "" || newPost.imageFileSet === "" || newPost.description === "" || newPost.publishedAt === "" ) {
    return res.status(400).send("empty post object ! Please fill all the data");
  }else{
    const post = await newPost.save();
   res.status(200).send("Data added successfully")
  } 
   
});


//delete req

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send("invalid object id");
  }
  try {
    let data = await ProductModel.findByIdAndDelete(id);
    //  await data.remove() // we are also use this approch
    return res.status(200).send("post deleted success");
  } catch (error) {
    console.log(error);
  }
});

 
module.exports = app;
