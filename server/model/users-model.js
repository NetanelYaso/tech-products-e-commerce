const mongoose = require("mongoose");

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
    // passwordConfirm: {
    //     type: String,
    //     required: true
    // },
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

const usersModel = mongoose.model("User", UserSchema);
module.exports = usersModel;