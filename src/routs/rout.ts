const userExpress=require('express');
const router=userExpress.Router();
const User=require('../model/user')
const createError=require('http-errors')
router.get('/',async(req,res)=>{
    try{
        const users=await User.find()
        res.json(users);
    }catch(err){
        res.send('Error'+ err)
    }
});
router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        res.json(user);
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
});
router.delete('/:id',async(req,res)=>{
    try{
        const users=await User.findById(req.params.id);
        users.remove();
        res.send('deleted');
        res.end();
    }catch(err){
        res.send('Error '+err)
    }
});
router.patch('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        user.name=req.body.name
        const a1=await user.save();
        res.json(a1);

    }catch(err){
        res.send('Error '+err)
    }
})
module.exports=router;