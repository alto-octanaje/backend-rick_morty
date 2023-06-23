const axios = require("axios");
const {species} = require('../db');

const getAllSelect = async()=>{
    const allSpecies = await species.findAll();
    if(allSpecies.length === 0){
        const findSpecies = (await axios.get("http://localhost:3001/select/species")).data
        findSpecies.map(e=>{
            let s={
                name:e
            }  
            species.findOrCreate({where: s });
        })
        console.log(findSpecies);
        return console.log("no tiene elemento ");
    }
    else  console.log(allSpecies.dataValues); console.log("tiene elementos ");

}

module.exports={
    getAllSelect,
}