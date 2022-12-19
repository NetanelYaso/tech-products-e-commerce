const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLogin = (user) => {
    errors = {};
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;

    if (validator.isEmpty(user.email)) errors.email = "email is required";
    if (!validator.isEmpty(user.email)) errors.email = "email is not valid";
    if (validator.isEmpty(user.password)) errors.password = "password is required";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}