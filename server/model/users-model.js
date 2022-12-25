const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

// UserSchema.methods.matchPassword = async (enteredPassword) => {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// UserSchema.pre("save", async (next) => {
//     if (!this.isModified('password')) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const usersModel = mongoose.model("User", UserSchema);
module.exports = usersModel;