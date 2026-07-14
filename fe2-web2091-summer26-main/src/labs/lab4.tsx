import { useState } from "react";
import { Table, Button, Input, message } from "antd";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface Story {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  createdAt?: string;
}

const StoryTable = () => {
  const [keyword, setKeyword] = useState("");
  const queryClient = useQueryClient();

  
  const { data: stories } = useQuery<Story[]>({
    queryKey: ["stories"],
    queryFn: () => axios.get("http://localhost:3000/stories").then((res) => res.data),
  });


  const deleteMutation = useMutation({
    mutationFn: (id: number) => axios.delete(`http://localhost:3000/stories/${id}`),
    onSuccess: () => {
    
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      message.success("Xóa thành công");
    },
  });

  
  const filteredData = stories?.filter((item: Story) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    { title: "Title", dataIndex: "title" },

    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    
    {
      title: "Action",
      render: (_: unknown, record: Story) => (
        <Button danger onClick={() => deleteMutation.mutate(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <div>
     
      <Input
        placeholder="Tìm kiếm theo tên truyện"
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 16, width: 300 }}
      />
      
      <Table 
        columns={columns} 
        dataSource={filteredData} 
        rowKey="id"
        pagination={{ pageSize: 5 }} 
      />
    </div>
  );
};

export default StoryTable;