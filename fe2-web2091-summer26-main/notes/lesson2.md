# Ant Design Table - Hướng dẫn cơ bản

## 1. Giới thiệu

**Table** trong Ant Design (antd) dùng để hiển thị dữ liệu dạng bảng.  
Đây là component rất phổ biến trong các hệ thống:

- Dashboard Admin
- Quản lý sản phẩm
- Quản lý người dùng
- Báo cáo thống kê

Table giúp hiển thị dữ liệu có cấu trúc rõ ràng theo **hàng (rows)** và **cột (columns)**.

---

## 2. Cài đặt Ant Design

Nếu chưa cài đặt antd:

```bash
npm install antd
```

Import CSS trong project React:

```javascript
import "antd/dist/reset.css";
```

---

## 3. Cấu trúc cơ bản của Table

Một Table trong antd cần **2 phần chính**:

| Thành phần | Ý nghĩa          |
| ---------- | ---------------- |
| columns    | Cấu hình cột     |
| dataSource | Dữ liệu hiển thị |

Ví dụ đơn giản:

```tsx
import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
];

const data = [
  { key: 1, name: "John", age: 25 },
  { key: 2, name: "Anna", age: 30 },
];

export default function DemoTable() {
  return <Table columns={columns} dataSource={data} />;
}
```

---

## 4. Giải thích các thuộc tính

### 4.1 columns

`columns` là một mảng object mô tả các cột của bảng.

Ví dụ:

```javascript
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];
```

| Thuộc tính | Ý nghĩa                |
| ---------- | ---------------------- |
| title      | Tên hiển thị của cột   |
| dataIndex  | key trong dữ liệu      |
| key        | key của cột (optional) |
| render     | custom hiển thị        |

---

### 4.2 dataSource

`dataSource` là dữ liệu hiển thị trong bảng.

```javascript
const data = [
  {
    key: 1,
    name: "John",
    age: 25,
  },
  {
    key: 2,
    name: "Anna",
    age: 30,
  },
];
```

Lưu ý:

- mỗi row cần có **key**
- **key phải unique**

---

## 5. Thêm nhiều cột

Ví dụ bảng user:

```javascript
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
```

Dữ liệu:

```javascript
const data = [
  {
    key: 1,
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    key: 2,
    id: 2,
    name: "Anna",
    email: "anna@gmail.com",
  },
];
```

---

## 6. Custom hiển thị với render

`render` cho phép tùy chỉnh nội dung hiển thị.

Ví dụ hiển thị status:

```javascript
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <span style={{ color: status === "active" ? "green" : "red" }}>
        {status}
      </span>
    ),
  },
];
```

---

## 7. Thêm cột Action

Thường trong dashboard sẽ có **Edit / Delete**.

```javascript
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Action",
    render: (_, record) => (
      <>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
  },
];
```

---

## 8. Pagination (phân trang)

Ant Design hỗ trợ phân trang sẵn.

```tsx
<Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
```

| Thuộc tính | Ý nghĩa           |
| ---------- | ----------------- |
| pageSize   | số item mỗi trang |
| current    | trang hiện tại    |

---

## 9. Ví dụ hoàn chỉnh

```tsx
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Action",
    render: (_, record) => (
      <>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
  },
];

const data = [
  {
    key: 1,
    id: 1,
    name: "John",
    age: 25,
  },
  {
    key: 2,
    id: 2,
    name: "Anna",
    age: 30,
  },
  {
    key: 3,
    id: 3,
    name: "David",
    age: 28,
  },
];

export default function UserTable() {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
  );
}
```

---

## 10. Bài tập thực hành

### Bài 1

Tạo bảng **Danh sách sinh viên**

Columns:

- ID
- Name
- Age
- Major

Dữ liệu ví dụ:

| ID  | Name | Age | Major    |
| --- | ---- | --- | -------- |
| 1   | Nam  | 20  | IT       |
| 2   | Linh | 21  | Business |
| 3   | Hà   | 19  | Design   |

---

### Bài 2

Tạo bảng **Danh sách sản phẩm**

Columns:

- ID
- Product Name
- Price
- Category

Yêu cầu:

- Hiển thị **5 sản phẩm**
- Thêm `pagination = 3`

---

### Bài 3

Tạo bảng **User Management**

Columns:

- ID
- Name
- Email
- Status
- Action

Yêu cầu:

Status hiển thị màu:

- `active` → xanh
- `inactive` → đỏ

Action có 2 nút:

- Edit
- Delete

---

## 11. Tổng kết

Table trong Ant Design có những thành phần chính:

- **columns** → cấu hình cột
- **dataSource** → dữ liệu
- **render** → custom hiển thị
- **pagination** → phân trang

Table thường được sử dụng trong:

- Admin Dashboard
- CMS
- Quản lý dữ liệu
