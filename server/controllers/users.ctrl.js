const bcrypt = require("bcryptjs");
const User = require("../model/users-model");
const jwt = require("jsonwebtoken");
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const key = process.env.SECRET_KEY;
const gravatar = require("gravatar");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// const register = async (req, res) => {
// const { isValid, errors } = validateRegister(req.body.user);
// if (!isValid) {
//     return res.status(400).json(errors)
// };
// const { name, email, password, isAdmin } = req.body.user;

// try {
//     let user = await User.findOne({ email });
//     if (user) {
//         return res.status(400).json({ message: "user already exists" })
//     }
//     const avatar = gravatar.url({
//         size: '200',
//         raiting: 'pg',
//         default: 'mm'
//     })
//     user = new User({
//         name,
//         email,
//         password,
//         avatar,
//         isAdmin
//     })

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt)
//     await user.save();

//     const payload = {
//         user: {
//             id: user.id,
//         }
//     }
//     jwt.sign(
//         payload,
//         key,
//         { expiresIn: 360000 },
//         (err, token) => {
//             if (err) throw err
//             res.json({ token })
//         }
//     );

// }
// catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
// }};

const register = asyncHandler(async (req, res) => {
    const { email, password } = req.body.user;
    const userExits = await User.findOne({ email });

    if (userExits) {
        res.status(401)
        throw new Error("User Already Exist")
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("User Not Found")
    }

})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body.user;

    const user = await User.findOne({ email })

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or Password");
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error("User Not Found")
    }
})

const getAll = async (req, res) => {
    await User.find({})
        .then((users, error) => {
            if (error) {
                return res.status(400).json({ success: true, error });
            }
            if (users.length === 0) {
                return res.json({ success: false, massage: "No users found" });
            }
            res.status(200).json({ success: true, users });
        })
}

const getById = async (req, res) => {
    await User.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.json({ success: false, message: "user not found" })
            }
            return res.status(200).json({ success: true, user })
        })
        .catch(error => console.log(error))
}

const update = async (req, res) => {
    await User.findByIdAndUpdate(req.body.user)
        .then(products => res.status(200).json({ success: true, products }))
        .catch(error => console.log(error))
}

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
}

module.exports = {
    register,
    login,
    getUserProfile,
    getAll,
    getById,
    update,
    deleteUser,

}