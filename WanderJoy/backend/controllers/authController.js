
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//user registration


//user login
export const login = async(req,res) => {
    const email = req.body.email
    try{
        const user = await User.findOne({email})
        //if user doesn't exist
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }
        //if user is exist then check the password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)
        //if password is incorrrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message: 'Incorrect email or password'})
        }
        const {password, role, ...rest} = user._doc
        //create jwt token
        const token = jwt.sign(
            {id:user._id, role:user.role}, 
            process.env.JWT_SECRET_KEY,
            {expiresIn: "15d"}
        );
        //set token in the browser cookies and send the response to the client 
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            token,
            data:{ ...rest},
            role,
        });
    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message: 'Failed to login'});
    }
};
