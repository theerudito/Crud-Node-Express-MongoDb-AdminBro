const mongoose = require("mongoose")


const url = "mongodb://localhost/UserDB"

mongoose.connect(url, {
    
})
.then( () =>console.log("Conectado a MongoDB"))
.catch( (e) => console.log("Erro en conectar con mongo: " + e))



module.exports = mongoose