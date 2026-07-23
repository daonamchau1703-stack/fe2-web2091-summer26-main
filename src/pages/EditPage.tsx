import { Button, Form, Input, Select, message } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Course {
  id: number;
  title: string;
  duration: string;
  category: string;
}
function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/courses/${id}`);
      form.setFieldsValue(res.data);
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: (values: Course) =>
      axios.put(`http://localhost:3000/courses/${id}`, values),

    onSuccess: () => {
      message.success("Cập nhật thành công");
      navigate("/list");
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Cập nhật</h1>

      <Form form={form} layout="vertical" onFinish={(values) => mutate(values)}>
        <Form.Item label="Tiêu đề" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Thời lượng" name="duration">
          <Input />
        </Form.Item>

        <Form.Item label="Ảnh" name="thumbnail">
          <Input />
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
          Cập nhật
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
