export const validateUserEmailPassword = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );

  const isNameValid = /^.+$/.test(name);

  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid) return "Password is Invalid";
  if (!isNameValid) return "Name is Invalid";
  else return null;
};
