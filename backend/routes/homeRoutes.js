const{ Router } = require("express")
const router= Router();

router.get("",async (req, res) => {
    res.status(200).send({message:"welcome to online food-app website"});
})

module.exports=router