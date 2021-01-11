export const checkUserIsAdmin = (currenUser) => {
  if (!currenUser || !Array.isArray(currenUser.userRoles)) return false;
  const { userRoles } = currenUser;
  if (userRoles.includes("admin")) return true;

  return false;
};
