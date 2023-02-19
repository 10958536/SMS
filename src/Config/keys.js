require("dotenv").config();

const password = process.env.PASSWORD
module.exports = {
    mongoURI: `mongodb+srv://Caleb:${password}@cluster0.heqgpjg.mongodb.net/?retryWrites=true&w=majority`
}