const app= require("./src/app")
const {sequelize}= require("./src/db")
const PORT= process.env.PORT || 3001 

app.listen(PORT,()=>{
    sequelize.sync({force:true})
    console.log("listening in 3001");
})