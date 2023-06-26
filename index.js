const app= require("./src/app")
const {sequelize}= require("./src/db")
const {getAllSelect}=require("./src/utils/getAllSelect")
const PORT= process.env.PORT || 3001 

app.listen(PORT,async()=>{
    await getAllSelect()
    sequelize.sync({force:true})
    console.log("listening in 3001");
})
// alter force  