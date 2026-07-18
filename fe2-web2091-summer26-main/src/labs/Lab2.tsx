import { Button, Space, Table, Tag } from "antd";

function Lab2() {
  // b2
  const productColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  const productDataSource = [
    { id: 1, name: "nam chau", price: "1307đ", category: "vip" },
    { id: 2, name: "nam chau", price: "1307đđ", category: "vip pro" },
    { id: 3, name: "nam chau 55", price: "1307đđ", category: "pro max" },
    { id: 4, name: "nam chau 561651", price: "1307đđ", category: "vip pro max" },
  ];

  // b3
  const userColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const userDataSource = [
    { id: 1, name: "nam chau", email: "chau@gmail.com", status: "active" },
    { id: 2, name: "nam chau1", email: "chau@gmail.com", status: "inactive" },
    { id: 3, name: "nam chau2", email: "chau@gmail.com", status: "active" },

  ];

  return (
    <div style={{padding: 24 }}>
      <Table
        columns={productColumns}
        dataSource={productDataSource}
        rowKey="id"
        pagination={{ pageSize: 3 }}
      />

      <Table columns={userColumns} dataSource={userDataSource} rowKey="id" />
    </div>
  );
}

export default Lab2;