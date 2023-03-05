import { Input } from "antd";

const SearchInput = ({ onSearch }) => {
  return <Input.Search allowClear placeholder="Search" onSearch={onSearch} />;
};

export default SearchInput;
