function generateRandomPassword() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";

  const randomUppercaseChar = uppercaseChars.charAt(
    Math.floor(Math.random() * uppercaseChars.length),
  );

  const randomLowercaseChar = lowercaseChars.charAt(
    Math.floor(Math.random() * lowercaseChars.length),
  );

  const randomChars = Array.from({ length: 6 }, () => {
    const allChars = uppercaseChars + lowercaseChars + numericChars;
    return allChars.charAt(Math.floor(Math.random() * allChars.length));
  }).join("");

  const password = randomUppercaseChar + randomLowercaseChar + randomChars;
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

export default generateRandomPassword;
