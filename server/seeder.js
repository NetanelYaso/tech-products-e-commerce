const mongoose = require("mongoose")
const products = require("./data/products-data");
const users = require("./data/users-data");
const Order = require("./model/orders-model");
const User = require("./model/users-model");
const Product = require("./model/products-model");
const dotenv = require("dotenv");
dotenv.config();
require("./DB");

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)
        console.log('Data Imported');
    }
    
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed');
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit(1);
    }


}
if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}