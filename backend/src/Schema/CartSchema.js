const {Schema , model} = require("mongoose")

const CartProducsSchema = new Schema({
    title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imageFileSet: {
        type: String,
        require: true,
      },
      publishedAt : {
        type : String
      }
})

 const CartModel = model("cartProducs" , CartProducsSchema )

 module.exports = CartModel