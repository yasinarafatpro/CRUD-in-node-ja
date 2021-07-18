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
router.post('/',async(req,res)=>{
    try{
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            tech:req.body.tech,
            sub:req.body.sub
        })
        const a1=await user.save()
        res.send(a1);
    }catch(err){
        res.send('Error'+err)
    }
})
module.exports=router