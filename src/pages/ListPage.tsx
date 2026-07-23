import { Table, Button, message } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Course {
  id: number;
  title: string;
  duration: string;
  category: string;
}


function ListPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/courses");
      return res.data;
    },
  });

  
  const { mutate } = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`http://localhost:3000/courses/${id}`),

    onSuccess: () => {
      message.success("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });

  const columns = [
    {title: "Tiêu đề", dataIndex: "title"},
    {title: "Thời lượng", dataIndex: "duration"},
    {title: "Hình ảnh", dataIndex: "thumbnail"},
    {title: "Danh mục", dataIndex: "category"},
    {
      title: "Thao tác",
      render: (_: Course, record: Course) => (
        <>
          <Button type="primary" onClick={() => navigate(`/edit/${record.id}`)}>
            Sửa
          </Button>
          
          <Button
            danger
            onClick={() => {
              if (window.confirm("Bạn có chắc muốn xóa?")) {
                mutate(record.id);
              }
            }}
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={data} />;
}

export default ListPage;
