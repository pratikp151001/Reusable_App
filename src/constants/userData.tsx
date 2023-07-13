
const userDataSource: any = [];

for (let index = 0; index < 24; index++) {
  userDataSource.push({
    id:`${index}`,
    name: `Company ${index}`,
    email: `hello ${index} @ gmail.com`,
    phone: 7874445547,
    status:`Enable`,
    created: `some date`,
    action: `some action`,
  });
}

export default userDataSource