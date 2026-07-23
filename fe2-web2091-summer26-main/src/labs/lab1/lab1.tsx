import { useState } from "react";
import { Button, Form, Input, Layout, Menu, Modal, Table } from "antd";

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const [users, setUsers] = useState([
    {
      key: 1,
      name: "chau 1",
      email: "chau@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "chau 2",
      email: "chau 2@gmail.com",
      role: "User",
    },
  ]);

interface UserFormValues {
  name: string;
  email: string;
  role: string;
}

  const handleAddUser = (values: UserFormValues) => {
    const newUser = {
      key: users.length + 1,
      name: values.name,
      email: values.email,
      role: values.role,
    };

    setUsers([...users, newUser]);
    form.resetFields();
    setOpen(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white" }}>Bài 1: Dashboard</Header>

      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            items={[{ key: "1", label: "123" }]}
          />
        </Sider>

        <Content style={{ padding: 24 }}>
          <h2>Bài 2: Form đăng ký</h2>

          <Form layout="vertical">
            <Form.Item label="Name" name="name">
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form>

          <h2>Bài 3: Bảng danh sách User</h2>

          <Button
            type="primary"
            style={{ marginBottom: 16 }}
            onClick={() => setOpen(true)}
          >
            Thêm
          </Button>

          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
              },
              {
                title: "Role",
                dataIndex: "role",
                key: "role",
              },
            ]}
            dataSource={users}
          />

          <Modal
            title="Thêm user"
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
          >
            <Form form={form} layout="vertical" onFinish={handleAddUser}>
              <Form.Item
                label="Name"
                name="name"
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Role"
                name="role"
              >
                <Input placeholder="Role" />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Thêm user
              </Button>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;