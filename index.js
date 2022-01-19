const express = require("express")

const app = express()

// Invocar Coneccion
const coneccion = require("./database/db")


//ADMIN BRO-----------------
const AdminBro = require("admin-bro")
const espressAdminBro = require("@admin-bro/express")
const mongooseAdminBro = require("@admin-bro/mongoose")


//MODELOS--------------------
const User = require("./model/User")
const Post = require("./model/Posts")

AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {resources:[User, Post]}

const adminBro = new AdminBro(AdminBroOptions)
const router = espressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)




app.get("/", (req, res) => {
  res.send("hola")
})

app.listen(3000, () =>{
  console.log("SERVIDOR A SU SERVICIO EN EL PUERTO 3000");
})


