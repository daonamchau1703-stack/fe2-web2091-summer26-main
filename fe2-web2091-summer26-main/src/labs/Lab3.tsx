import { Form, Input, Button, InputNumber } from "antd";

interface Lab3FormValues {
  title: string;
  price: number;
}

function Lab3() {
  const onFinish = (data: Lab3FormValues) => {
    console.log(data);
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Title"
        name="title"
        rules={[
          { required: true, message: "hay nhap title" },
          {
            min: 5,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true }, { min: 0, type: "number" }]}
      >
        <InputNumber />
        {/* Select */}
        {/* Checkbox */}
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
export default Lab3;
