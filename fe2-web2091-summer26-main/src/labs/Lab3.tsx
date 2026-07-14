import { Form, Input, Button, InputNumber, Select, Card, Tabs } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { TabPane } = Tabs;

// Bài 1: Form đăng nhập đơn giản
function Bai1L3() {
  const onFinish = (values: any) => console.log("Bai 1:", values);
  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Hãy nhập email" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Hãy nhập password" }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">Đăng nhập</Button>
    </Form>
  );
}

// Bài 2: Form đăng ký có xác thực
function Bai2L3() {
  const onFinish = (values: any) => console.log("Bai 2:", values);
  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item label="Name" name="name"><Input /></Form.Item>
      <Form.Item label="Phone" name="phone"><Input /></Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm" name="confirm" rules={[
        { required: true },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) return Promise.resolve();
            return Promise.reject(new Error("Password không khớp!"));
          },
        }),
      ]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">Đăng ký</Button>
    </Form>
  );
}

// Bài 3: Form sản phẩm
function Bai3L3() {
  const onFinish = (data: any) => console.log("Bai 3:", data);
  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 400 }}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Quantity" name="quantity" rules={[{ required: true }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{ required: true }]}>
        <TextArea rows={4} />
      </Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form>
  );
}

// Bài 4: Form bài viết có hiển thị kết quả
function Bai4L3() {
  const [post, setPost] = useState<any>(null);
  const onFinish = (values: any) => setPost(values);

  return (
    <div>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item label="Title" name="title" rules={[{ required: true }]}><Input /></Form.Item>
        <Form.Item label="Category" name="category" rules={[{ required: true }]}>
          <Select options={["Technology", "Education", "Sports"].map(v => ({ value: v, label: v }))} />
        </Form.Item>
        <Form.Item label="Slug" name="slug" rules={[{ required: true }]}><Input /></Form.Item>
        <Form.Item label="Content" name="content" rules={[{ required: true }]}><TextArea rows={4} /></Form.Item>
        <Form.Item label="Image URL" name="image" rules={[{ required: true }]}><Input /></Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
      {post && (
        <Card title="Kết quả bài viết" style={{ marginTop: 20, maxWidth: 400 }}>
          <p><b>Title:</b> {post.title}</p>
          <img src={post.image} alt="Preview" style={{ width: '100%' }} />
        </Card>
      )}
    </div>
  );
}

// File chính gộp tất cả
export default function Lab3() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Tổng hợp Lab 3</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bài 1" key="1"><Bai1L3 /></TabPane>
        <TabPane tab="Bài 2" key="2"><Bai2L3 /></TabPane>
        <TabPane tab="Bài 3" key="3"><Bai3L3 /></TabPane>
        <TabPane tab="Bài 4" key="4"><Bai4L3 /></TabPane>
      </Tabs>
    </div>
  );
}