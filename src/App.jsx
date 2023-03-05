import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Form, Skeleton } from "antd";
import { GET_USER_URL } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { normalizeUsers } from "./utils/functions";
import { addUser, setStatus, setUsers } from "./redux/reducers/usersSlice";
import { FETCH_STATUS } from "./utils/constants";
import "./App.css";
import TableUsers from "./components/TableUsers/TableUsers";
import AddNewUser from "./components/AddNewUser";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [form] = Form.useForm();
  const [filteredUsers, setFilteredUsers] = useState("");
  const users = useSelector(({ users }) => users.data);
  const status = useSelector(({ users }) => users.status);

  const dispatch = useDispatch();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = (values) => {
    const maxKey = Math.max(...users.map((user) => user.key));
    const hasUserEmail = users.find((user) => values.email === user.email);

    if (!hasUserEmail) {
      dispatch(addUser({ ...values, key: maxKey + 1 }));
      handleReset();
    }
  };

  const handleSearch = (value) => {
    if (value) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.city.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredUsers(users);
    }
  };

  const fetchUsers = async () => {
    dispatch(setStatus(FETCH_STATUS.LOADING));
    try {
      const { data } = await axios.get(GET_USER_URL);
      const normalizedUsers = normalizeUsers(data);

      dispatch(setUsers(normalizedUsers));
      dispatch(setStatus(FETCH_STATUS.DONE));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(FETCH_STATUS.ERROR));
    }
  };
  useEffect(() => {
    if (status === FETCH_STATUS.INITIAL) fetchUsers();
    if (status === FETCH_STATUS.DONE) setFilteredUsers(users);
  }, [users]);

  return (
    <div className="container">
      {status === FETCH_STATUS.LOADING ? (
        <Skeleton />
      ) : (
        <>
          <AddNewUser form={form} onFinish={handleSubmit} />
          <SearchInput onSearch={handleSearch} />
        </>
      )}
      <TableUsers filteredUsers={filteredUsers} />
    </div>
  );
};

export default App;
