import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";

interface Category {
  id: number;
  title: string;
}

interface FormValues {
  title: string;
  author: string;
  cover: string;
  description: string;
  category: number;
}

function Lab5() {
  const { mutate } = useMutation({
    mutationFn: async (data : FormValues) => {
      console.log("Đang gửi dữ liệu:", data);
      return Promise.resolve(data);
    },
    onSuccess: () => {
      console.log("Gửi dữ liệu thành công!");
    },
    onError: (error) => {
      console.error("Có lỗi xảy ra:", error);
    },
  });

  const onFinish = (values: FormValues) => {
    console.log("Giá trị form:", values);
    mutate(values);
  };
  function getCategories() {
    return fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Danh mục:", data);
        return data;
      });
  }
 const {
  data: categories,
  isLoading: isCategoriesLoading,
} = useQuery<Category[]>({
  queryKey: ["categories"],
  queryFn: getCategories,
});
  return (
    <div>
      <h2>Lab5</h2>
      <Form onFinish={onFinish}>
        <Form.Item label="Title" 
        name="title" 
        rules={[
  {
    required: true,
    message: "Vui lòng nhập title!",
  },
  {
    min: 3,
    message: "Vui lòng nhập ít nhất 3 ký tự!",
  },
]}>
          <Input />
           </Form.Item>

            <Form.Item label="Tác giả" name="author">
            <Input />
            </Form.Item>

            <Form.Item label="Image URL" name="cover">
            <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Danh mục" 
            name="category"
           rules={[
                    {
                required: true,
                message: "Vui lòng chọn danh mục!",
                    },
                    ]}>
                    <Select
                     placeholder="Select category"
                    loading={isCategoriesLoading}
                    options={categories?.map((item) => ({
                    value: item.id,
                     label: item.title,
                     }))}
                    />
                
            </Form.Item>
            <Button  type="primary" htmlType="submit"  loading={isCategoriesLoading}></Button>
            </Form>
    </div>
  );
}

export default Lab5;