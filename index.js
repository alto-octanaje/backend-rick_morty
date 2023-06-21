const app= require("./src/app")
const {sequelize}= require("./src/db")
const PORT= process.env.PORT || 3001 

app.listen(PORT,()=>{
    sequelize.sync({alter:true})
    console.log("listening in 3001");
})