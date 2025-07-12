import users from '../db/models/auth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const extinguser = await users.findOne({ email });
        if (extinguser) {
            return res.status(404).json({ message: "User Exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await users.create({
            name,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({
            email: newUser.email, id: newUser._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' }
    )
    res.status(200).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json("Failed")
        return
    }
}

export const login = async (req, res) => {
    const { email, password } = res.body;
    
    try {
        const extinguser = await users.findOne({ email });
        if (!extinguser) {
            return res.status(404).json({ message: "User does not Exist" });
        }
        const correctPassword = await bcrypt.compare(password, extinguser.password);
        if (!correctPassword) {
            res.status(400).json({ message: "Invalid Credentails"});
            return
        }
        const token = jwt.sign({
            email: extinguser.email, id: extinguser._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' }
    )
    res.status(200).json({ result: extinguser, token });
    } catch (error) {
        res.status(500).json("Failed")
        return
    }
}