let password : string = "qwerqwer";
let email : string = "test@test.com"

// if (password == "asdfasdf" && password == "qwerqwer") {
//   console.log("Password is correct");
// } else {
//   console.log("Permission denied");
// }

// if (password == "asdfasdf" && email == "test@test.com") {
//   console.log("Access granted");
// } else {
//   console.log("Permission denied");
// }

if (password == "asdfasdf" || password == "qwerqwer") {
  console.log("Access granted");
} else {
  console.log("Permission denied");
}

if (!(email == "test@test.com")) {
  console.log("You are authorized");
}