import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {

    let token = req.cookies.jwt;

    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decode.userId).select("-password");
        next();

    } catch (err) {
        return res.status(401).send("Not authorized, token not valid");
    }
};

export { protect };