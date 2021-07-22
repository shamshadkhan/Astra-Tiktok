// (A) REQUIRE CRYPTO LIBRARY
var crypto = require('crypto');

// (B) CREATE PASSWORD HASH
const hashPassword = (clear) => {
  // Generate random salt
  let length = 16;
  let salt =  crypto.randomBytes(Math.ceil(length / 2))
  .toString('hex') 
  .slice(0, length); 

  // SHA512 at work
  let hash = crypto.createHmac('sha512', salt);
  hash.update(clear);
  return {
    salt: salt,
    hash: hash.digest('hex')
  };
};

// (C) TEST ENCRYPT
// Save BOTH the password and salt into database or file
/*var clearpass = "He110Wor!d";
var creeped = hashPassword(clearpass);
console.log("===== HASHED PASSWORD + SALT =====");
console.log(creeped);*/

// (D) VALIDATE PASSWORD
const validatePassword = (userpass, hashedpass, salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(userpass);
  userpass = hash.digest('hex');
  return userpass == hashedpass;
};

// (E) TEST VALIDATE
// clearpass = "FOOBAR";
/*var validated = validatePassword(clearpass, creeped.hash, creeped.salt);
console.log("===== VALIDATION =====");
console.log("Clear password: " + clearpass);
console.log("Validation status: " + validated);*/

const default_export = {
  hashPassword,
  validatePassword,
};

export default default_export;