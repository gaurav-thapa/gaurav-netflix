export function isValidLoginData(name, email, password) {
    const isValidName = name!=='';
  const isValidEmail = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const isValidPassword = password.match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );
  if(!isValidName){
    return "Name cannot be empty!";
  }
  if (!isValidEmail) {
    return "Email is not Valid!";
  }
  if (!isValidPassword) {
    return "Password is not Valid!";
  }
  return null;
}
