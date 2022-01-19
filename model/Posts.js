const mongoose = require("mongoose")

const PostSquema = new mongoose.Schema({
  titulo: {type:String, required:true},  
  contenido: {type:String, required:true}
})

module.exports = mongoose.model("Post", PostSquema)