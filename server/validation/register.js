const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegister = (user) => {
    errors = {};
    user.name = isEmpty(user.name) ? "" : user.name;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.passwordConfirm = isEmpty(user.passwordConfirm) ? "" : user.passwordConfirm;

    if (validator.isEmpty(user.name)) errors.name = "Name is required";
    if (validator.isEmpty(user.email)) errors.email = "Email is required";
    if (!validator.isEmail(user.email)) errors.email = "Email is not valid";
    if (validator.isEmpty(user.password)) errors.password = "Password is required";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}