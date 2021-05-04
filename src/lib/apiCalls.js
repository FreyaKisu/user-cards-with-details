import API_ROUTES from "../constants/apiRoutes";

//GET all users
export const getUsers = async () => {
  const users = await fetch(API_ROUTES).then((res) => res.json());

  return users;
};
