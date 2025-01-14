const jwt = require('jsonwebtoken');
const JWT_SECURE="MyNameIsHarsh@1";

const userfetch=(req, res, next)=>{
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error:"Invalid token ID "})
    }

    try {
        const data= jwt.verify(token,JWT_SECURE )
        req.user= data.user;
        next();

    } catch (error) {
        res.status(401).send({error:"Invalid token ID "})
    }

    
}





module.exports=userfetch;