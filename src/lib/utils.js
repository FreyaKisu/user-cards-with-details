//GET one user by ID

export const getUserById = (userId, users) => {
  return users.find((u) => parseInt(u.id) === parseInt(userId));
};
