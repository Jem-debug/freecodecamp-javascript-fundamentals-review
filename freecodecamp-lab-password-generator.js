const generatePassword = (len) => {
  if (!Number.isInteger(len)) {
    return "Specify the length";
  }

  if (len <= 0) {
    return "Zero and less than zero is not acceptable as a length.";
  }

  let result = "";
  const charsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * charsStr.length);
    result += charsStr[randomIndex];
  }

  return result;
};

const password = generatePassword(78);

console.log("Generated password: " + password);
