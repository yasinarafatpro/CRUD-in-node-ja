const userExpress=require('express');
const router=userExpress.Router();
const User=require('../model/user')
router.get('/',async(req,res)=>{
    try{
        const users=await User.find()
        res.json(users);
    }catch(err){
        res.send('Error'+ err)
    }
});
router.post('/',(req,res)=>{
    res.send('post request');
})
module.exports=router