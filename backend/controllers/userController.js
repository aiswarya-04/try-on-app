import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import createToken from "../utils/createToken.js";


const createUser = async (req, res) => {

    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Please fill all the required fields!");
    }

    const userExist = await User.findOne({email});
    if (userExist) {
        return res.status(400).send("The user already exists!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    await newUser.save();

    createToken(res, newUser._id);

    res.status(201).json({ _id: newUser._id, username: newUser.username, email: newUser.email });
};


const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist && (await bcrypt.compare(password, userExist.password))) {

        createToken(res, userExist._id);

        return res.status(200).json({
            _id: userExist._id,
            username: userExist.username,
            email: userExist.email
        });
    }

    return res.status(401).send("Invalid email or password!");
};


const logoutUser = async (req, res) => {

    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    });

    return res.status(200).json({
        message: "Logged out successfully!"
    });
};


const getCurrentUserProfile = async (req, res) => {

    const user = await User.findOne({ _id: req._id });

    if (user) {
        return res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    }

    return res.status(404).send("User not found");
};


export {createUser, loginUser, logoutUser, getCurrentUserProfile};