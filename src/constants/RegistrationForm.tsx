import {
    MailOutlined,
    LockOutlined,
    UserOutlined,
    PhoneOutlined,
  } from '@ant-design/icons';
  
export const registerFormData = [
    {
      title: 'First Name',
      id: 'first_name',
      type: 'text',
      name: 'first_name',
      defaultValue: '',
      errorMessage: 'Please enter your first name',
      placeholder: 'Enter your first name',
      required: true,
      // icon: 'UserOutlined',
      icon: <UserOutlined className="register-icon" />,
      rules: [
        {
          required: true,
          message: 'Please input your first name!',
        },
      ],
    },
    {
        title: 'Last Name',
        id: 'last_name',
        type: 'text',
        name: 'last_name',
        defaultValue: '',
        errorMessage: 'Please enter your last name',
        placeholder: 'Enter your Last Name',
        required: true,
        // icon: 'UserOutlined',
        icon: <UserOutlined className="register-icon" />,
        rules: [
          {
            required: true,
            message: 'Please input your last name!',
          },
        ],
      },
      {
        title: 'Email Address',
        id: 'email',
        type: 'text',
        name: 'email',
        defaultValue: '',
        errorMessage: 'Please enter your email',
        placeholder: 'Enter your email address',
        required: true,
        // icon: 'MailOutlined',
        icon: <MailOutlined className="register-icon" />,
        rules: [
          {
            required: true,
            message: 'Please input your email address!',
            validateTrigger: 'onSubmit',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
            validateTrigger: 'onSubmit',
          },
        ],
      },
      {
        title: 'Phone Number',
        id: 'phone',
        type: 'number',
        name: 'phone',
        defaultValue: '',
        errorMessage: 'Please input your phone number!',
        placeholder: 'Enter your Phone Number',
        required: true,
        // icon: 'PhoneOutlined',
        icon: <PhoneOutlined className="register-icon" />,
        rules: [
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ],
      },
      {
        title: 'Password',
        id: 'password',
        type: 'password',
        name: 'password',
        defaultValue: '',
        errorMessage: 'Please input your password!',
        placeholder: 'Enter your Password',
        required: true,
        // icon: 'LockOutlined',
        icon: <LockOutlined className="register-icon" />,
        rules: [
          ({ getFieldValue }: any) => ({
            validator() {
              const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
              if (re.test(getFieldValue('password'))) {
                return Promise.resolve();
              } else {
                return Promise.reject(new Error('Invalid Password'));
              }
            },
            validateTrigger: 'onSubmit',
          }),
        ],
      },
      {
        title: 'Re Enter Password',
        id: 'confirm_password',
        type: 'password',
        name: 'confirm_password',
        defaultValue: '',
        errorMessage: 'Please input your password again!',
        placeholder: 'Re Enter your Password',
        required: true,
        // icon: 'LockOutlined',
        icon: <LockOutlined className="register-icon" />,
        rules: [
          {
            required: true,
            message: 'Please input your password again!',
            validationTrigger: 'onBlur',
          },
          ({ getFieldValue }: any) => ({
            validator(_: any, value: any) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
            validateTrigger: 'onSubmit',
          }),
        ],
      },]