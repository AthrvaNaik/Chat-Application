import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if(!decoded){
            return res.status(401).json({ msg: "Invalid token" });
        }
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ msg: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("protectRouteError::", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;