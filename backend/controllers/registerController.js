module.exports.register = (req,res,next)=>{
  try{
    return res.json({msg:"hello from express"})
  }catch(err){console.log(err);} 
}