# Ant Design + React TypeScript

# Lesson 3 – Form trong Ant Design

## Nội dung bài học

Trong bài này chúng ta sẽ học:

- Form trong Ant Design là gì
- Các component cơ bản của Form
- Validation dữ liệu
- Layout Form
- Submit dữ liệu
- Ví dụ Form hoàn chỉnh
- Bài tập thực hành

---

# 1. Form trong Ant Design là gì?

**Form** là component dùng để **nhập dữ liệu từ người dùng**.

Ví dụ:

- Form đăng ký
- Form đăng nhập
- Form thêm sản phẩm
- Form cập nhật thông tin

Ant Design cung cấp hệ thống Form rất mạnh với các tính năng:

- Quản lý state form
- Validation tự động
- Layout đẹp
- Dễ tích hợp với API

---

# 2. Cấu trúc cơ bản của Form

Một form cơ bản gồm các thành phần:

| Component   | Chức năng            |
| ----------- | -------------------- |
| `Form`      | Container chính      |
| `Form.Item` | Một field trong form |
| `Input`     | Ô nhập dữ liệu       |
| `Button`    | Nút submit           |

---

# 3. Ví dụ Form cơ bản

## Code ví dụ

```tsx
import { Form, Input, Button } from "antd";

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Form data:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
```

---

# 4. Giải thích code

## Form

```tsx
<Form layout="vertical" onFinish={onFinish}>
```

| Thuộc tính | Ý nghĩa             |
| ---------- | ------------------- |
| `layout`   | Kiểu layout form    |
| `onFinish` | Hàm chạy khi submit |

---

## Form.Item

```tsx
<Form.Item label="Email" name="email">
```

| Thuộc tính | Ý nghĩa       |
| ---------- | ------------- |
| `label`    | Tên hiển thị  |
| `name`     | key của field |

---

## Input

```tsx
<Input />
```

Component nhập dữ liệu.

Các loại input, select phổ biến:

| Component        | Mô tả           |
| ---------------- | --------------- |
| `Input`          | nhập text       |
| `Input.Password` | nhập mật khẩu   |
| `Input.TextArea` | nhập nhiều dòng |
| `InputNumber`    | nhập number     |
| `Select`         | chọn 1 option   |

---

# 5. Validation trong Form

Validation giúp kiểm tra dữ liệu trước khi submit.

## Ví dụ

```tsx
<Form.Item
  label="Email"
  name="email"
  rules={[
    { required: true, message: "Vui lòng nhập email" },
    { type: "email", message: "Email không hợp lệ" },
  ]}
>
  <Input />
</Form.Item>
```

---

## Một số rule phổ biến

| Rule           | Mô tả            |
| -------------- | ---------------- |
| `required`     | bắt buộc nhập    |
| `min`          | độ dài tối thiểu |
| `max`          | độ dài tối đa    |
| `type: email`  | kiểm tra email   |
| `type: number` | kiểm tra số      |

---

# 6. Layout Form

Ant Design hỗ trợ nhiều layout.

## Vertical

```tsx
<Form layout="vertical">
```

Hiển thị:

```
Label
Input
```

---

## Horizontal

```tsx
<Form
  labelCol={{ span: 6 }}
  wrapperCol={{ span: 18 }}
>
```

Hiển thị:

```
Label | Input
```

---

# 7. Form với nhiều field

Ví dụ form đăng ký.

```tsx
import { Form, Input, Button } from "antd";

const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Mật khẩu" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
```

---

# 8. Lấy dữ liệu từ Form

Dữ liệu sẽ được trả về trong `onFinish`.

```tsx
const onFinish = (values: any) => {
  console.log(values);
};
```

Ví dụ output:

```json
{
  "name": "Nguyen Van A",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

# 9. Reset Form

Có thể reset form bằng `form.resetFields()`.

```tsx
const [form] = Form.useForm();

<Form form={form}>
```

Reset (xóa dữ liệu input form):

```tsx
form.resetFields();
```

Reset có data (fill dữ liệu vào input form):

```tsx
const data = {
  title: "One Piece",
  author: "Oda",
};

form.setFieldsValue(data);
```

---

# 10. Ví dụ Form CRUD đơn giản

Form thêm sản phẩm.

```tsx
import { Form, Input, Button, InputNumber, Select } from "antd";

const ProductForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Danh mục" name="category">
        <Select
          placeholder="Chọn danh mục"
          options={[
            { label: "Laptop", value: "laptop" },
            { label: "Điện thoại", value: "phone" },
            { label: "Tablet", value: "tablet" },
            { label: "Phụ kiện", value: "accessory" },
          ]}
        />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form>
  );
};

export default ProductForm;
```

---

# 11. Bài tập thực hành

## Bài 1

Tạo **Form đăng nhập** gồm:

- Email
- Password
- Button login

Yêu cầu:

- Email bắt buộc
- Password bắt buộc

---

## Bài 2

Tạo **Form đăng ký người dùng**

Các field:

- Name
- Email
- Phone
- Password
- Confirm Password

Yêu cầu:

- Email đúng định dạng
- Password tối thiểu 6 ký tự
- Confirm Password trùng Password

---

## Bài 3

Tạo **Form thêm sản phẩm**

Field:

- Tên sản phẩm
- Giá
- Số lượng
- Mô tả

Submit -> console log dữ liệu.

---

## Bài 4 (Nâng cao)

Tạo **Form thêm bài viết**

Field:

- Title
- Category (Select box)
- Slug
- Content
- Image URL

Submit -> hiển thị dữ liệu bên dưới form.

---

# Tổng kết

Trong bài này bạn đã học:

- Sử dụng `Form`
- `Form.Item`
- Validation
- Layout Form
- Submit dữ liệu
- Tạo Form CRUD cơ bản
