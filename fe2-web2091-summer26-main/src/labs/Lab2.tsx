import { Image, Table } from "antd";

function Lab2() {
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
      title: "Avatar",
      dataIndex: "avatar",
      render: (value: string) => <Image src={value} />,
    },
  ];
  const dataSource = [
    {
      key: 1,
      id: 1,
      name: "hoadv",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      key: 2,
      id: 2,
      name: "hoadv2",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
}

export default Lab2;
