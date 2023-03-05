import { Button, Form, Input } from "antd";

const AddNewUser = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      name="basic"
      className="form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        className="form__input"
        label="Name and last name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name and your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="form__input"
        label="E-mail"
        name="email"
        help
        rules={[
          {
            required: true,
            message: "Please input your e-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="form__input"
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your city!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="form__button">
        Add new user
      </Button>
    </Form>
  );
};

export default AddNewUser;
