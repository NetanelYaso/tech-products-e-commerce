const bcrypt = require("bcryptjs");
const User = require("../model/users-model");
const jwt = require("jsonwebtoken");
const validateRegister = require("../validation/register");
const validateLogin = require("../validation/login");
const key = process.env.SECRET_KEY;
const gravatar = require("gravatar");

const register = async (req, res) => {
    const { isValid, errors } = validateRegister(req.body.user);
    if (!isValid) {
        return res.status(400).json(errors)
    };
    const { name, email, password, isAdmin } = req.body.user;

    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "user already exists" })
        }
        const avatar = gravatar.url({
            size: '200',
            raiting: 'pg',
            default: 'mm'
        })
        user = new User({
            name,
            email,
            password,
            avatar,
            isAdmin
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)
        await user.save();
        res.send('User registered')
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }


};


const login = async (req, res) => {
    const { isValid, errors } = validateLogin(req.body.user);
    if (!isValid) return res.status(400).json(errors);
    const email = req.body.user.email;
    const password = req.body.password;
    await User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailNotFound: "Email not found" });
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        };
                        jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
                            if (err) return res.status(400).json(err);
                            res.json({ success: true, token: `Bearer ${token}` });
                        });
                    }
                    else {
                        return res.status(400).json({ passwordIncorrect: "Password incorrect" });
                    }
                });
        });
}

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
    getAll,
    getById,
    update,
    deleteUser
}