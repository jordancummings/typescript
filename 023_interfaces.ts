interface User {
  email : string;
  firstName : string;
  lastName : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}! We have your email as ${user.email}`
}

var realUser = {
  email: 'test@test.com',
  firstName: "Jordan",
  lastName: "Cummings"
};

console.log(profile(realUser));