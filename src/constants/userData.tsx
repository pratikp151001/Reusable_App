
const userDataSource: any = [];
userDataSource.push({
  name: `Demo`,
  email: `hello  @ gmail.com`,
  phone: 7874445547,
  status:`Enable`,
  created: `some date`,
  action: `some action`,
});
userDataSource.push({
  name: `Pratik`,
  email: `pratik  @ gmail.com`,
  phone: 7874445785,
  status:`Disable`,
  created: `some date`,
  action: `some action`,
});
for (let index = 0; index < 24; index++) {
  userDataSource.push({
    name: `Company ${index}`,
    email: `hello ${index} @ gmail.com`,
    phone: 7874445547,
    status:`Enable`,
    created: `some date`,
    action: `some action`,
  });
}

export default userDataSource