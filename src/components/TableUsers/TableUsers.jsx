import { Table } from "antd";
import { sorter } from "../../utils/functions";

const TableUsers = ({ filteredUsers }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter,
    },
  ];
  return <Table columns={columns} dataSource={filteredUsers} />;
};

export default TableUsers;
