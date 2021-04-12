export default function SigninValidator(username, password) {
  let errors = {}; // First, we create an object

  if (!username) {
    errors.username = "این فیلد اجباری است!";
  }
  if (!password) {
    errors.password = "این فیلد اجباری است!";
  }
  return errors; // Finally we return that object
}
