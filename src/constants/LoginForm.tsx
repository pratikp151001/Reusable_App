import { MailOutlined, LockOutlined } from "@ant-design/icons";

const loginFormData = [
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    defaultValue: "",
    errorMessage: "Please enter your email",
    placeholder: "Enter your email address",
    required: true,
    // icon: 'MailOutlined',
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: "Please input your email address!",
        validateTrigger: "onSubmit",
      },
      {
        type: "email",
        message: "The input is not valid E-mail!",
        validateTrigger: "onSubmit",
      },
    ],
  },
  {
    title: "Password",
    id: "password",
    type: "password",
    name: "password",
    defaultValue: "",
    errorMessage: "Please input your password!",
    placeholder: "Enter your Password",
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
          if (re.test(getFieldValue("password"))) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error("Invalid Password"));
          }
        },
        validateTrigger: "onSubmit",
      }),
    ],
  },
];
export default loginFormData;
