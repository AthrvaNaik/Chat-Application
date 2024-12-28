import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

const maxAge = 1*24*60*60*1000 //1 day validity of token
const createToken = (email,userId) => {
    return jwt.sign({email,userId},process.env.SECRET_KEY,{expiresIn:maxAge});
}

export const signup = async (request,response,next)=>{
    try {
        const {email,password} = request.body;
        if(!email || !password){
            return response.status(400).send("Email and password required!");
        }

        const user = await User.create({email,password});
        res.cookie("jwt",createToken(email,user.id),{
            maxAge,
            secure:true,
            sameSite:"None",
        });
        return response.status(201).json({user:{
            id:user.id,
            email:user.email,
            profileSetup:user.profileSetup
        }});

    } catch (error) {
        console.log("signup error::",error);
        return response.status(500).send("Internal server error");
    }
}