import { Button, Form, Input, Select, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Course {
  id: number;
  title: string;
  duration: string;
  category: string;
}
function AddPage() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (values: Course ) =>
      axios.post("http://localhost:3000/courses", values),

    onSuccess: () => {
      message.success("Thêm thành công");
      navigate("/list");
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form
        layout="vertical"
        className="space-y-6"
        onFinish={(values) => mutate(values)}
      >
        <Form.Item label="Tiêu đề" name="title">
          <Input placeholder="Nhập tên khóa học" />
        </Form.Item>

        <Form.Item label="Thời lượng" name="duration">
          <Input placeholder="Nhập thời lượng" />
        </Form.Item>

        <Form.Item label="Ảnh" name="thumbnail">
          <Input placeholder="Nhập link ảnh" />
        </Form.Item>

        <Form.Item label="Danh mục" name="category">
          <Select
            options={[
              { value: "Javascript", label: "Javascript" },
              { value: "ReactJS", label: "ReactJS" },
              { value: "NodeJS", label: "NodeJS" },
            ]}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </Form>
    </div>
  );
}

export default AddPage;
