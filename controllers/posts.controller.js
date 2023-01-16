const PostModel = require('../models/post.model')

exports.getall = async(req,res) =>{
    try {
        const posts = await PostModel.find(  {userID : req.body.userID})
        res.json(posts)
    } catch (error) {
        res.json({msg : error.message})
    }
}

exports.create = async(req,res) =>{
    const {title ,body,device} = req.body;
    let userID = req.body.userID;
    try {
        const newPost = new PostModel({title ,body,device,userID})
        await newPost.save()
        res.json({msg :" poste created" })
        
    } catch (error) {
        res.json({msg : error.message })
    }
}

exports.update = async(req,res) =>{
    const payload = req.body;
    const _id = req.params.id;
    const userID = req.body.userID;
    
    const post = await PostModel.find({_id})
    
    console.log(userID ,post);
    try {
        if(userID !== post[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
            const data  = await PostModel.findByIdAndUpdate({_id},payload)
            res.json({msg : "post updated"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}
exports.delete = async(req,res) =>{
    const payload = req.body;
    const _id = req.params.id;
    const userID = req.body.userID;
    
    const post = await PostModel.find({_id})
    
    console.log(userID ,post);
    try {
        if(userID !== post[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
             await PostModel.findByIdAndDelete({_id})
            res.json({msg : "post deleted"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}

