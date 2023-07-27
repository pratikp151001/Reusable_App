const userDataSource: any = [];

for (let index = 0; index < 24; index++) {
  userDataSource.push({
    id: `${index}`,
    first_name: `Company${index}`,
    email: `hello${index}@gmail.com`,
    phoneNumber: 7874445547,
    status: `Enable`,
    created: `some date`,
    action: `some action`,
  });
}

userDataSource.push({
  id: `25`,
  first_name: `Company 25`,
  email: `hello25@gmail.com`,
  phoneNumber: 7874445547,
  status: `Disable`,
  created: `some date`,
  action: `some action`,
});

export default userDataSource;
