// 1. require mongoose 
const mongoose = require('mongoose')
// 2. connect
mongoose.connect('mongodb://localhost:9000/myDatabase')
// 3. Todo schema
const todosSchema = new mongoose.Schema({
    name: String,
    userId: String,
    status: Boolean
})
const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    photo: String,
    password: String,
    email: String,
    status: Boolean
})
// 4. Tao model
const todos = mongoose.model('todos', todosSchema)
const users = mongoose.model('users', usersSchema)

// 5. Tao thu
/* todos.create({
    name: "Hoc React",
    status: false
}) */

/* users.create({
    name: "Hoàng Long Net",
    age: 20,
    photo: "https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg",
    email: "duonghoanglong85@gmail.com",
    password: "123456",
    status: true
}) */

module.exports = {
    todos,
    users
}