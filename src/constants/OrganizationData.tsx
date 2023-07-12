
const OrgDataSource: any = [];
OrgDataSource.push({
  name: `ABC`,
  email: `ABC  @ gmail.com`,
  created: `some date`,
  phone: 7874445547,
  isActive:`Active`,
  action: `some action`,
});
OrgDataSource.push({
    name: `ABC`,
    email: `ABC  @ gmail.com`,
    created: `some date`,
    phone: 7874445547,
    isActive:`Inactive`,
    action: `some action`,
});
for (let index = 0; index < 24; index++) {
    OrgDataSource.push({
    name: `Company ${index}`,
    email: `hello ${index} @ gmail.com`,
    phone: 7874445547,
    isActive:`Active`,
    created: `some date`,
    action: `some action`,
  });
}

export default OrgDataSource