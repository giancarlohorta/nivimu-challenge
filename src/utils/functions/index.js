export const normalizeUsers = (users) => {
  return users.map((user) => {
    return {
      key: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
    };
  });
};

export const sorter = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
