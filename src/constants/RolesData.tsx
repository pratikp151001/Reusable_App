const RolesDataSource: any = [];
for (let index = 0; index < 24; index++) {
  RolesDataSource.push({
    roleName: `Abc${index}`,
    discription: `dvgd vgdfgd dg  ${index} ${index}`,
    isActive: `Active`,
    permission: `Permission Details`,
    action: `some action`,
  });
}
RolesDataSource.push({
  roleName: `Abc`,
  discription: `dvgd vgdfgd dg`,
  isActive: `Inactive`,
  permission: `Permission Details`,
  action: `some action`,
});

export default RolesDataSource;
