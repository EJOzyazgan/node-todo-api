const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

let hashPassword = '$2a$10$i8cIVlMAqukRp5Gc77E63.dSh4wdKQIDFRLTwdeek1MJWagpHH3ni';

bcrypt.compare(password, hashPassword, (err, res) => {
   console.log(res);
});
// let data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// let message = "I am user number 3";
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// };
//
// let token = {
//   data,
//   hash:  SHA256(JSON.stringify(data)  + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.data.hash = SHA256(JSON.stringify(data)).toString()
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//     console.log("Data valid");
// } else {
//     console.log("Data not valid");
// }