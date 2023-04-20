function passwordValidator(password) {
  let isValid;
  let numOfDigits = 0;
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
  }

  for (let i = 0; i < password.length; i++) {
    let element = password[i];
    let digitOrChar = element.charCodeAt();

    isValid =
      (digitOrChar >= 48 && digitOrChar <= 57) ||
      (digitOrChar >= 65 && digitOrChar <= 90) ||
      (digitOrChar >= 97 && digitOrChar <= 122);

    if (!isValid) {
      console.log("Password must consist only of letters and digits");
      break;
    } 

    let digitsOnly = digitOrChar >= 48 && digitOrChar <= 57
    if (digitsOnly) {
        numOfDigits++;
    }
  }
  if (numOfDigits < 2) {
    console.log("Password must have at least 2 digits");
}
if (password.length >=6 && password.length <= 10 && numOfDigits >= 2 && isValid) {
    console.log("Password is valid");
}

}
passwordValidator("logIn");
passwordValidator("MyPass23");
