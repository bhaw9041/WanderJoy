import jwt from 'jsonwebtoken'

// verifying token
const verifyToken = (req,res,next,callback) =>{
    const token = req.cookies.accessToken;
    console.log(token);

    if(!token){
        return res.status(401).json({success:false, message:"You are not authorized!"})
    }

    //if token exists then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) =>{
        if(err){
            return res.status(401).json({success:false, message:"Token is invalid"})
        }

        req.user = user;
        //next() calling next
        callback();
    })
}

export const verifyUser = (req,res, next) =>{
    verifyToken(req,res,next,()=>{
        if(req.user.role == 'user' || req.user.role=='admin'){
            next();
        }else{
            return res.status(401).json({success:false, message:"You are not authenticated"});
        }
    });
};

// verifying admin
export const verifyAdmin = (req,res, next) =>{
    verifyToken(req,res,next,()=>{
        if(req.user.role=='admin'){
            next();
        }else{
            return res.status(401)
            .json({success:false, message:"You are not authorized"});
        }
    });
};