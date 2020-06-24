## SIMPLE TODO APP FOR DEMO MONGODB

Ứng dụng đơn giản cho việc demo mongodb
Hệ thống hỗ trợ: Tạo tài khoản người dùng, đăng nhập, thêm, chỉnh sửa, thay đổi trạng thái, xóa, lọc, tìm kiếm..

Ứng dụng bao gồm 2 phần:

**1. SERVER: **
Sử dụng để kết nối và xử lý dữ liệu + kết nối với mongodb
a. Các package bao gồm:
- express
- mongoose
- body-parse
- cors *( sử dụng để giao tiếp từ client mà không bị lỗi CORS )*

b. Cài đặt:

			cd tới thư mục server
			// Cài package
			npm istall // hoặc yarn install
c. Cấu hình kết nối mongodb trong file: `server/db.js`
d. Chạy server:

			node index
*Mặc định hệ thống chạy tại port 3300*: http://localhost:3300
> Lưu ý giữ cửa sổ terminal server chạy

------------

**2. FONT END**
Giao diện người dùng đơn giản sử dụng Bootstrap 4
a. Các package bao gồm:
- reactjs
- redux
- redux-saga
- lodash
- axios

b. Cài đặt:

			cd tới thư mục todo-client
			// Cài package
			npm install // hoặc yarn install

c. Cấu hình kết nối với server trong file: `todo-client/src/constant/config.js`
> Mặc định hệ thống sẽ kết nối với địa chỉ máy chủ: http://localhost:3300 như trên phía SERVER

d. Chạy font end:

			npm start // hoặc yarn start

Đăng ký 1 tài khoản đăng nhập và sử dụng


