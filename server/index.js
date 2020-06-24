const express = require('express')
const cors = require('cors') // Su dung cai nay de cho phep get ma khong bao loi CORS
const bodyParse = require('body-parser')

const app = express()

// MongoDB Connect
const db = require('./db')

const delay = 0	// Delay for effect

app.use(cors())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json());

// TODOS LIST --------------

// Get Tasks
app.post("/todos", function (req, res) {
	const { userId } = req.body
	setTimeout(() => {
		db.todos.find({ userId: userId }).exec((err, data) => {
			res.send(data)
		});
	}, delay)
})

// Add Task
app.post("/add", function (req, res) {
	const todoData = req.body
	delete todoData.id
	setTimeout(() => {
		db.todos.create(todoData).then(re => {
			if (re) {
				res.send({ status: true, task: re })
			} else {
				res.send({ status: false })
			}
		})
	}, delay)
})

// Edit Task
app.post("/edit", function (req, res) {
	const todoData = req.body
	const { id, userId } = todoData
	delete todoData.id
	delete todoData.userId

	const newTaskContent = todoData
	newTaskContent._id = id
	setTimeout(() => {
		if (id && userId) {
			db.todos.updateOne({ _id: id }, todoData).exec((err, data) => {
				if (err) {
					res.send({ status: false, message: 'Cập nhật không thành công' })
				} else {
					res.send({ status: true, task: newTaskContent })
				}
			})
		} else {
			res.send({ status: false, message: 'Task không tồn tại' })
		}
	}, delay)
})

// Delete Task
app.post("/delete", function (req, res) {
	const { id, userId } = req.body
	db.todos.remove({ _id: id, userId }).exec((err, data) => {
		if (err) {
			res.send({ status: false, message: 'Xóa không thành công - CODE: 0001' })
		} else {
			if (data) {
				res.send({ status: true })
			} else {
				res.send({ status: false, message: 'Xóa không thành công - CODE: 0002' })
			}
		}
	})
})

// Change status
app.post("/change-status", function (req, res) {
	const { id, status } = req.body
	db.todos.updateOne({ _id: id }, { status }).exec((err, data) => {
		if (err) {
			res.send({ status: false, message: 'Cập nhật trạng thái không thành công - CODE: 0001' })
		} else {
			if (data) {
				res.send({ status: true, newStatus: status })
			} else {
				res.send({ status: false, message: 'Cập nhật trạng thái không thành công - CODE: 0002' })
			}
		}
	})
})


// USER ----------------


// Login
app.post('/login', function (req, res) {
	const { email, password } = req.body
	// Find from mongodb
	db.users.find({ email: email, password: password }).exec((err, data) => {
		if (data && data.length) {
			if (data[0].status)
				res.send({ status: true, user: data[0] })
			else
				res.send({ status: false, message: 'Tài khoản đang tạm khóa' })
		} else {
			res.send({ status: false, message: 'Tài khoản hoặc mật khẩu không tồn tại' })
		}
	})
})

// Register
app.post('/register', function (req, res) {
	const { email, password, name } = req.body
	// Check email
	db.users.find({ email: email }).exec((err, data) => {
		if (data && data.length) {
			res.send({ status: false, message: 'Email đã tồn tại' })
		} else {
			db.users.create({ name, email, password, status: true }).then(re => {
				if (re) {
					res.send({ status: true, user: re })
				} else {
					res.send({ status: false, message: 'Đăng ký không thành công, hãy thử lại' })
				}
			})
		}
	})
})


// Run server on port 3300
app.listen(3300, function () {
	console.log('Runing on port 3300')
})
