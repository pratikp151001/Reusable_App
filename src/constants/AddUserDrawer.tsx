export const AddUserDrawerBody = [
  {
    title: "First Name",
    id: "fistName",
    type: "text",
    name: "fistName",
    defaultValue: "",
    errorMessage: "Please enter the first name",
    placeholder: "Enter your first name",
    rules: [
      {
        required: true,
        message: "Please input your first name!",
      },
    ],
  },
  {
    title: "Last Name",
    id: "lastName",
    type: "text",
    name: "lastName",
    defaultValue: "",
    errorMessage: "Please enter the last name",
    placeholder: "Enter your last name",
    rules: [
      {
        required: true,
        message: "Please input your first name!",
      },
    ],
  },
  {
    title: "Email Address",
    id: "email",
    type: "text",
    name: "email",
    defaultValue: "",
    errorMessage: "Please enter the email address",
    placeholder: "Enter your email address",
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
    title: "Phone Number",
    id: "phoneNumber",
    type: "number",
    name: "phoneNumber",
    defaultValue: "",
    errorMessage: "Please enter the phone number",
    placeholder: "Enter your phone number",
    rules: [
      ({ getFieldValue }: any) => ({
        validator() {
          const re = /^\d{10}$/;
          if (re.test(getFieldValue("phoneNumber"))) {
            return Promise.resolve();
          } else {
            return Promise.reject(new Error("Please Enter Valid phoneNumber"));
          }
        },
        validateTrigger: "onSubmit",
      }),
    ],
  },
];
