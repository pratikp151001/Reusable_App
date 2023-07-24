const PermissionData = [
  {
    moduleName: `Admin`,
    all: true,
    view: true,
    edit: true,
    delete: true,
  },
  {
    moduleName: `User`,
    all: false,
    view: false,
    edit: false,
    delete: false,
  },
  {
    moduleName: `Organization`,
    all: false,
    view: false,
    edit: false,
    delete: false,
  },
  {
    moduleName: `Roles`,
    all: false,
    view: false,
    edit: false,
    delete: false,
  },
];
export default PermissionData;
